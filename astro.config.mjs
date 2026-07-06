// @ts-check
import { defineConfig } from 'astro/config';
import { rm, rmdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  sections,
  builtSections,
  prunedSections,
  nonSectionRoutes,
} from './src/lib/sitemap';

// Static output only — no SSR, no server runtime. The site is a pure render
// of src/content/trust.yaml (see Astro Handoff Spec §1). Which *sections* are
// live is likewise decided at build time, from src/lib/sitemap.ts.

// Build-time page toggles, enforced against what the build actually emitted.
//
// At astro:build:done we get `assets`: a Map from each route's canonical path
// (e.g. "/how-it-works", "/" for the root) to the real files it wrote to disk
// (e.g. dist/how-it-works/index.html). We use it to do three things, in order:
//
//   1. Reconcile — every emitted route must be claimed by a section or by
//      nonSectionRoutes, and every published/unlisted section must have
//      emitted a page. Any mismatch throws and fails the build. This is the
//      safety net: on a trust site, an unfinished page reaching production, or
//      a nav link that 404s, must be a red build, never a silent surprise.
//   2. Prune drafts — delete the exact files the build wrote for each draft
//      section (looked up in `assets`, not guessed from the URL, so it stays
//      correct regardless of build.format), so the deployed URL returns a real
//      404: no HTML, no "coming soon". Deletion is not forced — if a file we
//      expected to remove isn't there, that throws too.
//   3. Tidy — remove the now-empty section directory (never the output root).
//
// `unlisted` sections are intentionally left in place (reachable by direct
// URL); only the nav and overview index omit them.
function reconcileAndPrune() {
  return {
    name: 'trust:reconcile-and-prune',
    hooks: {
      /** @param {{ assets: Map<string, URL[]>, dir: URL, logger: any }} options */
      'astro:build:done': async ({ assets, dir, logger }) => {
        const emitted = new Set(assets.keys());
        const claimed = new Set([
          ...sections.map((s) => s.href),
          ...nonSectionRoutes,
        ]);

        // 1a. No orphans: a real file on disk that no section (and no
        // allowlisted endpoint) claims could be an unfinished page leaking to
        // the trust site, or a registry href typo that left a draft live.
        for (const route of emitted) {
          if (!claimed.has(route)) {
            throw new Error(
              `[trust:reconcile] built route ${route} is claimed by neither a ` +
                `section nor nonSectionRoutes in src/lib/sitemap.ts. Register ` +
                `it or allowlist it — refusing to ship an unaccounted-for page.`,
            );
          }
        }

        // 1b. No dead links: every section meant to be live must have emitted
        // a page, or the nav/index would point at a URL that 404s.
        for (const section of builtSections) {
          if (!emitted.has(section.href)) {
            throw new Error(
              `[trust:reconcile] section "${section.key}" is ${section.status} ` +
                `but emitted no page (${section.href}). Create ` +
                `src/pages${section.href}.astro, or mark the section draft.`,
            );
          }
        }

        // 2 + 3. Prune each draft section by its real emitted files.
        const outputRoot = resolve(fileURLToPath(dir));
        for (const section of prunedSections) {
          if (section.href === '/') continue; // never prune the site root
          const files = assets.get(section.href);
          if (!files) {
            // A draft with no page yet (planned but unwritten) — nothing built,
            // nothing to leak, nothing to prune.
            logger.info(
              `draft section "${section.key}" (${section.href}) has no page — nothing to prune`,
            );
            continue;
          }
          for (const fileUrl of files) {
            const file = fileURLToPath(fileUrl);
            await rm(file, { force: false }); // throws if already gone — good
            const parent = dirname(file);
            if (resolve(parent) !== outputRoot) {
              await rmdir(parent).catch((err) => {
                // Leave the directory if something else lives in it.
                if (err.code !== 'ENOTEMPTY' && err.code !== 'ENOENT') throw err;
              });
            }
          }
          logger.info(`pruned draft section → real 404: ${section.href}`);
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://trust.onetimesecret.com',
  output: 'static',
  integrations: [reconcileAndPrune()],
});

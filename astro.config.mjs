// @ts-check
import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { prunedSections } from './src/lib/sitemap';

// Static output only — no SSR, no server runtime. The site is a pure render
// of src/content/trust.yaml (see Astro Handoff Spec §1). Which *sections* are
// live is likewise decided at build time, from src/lib/sitemap.ts.

// Build-time page toggles: `draft` sections are rendered during the build like
// any other page, then their output is deleted here so the deployed site
// returns a real 404 — no HTML file, no "coming soon". `unlisted` sections are
// left in place (reachable by direct URL); only nav/index omit them.
function pruneDraftSections() {
  return {
    name: 'trust:prune-draft-sections',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        for (const section of prunedSections) {
          if (section.href === '/') continue; // never prune the site root
          const rel = section.href.replace(/^\/+/, '');
          await rm(fileURLToPath(new URL(`${rel}/`, dir)), {
            recursive: true,
            force: true,
          });
          logger.info(`pruned draft section → real 404: ${section.href}`);
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://trust.onetimesecret.com',
  output: 'static',
  integrations: [pruneDraftSections()],
});

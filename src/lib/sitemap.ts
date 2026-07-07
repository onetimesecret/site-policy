// The site's sitemap-of-record and per-section lifecycle. Kept in code rather
// than trust.yaml on purpose: readiness is an operational concern, whereas
// trust.yaml is published verbatim at /trust.yaml for procurement tooling to
// diff — a "status: draft" flag has no place in that artifact.
//
// One `status` field toggles a section everywhere it appears: routing, the
// header nav, and the overview index. The lifecycle only ever moves forward,
// so content grows onto the site as it matures — no "coming soon" placeholder
// is possible, because an unready section is simply absent:
//
//   draft     — in the repo, never shipped. Rendered during the build, then its
//               output is pruned (see astro.config.mjs) so the deployed URL
//               returns a real 404. Absent from nav, index, and sitemap.
//   unlisted  — built and reachable by direct URL (a soft-launch / review lane:
//               share the link with one reviewer or customer), but omitted from
//               nav, the overview index, and the sitemap.
//   published — fully live: built, in the nav, and on the overview index.
//
// The build reconciles what it emitted against this registry and fails if they
// disagree (a live section with no page, a page no section claims, or a draft
// that wasn't pruned), so this file cannot silently drift from the deployed
// site. See the trust:reconcile-and-prune integration in astro.config.mjs.

export type SectionStatus = 'draft' | 'unlisted' | 'published';

export type SectionKey =
  | 'overview' | 'how' | 'subs' | 'docs' | 'assurance' | 'faq' | 'audit';

export interface Section {
  key: SectionKey;
  href: string;
  navLabel: string;
  status: SectionStatus;
  // Present => eligible for a row on the overview index (only when published).
  // The row's right-hand meta is computed in index.astro from live trust data,
  // so it stays out of this structural registry.
  indexTitle?: string;
}

// Flip a single `status` to toggle a section. Everything currently live is
// `published`, so introducing this registry changes nothing until you flip a
// flag. `/` (overview) is the site root and is never pruned.
export const sections: Section[] = [
  { key: 'overview',  href: '/',              navLabel: 'Overview',      status: 'published' },
  { key: 'how',       href: '/how-it-works',  navLabel: 'How it works',  status: 'published', indexTitle: 'How it works — secrets, architecture, data flow ↓' },
  { key: 'subs',      href: '/subprocessors', navLabel: 'Subprocessors', status: 'published', indexTitle: 'Subprocessors & change history' },
  { key: 'docs',      href: '/documents',     navLabel: 'Documents',     status: 'published', indexTitle: 'Documents — policy, DPA, HECVAT' },
  { key: 'assurance', href: '/assurance',     navLabel: 'Assurance',     status: 'published', indexTitle: 'Assurance without certification' },
  { key: 'faq',       href: '/faq',           navLabel: 'FAQ',           status: 'published' },
  { key: 'audit',     href: '/your-audit',    navLabel: 'Your audit',    status: 'published', indexTitle: 'Citing Onetime Secret in your audit' },
];

// Routes the build emits that are not navigable sections — data endpoints and
// the like. (Files served from /public, e.g. security.txt, are copied assets,
// not routes, and never appear in the build's route table.) The reconciler
// treats any emitted route not covered by a section OR this list as an orphan
// and fails the build, so a page can never reach the trust site unaccounted-for.
export const nonSectionRoutes: readonly string[] = ['/trust.yaml'];

const isBuilt = (s: Section) => s.status !== 'draft';
const isListed = (s: Section) => s.status === 'published';

// Nav and the overview index advertise only published sections.
export const navSections = sections.filter(isListed);
export const indexSections = sections.filter((s) => isListed(s) && s.indexTitle);

// Sections that must exist in the build output (published or unlisted). The
// reconciler asserts each one actually emitted a page, so the nav and index can
// never link to a URL that 404s.
export const builtSections = sections.filter(isBuilt);

// Draft sections are rendered during the build and then removed, so the
// deployed site returns a real 404 for them. Consumed by the prune step in
// astro.config.mjs. `unlisted` deliberately stays built and reachable.
export const prunedSections = sections.filter((s) => !isBuilt(s));

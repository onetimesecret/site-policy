# trust.onetimesecret.com

Onetime Secret's trust centre: a self-authored, versioned security report for
procurement and vendor-security reviewers. Prose and dated documents only —
no compliance badges, anywhere.

This site is intended to be a public git repository: the commit history is
the changelog, and diffs on the subprocessor list are the trust signal.

## How it's built

- **Astro, static output.** No SSR, no accounts. Access "requests" are email;
  the changelog is `git log`.
- **Single source of truth:** `src/content/trust.yaml`, validated by the Zod
  schema in `src/lib/trust-config.ts`. Every page is a pure render of that
  file, and it is published verbatim at `/trust.yaml` for tooling to diff.
- Fonts are self-hosted via Fontsource — the Privacy Statement commits to
  serving all site assets from our own domains, so no Google Fonts.

```
src/
  content/trust.yaml        # single source of truth
  lib/trust-config.ts       # Zod schema (access: public | request)
  lib/trust.ts              # load + validate at build time
  layouts/TrustLayout.astro # nav + footer chrome, design tokens
  pages/                    # one route per section
public/
  .well-known/security.txt  # RFC 9116
  pgp-key.asc               # PLACEHOLDER — see below
```

```sh
pnpm install
pnpm dev      # local preview
pnpm build    # dist/
```

## Content rules

- The canonical contractual subprocessor list is **DPA Schedule A**
  (`onetime-dpa.md`, in this repo); `trust.yaml` mirrors it. Change one, change
  both — the DPA governs.
- Security claims must match the corrected 2026 policy language. In
  particular: a user passphrase is an **access-control gate verified before
  decryption, not a key-derivation input** — do not reintroduce "we cannot
  decrypt passphrase-protected secrets" phrasing (that was only true of a
  legacy scheme).
- No analytics of any kind on this site (the Privacy Statement commits to no
  third-party analytics and no first-party behavioral analytics).

## Before launch (open items)

1. Claim the `trust.onetimesecret.com` subdomain.
2. ~~Replace `public/pgp-key.asc` (placeholder) with the real key.~~ Done —
   real key for `security@onetimesecret.com` installed (ed25519, fingerprint
   `5766 C994 D558 B4B1 39D2 B478 5500 3AC6 B807 3081`).
3. Fill the `since:` dates in `trust.yaml` from infra/billing history.
4. Add the HECVAT 4.1.5 artifact at `public/documents/hecvat-4.1.5.xlsx`
   (or update the document row).
5. Reconstruct real subprocessor change history for the changelog.
6. Set document `updatedAt` dates when the 2026 policy revision gets its
   effective date; update the `view source & history` links if the public
   repo URL differs from `onetimesecret/site-policy`.

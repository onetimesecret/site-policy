# Remaining decisions and open items

Single consolidated tracker for the 2026 site-policy revision. Supersedes the
former `ERRATA.md`, `ERRATA-3.md`, `FINALIZATION-july1.md`, and
`FINALIZATION-july2.md` working files (removed 2026-07-05; their full
append-only detail remains in git history). Business-arrangements research that
lived in `ERRATA-1.md` moved to `research/business-arrangements-rationale.md`.

Two parts: **Part 1 — Open items** (still actionable) and **Part 2 — Decisions
of record** (resolved and applied; kept for institutional memory).

---

## Part 0 - Fable review

**Status 2026-07-05:** Items 2, 3, 4, and 6 below are RESOLVED and applied to
the documents (see Part 2, "Fable review fixes"). All other items remain open.

I read all four documents in full and cross-checked them against each other. Overall verdict: the suite is unusually coherent for its size — the definitions cross-referencing (ToS as canonical source, PP summarizing, DPA/TOMs binding) works well. But I found a cluster of real inconsistencies around data residency, several places where one document makes an absolute promise another document contradicts, and a set of commitments that are risky for a one-person company. Findings below, most severe first.

Internal consistency — significant

1. US region contradicts Schedule A. The Privacy Statement says the US region runs on "Hetzner (Oregon, USA)" (onetime-privacy-statement.md:169), but DPA Schedule A lists Hetzner's data location as "EU (Germany, Finland)" only (onetime-dpa.md:268), and the entity table only hints at a "US subsidiary." Schedule A is presented as the authoritative subprocessor record; it currently cannot account for the US region at all.
2. RESOLVED 2026-07-05 — Backup residency promise has no supporting infrastructure listed. ToS B.6 says backups are "stored in a secure, isolated environment within the same regional jurisdiction as the data they cover" (onetime-terms-of-service.md:119), and the PP repeats "including encrypted backups" (line 173). But every offsite backup location in Schedule A and Schedule C is in the EU: Hetzner object storage (Germany/Finland, all tiers) and AWS S3 (Frankfurt/Ireland) (onetime-dpa.md:298-299, 409-411). For UK, CA, NZ, and US data, no in-region backup destination exists on paper. Schedule C even says geo backups go to Frankfurt and then, one bullet later, that backup locations "align with the regional data isolation policy" — those two sentences contradict each other unless the customer is in the EU.
3. RESOLVED 2026-07-05 — EU-hosted Sentry is an undisclosed third cross-region transfer. The PP states "Other than the two exceptions described above [Stripe, edge networks], we do not transfer data outside the jurisdiction in which it was collected" (line 180). But error monitoring for all regions flows to a self-hosted Sentry "within the European Union" (PP line 139, DPA §5.3, TOMs §4.1), and the docs admit personal data "may be incidentally captured" in error reports. For UK/CA/NZ/US users that is a cross-region transfer of potentially personal data that DPA §12.2's exhaustive two-exception list doesn't cover. Either add it as exception (c) or deploy per-region Sentry.
4. RESOLVED 2026-07-05 — Free-plan Custom Domain vs. paid-only Approximated. ToS A.10 and E.1 say "The free plan supports one Custom Domain" (onetime-terms-of-service.md:49, 276). But the PP (line 107), DPA §12.2(b) (line 207), and Schedule A (line 280) all scope Approximated — the only listed TLS terminator for Custom Domains — to "Identity Plus, Team Plus." Who terminates TLS for a free-plan custom domain? One of these is wrong.
5. Stripe data categories exceed the stated limitation. DPA §12.2(a) limits the Stripe transfer to "payment and invoicing information" (line 205), but Schedule A's Stripe row lists "Account info, app data, network traffic" (line 306). "App data" flatly contradicts the §12.2(a) limitation and weakens your strongest residency argument.
6. RESOLVED 2026-07-05 — UK Addendum §3.3 is absolute where the DPA is qualified. "All data relating to UK customers is processed and stored exclusively within UK infrastructure" (line 462) — with no carve-out for Stripe, edge TLS, or Sentry. Since the Addendum expressly prevails over the DPA in conflicts (§4), this absolute statement arguably overrides the §12.2 exceptions for UK customers. It needs the same exception language.
7. UK Addendum §3.4 misdescribes retention. The UK-representative exemption rationale claims processing is time-limited to "the Backup Retention Period" and that retained personal data is "minimal (limited to account information)." Account Data is retained for the entire engagement (DPA §2.1(b), §10) — years, not 30 days. The rationale as written doesn't survive contact with your own definitions.
8. Secret-access carve-outs don't match between PP and ToS. The PP says personnel access secrets only "where strictly required for security or business continuity" (line 85). ToS D.4 lists four broader carve-outs: owner consent, Organization-owner direction, debugging at your request, and secrets addressed to Onetime Secret (onetime-terms-of-service.md:258). The PP summary is narrower than the binding term, which is the bad direction for a privacy statement to err in.
9. Compelled disclosure understates what you can be compelled to do. Schedule C is admirably honest that a passphrase "controls authorization to decrypt, not the cryptographic ability to do so" (onetime-dpa.md:371) — meaning you hold everything needed to decrypt an unpurged secret. But the PP's compelled-disclosure section (lines 214-219) lists only metadata as disclosable and never states that unpurged Secret Content could be decrypted and produced under a valid order. For a trust-branded product, that omission will be noticed; say it explicitly.
10. DPA §8 vs. §13 liability conflict. §8 allocates breach costs and regulatory fines fault-based and uncapped (lines 165-167); §13 says liability is "subject to the exclusions and limitations" of ToS Sections L-N (line 227). Which controls for a fine arising from your breach is ambiguous — and this is exactly the clause an enterprise counsel will probe. State whether §8 amounts are inside or outside the cap.
11. "Contracted Processor" template defect. §1.3 defines Contracted Processor as "a Subprocessor," but §3.1 imposes personnel-reliability duties only on employees "of any Contracted Processor" (i.e., subprocessor staff — not your own), and §7.2/§9 similarly say "Contracted Processor" where "Processor" is meant. As drafted, your own personnel are outside §3.1. Classic artifact of the template this DPA descends from.
12. Change-notice standards differ between companion documents. PP promises 30 days advance notice of material changes (line 253); ToS Section O promises only notice-and-continued-use with no advance period (line 501). Companion documents should share one standard.

Questionable for a one-person company

- 72-hour breach notification (DPA §8, TOMs §4.1). GDPR only requires a processor to notify the controller "without undue delay" — the 72-hour clock is the controller's obligation to the supervisory authority. You've voluntarily adopted the harder standard with no "of becoming aware" anchor, and you have no backup human for illness or travel. Suggest "without undue delay after becoming aware, and in any event within 72 hours of awareness."
- On-site audit rights (DPA §11). You've done well pushing documentation-first, but the residual on-site right means someone can insist on auditing what is presumably a home office. Consider limiting to remote audits, or on-site only at the relevant IaaS provider's certified facility.
- SOC 2 / ISO 27001 name-drop in §11 ("such as SOC 2 or ISO 27001") implies certifications you don't hold — nothing in TOMs claims them; only subprocessors have them. Prospects will ask "so where's your SOC 2?" Reword to "subprocessor certifications and audit reports."
- The recurring-commitment calendar. You've promised: annual crypto review (Schedule C §6), annual DPO-assessment review (§3.2), annual UK-rep review (Addendum §3.4), "regular" subprocessor assessments, periodic pen tests / third-party audits (TOMs §4.2), and Art. 30(2) records on request. Each is an auditable claim that becomes a misrepresentation if skipped. Count them, put them on an actual calendar, and cut any you won't demonstrably do.
- CCPA section (PP line 194). A one-person company is almost certainly below every CCPA applicability threshold. Framing it as "you have rights under the CCPA" imports a statute that doesn't apply to you; frame as "we voluntarily extend these rights to California residents."
- Absolute, perpetually-verifiable claims: "no email we send contains tracking pixels or click-tracking links" (requires click-tracking to stay disabled in SES/Lettermint forever), "all site assets served from our own domains," and "inclusion in browser HSTS preload lists across all domains" — you list ten official domains in ToS C.9; is every one actually preloaded? Also, "rendering our pages does not cause your browser to contact other companies' servers" (PP line 134) is literally false under the Cloudflare proxy, Approximated, and BunnyCDN — your domains, their servers. Soften to "other companies' domains" or drop.
- Corporate-group transfer authorization (DPA §6, line 131): "the Company authorizes the Processor to disclose and transfer Personal Data to any company within its corporate group." You have no corporate group, and the clause is a blank check that undercuts the otherwise tight subprocessor story. Delete it.
- Legal-entity identity (DPA preamble, line 5): "Onetime Secret #602 - 2892 E 10th Ave…" — the entity form (Inc.? sole proprietorship operating as?) is unstated, and "#602" reads as part of the name rather than a unit number. Enterprise procurement will bounce a DPA without a clearly identified legal entity. Meanwhile the ToS defines "Us" to include "affiliates, directors, subsidiaries" that don't exist — harmless boilerplate, but it clashes with the DPA's single-entity reality.
- TOMs CI claims to verify against reality: "integration test matrix… across multiple storage backends (PostgreSQL, SQLite)" (onetime-toms.md:133) — the product is Redis/Valkey-backed via Familia. If that matrix line describes a different component or an in-progress migration, make it accurate; your own docs invite independent verification of exactly these claims. (This lines up with the "feature-claim verification" publication blocker you already logged.)
- Named internals in legal docs: catch.onetimesecret.com (PP line 134) and "Familia encrypted-fields library" (Schedule C) are brittle implementation details in documents with a 30-day change-notice regime. Keep them in the trust centre, not the policies.

Minor / editorial

- DPA still says "Privacy Policy" (line 9) and "Terms and Conditions" (§10, line 175); the actual titles are Privacy Statement and Terms of Service.
- Tier-name drift: "Identity Lite" and "Team Lite" appear only in ToS I.3 refunds; TOMs §1.3 and the Schedule A intro describe multi-tenant as "Identity Plus" only, omitting Team Plus and Basic.
- "Incoming Secrets" is bolded and used as a defined term (PP line 71, ToS E.2/C.9) but is not defined in ToS Section A, unlike Homepage Secret.
- ToS A.3's Website/product-domain definition omits otshosted.com/.dev, metalbaum.com/.dev, and OnetimeSecretary.com/.dev, which C.9 lists as official domains.
- DPA §1.8 defines "Engagement" as starting "at first payment," but the DPA and PP both cover the free Basic tier — a free-tier controller never has an Engagement, yet §2.1(b) and §14 hinge on it.
- Inactive-account removal (5 years) exists only in the PP (line 233); a right to delete user accounts belongs in the ToS as well.
- TOMs tension: §1.2 discloses "no centralized, tamper-evident audit logging" while §2.2 claims changes and user actions "are logged to support auditing and reconstruction." Both can be true, but qualify §2.2 so they don't read as contradicting.
- Typos/format: "Upcloud" vs "UpCloud" (PP table), mixed "licence"/"license" in ToS Section D, and the doubled "1. 1." list-numbering artifacts in DPA §1.5 and UK Addendum §3.4.

The three items I'd fix before anything ships: the backup-residency gap (#2), the Sentry transfer (#3), and the free-plan Custom Domain contradiction (#4) — the first two are the kind of thing a prospect's DPO finds in ten minutes, and the third is a product-truth question that decides which document gets edited. Say the word and I'll draft the edits.



## Part 1 — Open items

### DOCS-1 (cross-repo, non-blocking here)

The principles-page changes were drafted against a working copy `principles.md`
that was deleted in commit `e3aed13` and never ported to the live docs repo
(`docs.onetimesecret.com`,
`src/content/docs/en/principles/{privacy-first,communication,data-minimization}.md`).
Recover the drafted text with `git show e3aed13^:principles.md` and port:

- Heading "Our No-Email Philosophy" → "Our Minimal-Email Philosophy".
- The three-category email taxonomy (carried forward below so this file is
  self-sufficient once the ERRATA files are gone).
- The no-tracking-in-email commitment (no tracking pixels, no click-tracking).
- The "preferences live in browser storage, not cookies" clarification for
  `data-minimization.md`.

Email taxonomy to port (source text, formerly ERRATA-3):

- **Transactional** — secret links, account, and billing notices. Inherent to
  the service; no opt-out.
- **Service and security notices** — security advisories, breach
  notifications, policy-change notices, deprecations. Sent when needed,
  including when legally required; not marketing.
- **Product news** — feature announcements and similar. Strictly opt-in,
  one-click unsubscribe, rare.

PP wording ("We never send unsolicited marketing email, and no email we send
contains tracking pixels or click-tracking links" plus the three categories)
is already applied in this repo; DOCS-1 is only the port of the matching
principles-page copy to the docs repo.

### PP-1 (non-blocking, tidy when convenient)

PP "Information from website browsers" lists "regional environment selection"
among collected data, but code verification found no client-side persistence
for region, and the Cookies section folds localStorage into "cookies (and
similar technologies)". Adjacent to, not contradicted by, the code — tighten
when convenient.

### TC-1 (future)

The CC0 license pointers in ToS G.3 and the PP License section deliberately
point at the GitHub repository for now; swap in the real trust-centre URL when
one exists. (The authoritative-source references were already reworded to
"trust centre"; only the live URL swap remains.)

### Counsel review before publication (from the 2026-07-02 finalization pass)

These are deviations from market-standard drafting that are defensible but
warrant a lawyer's sign-off. None block internal review; all block final
publication.

- **Subprocessor objection is a no-questions-asked exit.** DPA §6.2 omits the
  market-standard "reasonable data-protection grounds" gate: any objection to
  a new subprocessor, for any reason, triggers the sole remedy (terminate the
  affected Services without penalty inside the 30-day window). Defensible
  because the remedy is self-executing, but §6.2 is silent on whether "without
  penalty" implies a pro-rata refund of an unused prepaid period. Confirm the
  intended money outcome and that the deviation is acceptable.
- **Refund-terms precision.** The 30-day refund window (paid multi-tenant
  plans, from the most recent billing date; single-tenant defaults to the same
  "unless a separate agreement says otherwise") needs: (1) explicit scoping to
  the most recent charge only, so an annual subscriber on day 29 can't read it
  as a full-year refund; (2) a check against the I.2 proration rules for a
  double-dip path (upgrade → prorated credit → refund); (3) confirmation that
  Global Elite agreements actually carve out provisioning/setup costs, or that
  the ToS default does; (4) alignment of the three exit paths (refund window,
  subprocessor objection, ordinary cancellation) to consistent money outcomes;
  (5) no conflict with mandatory EU/UK 14-day cooling-off rights under BC
  governing law; and coupon/nonprofit-price interaction.
- **TOMs resilience note (optional).** TOMs §3 Availability currently states
  local encrypted backups (7 days) plus geo-located encrypted backups (Global
  Elite) in AWS S3 Frankfurt with 30-day expiry. Consider stating the backup
  posture against the 3-2-1-1-0 rule if we want the resilience story to read
  as an explicit standard rather than an ad-hoc description.
- **PP Article 48 compelled-disclosure scoping.** The PP's compelled-disclosure
  section applies GDPR Art. 48 to EU-held data (a third-country order alone is
  not a sufficient legal basis without an MLAT or similar international
  agreement). The 2026-06 PP review pass attached a "recommend legal review"
  note to this language that was never logged here. The same review recommended
  sign-off on the DPA FAQ section and the source-code-transparency clause;
  fold all three into the counsel pass.

---

## Part 2 — Decisions of record (resolved and applied)

These were decided during the 2026 revision and are already applied to the
policy documents. Kept here as the durable decision ledger; the full
review-note history is in git.

- **Fable review fixes (items 2, 3, 4, 6) — 2026-07-05.**
  (2) Backup residency: confirmed each region keeps local encrypted backups
  in-region AND has offsite object storage within its own jurisdiction via its
  regional hosting provider. Schedule A Backup & Storage gained a residency
  statement plus per-region rows (Hetzner EU/US, UpCloud UK, DigitalOcean CA,
  Catalyst NZ); AWS S3 geo backups scoped to EU-region Global Elite. Schedule C
  §3 and TOMs §3 rewritten to match; trust.yaml mirrored.
  (3) Sentry: centralized EU-hosted error monitoring added as DPA §12.2(c)
  transfer exception; PP "Where your data is processed" now lists three
  exceptions; TOMs §1.3 exception list updated.
  (4) Custom Domains: free plan includes one Custom Domain as of April 2026
  (product fact confirmed). Approximated re-scoped from "Identity Plus, Team
  Plus" to all multi-tenant tiers in PP, DPA §12.2(b), Schedule A (row + intro,
  which now reads "Multi-tenant tiers (Basic, Identity Plus, Team Plus)"), and
  trust.yaml.
  (6) UK Addendum §3.3 qualified with "subject to the limited exceptions set
  out in Section 12.2 of the Principal DPA" so the Addendum's priority clause
  no longer overrides the transfer exceptions for UK customers.
  Residual: the US-region Hetzner rows (finding 1) still need verification —
  the Backup & Storage row and trust.yaml now say "EU (Germany, Finland) or
  US" but the Infrastructure & Hosting Hetzner row still says EU only.

- **CP-1 — controller/processor position.** Our customers (the legal entity
  behind an Organization) are the controller; we are the processor. The DPA was
  already correct (Company = Controller). PP swept to match; ToS defers to the
  DPA via B.3 "Member data". The "Organization" overload was the source of the
  confusion: GDPR/DPA language uses controller/processor; the subscription/
  billing entity is the Organization data-model record (1:1 with subscription).

- **DPA-3 — no-sell/no-share qualifier.** Removed the "for their commercial
  purposes" qualifier from the PP. We do not sell, rent, or trade Account Data
  — absolute. Sharing is scoped only by the enumerated situations (subprocessors
  for stated reasons, corporate transactions, Compelled Disclosure, or with
  permission).

- **INACT-1 / INACT-2 — inactive accounts.** Best-efforts email notice at least
  30 days before removal (courtesy, not a precondition), with a 30-day
  post-notice export window; inactivity = no successful sign-in for five years
  (60 months); signing in resets the period. Applied to the PP "Data retention
  and deletion" section.

- **TODO-23 / 23a — network-level access controls.** Multi-tenant CIDR/IP
  filtering is enforced at the application layer (code-verified); single-tenant
  deployments may offer IP-range filtering depending on the hosting provider;
  whichever is available is clearly labelled. Applied to ToS B.6.

- **TLS-1 — edge-TLS-termination exception.** Do not make any elimination
  claim; the exception is a fact of the current architecture. Cloudflare on
  regional entry domains only (e.g. `eu.onetimesecret.com`) and for protection
  of the service; Custom Domains are off Cloudflare and on Approximated; Global
  Elite excluded. DPA §12.2 and Schedule A aligned to the two transfer
  exceptions (Stripe billing; transient edge-network TLS termination).

- **HASH-1 — credential hashing.** Legacy bcrypt hashes remain for accounts
  with no successful sign-in since April 2026; upgrade to Argon2id happens on
  the next successful authentication. Qualified sentence applied to DPA
  Schedule C §1.2, PP security section, and TOMs §2. (Crypto claims verified
  against Familia v2.3.3.)

- **TODO-20a / 20b — Incoming Secrets.** Code-verified that configured
  recipient email addresses are protected (handled as a hashed value; only a
  display name rendered in the form). Mechanism sentence applied to ToS E.2.

- **DEF-1 — Verified Email Address.** ToS A.11 defines it as a domain while E.2
  treats it as an address at that domain. Looseness accepted; left as is.

- **BA-1 — "promote domain to organization".** Do not add the
  promote-domain-to-organization capability claim to anything published in this
  revision (feature not code-verified; future planning). The
  business-arrangements page remains the sole home of several commitments
  (sponsored arrangements, payer decoupling, consolidated invoicing,
  alias/boundary domains, spin-out path) — retain or re-home those whenever the
  page moves toward publication. Page + rationale now live under `research/`.

- **AWS EU-residency.** DPA entity-details note corrected to "SES and S3; data
  located in EU regions only (Frankfurt, Ireland)".

- **Item 1 — organization/subscription framing.** ToS C.4 rewritten
  arrangement-first (one Organization = one customer, each carries its own
  subscription; agencies/resellers/sponsors supported; self-hosting endorsed
  under the MIT license); the org-per-owner cap reframed as an ops guardrail
  raised on request. Rationale preserved in
  `research/business-arrangements-rationale.md`.

- **Items 2–16 (2026-07-01 batch pass).** Subprocessor change-notice rewritten
  to notice-with-30-day-objection; email taxonomy applied to the PP;
  single-tenant "may offer / where offered" framing; privacy contact delta
  (support@ → privacy@, 45 → 30 days); debugging exception narrowed; plain-
  language rewrites (soft limits, deliverability, Secret Content exception);
  hardcoded region counts removed; "trust centre" rename; public-OCI-image
  operating note in TOMs; one-human-per-login rationale; official-domain list
  and "Your Responsibilities" (ToS C.9). All reviewer-verified against the
  files with an anchor check.

- **Metadata / framing.** Both live docs read "Effective date: TBD on release";
  the 2024-06→2024-10 deltas stay in the full CHANGELOG, not the "what's
  changed in 2026" notice. DPA URL canonicalized to `onetimesecret.com/dpa`
  across ToS, PP, and TOMs (the earlier `/info/dpa` mismatch is resolved).

- **FINALIZATION-july1 items.** Cookies vs localStorage split into separate PP
  paragraphs; "what "dedicated" means" left out by decision.

- **B.2 domain-verification responsibility (rationale of record).** The ToS
  B.2 bullet making it the user's responsibility to verify they are on an
  official Onetime Secret domain is a deliberate responsibility-allocation
  clause, not boilerplate. Three layers: (1) threat model — a secret-sharing
  service is a prime phishing target, and the MIT-licensed app makes visually
  identical imposter instances trivial to stand up, so verification shifts to
  the person at the address bar, the only party positioned to do it; (2)
  liability boundary — protects against claims arising from secrets disclosed
  to an imposter site, pairing with the no-guarantee-of-delivery disclaimer;
  (3) product tie-in — Custom Domains (E.1) give recipients a domain they
  already trust, narrowing the phishing surface. Placement in B.2 is loose
  (it is not an account-formation rule); accepted, with the C.9
  official-domains list as the companion control.

- **CHANGELOG / WHATS-CHANGED drafting calls (2026-07-01).** Both derivative
  docs excluded everything unapplied or undecided at drafting time; the Secret
  Content access exceptions are stated plainly rather than softened (a
  "what's changed" notice that hides a narrowed privacy promise would be worse
  than the change itself); effective-date placeholders match the live docs.
  WHATS-CHANGED presents the DPA and TOMs as new publications — the private
  2026-02-18 DPA lineage appears only as "previously provided to
  dedicated-deployment customers". Source research preserved in
  `research/revision-history-2026.md`.

---
title: Privacy Statement
---

Effective date: **TBD on release**

Onetime Secret provides a service for securely sharing sensitive information. Managing private data carries significant responsibility, and this policy describes how we handle the information entrusted to our service.

This Privacy Statement applies to our standard hosted service, including the Basic, Identity Plus, and Team Plus tiers. Customers on our Global Elite tier (which provides dedicated, single-tenant deployments) may receive a separate agreement that supplements this Privacy Statement.

This Privacy Statement does not apply to self-hosted deployments of our open-source software. If you operate your own instance, no data processing relationship with us arises in connection with that deployment.

We may also offer services under related or partner brands (for example, marked "Powered by Onetime Secret" or "by Onetime Secret"). Those services may operate under their own published policies tailored to the features they provide.

This Privacy Statement and the [Terms of Service](https://onetimesecret.com/terms) are companion documents. Defined terms (such as **Secret Content**, **Account Data**, **Custom Domain**, and **Homepage Secret**) are defined in [Section A of the Terms of Service](https://onetimesecret.com/terms#a-definitions); operational details about retention, backups, and security measures are governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security) and summarized here.

## The short version

We collect information only with your consent. We collect the minimum amount of personal information necessary to operate the service. We do not sell it. We use it only for the purposes described here.

The short version doesn't tell you everything, so please read on for the full picture.

## What information we collect, and why

### Information from website browsers

If you're browsing the website without an account, we collect the same kind of information most websites collect: browser type, language preference, regional environment selection, color mode preference, request timestamps, and your IP address. We use common technologies including cookies, HTML5 `localStorage` and `sessionStorage`, and server logs.

We use this information to operate the website, to monitor and protect its security, and to understand in aggregate how the service is used. Server request log retention is governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security): in summary, up to 30 days, and sooner depending on traffic volume.

### Information from users with accounts

When you create an account we ask for a valid email address. The available sign-in methods (passphrase, magic link, SSO, passkey, third-party identity providers, multi-factor authentication, and recovery codes) are described in [Section B.4 of the Terms of Service](https://onetimesecret.com/terms#4-authentication-methods). Available methods may change over time and may vary by region and plan tier.

The information we hold about your account ("**Account Data**", as defined in [Section A.7 of the Terms of Service](https://onetimesecret.com/terms#a-definitions)) may include:

- A username, display name, and email address
- Authentication credentials, which depending on the methods you use may include a passphrase hash (we never store passphrases in plaintext), public WebAuthn / passkey credentials, recovery codes, or identity claims received from a third-party provider
- Multi-factor authentication factors you have configured
- Billing contact and tax information for paid plans
- Custom Domains, Verified Email Addresses, and similar configuration you set up
- Usage metadata necessary to operate the service (account creation date, plan tier, last login timestamp, and similar)

We use Account Data to identify you, to provide the services you have requested, and to communicate with you on the basis you have agreed to. We limit our use of Account Data to the purposes described in this Privacy Statement.

### Information from Organization accounts

If you create an Organization account (a workspace shared by multiple users), additional information is processed at the Organization level:

- The Organization's name, billing contact, and tax details
- A list of members and their roles within the Organization
- Custom Domains, Verified Email Addresses, SSO configuration, and other settings configured for the Organization
- An audit log of administrative actions taken within the Organization

Under data protection law, our customer, the legal entity on whose behalf the Organization is created, is the "controller" of Organization members' personal data, and we process that data on the customer's behalf as a "processor". These roles are defined in our [Data Processing Agreement](https://onetimesecret.com/dpa). The Organization-side rules and responsibilities are set out in [Section B.3 of the Terms of Service](https://onetimesecret.com/terms#3-organizations).

### Information from Single Sign-On

If your Organization enables SSO, you authenticate via your Organization's identity provider (Google Workspace, Okta, Microsoft Entra ID, or any SAML 2.0 / OIDC provider your Organization configures). We receive a limited set of identity claims (typically your email address, a stable identifier, your display name, and any group memberships your Organization has chosen to share). We do not receive or store your credentials.

We log SSO authentication events for security and audit purposes. Retention applies as described in [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security) (in summary, up to 30 days). Retention is based on our legitimate interest in security monitoring and audit, and is limited to what is necessary for those purposes.

If your Organization disables your account at the identity provider, your active sessions are terminated and your access is revoked. Account Data within the Organization is then handled in accordance with the Organization's instructions and the cancellation rules in [Section J of the Terms of Service](https://onetimesecret.com/terms#j-cancellation-and-termination).

### Secret Content

**Secret Content** (defined in [Section A.8 of the Terms of Service](https://onetimesecret.com/terms#a-definitions)) is the information you place inside a secret. It is held separately from Account Data and is encrypted in transit and at rest. We do not access, read, scan, categorize, or analyze Secret Content. The lifecycle of Secret Content (purge on first viewing, expiry, or manual deletion via the Receipt Link, with up to 30 days of persistence in encrypted backups) is governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security).

If you store sensitive personal information inside a secret, you remain responsible for that decision and for compliance with applicable law. We cannot retrieve, restore, or assist with access to a secret once it has been viewed, expired, or deleted.

### Homepage Secrets and Incoming Secrets

If you have enabled **Homepage Secrets** or **Incoming Secrets** on a Custom Domain (see [Section E.2 of the Terms of Service](https://onetimesecret.com/terms#2-domain-specific-features)), visitors who submit secrets through your Custom Domain are treated, for privacy purposes, in the same way as any other visitor. We do not require these visitors to have an account. Their IP address and request metadata are subject to the same retention period as other server request logs.

If your configuration requires a visitor to identify themselves before submitting a secret (for example, by providing an email address), the information they provide is associated with the resulting secret and forms part of your Account Data. If you have configured Incoming Secrets with designated recipients, recipient email addresses are stored in hashed form to prevent enumeration.

### Verified Email Addresses

If you configure a Verified Email Address so we can send transactional notifications from an address on your own domain, we record the verification status and the configuration values you set. We do not host your email or read its contents. The DNS records you must publish (and your responsibility for maintaining them) are described in [Section E.2 of the Terms of Service](https://onetimesecret.com/terms#2-domain-specific-features).

### What we do not collect

We do not intentionally collect sensitive personal information (such as social security numbers, genetic data, health information, or religious information) in your Account Data. We recognize that you might place such information inside a secret. If you do, that information is handled as Secret Content as described above; we do not access it.

We do not intentionally collect information stored inside a secret. Information in a secret belongs to you, and you are responsible for it and for ensuring that your content complies with our [Terms of Service](https://onetimesecret.com/terms). Onetime Secret personnel do not access secrets except where strictly required for security or business continuity.

If you are a child under the age of 13, you may not have an account on Onetime Secret. We do not knowingly collect information from children under 13. If we learn that an account belongs to a user under 13, we will close that account.

## How we share the information we collect

We do not sell, rent, or trade your Account Data. We share it with third parties only in the situations listed in this section (principally with the subprocessors that help us run the service), in the section below on Compelled Disclosure, or with your permission.

We do not share Secret Content with anyone. By design, we don't have meaningful access to it ourselves.

We may share aggregated, non-personally-identifying information about how the service is used. We do not sell any such information.

We do not host advertising on Onetime Secret.

### Subprocessors

We share Account Data, and in some cases encrypted Secret Content, with a small set of subprocessors that help us run the service. They are contractually bound to handle the data in line with this Privacy Statement.

| Subprocessor | Purpose | Location |
| --- | --- | --- |
| Cloudflare, Inc. | DDoS protection on our regional service domains (e.g. `eu.onetimesecret.com`, `ca.onetimesecret.com`), which are the entry points for free usage | Global edge network |
| Stripe, Inc. | Payment processing for paid plans | United States (EU-US Data Privacy Framework certified) |
| Approximated, Inc. | SSL termination for customer Custom Domains on our multi-tenant tiers | Global edge network |
| Transactional email providers | Delivery of account, notification, and security emails | EU |
| Regional hosting providers | Application and data hosting within each region | See "Where your data is processed", below |

Cloudflare provides DDoS protection on the regional service domains (the entry points for free usage). Customer Custom Domains on our multi-tenant tiers (including the free tier, which supports one Custom Domain) are served via Approximated and are not routed through Cloudflare by us. Depending on your region and plan, we may offer alternatives to this TLS termination arrangement for Custom Domains; contact support to inquire, including if you run into TLS certificate complications with your Custom Domain. The customer's own ability to place their Custom Domain behind an edge network of their choice is described in [Section E.1 of the Terms of Service](https://onetimesecret.com/terms#1-custom-domains).

Hosting providers vary by region (see "Where your data is processed" below for the per-region hosting provider). We maintain a current, dated list of subprocessors (including legal entity, address, location, purpose, and categories of data processed) in our Data Processing Agreement at [onetimesecret.com/dpa](https://onetimesecret.com/dpa). The list is published from our public trust centre (a git-backed repository, currently our [site-policy repository](https://github.com/onetimesecret/site-policy)), so every change is dated and the full history is reviewable.

When we plan to engage a new subprocessor service, we notify all account holders by email. If you object to the change, you can cancel the affected service without penalty during the 30-day notice period; that cancellation is your remedy, and we may still proceed with the change for the service generally. In an emergency (for example, replacing a provider to keep the service secure or available), we may engage a new subprocessor first and notify you promptly afterward; the same objection right runs from that notice. The public list supplements these email notices; it does not replace them.

### Sharing in connection with a corporate transaction

We may share Account Data if we are involved in a merger, acquisition, or sale of assets. In any such transaction we will require that the recipient preserve the confidentiality of Account Data on terms consistent with this Privacy Statement, and we will notify you on the website or by email.

A corporate transaction does not change how Secret Content is treated. Secret Content remains encrypted, we do not access it, and it is not shared as part of any such transaction. The only circumstances in which Secret Content may be disclosed remain those described elsewhere in this Privacy Statement (see "How we respond to compelled disclosure" below).


## Cookies and tracking

### Cookies

We use cookies to keep you logged in. The cookies we set are essential for the operation of the website and are not used for any other purpose. We do not use cookies to track you across other websites.

We use browser storage (HTML5 `localStorage` and `sessionStorage`) to remember your preferences, such as color mode and language, and to operate the service. If you create secrets without signing in, browser storage also keeps a list of your recent receipts (references to the Receipt Links created during your session) so you can find them again. We never store Secret Content itself in your browser storage. This data stays in your browser; it is not a tracking mechanism.

### No third-party tracking

We do not use third-party analytics, product-tracking, or session-replay services such as Google Analytics, Mixpanel, Segment, Amplitude, Heap, Hotjar, FullStory, or PostHog, or any other similar service. We do not perform first-party behavioral analytics or build profiles of individual users; the only usage data we retain is standard server access logs, and errors are captured by our own self-hosted Sentry instance at catch.onetimesecret.com. We do not embed third-party tracking pixels, advertising tags, or social-media tracking. All site assets (scripts, styles, fonts, and images) are served from our own domains, so rendering our pages does not cause your browser to contact other companies' servers or disclose your visit to them.


### Operational logging

We retain server request logs and error monitoring data for up to 30 days for the purposes of security monitoring, technical diagnostics, and service improvement. Error monitoring is performed using a self-hosted instance of Sentry within the European Union, with client-side and server-side data scrubbing applied. We do not intentionally collect personal data through error reports, although some may be incidentally captured.

## How we secure your information

The technical and organizational security measures applied to the Service are:

- TLS 1.3 in transit, with strong cipher suites
- XChaCha20-Poly1305 authenticated encryption of Secret Content (with AES-256-GCM as an available alternative), with key material that is never stored alongside the encrypted data in the database tier
- Argon2id for credential hashing, applied to both account passphrases and secret passphrases (legacy hashes are verified and upgraded to Argon2id on the next successful sign-in)
- LUKS full-disk encryption on production storage
- GPG 4096-bit asymmetric encryption of backups, with decryption keys held offline
- Multi-factor authentication for administrative access
- Strict Content Security Policy, HTTP Strict Transport Security (HSTS), and inclusion in browser HSTS preload lists across all domains

These are summarized here for transparency. The operational rules that bind these measures (including IP and log retention, backup retention and access, Secret Content lifecycle, and any Global Elite-specific cryptographic measures) are governed by [Section B.6 of the Terms of Service](https://onetimesecret.com/terms#6-data-retention-and-security). The defined retention periods (Backup Retention Period, Operational Retention Period) are in [DPA §1.17-1.18](https://onetimesecret.com/dpa#1-definitions-and-interpretation).

Our service runs on open-source software whose source code is publicly available for independent review. This transparency allows security researchers and the public to inspect how Secret Content is encrypted, stored, and handled, rather than relying on our description of these measures alone.

No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.

## Where your data is processed

We operate the service in multiple regional environments. As of the effective date above, those are:

| Region | Domain | Hosting provider |
| --- | --- | --- |
| EU | `eu.onetimesecret.com` | Hetzner (Nuremberg, Germany) |
| CA | `ca.onetimesecret.com` | DigitalOcean (Toronto, Canada) |
| NZ | `nz.onetimesecret.com` | Catalyst Cloud (Porirua, NZ) |
| UK | `uk.onetimesecret.com` | Upcloud (London, UK) |
| US | `us.onetimesecret.com` | Hetzner (Oregon, USA) |

We add further regions from time to time. The authoritative subprocessor list at [onetimesecret.com/dpa](https://onetimesecret.com/dpa) records each provider's legal entity, address, and processing scope.

When you create an account, you choose the regional environment in which your account lives. Account Data and Secret Content created in a given jurisdiction remain in that region's infrastructure throughout their lifecycle, including encrypted backups. We do not transfer Account Data or Secret Content between regions.

There are three narrow exceptions, all inherent to operating the service:

- **Payment processing:** Stripe processes billing data in the United States under the EU-US Data Privacy Framework and equivalent transfer mechanisms for other regions. This applies only to billing data; Account Data outside the billing context, and Secret Content, are not transferred to Stripe.
- **Edge networks:** Cloudflare (for our regional domains) and Approximated (for Custom Domains on our multi-tenant tiers) operate global edge networks that terminate TLS connections at an edge location close to the visitor, which may be outside the destination region. The decrypted application traffic is then re-encrypted for transit into the appropriate regional environment for processing. Single tenant deployments (e.g. Global Elite) do not use these third-party edge networks; TLS is terminated on dedicated infrastructure managed by us within the customer's selected region.
- **Error monitoring:** application errors from all regions are captured by our self-hosted Sentry instance, which is hosted within the European Union. Error reports are scrubbed of data client-side and server-side, are not intended to contain personal data (though some may be incidentally captured), are used solely for error resolution, and are kept for at most 30 days.

Other than the exceptions described above, we do not transfer data outside the jurisdiction in which it was collected.

## Your rights and how to raise concerns

We provide the same baseline of privacy protection to all our users. Some regions also give residents specific statutory rights, summarized here. Where there is any conflict, the law of your jurisdiction prevails.

### Europe (EU and EEA) and the United Kingdom

If you are in the EU, EEA, or UK, you have rights under the GDPR or UK GDPR, including the right to access, rectify, or erase your personal data; the right to restrict or object to processing; and the right to data portability. You also have the right to lodge a complaint with your local supervisory authority (the Information Commissioner's Office for UK residents, or the supervisory authority in your country of residence for EU/EEA residents).

Where your personal data takes the form of Secret Content, the technical design of the service limits how some of these rights can be exercised in practice. Secrets are encrypted and are automatically purged after they are viewed, after they expire, or when they are deleted via the Receipt Link. As a result: an access request under GDPR Article 15 cannot be fulfilled for a secret that has already been purged, or where we cannot verify your relationship to the secret; rectification under Article 16 and erasure under Article 17 of Secret Content are exercised by you, or by the person who created the secret, deleting the secret via the Receipt Link or allowing it to expire; and we will cooperate with requests relating to account-level personal data, such as your email address and account metadata, as described above and in our Data Processing Agreement. We cannot retrieve, restore, or assist with access to a secret once it has been viewed, expired, or deleted.

### California

If you are a California resident, you have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, the "**CCPA**"), including the right to know what personal information we collect about you, the right to delete personal information we hold about you, the right to correct inaccurate information, and the right to opt out of the sale or sharing of personal information. We do not sell or share personal information as those terms are defined in the CCPA. You may exercise these rights by emailing [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com); we will not discriminate against you for exercising them.

### Canada

We are based in British Columbia, Canada, and we operate in accordance with the federal Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws including British Columbia's Personal Information Protection Act (PIPA), Alberta's PIPA, and Quebec's Law 25. If you are a resident of Canada, you have rights to access and correct your personal information held by us, and you may lodge a complaint with the Office of the Privacy Commissioner of Canada or the equivalent provincial commissioner.

### Other regions

If you are in a region not listed above, you may still have privacy rights under applicable local law. We will honor those rights to the extent they apply to our processing of your personal data.

### Raising a concern

If you have a concern about the way we handle your personal data, please email [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com) with the subject line "Privacy Concerns." We aim to respond within 30 days of receiving your request. In complex cases, we may extend this period by up to an additional 30 days, and we will notify you of the extension and the reasons for it.

## How we respond to compelled disclosure

We may disclose personal data in response to a valid subpoena, court order, warrant, or similar government order issued by a court or authority with jurisdiction over the data in question, or where we believe in good faith that disclosure is reasonably necessary to protect our property or rights, or those of third parties or the public. For data held in the European Union, we apply GDPR Article 48: a third-country court order or administrative decision is not, on its own, a sufficient legal basis for disclosure unless supported by an international agreement such as a mutual legal assistance treaty.

When permitted, we will make a reasonable effort to notify users of any disclosure of their information, unless we are prohibited by law or court order from doing so, or in rare exigent circumstances.

By design, our ability to respond to such requests with respect to Secret Content is limited:

- We cannot disclose the contents of a secret that has already been purged.
- We can disclose Account Data, including account email addresses, the current or previous existence of a secret key (not the contents), its creation timestamp, its expiry, and similar metadata, when properly compelled to do so.

Secret Content that has not been purged is encrypted at rest. Encryption keys are not stored alongside the encrypted data; the database tier does not hold or have access to the key material needed for decryption. Where a secret was created with a user-supplied passphrase, the passphrase controls authorization to access the secret but is not part of the encryption key derivation. The technical details of these measures are described in [DPA Schedule C](https://onetimesecret.com/dpa).

## How you can access and control your information

If you are an Onetime Secret user, you may access, update, or delete your account information from your account dashboard or by contacting [support@onetimesecret.com](mailto:support@onetimesecret.com).

If you are a member of an Organization, your account is administered by the Organization owner or administrator. The Organization owner can disable your account, request its deletion, or export Organization data on your behalf.

## Data retention and deletion

The cancellation and deletion windows for Account Data, including the active record and encrypted backup retention period, are governed by [Section J.3 of the Terms of Service](https://onetimesecret.com/terms#3-upon-cancellation). In summary: up to 30 days to delete the active account record after cancellation, plus up to a further 30 days for encrypted backup copies.

We retain billing records for as long as required by applicable tax and accounting law (typically six to ten years), regardless of account deletion. Billing records are limited to invoice metadata and are held by Stripe and in our accounting records.

**Inactive accounts.** An account is inactive when it has had no successful sign-in for five years (60 months). We may remove an inactive account and its associated data as part of the retention practices described in this section. We will attempt to notify you at the email address associated with your account at least 30 days before removing an inactive account; if the account remains inactive after that period, we may remove it. Notice is a reasonable-efforts courtesy, not a precondition; our failure to send it, or your failure to receive it, does not prevent removal. For 30 days after we send notice, you may request an export of your Account Data. Signing in resets the inactivity period.

If you would like to cancel your account or delete your personal information, you may do so from your account dashboard or by emailing [support@onetimesecret.com](mailto:support@onetimesecret.com). We retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.

Our duty of confidentiality with respect to information disclosed to us does not end when your account or agreement with us ends. The confidentiality obligations described in our Data Processing Agreement continue to apply after termination to any confidential information disclosed to us before termination. This continuing obligation does not extend the retention periods described above; your data is still deleted within the windows set out in this section.

## How we communicate with you

We never send unsolicited marketing email, and no email we send contains tracking pixels or click-tracking links. The only delivery signals we receive are those returned by the SMTP layer (such as hard bounces and delivery failures).

The email we send falls into three categories:

- **Transactional**: secret links, account notices, and billing notices. These are inherent to the service; there is no opt-out.
- **Service and security notices**: security advisories, breach notifications, policy-change notices, and deprecation notices. We send these when needed, including when we are legally required to. They are not marketing.
- **Product news**: feature announcements and similar updates. Strictly opt-in, rare, and every message includes a one-click unsubscribe.

If you have configured a Verified Email Address for your account or Organization, we may send transactional emails on your behalf from that domain. You remain responsible for ensuring the underlying DNS records you have published are accurate.

## Changes to our Privacy Statement

We may update this Privacy Statement from time to time. We will provide notice of material changes through the Website at least 30 days before the change takes effect, by posting a notice on our home page or by sending an email to the address associated with your account.

Minor changes that do not affect your rights or our obligations (such as typo corrections, formatting changes, clarifying language, or the addition of a new regional environment that does not change how existing users' data is processed) do not trigger advance notice and do not change the effective date above.

## Translations

We make this Privacy Statement available in multiple languages. Our translation policy and language-of-record rule are the same as those described in [Section P.4 of the Terms of Service](https://onetimesecret.com/terms#4-translations): we use a combination of professional and machine-assisted translation, translations may contain errors, and in case of any conflict between language versions, the English version of this Privacy Statement controls. If you encounter a translation that is unclear, inaccurate, or otherwise wrong, please tell us at [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com).

## Source of truth

This Privacy Statement is published in our public trust centre, a git-backed repository, currently our [site-policy repository](https://github.com/onetimesecret/site-policy), where every change is dated and the full history is reviewable. In the event of any discrepancy between the version of this Privacy Statement displayed on the Website and the trust centre version at the same effective date, the trust centre version is the authoritative version.

## License

This Privacy Statement is licensed under the [Creative Commons Zero license](https://creativecommons.org/publicdomain/zero/1.0/). For details, see our [site-policy repository](https://github.com/onetimesecret/site-policy).

## Contacting Onetime Secret

Questions regarding this Privacy Statement or our information practices should be directed to [privacy@onetimesecret.com](mailto:privacy@onetimesecret.com).

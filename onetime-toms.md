# Technical and Organizational Measures (TOMs) - Onetime Secret

Effective date: **TBD on release**

This document describes the technical and organizational measures ("TOMs") implemented by Onetime Secret (the "Processor") pursuant to Article 32 of the GDPR to ensure a level of security appropriate to the risk. It supplements Section 4 (Security) and Schedule C of the Onetime Secret [Data Processing Agreement](https://onetimesecret.com/dpa) ("DPA") and is the canonical description of those measures; capitalized terms used but not defined here have the meaning given in the DPA.

These measures are reviewed and improved on an ongoing basis, taking into account the state of the art, the cost of implementation, and the nature, scope, context, and purposes of processing. This document is published openly and may be shared freely with your compliance, legal, and audit teams; no confidentiality restriction applies to the document itself.

This document does not apply to self-hosted deployments of the Processor's open-source software, where no data processing relationship with the Processor arises.

**Shared responsibility.** The Processor operates the Service on certified third-party infrastructure (the "IaaS Provider(s)", listed as Subprocessors in Schedule A of the DPA). Each measure below is marked **Subprocessor**, **Processor**, or **Shared** to identify who implements it. Physical and facility controls are the IaaS Provider's responsibility under its own certified regime; application-layer cryptography and data handling are the Processor's; network, transport, and access controls are shared.

## Data Protection at Onetime Secret

- Personnel with access to Company Personal Data are vetted for reliability and are bound by confidentiality undertakings or statutory obligations of confidentiality (DPA §3).
- External parties are engaged under confidentiality terms; Subprocessors are engaged only under agreements no less protective than the DPA (DPA §6).
- The core application **and its CI/security pipeline configuration** are published as open-source software, allowing the Company and independent parties to inspect and verify the Processor's data-handling, cryptographic, and quality controls, a verifiable layer of transparency beyond the descriptions below.

---

## 1. Confidentiality

### 1.1 Physical Access Control

*Responsibility: Subprocessor (IaaS Provider).*

*Technical:* Production systems are hosted in certified third-party data centers (e.g., Hetzner, ISO 27001:2022; UpCloud, ISO 27001:2022 / SOC 2 Type II / CISPE). The Processor operates no physical data center of its own; physical access protection, facility surveillance, and visitor authentication are controlled by the hosting Subprocessor under its certified regime.

*Organizational:* Subprocessor security practices, including physical controls, are assessed on a regular basis. Hosting is restricted to the approved Subprocessors listed in Schedule A of the DPA.

### 1.2 Logical Access and Authorization Control

*Responsibility: Shared.*

*Technical:*
- Administrative access to production systems requires multi-factor authentication and encrypted connections.
- Access to cryptographic key material is restricted to essential operational processes.
- User account credentials are protected with Argon2id adaptive one-way hashing (per-credential random salt, constant-time verification). Legacy hashes are verified and upgraded to Argon2id on the next successful authentication.
- Role- and permission-based access control governs what users may do within their own account.

*Organizational:* Access is granted on a least-privilege, need-to-know basis, strictly limited to individuals who require it for the purposes of the Principal Agreement. Personnel with system access are bound by confidentiality obligations (DPA §3).

*Known gap:* Centralized, tamper-evident audit logging for administrative access and security-relevant events is not yet implemented. Current operational logs reside in system journals on each regional environment with size-based retention.

### 1.3 Separation Control

*Responsibility: Processor.*

*Technical:*
- Production and test/diagnostic environments are separated.
- Multi-tenant infrastructure (Identity Plus tier) maintains secure compartmentalization between customers; Global Elite customers receive logically dedicated environments with isolated application stacks and database instances.
- Application and data tiers are architecturally separated: application servers hold the system-level secret required for key derivation; database servers store encrypted Secret Content but do not hold or have access to that secret.
- The object class and identifier are bound as Additional Authenticated Data (AAD), ensuring ciphertext cannot be transplanted between records.

*Organizational:* Regional data isolation policy (DPA §12): Company Personal Data collected within a regional environment is not transferred to infrastructure outside that region, with the limited exceptions set out in DPA §12.2: Stripe billing data (covered by the EU-US, UK Extension, and Swiss-US Data Privacy Frameworks, with Standard Contractual Clauses retained as a fallback); transient edge-network TLS termination on the multi-tenant tiers, with traffic re-encrypted into the regional environment; and centralized error monitoring on a self-hosted, EU-hosted Sentry instance with client- and server-side data scrubbing.

### 1.4 Pseudonymization and Encryption (Art. 32(1)(a); Art. 25(1))

*Responsibility: Processor.*

*Technical (encryption):*
- **Secret Content at rest:** XChaCha20-Poly1305 authenticated encryption (AES-256-GCM available as an alternative); keys derived with BLAKE2b from a system-level secret not stored alongside the data plus a context string; per-operation random nonce. The encryption key is not stored and must be reconstructed at decryption time; the database server does not hold the key material necessary to decrypt Secret Content.
- **Passphrase-protected Secrets:** Where supplied, a user passphrase acts as an access-control gate verified before decryption; the passphrase hash is stored separately using Argon2id.
- **Full-disk encryption:** Production storage volumes are encrypted at the block level using LUKS.
- **Backups:** Encrypted with GPG using 4096-bit keys; decryption keys are stored offsite and are not present in the production environment.

*Technical (pseudonymization):* Account-level records are keyed by non-identifying internal identifiers rather than by personal data. On account deletion, Account Data is removed in accordance with §5 below, so retained operational records no longer resolve to an identifiable data subject.

*Organizational:* Secret Content is automatically Purged on first access or expiration; the Processor does not access, categorize, or analyze Secret Content. Operational logs apply client- and server-side data scrubbing to minimize incidental personal data.

---

## 2. Integrity

### 2.1 Data Transfer Control

*Responsibility: Shared.*

*Technical:*
- All data in transit is protected with TLS 1.3 (current configuration verifiable via SSL Labs: [onetimesecret.com](https://www.ssllabs.com/ssltest/analyze.html?d=onetimesecret.com&hideResults=on), [eu.onetimesecret.com](https://www.ssllabs.com/ssltest/analyze.html?d=eu.onetimesecret.com&hideResults=on), [us.onetimesecret.com](https://www.ssllabs.com/ssltest/analyze.html?d=us.onetimesecret.com&hideResults=on), [ca.onetimesecret.com](https://www.ssllabs.com/ssltest/analyze.html?d=ca.onetimesecret.com&hideResults=on), [uk.onetimesecret.com](https://www.ssllabs.com/ssltest/analyze.html?d=uk.onetimesecret.com&hideResults=on)).
- Authenticated encryption (XChaCha20-Poly1305 / AES-256-GCM) provides tamper detection for Secret Content at rest; AAD binding prevents ciphertext being moved between records.
- All backups are encrypted at rest.

*Organizational:* Data processing agreements with sub-processors to ensure data security and to control measures taken (DPA §6). Data remains within the IaaS Provider infrastructure of its collection region, save for the limited exceptions documented in DPA §12.

### 2.2 Input Control

*Responsibility: Processor.*

*Technical:*
- Structured data input occurs through dedicated user interfaces and APIs that enforce the permission model.
- User input is validated to reject malformed or manipulated data.
- Application changes and relevant user actions are logged to support auditing and reconstruction.

*Organizational:* The Processor does not engage in automated individual decision-making or profiling (DPA §12.3). Processing is limited to the documented instructions in DPA §2.

---

## 3. Availability, Resilience and Recoverability (Art. 32(1)(c))

*Responsibility: Shared.*

*Technical:*
- Local encrypted backups retained for seven (7) days on infrastructure within the same regional environment; offsite encrypted backups stored in object storage within the same regional jurisdiction (per Schedule A of the DPA, Backup & Storage) with automatic expiration after thirty (30) days. Global Elite deployments in the EU region additionally use geo-located encrypted backups in AWS S3 (Frankfurt, EU). All backup tiers fall within the Backup Retention Period defined in DPA §1.17.
- Backup encryption uses an asymmetric scheme so that compromise of production systems does not expose backup contents.
- Continuous system hardening against known attack classes, including denial-of-service.

*Organizational:* Backup storage locations align with the regional data isolation policy (DPA §12). Encrypted backup copies of Purged Secrets are retained only for the Backup Retention Period (30 days), after which they are automatically deleted.

---

## 4. Procedures for Review, Assessment and Evaluation (Art. 32(1)(d), 25(1))

### 4.1 Data Protection Management and Incident Response

*Responsibility: Processor.*

*Technical:* A self-hosted error-monitoring stack (Sentry, hosted within the EU) supports security monitoring and technical diagnostics, with data scrubbing applied to minimize incidental personal data. Server request logs are retained for the Operational Retention Period only.

*Organizational:*
- Annual review of cryptographic implementations against current security guidance.
- Incident response procedures: in the event of a Personal Data Breach affecting Company Personal Data, the Processor notifies the Company within 72 hours (DPA §8).
- Records of processing activities maintained under Art. 30(2) and made available on request (DPA §3.3).
- Reasonable assistance with data protection impact assessments and prior consultations (DPA §9).
- Procedures to assist with Data Subject rights requests, taking into account the ephemeral nature of Secret Content (DPA §7).
- Annual review of the Data Protection Officer and UK representative assessments (DPA §3.2; UK Addendum §3.4).

### 4.2 Secure Development and Vulnerability Management

*Responsibility: Processor.*

*Technical:*
- Every change is gated by a tiered automated CI pipeline before merge: static analysis and linting (Ruby and TypeScript), internationalization validation, unit test suites, and an integration test matrix exercised across multiple storage backends (PostgreSQL, SQLite) and feature configurations, followed by container build validation and end-to-end container tests.
- Each change additionally passes independent automated code review and forward-compatibility testing against the next major language runtime.
- API contracts are generated and diffed on each change to detect unintended interface changes.

*Organizational:*
- Dependencies are updated via Renovate with a fixed cooldown period (currently two weeks) before adoption, mitigating supply-chain risk from compromised or malicious package releases.
- Security-flagged and high-severity dependency vulnerabilities are handled on an expedited basis through Dependabot security updates, bypassing the cooldown.
- Periodic adversarial security assessments (penetration testing or third-party code audit) are conducted on the application layer; frequency and scope are determined by risk assessment and may be disclosed on request.
- As regular operating procedure, the production Service runs from the same public OCI images the Processor publishes. Any exception is temporary, made only when a vulnerability must be patched faster than the public release cycle allows.
- Because the application source and its CI configuration are open-source, these controls are independently verifiable rather than merely asserted; running from the published images extends that verifiability to the deployed artifact itself.

---

## 5. Privacy by Default (Art. 25(2))

*Responsibility: Processor.*

- The Service is data-minimizing by design: Secret Content is ephemeral and automatically Purged on first access or expiration, so the default lifecycle of the most sensitive data is non-retention.
- No third-party tracking, analytics, cookies, or behavioral profiling is employed, and no automated decision-making is performed (DPA §5, §12.3).
- Account Data is limited to what is necessary to provide the Service: email address, authentication credentials, billing information, and usage metadata (DPA §1.16).
- On account deletion, Account Data is deleted following the Operational Retention Period (30 days, retained to facilitate export requests), and encrypted backup copies are removed within the Backup Retention Period (30 days) (DPA §10).

---

## 6. Order Control

*Responsibility: Shared.*

- The Processor processes Company Personal Data only on the Controller's documented instructions (DPA §2).
- The Controller manages its own account and users through the Service interface; credentials are created and controlled by the Controller, and only credentialed users may enter, modify, or delete data within the Controller's instance.
- Actions the Controller cannot perform through the interface are carried out by the Processor only on written instruction.
- Personnel access to Controller data is limited to defined operational and support circumstances under confidentiality obligations (DPA §3).

---

## 7. Sub-processor Compliance (Art. 28)

*Responsibility: Processor.*

*Technical:* Subprocessor remote access to relevant systems is controlled and limited to the services each Subprocessor provides.

*Organizational:*
- Subprocessors are engaged only under data processing agreements no less restrictive or protective than the DPA (DPA §6).
- The Company is notified by email of any intended new or replacement Subprocessor and has a thirty (30)-day objection window, during which it may terminate the affected services without penalty; in an emergency, a replacement may be engaged first with prompt notice afterward, the objection window running from that notice (DPA §6).
- The current list of approved Subprocessors, with data location, purpose, and categories of data, is maintained in Schedule A of the DPA.
- Subprocessor security practices are assessed on a regular basis.

---

*This document is maintained in sync with Schedule C of the DPA. Where this TOMs document and Schedule C describe the same control, this document governs the description; the DPA governs the binding obligations.*

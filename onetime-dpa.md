# Data Processing Agreement - Onetime Secret

Effective date: **TBD on release**

This Data Processing Agreement ("*Agreement*" or "*DPA*") forms part of the Contract for Services under Onetime Secret's Terms of Service (the “*Principal Agreement*") between Onetime Secret \#602 - 2892 E 10th Ave Vancouver, British Columbia Canada, Business identification number 77690 5960 (referred to as the "*Processor*") and the Company using the Processor's services (referred to as the "*Company*”).

This Agreement governs the specific requirements of Data Protection Laws to the extent that Company’s use of Onetime Secret's services implies the processing of Personal Data subject to Data Protection Laws.

This Agreement aligns with our Privacy Policy where applicable, while addressing the specific data protection requirements for all service tiers. The Processor offers multiple tiers with different architectural characteristics, as described in Schedule A.

The term of this Agreement shall follow the term of the Principal Agreement. Terms not defined herein shall have the meaning as set forth in the Principal Agreement.

This Agreement does not apply to self-hosted deployments of the Processor's open-source software. Where the Company operates its own instance of the software, no data processing relationship with the Processor arises in connection with that deployment.

### *WHEREAS*

A\) The Company acts as a Data Controller (the "*Controller*").

B\) The Company wishes to subcontract certain Services (as defined below), which imply the processing of Personal Data, to Onetime Secret, acting as a Data Processor (the "*Processor*").

C\) The Parties seek to implement a data processing agreement that complies with the requirements of the current legal framework in relation to data processing and with the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of Personal Data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) and other applicable data protection laws.

D\) The Parties wish to lay down their rights and obligations.

### *IT IS AGREED AS FOLLOWS:*

## 1. Definitions and Interpretation

Unless otherwise defined herein, capitalized terms and expressions used in this DPA shall have the following meaning:

1.1) "*Agreement*" means this Data Processing Agreement and all Schedules;

1.2) "*Company Personal Data*" means any Personal Data related to the Company or Company’s customers or employees Processed in connection with the Principal Agreement;

1.3) "*Contracted Processor*" means a Subprocessor;

1.4) "*Data Protection Laws*" means EU Data Protection Laws and, to the extent applicable, the data protection or privacy laws of any other country;

1.5) "*Data Transfer*"\* \*means:

1.  1.  a transfer of Company Personal Data from Controller to the Processor or a Contracted Processor; or
    2.  an onward transfer of Company Personal Data from the Processor to a Subprocessor, or between two establishments of a Subprocessor;

1.6) "*EEA*" means the European Economic Area;

1.7) "*EU Data Protection Laws*" means EU Directive 95/46/EC, as transposed into domestic legislation of each Member State and as amended, replaced or superseded from time to time, including by the GDPR and laws implementing or supplementing the GDPR;

1.8) "*Engagement*" means the period starting at first payment and ending when services are terminated by either party according to the terms of the Principal Agreement.

1.9) "*GDPR*" means EU General Data Protection Regulation 2016/679;

1.10) "*Global Elite*" means the premium tier service offered by the Processor, which operates on logically separated instances and provides enhanced security and customized solutions for organizations prioritizing privacy and compliance.

1.11) "*Secret*" or "*Secret Content*" means the sensitive information or data that a user intends to share securely through the Processor's service, that is encrypted in transit and at rest, assigned a unique access link, and automatically destroyed after it has been viewed once, after a specified time period has elapsed or after being deleted manually prior to having been received.

1.12) "*Services*" means the Processor’s secure secret-sharing and sensitive information management platform, including related features, APIs, and ancillary services. The details and pricing of the Services can be found on the Processor’s website.

1.13) "*Subprocessor*" means any person appointed by or on behalf of Processor to process Personal Data on behalf of Controller in connection with the Agreement.

1.14) "*Receipt Link*" means the unique URL provided to the creator of a Secret that displays the Secret's status (whether it has been received, expired, or remains pending) and permits the holder to Purge the Secret prior to receipt. The Receipt Link does not provide access to the Secret Content. Unless the Secret is protected by a passphrase, possession of the Receipt Link is sufficient to exercise deletion rights over the associated Secret.

1.15) "*Purged*" or "*Purged Secret*" means a Secret that has been viewed by its recipient, has met or exceeded its specified retention period, or has been deleted by the holder of the associated Receipt Link, and is therefore no longer accessible through the Processor's service. For clarity, Purged Secrets may temporarily remain in encrypted backup systems for the Backup Retention Period in accordance with Section 10.

1.16) "*Account Data*" means Personal Data associated with a Company's or user's account, including email addresses, authentication credentials, billing information, and usage metadata, but excluding Secret Content.

1.17) "*Backup Retention Period*" means thirty (30) days, being the maximum period during which encrypted backup copies may be retained following deletion from active systems, after which they are automatically deleted.

1.18) "*Operational Retention Period*" means thirty (30) days, being the standard period applied to: (a) server request logs, error monitoring data, and similar diagnostic information before automatic deletion; and (b) post-termination Account Data retention to facilitate data export requests.

1.19) "*Subprocessor Notice Period*" means thirty (30) days, being the period following the Processor's notice of a new or replacement Subprocessor during which the Company may object and terminate the affected Services as described in Section 6.

The terms, "*Commission*", "*Controller*", "*Data Subject*", "*Member State*", "*Personal Data*", "*Personal Data Breach*",\* \*"*Processing*" and "*Supervisory Authority*" shall have the same meaning as in the GDPR or other applicable Data Protection Law, and their cognate terms shall be construed accordingly.

## 2. Processing of Company Personal Data

2.1) For the purposes of this Agreement, Company Personal Data comprises two distinct categories with different processing characteristics:

a) Secret Content: encrypted, ephemeral data that is automatically Purged from active systems and may remain in encrypted backup systems for the Backup Retention Period thereafter; and

b) Account Data: retained for the duration of the Engagement and subject to the deletion provisions in Section 10.

The Processor's ability to respond to certain requests or obligations under this Agreement may differ depending on which category of data is involved, as detailed in the relevant sections.

### Processor shall:

2.2) comply with all applicable Data Protection Laws in the Processing of Company Personal Data and not process Company Personal Data other than on Controller's documented instructions in section 2.

### Controller instructs Processor to process Company Personal Data to:

2.3) provide the Services and related technical support;

2.4) fulfil legal obligations or resolve disputes;

2.5) exercise any internal task aimed to optimise the security, privacy, confidentiality and functionalities of the Services;

2.6) process data as necessary for internal administrative purposes directly related to service provision, including system performance monitoring, security auditing, and compliance verification.

## 3. Processor Personnel

3.1) Processor shall take reasonable steps to ensure the reliability of any employee, agent or contractor of any Contracted Processor who may have access to Company Personal Data, ensuring in each case that access is strictly limited to those individuals who need to know / access the relevant Company Personal Data, as strictly necessary for the purposes of the Principal Agreement, and/or to comply with Data Protection Laws and other relevant legislation in the context of that individual's duties to the Contracted Processor, ensuring that all such individuals are subject to confidentiality undertakings or professional or statutory obligations of confidentiality.

3.2) Data Protection Officer. Based on the Processor's assessment under Articles 37-39 of the GDPR, the Processor is not required to appoint a Data Protection Officer. The Processor does not engage in regular and systematic monitoring of data subjects on a large scale. With respect to Secret Content, data is encrypted at rest using keys not held by the database server. While certain secret creation methods do not provide end-to-end encryption, the Processor does not access or categorize Secret Content, and such content is automatically Purged. This assessment is reviewed annually. Data protection inquiries may be directed to: <privacy@onetimesecret.com>.

3.3) The Processor maintains records of processing activities carried out on behalf of the Controller in accordance with Article 30(2) of the GDPR. Such records shall be made available to the Controller or Supervisory Authority upon request.

## 4. Security

In accordance with Article 32 (1) of the GDPR, the Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation, and the nature, scope, context, and purposes of processing. These measures shall be designed to protect the rights and freedoms of natural persons, considering the risks of varying likelihood and severity, including the risk of a Personal Data Breach.

The Processor shall also assess the risks associated with processing activities and apply measures that are consistent with the requirements set forth in Article 32 (1) GDPR, ensuring the security of Company Personal Data at all times.

## 5. Data Tracking

5.1) No Third-Party Tracking: The Processor does not employ any third-party tracking technologies, analytics services, cookies, pixels, or similar tracking mechanisms that would monitor the behavior of data subjects.

5.2) No Intentional User Tracking: The Processor does not intentionally track, profile, or monitor individual users or their behaviors. The Processor does not create user profiles or engage in behavioral analysis of individual data subjects.

5.3) Limited Operational Logging: The Processor retains server request logs and error monitoring data for the Operational Retention Period solely for the purposes of security monitoring, technical diagnostics, and service improvement. Error monitoring is performed using self-hosted Sentry (hosted within the European Union). This logging:

- Is used exclusively for technical diagnostics, security monitoring, and service improvement
- Collects minimal data necessary for these purposes using Data Scrubbing features both client-side and server-side
- Does not intentionally collect personal data, though some may be incidentally captured in error reports.
- Is processed and stored securely within the EU.

5.4) Purpose Limitation: Any data potentially captured through error monitoring is used solely for the purpose of technical improvements and is not used for marketing, behavioral analysis, targeting, or any other purpose beyond error resolution.

5.5) Server Request Logs: The Processor retains standard server request logs (such as access logs and web server logs) on servers within the regional system for operational and security purposes. These logs are subject to size-based retention and are typically purged within a few days, but depending on traffic level can be up to the Operational Retention Period.

## 6. Subprocessing

Subject to this Agreement, the Company grants general authorization to the Processor to engage Subprocessors and disclose or transfer Company Personal Data to them. The Company acknowledges and approves the Subprocessors listed in Schedule A to this Agreement, understanding that this list may be updated by the Processor from time to time in accordance with this Section 6. Furthermore, the Company authorizes the Processor to disclose and transfer Personal Data to any company within its corporate group.

6.1) *Notice of changes.* The Processor shall give notice of the intended engagement of any new or replacement Subprocessor by email to all account holders, at the addresses associated with their use of the Services under the Principal Agreement. The Processor also maintains a current, dated Subprocessor list, with version history, in its public trust centre (a git-backed repository); that list supplements notice under this Section and does not replace it.

6.2) *Objection and remedy.* If the Company objects to a new or replacement Subprocessor, the Company may, within the Subprocessor Notice Period, terminate the affected Services without penalty. Termination and the return or deletion of Company Personal Data are governed by the Principal Agreement and Section 10 of this Agreement. Such termination is the Company's remedy for an objection; the Processor is not obliged to suspend or reverse the engagement for the Services generally.

6.3) *Emergency engagement.* Where reasonably necessary to preserve the security, availability, or continuity of the Services (for example, replacing a Subprocessor that has failed or suffered a security incident), the Processor may engage a new or replacement Subprocessor before giving notice, and shall notify the Company promptly after the engagement. The Company's objection right under Section 6.2 runs from that notice.

6.4) Processor ensures that Subprocessors are subject to an agreement with Processor no less restrictive and protective than the present Agreement with respect to the protection of Company Personal Data to the extent applicable to the nature of the services provided by the Subprocessor.

## 7. Data Subject Rights

Taking into account the nature of the processing, Processor shall reasonably assist Company for the fulfilment of Company’s obligations to respond to requests to exercise Data Subject rights under the Data Protection Laws.

### Processor shall:

7.1) promptly notify Company if it receives a request from a Data Subject under any Data Protection Law in respect of Company Personal Data; and

7.2) ensure that it does not respond to that request except on the documented instructions of Controller or as required by Applicable Laws to which the Processor is subject, in which case Processor shall to the extent permitted by Applicable Laws inform Controller of that legal requirement before the Contracted Processor responds to the request.

7.3) The Parties acknowledge that the technical design of the Services may limit the practical exercise of certain Data Subject rights with respect to Secret Content specifically. Secrets are encrypted and are automatically Purged after viewing or expiration. As a result:

a) Access requests (Article 15) cannot be fulfilled for Purged Secrets or for Secrets where the Processor cannot verify the requestor's relationship to the Secret;

b) Rectification (Article 16) and erasure (Article 17) requests relating to Secret Content may be addressed by the Data Subject or Controller deleting or allowing the Secret to expire;

c\) The Processor will cooperate with Data Subject requests relating to account-level Personal Data (such as email addresses and account metadata) in accordance with Sections 7.1 and 7.2.

## 8. Personal Data Breach

The Processor shall manage any Personal Data Breach in compliance with applicable Data Protection Laws and its internal Personal Data Breach procedures. In the event of a Personal Data Breach affecting Company Personal Data, the Processor shall notify the Company within 72 hours, providing sufficient information to enable the Company to fulfill its obligations under Data Protection Laws, including informing Data Subjects as necessary. In such cases, Processor shall provide Company with information reasonably available to allow Company to meet any obligations to report or inform Data Subjects of the Personal Data Breach under the Data Protection Laws.

Processor shall co-operate with Company and take reasonable commercial steps as are directed by Company to assist in the investigation, mitigation and remediation of each such Personal Data Breach.

Each party shall bear the costs of the investigation, remediation, mitigation, and other related costs to the extent a Data Breach is caused by such party.

Each party shall bear the costs of any fines, penalties, damages, or other related amounts imposed by an authorized regulatory body, governmental agency, or court of competent jurisdiction to the extent arising from such party’s breach of its obligations under this Agreement.

## 9. Data Protection Impact Assessment and Prior Consultation

Processor shall provide reasonable assistance to Company with any data protection impact assessments, and prior consultations with Supervising Authorities or other competent data privacy authorities, which Controller reasonably considers to be required by article 35 or 36 of the GDPR or equivalent provisions of any other Data Protection Law, in each case solely in relation to Processing of Company Personal Data by, and taking into account the nature of the Processing and information available to, the Contracted Processors.

## 10. Deletion or return of Company Personal Data

In case of cessation of any Service involving the Processing of Company Personal Data, the Processor shall delete all Company Personal Data to the extent permitted by applicable laws and in accordance with Processor’s Terms and Conditions and Privacy Policy. Should the Company require a copy of their data, they must request it before the deletion of their account; requests made after the account has been deleted can no longer be considered.

Unless required by applicable law, Processor shall retain Account Data for the duration of the Agreement plus the Operational Retention Period thereafter to facilitate any requested data exports. Backup copies shall be maintained for the Backup Retention Period, after which they will be automatically deleted in accordance with our standard procedures.

## 11. Audit rights

Subject to this section 11, Processor shall make available to Company on request all information necessary to demonstrate compliance with this Agreement, and shall allow for and contribute to audits, including inspections, by Company or an auditor mandated by Company in relation to the Processing of the Company Personal Data by the Contracted Processors. Company shall not exercise its audit rights more than once per calendar year except following a Personal Data Breach or an instruction by a regulatory authority. Company shall give Processor at least sixty (60) days prior written notice of its intention to audit Processor pursuant to this Agreement. Audit shall be conducted during Processor’s business hours, shall not disrupt Processor’s operations and shall ensure the protection of the Company’s, Processor’s and other Data Subjects’ Personal Data. Processor and Company shall mutually agree in advance on the date, scope, duration and security and confidentiality controls applicable to the audit. Company acknowledges that the signing of a non-disclosure agreement may be required by the Controller prior to the conduction of the audit.

The Processor may satisfy audit requests by providing existing documentation, including third-party audit reports, certifications (such as SOC 2 or ISO 27001), or written responses to reasonable audit questionnaires. Where the Company reasonably determines that such documentation does not adequately address its concerns, the Company may request an on-site audit in accordance with the provisions above.

The requesting party shall bear the reasonable costs of any audit or inspection conducted under this section, including the Processor's internal costs of facilitating the audit. Where the Processor provides documentation in lieu of an on-site audit, the Processor shall bear its own costs.

Information and audit rights of Company only arise under section 11 to the extent that the Agreement does not otherwise give them information and audit rights meeting the relevant requirements of Data Protection Law.

## 12. Data Transfer

### Processor shall:

12.1) process and store all Data exclusively within the specific geographic region where it was initially collected (EU, UK, or other designated regions) and shall not transfer or authorize the transfer of Data between these distinct regional environments without the prior written consent of the Controller. For clarity:

a) Data collected from EU data subjects shall remain within EU infrastructure;

b) Data collected from UK data subjects shall remain within UK infrastructure;

c\) Data collected in other regions shall remain within the infrastructure of that specific region.

This regional data localization policy applies throughout the entire processing lifecycle. The Processor maintains segregated regional processing environments (including separate EU and UK environments) and implements technical and organizational measures to prevent unauthorized cross-regional transfers.

12.2) ensure that Company Personal Data collected within a given regional environment is not transferred to infrastructure outside that region, with the following limited exceptions:

a) *Billing data* (limited to payment and invoicing information) is processed by Stripe, Inc. in the United States, as listed in Schedule A. For Company Personal Data originating from EU, EEA, UK, or Swiss data subjects, this transfer is covered by Stripe's certification under the EU-US Data Privacy Framework, the UK Extension to the EU-US Data Privacy Framework, and the Swiss-US Data Privacy Framework. Where an applicable transfer mechanism is invalidated, the Parties shall cooperate to implement an alternative approved mechanism (such as EU Standard Contractual Clauses, 2021 version) without undue delay.

b) *Transient edge-network TLS termination.* On the multi-tenant Services, Cloudflare (for the Processor's regional service domains) and Approximated (for customer Custom Domains on the multi-tenant tiers) operate global edge networks that terminate TLS connections at an edge location close to the visitor, which may be outside the destination region. The decrypted application traffic is re-encrypted for transit into the appropriate regional environment for processing. Single-tenant deployments (e.g. Global Elite) do not use these third-party edge networks; TLS is terminated on dedicated infrastructure managed by the Processor within the Company's selected region.

c\) *Centralized error monitoring.* Application errors from all regional environments are captured by the Processor's self-hosted error-monitoring instance (Sentry), hosted within the European Union, as described in Section 5.3. Error reports are scrubbed of data client-side and server-side, are not intended to contain personal data (though some may be incidentally captured), are used solely for the purposes described in Sections 5.3 and 5.4, and are retained for no longer than the Operational Retention Period.

12.3) not engage in automated individual decision-making, including profiling, as defined under Article 22 of the GDPR, in connection with Company Personal Data.

12.4) impose the same obligations on any sub-processors engaged under this Agreement.

## 13. General Terms

*Compliance with Applicable Laws.* Processor will process Company Personal Data in accordance with this Agreement and Data Protection Laws applicable to its role under this Agreement. Processor is not responsible nor liable for complying with Data Protection Laws solely applicable to Company by virtue of its business or industry.

*Confidentiality.* Each party must keep any information it receives about the other party and its business in connection with this Agreement (“Confidential Information”) confidential and must not use or disclose that Confidential Information without the prior written consent of the other party except to the extent that:

13.1) disclosure is required by law;

13.2) the relevant information is already in the public domain through no fault of the Parties.

*Acceptance.* This Agreement is automatically incorporated into and forms part of the Principal Agreement upon the Company's acceptance of the Terms of Service. No signature is required for this Agreement to take effect.

*Authority.* If you are accepting this Agreement on behalf of the Company, you warrant that: (a) you have full legal authority to bind the Company to this Agreement; (b) you have read and understand this Agreement; and (c) you agree, on behalf of the Company, to this Agreement.

*Liability.* The liability of each party under this Agreement shall be subject to the exclusions and limitations of liability set out in the Principal Agreement, including Sections L (Disclaimer of Warranties), M (Limitation of Liability), and N (Release and Indemnification) of the Terms of Service.

*Notices.* All notices and communications given under this Agreement must be in writing and will be sent by email. Controller shall be notified by email sent to the address related to its use of the Services under the Principal Agreement. Processor shall be notified by email sent to the address: <legal@onetimesecret.com>

## 14. Survival

The obligations of the Processor under this Agreement shall survive the termination of this Agreement until all Company Personal Data has been deleted or returned in accordance with Section 10 of this Agreement.

Notwithstanding the completion of the Engagement, termination of the Principal Agreement or of this Agreement, the obligations of the Processor relating to confidentiality in Section 13 shall continue to apply to any Confidential Information disclosed prior to such termination.

## 15. Change in Privacy Laws

Notwithstanding anything to the contrary in the Agreement (including this DPA), in the event of a change in Privacy Laws or a determination or order by a government authority or competent court affecting this DPA or the lawfulness of any processing activities under this DPA, we reserve the right to make any amendments to this DPA as are reasonably necessary to ensure continued compliance with Privacy Laws or compliance with any such orders.

## Frequently Asked Questions

**Can I share this DPA with my compliance, legal, or audit team?** Yes. This DPA is a standard part of our Terms of Service and may be shared freely within your organization and with your auditors, legal advisors, and compliance personnel. It is published publicly, so there is no confidentiality restriction on the document itself.

**How do I get a signed or countersigned copy?** A signature is not required for this DPA to be binding (see the *Acceptance* provision in Section 13). If your organization requires a countersigned copy for its records, contact us at <legal@onetimesecret.com> and we will provide one on request.

**Is this DPA automatically accepted?** Yes. This DPA is automatically incorporated into and forms part of the Principal Agreement upon your acceptance of the Terms of Service. No separate signature or action is required for it to take effect.

------------------------------------------------------------------------

## Schedule A - List of Approved Subprocessors

Onetime Secret engages subprocessors based on functional requirements and customer preferences. The subprocessors listed below are organized by purpose; within each category, some are required for service operation while others represent alternatives that the Processor may engage.

Service tier affects subprocessor availability and architecture:

*Global Elite (Premium Tier):* customers receive logically dedicated environments (e.g., secrets.yourcompany.com) with isolated application stacks and database instances, though underlying cloud resources may be virtualized.

*Multi-tenant tiers (Basic, Identity Plus, Team Plus)*: operate on multi-tenant infrastructure (e.g., eu.onetimesecret.com) with secure compartmentalization between customers. Custom Domain functionality, available on all multi-tenant tiers including the free tier, requires third-party network infrastructure that terminates SSL/TLS connections outside the Processor's direct control, as detailed in the Network & Security category below.

Where multiple subprocessors appear within a category, they represent alternatives unless explicitly stated as additive. Core subprocessors (those not marked optional) apply to all service tiers.

### Infrastructure & Hosting

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Hetzner* | EU (Germany, Finland) | All | 𐄂 | Computing resources for internal infrastructure, single tenant and multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *UpCloud* | UK (London) or EU (Helsinki, Amsterdam, Frankfurt) | All | ✔ | Computing resources for single tenant and multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *NorthFlank* | UK (London) or EU (Netherlands) | All | ✔ | Container hosting, CI/CD services, managed databases, and computing resources | Account info, app data, network-level web traffic data, IP addresses |
| *DigitalOcean* | EU or CA (Toronto) | All | ✔ | Container hosting, CI/CD services, managed databases, and computing resources | Account info, app data, network-level web traffic data, IP addresses |
| *Catalyst Cloud* | NZ (Porirua) | All | ✔ | Computing resources for multi-tenant hosting environments | Account info, app data, network-level web traffic data, IP addresses |
| *CloudFlare* | Global | All | 𐄂 | DNS Management (does not include "Orange Cloud" proxy) | DNS Records, DKIM/DMARC/SPF |

### Security & Network Services

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Approximated* | Global edge network | All multi-tenant tiers | ✔ | Custom domain with TLS termination | Account info, application data, network-level web traffic data, IP addresses |
| *CloudFlare* | Global | All multi-tenant tiers | ✔ | Network proxy ("Orange Cloud"), security services, and TLS termination at the edge for the Processor's regional service domains (e.g. `eu.onetimesecret.com`); not used for customer Custom Domains | Account info, application data, network-level web traffic data, IP addresses |
| *BunnyCDN* | Global edge network | All | 𐄂 | CDN and static hosting for the Processor's public websites (`onetimesecret.com`, `onetimesecret.dev`) and documentation (`docs.onetimesecret.com`, `docs.onetimesecret.dev`); does not serve Secret Content or Account Data | Network-level web traffic data, IP addresses |

### Email Services

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | Purpose | **Categories of Data** |
| *Proton Mail* | Switzerland | All | 𐄂 | Internal communications, customer support | Email addresses, email content |
| *AWS (SES)* | EU | All | ✔ | SMTP transactional email sending, suppression lists, deliverability metrics, bounce/complaint handling | Email addresses, email content, DKIM/DMARC |
| *Lettermint* | EU | All | ✔ | SMTP transactional email sending, suppression lists, deliverability metrics, bounce/complaint handling | Email addresses, email content, DKIM/DMARC |

### Backup & Storage

Offsite encrypted backups for each regional environment are stored in object storage located within that region's jurisdiction, using the storage services of the regional hosting Subprocessors listed under Infrastructure & Hosting above. Local encrypted backups reside on infrastructure within the same regional environment as the data they cover.

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Hetzner (Object storage)* | EU (Germany, Finland) or US | All | ✔ | Object storage for encrypted offsite backups (EU and US regional environments) | Account info, application data |
| *UpCloud (Object storage)* | UK (London) | All | ✔ | Object storage for encrypted offsite backups (UK regional environment) | Account info, application data |
| *DigitalOcean (Object storage)* | CA (Toronto) | All | ✔ | Object storage for encrypted offsite backups (CA regional environment) | Account info, application data |
| *Catalyst Cloud (Object storage)* | NZ (Porirua) | All | ✔ | Object storage for encrypted offsite backups (NZ regional environment) | Account info, application data |
| *AWS (S3)* | EU (Frankfurt, Ireland) | Global Elite | ✔ | S3 storage for geo-located encrypted backups (EU-region deployments) | Account info, application data |
| *BunnyCDN (Object storage)* | EU (Germany, Sweden) | All | ✔ | Object storage for encrypted offsite backups (EU regional environments - Public Beta) | Account info, application data |

### Payment Processing

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Subprocessor** | **Data Location** | **Tiers** | **Optional** | **Purpose** | **Categories of Data** |
| *Stripe* | US/EU | All | 𐄂 | Payment processing, invoicing, fraud detection, tax reporting, payment links, checkout services. | Account info, app data, network traffic |

### *Subprocessor Entity Details*

| ***Name*** | *Address* | *Jurisdiction* | *Comment* |
| :--- | :--- | :--- | :--- |
| **Hetzner Online GmbH** | Industriestr. 25 91710 Gunzenhausen Germany | EU w/ US subsidiary | *ISO 27001:2022* |
| **Proton AG (Proton Mail)** | Route de la Galaise 32 1228 Plan-les-Ouates, Geneva Switzerland | Switzerland | |
| **Lettermint B.V.** | Willemsvaart 16B, Unit 1.08, 8019 AB Zwolle, Netherlands KVK: 99337711 | EU | |
| **Stripe, Inc.** | 354 Oyster Point Boulevard South San Francisco, CA 94080 United States | US | *EU-US Data Privacy Framework certified* |
| **Northflank, Ltd** | 20-22 Wenlock Road, London, England N1 7GU, United Kingdom | UK | |
| **UpCloud Ltd** | Aleksanterinkatu 15 B, 7th floor, 00100 Helsinki, Finland | EU | *UpCloud is ISO 27001:2022, SOC 2 Type II, certified and a member of the CISPE Code of Conduct.* |
| **DigitalOcean, LLC** | 101 Avenue of the Americas, 10th Floor, New York, NY 10013, United States | US | *Data located in EU or CA regions only* |
| **Catalyst Cloud Limited** | Level 6, Catalyst House, 150 Willis Street, Te Aro, Wellington 6011, New Zealand (NZBN 9429046115577) | NZ | *New Zealand holds an EU adequacy decision* |
| **Amazon Web Services, Inc.** | 410 Terry Avenue North, Seattle, WA 98109-5210, United States | US | *SES and S3; data located in EU regions only (Frankfurt, Ireland)* |
| **CloudFlare, Inc.** | 101 Townsend Street, San Francisco, CA 94107, United States | US | *EU-US Data Privacy Framework certified* |
| **Approximated, Inc.** |2810 North Church Street Wilmington, Delaware 19802, United States | US | *Multi-tenant only* |
| **BunnyWay d.o.o. (BunnyCDN)** | Dunajska cesta 165, 1000 Ljubljana, Slovenia | EU | *CDN and static hosting for public websites and documentation* |


------------------------------------------------------------------------

## Schedule B - Processing Implementation and Customization

#### *1. Applicability*

This Schedule describes how processing configuration and customization are documented for single-tenant (Global Elite) deployments. Multi-tenant deployments (such as Identity Plus and Team Plus) operate on standardized configurations without customer-specific modifications, and the provisions of this Schedule do not apply to them.

#### *2. Configuration*

For single-tenant deployments, implementation requirements are captured through the Processor's onboarding process at the start of the engagement. The agreed configuration may specify:

- Selected Subprocessors from the available alternatives listed in Schedule A;
- Regional hosting location;
- Email delivery configuration (including the option to disable outbound email); and
- Any other customer-specific technical requirements.

#### *3. Documentation*

Configuration is established through the onboarding process and subsequent written correspondence between the Parties in accordance with Section 13, except that for the purposes of this Schedule the Processor may also contact the Controller from any @onetimesecret.com address. Such correspondence constitutes the authoritative record of the agreed configuration. Where a customer-specific addendum is prepared, it summarizes but does not supersede the underlying correspondence.

#### *4. Retention*

Configuration documentation is retained for the duration of the service agreement plus five (5) years following termination, to support regulatory compliance verification and audit requirements.

------------------------------------------------------------------------

## Schedule C - Technical and Organizational Security Measures

This Schedule describes the technical and organizational measures implemented by the Processor pursuant to Article 32 of the GDPR to ensure a level of security appropriate to the risk.

### 1. Cryptographic Measures

*1.1 Encryption of Secret Content*

Secret Content is encrypted at rest using the following cryptographic scheme:

- Algorithm: XChaCha20-Poly1305 authenticated encryption (with AES-256-GCM as an available alternative)
- Key Derivation: Encryption keys are derived using BLAKE2b from a combination of: (i) a system-level secret not stored alongside encrypted data; and (ii) a context string incorporating the object class and unique identifier
- Nonce: Randomly generated per encryption operation
- Additional Authenticated Data (AAD): The object class and identifier are bound as AAD, ensuring ciphertext cannot be transplanted between records
- Implementation: Familia encrypted-fields library

The encryption key is not stored and must be reconstructed from its component inputs at decryption time. The database server does not hold the key material necessary to decrypt Secret Content.

Where a user supplies a passphrase when creating a Secret, the passphrase is verified as an access-control gate before decryption is performed. The passphrase hash is stored separately from the encrypted content using the same credential hashing described in Section 1.2 below. The passphrase is not incorporated into the encryption key derivation; it controls authorization to decrypt, not the cryptographic ability to do so.

*1.2 Authentication Credential Protection*

User passphrases and account credentials are protected using adaptive one-way hashing:

- Algorithm: Argon2id (winner of the Password Hashing Competition), providing resistance to GPU-based and side-channel attacks
- Salt: Randomly generated per credential, stored with the hash
- Timing-safe comparison: Verification uses constant-time comparison to prevent timing attacks

New credentials are hashed with Argon2id. Credentials last used before April 2026 may retain a legacy bcrypt hash; a legacy hash is verified and upgraded to Argon2id on the next successful authentication.

*1.3 Cryptographic Key Isolation*

The Processor maintains architectural separation between application and data tiers:

- Application servers (which perform encryption and decryption operations) hold the system-level secret component required for key derivation
- Database servers store encrypted Secret Content but do not hold or have access to the system-level secret
- These tiers operate on separate virtual machines with distinct access controls

This separation ensures that unauthorized access to database storage alone does not provide sufficient key material to decrypt Secret Content.

*1.4 Infrastructure Encryption*

Production storage volumes are encrypted at the block level using LUKS (Linux Unified Key Setup) with system defaults, providing full-disk encryption independent of application-layer encryption.

*1.5 Backup Encryption*

Backup data is encrypted using GPG with 4096-bit keys prior to storage. Encryption keys reside only on the originating system; decryption keys are stored offsite and are not present in the production environment. This asymmetric approach ensures that compromise of production systems does not expose backup contents.

### 2. Data Minimization and Ephemeral Processing

- Secret Content is automatically purged upon first access or expiration
- The Processor cannot access decrypted Secret Content without the complete key derivation inputs
- Server request logs containing potential personal data are retained for the Operational Retention Period only

### 3. Backup Retention and Geographic Controls

- Local encrypted backups are retained for seven (7) days on infrastructure within the same regional environment as the data they cover
- Offsite encrypted backups are stored in object storage within the same regional jurisdiction, as identified in Schedule A (Backup & Storage), with automatic expiration after thirty (30) days
- For Global Elite deployments in the EU region, geo-located encrypted backups are stored in AWS S3 (Frankfurt, EU) with automatic expiration after thirty (30) days
- Backup storage locations align with the regional data isolation policy described in Section 12 of the Principal DPA

### 4. Encryption in Transit

All data transmitted between clients and the Processor's infrastructure is protected using TLS 1.3 with strong cipher suites.

### 5. Access Controls

- Administrative access to production systems requires multi-factor authentication
- Access to cryptographic key material is restricted to essential operational processes
- Personnel with system access are bound by confidentiality obligations per Section 3 of the Principal DPA

### 6. Organizational Measures

- Annual review of cryptographic implementations against current security guidance
- Incident response procedures as described in Section 8 of the Principal DPA
- Regular assessment of subprocessor security practices
- Source code transparency: The core application is published as open-source software, allowing the Company and independent parties to inspect the Processor's data-handling and cryptographic implementations. This provides an additional, verifiable layer of transparency beyond the descriptions in this Schedule.

------------------------------------------------------------------------

## UK GDPR Addendum

This Addendum ("UK Addendum") supplements and forms part of the Data Processing Agreement ("Principal DPA") between Onetime Secret ("Processor") and the Company using the Processor's services ("Controller").

### 1. Purpose and Scope

1.1) This UK Addendum applies to the processing of personal data that is subject to the UK GDPR (as defined below) and supplements the Principal DPA to address specific UK data protection requirements.

1.2) This UK Addendum applies in addition to the Principal DPA and does not replace any term of that agreement except where explicitly stated.

### 2. Definitions

For the purposes of this UK Addendum:

2.1) "*UK GDPR*" means the United Kingdom General Data Protection Regulation, as it forms part of the law of England and Wales, Scotland, and Northern Ireland by virtue of section 3 of the <a href="https://www.legislation.gov.uk/ukpga/2018/16/contents" rel="noreferrer" dir="ltr">European Union (Withdrawal) Act 2018</a> and as amended by the <a href="https://www.legislation.gov.uk/uksi/2019/419/schedule/1" rel="noreferrer" dir="ltr">Data Protection, Privacy and Electronic Communications (Amendments etc.) (EU Exit) Regulations 2019</a>.

2.2) "*Data Protection Act*" means the Data Protection Act 2018.

2.3) "*UK Data Protection Laws*" means the UK GDPR and the Data Protection Act 2018.

2.4) "*ICO*" means the Information Commissioner's Office, the UK's supervisory authority for data protection issues.

2.5) Terms such as "*Controller*", "*Processor*", "*Data Subject*", "*Personal Data*", "*Personal Data Breach*", and "*Processing*" shall have the same meaning as in the UK GDPR when used in this UK Addendum.

### 3. UK-Specific Provisions

3.1) *Supervisory Authority*: For the purposes of the UK GDPR and this UK Addendum, references to "Supervisory Authority" in the Principal DPA shall include the ICO.

3.2) *Data Protection Laws*: References to "EU Data Protection Laws" or "GDPR" in the Principal DPA shall be interpreted to include UK Data Protection Laws where the context requires.

3.3) *UK Data Storage*: All data relating to UK customers is processed and stored exclusively within UK infrastructure, subject to the limited exceptions set out in Section 12.2 of the Principal DPA.

3.4) *UK Representative*: Based on careful assessment of Article 27(2) of the UK GDPR, the Processor has determined that its processing activities qualify for exemption from the requirement to appoint a UK representative due to:

1.  1.  The time-limited nature of processing (data retained for the Backup Retention Period as defined in the Principal DPA);
    2.  The absence of large-scale special category data processing;
    3.  The privacy-enhancing nature of the service which reduces rather than increases risk to data subjects; and
    4.  The minimal personal data retained (limited to account information).

This assessment is documented and to be reviewed annually.

### 4. Priority

In case of any conflict or inconsistency between the provisions of this UK Addendum and the Principal DPA or any other agreement between the parties, the provisions of this UK Addendum shall prevail to the extent of such conflict or inconsistency in relation to the processing of personal data subject to UK Data Protection Laws.

This UK Addendum is effective upon the Company's acceptance of the Principal DPA in accordance with Section 13 of that agreement.

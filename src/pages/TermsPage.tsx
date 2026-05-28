import { LegalLayout, Section, SubSection, P, UL, Divider } from '../components/LegalLayout';

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="27 May 2026">

      <Section title="1. Acceptance of Terms">
        <P>These Terms of Service ("Terms") govern access to and use of Axon, a cloud-based electronic medical records (EMR) platform operated by Virelia Health System (Private) Limited ("Virelia", "we", "us", or "our").</P>
        <P>By registering for, accessing, or using the Service, you agree to be bound by these Terms.</P>
        <P>If you access or use the Service on behalf of a Clinic or other organisation, you represent and warrant that you have authority to bind that organisation to these Terms.</P>
        <P>These Terms should be read together with our <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a> and any applicable Service Agreement or written commercial terms entered into between Virelia and a Clinic.</P>
      </Section>

      <Divider />

      <Section title="2. Definitions">
        <UL>
          <li><strong>Service</strong> — the Axon platform, including related websites, applications, APIs, offline functionality, support services, and associated infrastructure</li>
          <li><strong>Clinic</strong> — a healthcare provider, practice, or healthcare organisation registered to use the Service</li>
          <li><strong>Clinic User</strong> — an individual authorised by a Clinic to access or use the Service</li>
          <li><strong>Patient Data</strong> — medical records, health information, and personal data relating to patients entered into or managed through the Service</li>
          <li><strong>Clinic User Data</strong> — personal data relating to Clinic Users, including account details, authentication information, security logs, and support communications</li>
          <li><strong>Account</strong> — the registered account through which a Clinic accesses the Service</li>
          <li><strong>Applicable Law</strong> — laws and regulations applicable to the parties, including the Cyber and Data Protection Act [Chapter 12:07], related regulations, and applicable healthcare recordkeeping obligations in Zimbabwe</li>
        </UL>
      </Section>

      <Divider />

      <Section title="3. Service Description">
        <P>Axon is a cloud-based EMR and clinic operations platform designed to support healthcare providers with patient registration, appointments, triage, consultations, diagnoses, prescriptions, medical record management, and related administrative functions.</P>
        <P>Certain features may be released in beta, preview, or limited-availability form and may be modified, suspended, or discontinued at any time.</P>
      </Section>

      <Divider />

      <Section title="4. Account Registration, Security, and Access Controls">
        <UL>
          <li>Clinics must provide accurate and current registration information and keep such information updated.</li>
          <li>Each Clinic User must maintain individual login credentials. Shared accounts and credential sharing are prohibited.</li>
          <li>Devices accessing the Service may be registered, monitored, or restricted for authentication and security purposes.</li>
          <li>Clinics are responsible for configuring user permissions and access controls appropriate to their operational and confidentiality requirements.</li>
          <li>Clinics are responsible for promptly disabling access for Clinic Users who no longer require access.</li>
          <li>Clinics must maintain appropriate password, device security, and internal confidentiality procedures.</li>
          <li>You must notify us promptly at <a href="mailto:info@virelia.co.zw" className="text-teal-600 hover:underline">info@virelia.co.zw</a> of any suspected unauthorised access, credential compromise, or security incident affecting the Service.</li>
        </UL>
      </Section>

      <Divider />

      <Section title="5. Acceptable Use">
        <P>You agree to use the Service only for lawful and authorised healthcare and administrative purposes and in compliance with Applicable Law.</P>
        <P>You must not:</P>
        <UL>
          <li>Use the Service for unlawful, fraudulent, or unauthorised purposes</li>
          <li>Attempt to access data belonging to another Clinic</li>
          <li>Share login credentials with unauthorised persons</li>
          <li>Upload, process, or disclose personal data without appropriate authority or lawful basis</li>
          <li>Reverse engineer, copy, modify, or attempt to extract source code from the Service except where expressly permitted by law</li>
          <li>Interfere with the security, integrity, or availability of the Service</li>
          <li>Introduce malware, malicious code, or harmful automated processes into the Service</li>
          <li>Conduct vulnerability scanning, denial-of-service attacks, credential attacks, scraping, or other abusive technical activities against the Service</li>
        </UL>
        <P>We may suspend or restrict access where necessary to investigate suspected misuse, protect the Service, or comply with Applicable Law.</P>
      </Section>

      <Divider />

      <Section title="6. Privacy, Patient Data, and Data Protection Roles">
        <SubSection title="6.1 Clinic as Data Controller; Virelia as Data Processor">
          <P>For Patient Data, the Clinic acts as the data controller and Virelia acts as a data processor, processing Patient Data only on the Clinic's documented instructions, including instructions communicated through the Clinic's use of the Service.</P>
          <P>For Clinic User Data, Virelia may act as a data controller to the extent necessary to operate, secure, maintain, support, and improve the Service.</P>
        </SubSection>

        <SubSection title="6.2 Clinic Responsibilities">
          <P>The Clinic is responsible for:</P>
          <UL>
            <li>Ensuring it has an appropriate lawful basis to collect, use, and process Patient Data</li>
            <li>Obtaining patient consents, notices, or authorisations where required by Applicable Law</li>
            <li>Ensuring only authorised personnel access Patient Data</li>
            <li>Maintaining appropriate confidentiality, access-control, and operational policies</li>
            <li>Ensuring the accuracy and completeness of Patient Data entered into the Service</li>
            <li>Configuring user roles and permissions appropriately</li>
            <li>Determining and complying with regulatory, registration, licensing, and reporting obligations applicable to the Clinic</li>
            <li>Maintaining operational procedures appropriate for continuity of patient care</li>
          </UL>
        </SubSection>

        <SubSection title="6.3 Virelia Responsibilities">
          <P>For Patient Data, Virelia will:</P>
          <UL>
            <li>Process Patient Data solely for purposes necessary to provide, maintain, secure, and support the Service</li>
            <li>Implement reasonable technical, organisational, and administrative safeguards designed to protect Patient Data</li>
            <li>Restrict access to Patient Data to authorised personnel and contractors subject to confidentiality obligations</li>
            <li>Not sell Patient Data</li>
            <li>Provide reasonable assistance to Clinics responding to lawful data subject requests or regulatory inquiries where required by Applicable Law and reasonably related to the Service</li>
            <li>Maintain records and security measures appropriate to our role as processor</li>
          </UL>
          <P>Access to Patient Data by authorised Virelia personnel is limited to operational purposes such as technical support, maintenance, troubleshooting, security monitoring, and legal compliance.</P>
        </SubSection>

        <SubSection title="6.4 Data Protection Officer">
          <P>Virelia maintains responsibility for oversight of its own data protection and privacy obligations.</P>
          <P>Clinics remain responsible for determining whether they are required to appoint their own data protection officer or equivalent role under Applicable Law.</P>
          <P>Nothing in these Terms appoints Virelia as the Clinic's compliance officer, legal representative, or data protection officer.</P>
        </SubSection>

        <SubSection title="6.5 Sub-processors">
          <P>To provide the Service, Virelia may engage third-party infrastructure, hosting, communication, analytics, monitoring, authentication, and support providers ("Sub-processors").</P>
          <P>Virelia will take reasonable steps to ensure Sub-processors handling Patient Data are subject to confidentiality and security obligations appropriate to the nature of the data processed.</P>
        </SubSection>
      </Section>

      <Divider />

      <Section title="7. Cross-border Processing and Hosting">
        <P>The Service may store and process data using infrastructure located outside Zimbabwe, including infrastructure located primarily in the United Kingdom (London) and other jurisdictions where our service providers operate.</P>
        <P>The Clinic authorises such cross-border processing and transfers to the extent reasonably necessary to provide the Service.</P>
        <P>Virelia will implement reasonable contractual, technical, and organisational safeguards designed to protect personal data during such transfers.</P>
      </Section>

      <Divider />

      <Section title="8. Security Incidents and Breach Notification">
        <P>A "Security Incident" means a confirmed or reasonably suspected unauthorised access to, disclosure of, loss of, or compromise of personal data or the confidentiality, integrity, or availability of the Service.</P>
        <P>Where a Security Incident affects Patient Data:</P>
        <UL>
          <li>Virelia will notify the affected Clinic without undue delay after becoming aware of the incident</li>
          <li>Virelia will provide reasonable information and assistance necessary to help the Clinic meet its legal and regulatory obligations</li>
        </UL>
        <P>Clinics remain responsible for determining and fulfilling their own reporting and notification obligations as data controllers unless Applicable Law specifically requires Virelia to notify in a particular context.</P>
        <P>Clinics are responsible for maintaining current administrative and emergency contact information for incident notifications.</P>
      </Section>

      <Divider />

      <Section title="9. Medical Record Integrity and Clinical Responsibility">
        <P>Axon includes safeguards intended to support medical record integrity, including audit trails, encounter locking, and amendment tracking.</P>
        <P>Locked records may not be permanently deleted through ordinary system workflows. Corrections and updates may occur through documented amendment or supplemental record processes.</P>
        <P>The Service is a technology tool intended to support healthcare recordkeeping and clinic administration. The Service does not provide medical advice and does not replace professional medical judgment, legal obligations, or independent clinical verification procedures.</P>
        <P>The Clinic remains solely responsible for:</P>
        <UL>
          <li>Clinical decisions and patient care</li>
          <li>The completeness and accuracy of records</li>
          <li>Compliance with professional and legal obligations</li>
          <li>Maintaining continuity-of-care procedures, including during downtime, outages, offline operation, or connectivity interruptions</li>
        </UL>
      </Section>

      <Divider />

      <Section title="10. Intellectual Property and Data Ownership">
        <P>Virelia and its licensors retain all intellectual property rights in and to the Service, including software, branding, designs, workflows, documentation, and underlying technology.</P>
        <P>Clinics retain ownership of Patient Data and clinical content entered into the Service.</P>
        <P>Subject to these Terms and any applicable Service Agreement, Clinics may request export of their Patient Data in a reasonably accessible format.</P>
        <P>Virelia may generate aggregated and de-identified statistical information derived from use of the Service for analytics, security, operational improvement, and service development purposes, provided such information does not identify Clinics or patients.</P>
      </Section>

      <Divider />

      <Section title="11. Service Availability, Support, and Changes">
        <P>The Service depends on internet connectivity, third-party infrastructure providers, user devices, and supporting systems, all of which may affect availability or performance.</P>
        <P>While we aim to maintain reliable operation, the Service is provided on an "as available" basis and uninterrupted availability is not guaranteed.</P>
        <P>Axon may include offline functionality to support continued operation during temporary connectivity disruptions.</P>
        <P>Support services do not include medical, legal, regulatory, or compliance advisory services.</P>
        <P>We may modify, suspend, update, or discontinue portions of the Service from time to time for operational, security, compliance, maintenance, or product development purposes.</P>
        <P>Clinics are encouraged to maintain operational backup and continuity procedures appropriate to their professional and regulatory obligations.</P>
      </Section>

      <Divider />

      <Section title="12. Fees and Payment">
        <P>The Service may be offered free of charge during promotional, testing, pilot, or pre-launch periods.</P>
        <P>Virelia reserves the right to introduce subscription fees or paid plans in the future upon reasonable prior notice to Clinics.</P>
        <P>Once paid plans are introduced:</P>
        <UL>
          <li>Fees will be billed in accordance with the applicable pricing plan</li>
          <li>Failure to pay applicable fees may result in suspension or restriction of access following reasonable notice</li>
          <li>Continued use of the Service after pricing changes take effect constitutes acceptance of the updated pricing</li>
        </UL>
      </Section>

      <Divider />

      <Section title="13. Data Export, Retention, and Deletion">
        <P>Upon termination of a Clinic's Account and subject to Applicable Law:</P>
        <UL>
          <li>Clinics may request export of Patient Data within 30 days following termination</li>
          <li>Export requests may be subject to reasonable verification, technical limitations, and applicable security procedures</li>
          <li>Following the export period, Virelia may delete, anonymise, archive, or restrict access to Patient Data except where retention is required or permitted by law, regulatory obligation, backup processes, dispute resolution, security purposes, or legal claims</li>
        </UL>
        <P>Backup copies may persist temporarily as part of standard disaster recovery and operational continuity processes.</P>
      </Section>

      <Divider />

      <Section title="14. Disclaimers">
        <P>Except as expressly stated in these Terms, the Service is provided on an "as is" and "as available" basis.</P>
        <P>To the maximum extent permitted by Applicable Law, Virelia disclaims all implied warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability.</P>
        <P>Virelia does not warrant that the Service will be error-free, uninterrupted, or suitable for every clinical workflow or regulatory requirement.</P>
      </Section>

      <Divider />

      <Section title="15. Limitation of Liability">
        <P>To the maximum extent permitted by Applicable Law:</P>
        <UL>
          <li>Virelia is not responsible for clinical decisions, diagnoses, prescriptions, or patient-care outcomes arising from use of the Service</li>
          <li>Virelia is not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, business opportunity, goodwill, or data</li>
          <li>Virelia's total aggregate liability arising out of or relating to the Service shall not exceed the greater of: (a) the total fees paid by the Clinic to Virelia during the 12 months preceding the claim; or (b) US$1,000</li>
        </UL>
        <P>Nothing in these Terms excludes liability for fraud, wilful misconduct, or liability that cannot legally be excluded under Applicable Law.</P>
      </Section>

      <Divider />

      <Section title="16. Indemnification">
        <P>The Clinic agrees to indemnify and hold harmless Virelia, its directors, employees, contractors, and affiliates against claims, liabilities, damages, losses, and expenses arising from:</P>
        <UL>
          <li>The Clinic's misuse of the Service</li>
          <li>Breach of these Terms</li>
          <li>Violation of Applicable Law</li>
          <li>Unauthorised or unlawful processing of Patient Data by the Clinic or its users</li>
        </UL>
      </Section>

      <Divider />

      <Section title="17. Suspension and Termination">
        <P>Either party may terminate the Service relationship upon 30 days' written notice unless otherwise agreed in writing.</P>
        <P>Virelia may suspend or terminate access immediately where reasonably necessary to:</P>
        <UL>
          <li>Protect the security or integrity of the Service</li>
          <li>Prevent unlawful or harmful activity</li>
          <li>Comply with Applicable Law or regulatory obligations</li>
          <li>Address material breaches of these Terms</li>
          <li>Respond to non-payment under applicable paid plans</li>
        </UL>
        <P>Upon termination, access to the Service may be revoked and data handling will proceed in accordance with Section 13.</P>
      </Section>

      <Divider />

      <Section title="18. Force Majeure">
        <P>Neither party shall be liable for delays, failures, or inability to perform caused by circumstances beyond reasonable control, including power outages, internet failures, cyberattacks, labour disputes, natural disasters, acts of government, infrastructure failures, or telecommunications disruptions.</P>
      </Section>

      <Divider />

      <Section title="19. Governing Law">
        <P>These Terms are governed by the laws of Zimbabwe.</P>
        <P>Any disputes arising from or relating to these Terms or the Service shall be subject to the jurisdiction of the courts of Zimbabwe.</P>
      </Section>

      <Divider />

      <Section title="20. Changes to Terms">
        <P>We may update these Terms from time to time.</P>
        <P>Where changes are material, we will provide reasonable notice to Clinics, including notification through the Service or by email.</P>
        <P>Continued use of the Service after updated Terms become effective constitutes acceptance of the revised Terms.</P>
      </Section>

      <Divider />

      <Section title="21. Contact">
        <P>
          Virelia Health System (Private) Limited<br />
          <a href="mailto:info@virelia.co.zw" className="text-teal-600 hover:underline">info@virelia.co.zw</a>
        </P>
      </Section>

    </LegalLayout>
  );
}

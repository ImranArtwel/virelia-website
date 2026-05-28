import { LegalLayout, Section, SubSection, P, UL, Divider } from '../components/LegalLayout';

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="27 May 2026">

      <Section title="1. Introduction">
        <P>
          Virelia Health System ("Virelia", "we", "us", or "our") operates Axon, a cloud-based
          electronic medical records (EMR) platform for healthcare providers ("the Service").
        </P>
        <P>This Privacy Policy explains how we collect, use, store, process, and protect personal information in connection with the Service.</P>
        <P>This policy applies to:</P>
        <UL>
          <li><strong>Clinic Users</strong> — administrators, clinicians, nurses, receptionists, and other authorised personnel accessing Axon on behalf of a registered healthcare provider ("Clinic")</li>
          <li><strong>Patients</strong> — individuals whose medical records are managed by a Clinic using Axon</li>
        </UL>
      </Section>

      <Divider />

      <Section title="2. Who We Are">
        <P>Virelia Health System (Private) Limited<br />info@virelia.co.zw</P>
        <P>For the purposes of this Privacy Policy:</P>
        <UL>
          <li>A <strong>Clinic</strong> means a healthcare provider or organisation registered to use the Service.</li>
          <li>For <strong>Patient Data</strong>, Virelia generally acts as a data processor on behalf of the Clinic, which acts as the data controller.</li>
          <li>For <strong>Clinic User Data</strong> (such as account information, authentication records, billing information, and security logs), Virelia acts as a data controller.</li>
        </UL>
      </Section>

      <Divider />

      <Section title="3. Data Protection Officer">
        <P>Virelia has appointed a person responsible for overseeing data protection and privacy-related matters relating to the Service.</P>
        <P>Clinics are responsible for determining whether they are required to appoint their own data protection officer or equivalent role under applicable laws or professional obligations.</P>
        <P>Privacy-related questions or requests may be directed to: <a href="mailto:info@virelia.co.zw" className="text-teal-600 hover:underline">info@virelia.co.zw</a></P>
      </Section>

      <Divider />

      <Section title="4. Information We Collect">
        <SubSection title="Clinic User Data">
          <P>We may collect:</P>
          <UL>
            <li>Full name, email address, phone number, and professional role</li>
            <li>Authentication and account-related information</li>
            <li>Device and browser metadata used for authentication and security purposes</li>
            <li>Activity and audit logs recording actions performed within the Service</li>
            <li>Support and communication records</li>
          </UL>
          <P>Passwords are securely hashed and managed through our authentication infrastructure and are never visible to us in plain text.</P>
        </SubSection>

        <SubSection title="Patient Data (processed on behalf of Clinics)">
          <P>Clinics may store and manage the following categories of Patient Data through the Service:</P>
          <UL>
            <li>Personal identifiers (such as name, date of birth, gender, contact details, address, and next of kin)</li>
            <li>Medical and healthcare information (including diagnoses, prescriptions, consultation notes, encounter history, vital signs, triage records, and treatment information)</li>
            <li>Appointment and consent records</li>
            <li>Billing and administrative information entered by the Clinic</li>
          </UL>
          <P>Patient Data is processed solely on the Clinic's instructions and for purposes determined by the Clinic.</P>
        </SubSection>

        <SubSection title="Automatically Collected Information">
          <P>We may automatically collect limited technical information such as:</P>
          <UL>
            <li>Browser type and version</li>
            <li>Device metadata</li>
            <li>IP address and access timestamps</li>
            <li>System logs used for security, troubleshooting, and service reliability</li>
          </UL>
        </SubSection>
      </Section>

      <Divider />

      <Section title="5. How We Use Information">
        <SubSection title="Clinic User Data">
          <P>We use Clinic User Data to:</P>
          <UL>
            <li>Provide, maintain, and improve the Service</li>
            <li>Authenticate users and manage account access</li>
            <li>Maintain audit trails and security records</li>
            <li>Respond to support requests</li>
            <li>Detect, prevent, and investigate fraud, abuse, and security incidents</li>
            <li>Communicate important service-related notices</li>
          </UL>
        </SubSection>

        <SubSection title="Patient Data">
          <P>Patient Data is processed solely for the purpose of providing the Service to the relevant Clinic.</P>
          <P>We do not use Patient Data for advertising or unrelated commercial purposes.</P>
          <P>Access to Patient Data by authorised Virelia personnel is limited to operational purposes such as technical support, maintenance, security monitoring, and legal compliance, and is subject to confidentiality obligations.</P>
          <P>Clinics are responsible for obtaining any patient consents, notices, or authorisations required under applicable healthcare and data protection laws in connection with their use of the Service.</P>
        </SubSection>
      </Section>

      <Divider />

      <Section title="6. Legal Basis and Applicable Law">
        <P>We process personal data in accordance with applicable Zimbabwean laws, including the Cyber and Data Protection Act [Chapter 12:07], and apply security and privacy practices aligned with internationally recognised data protection principles where relevant to our infrastructure and operations.</P>

        <SubSection title="Clinic User Data">
          <P>Where Virelia acts as data controller, we may process personal data on the basis of:</P>
          <UL>
            <li>Contractual necessity</li>
            <li>Legitimate interests (including security, fraud prevention, and service reliability)</li>
            <li>Compliance with legal obligations</li>
            <li>Consent, where applicable</li>
          </UL>
        </SubSection>

        <SubSection title="Patient Data">
          <P>Patient Data is processed on behalf of and under the instructions of the relevant Clinic acting as data controller.</P>
        </SubSection>
      </Section>

      <Divider />

      <Section title="7. Data Storage, Security, and Offline Use">
        <SubSection title="Hosting Location">
          <P>Data is stored on secure cloud infrastructure located primarily in the United Kingdom (London). Certain supporting infrastructure and service providers may process limited data in other jurisdictions where necessary to operate the Service securely and reliably.</P>
        </SubSection>

        <SubSection title="Security Measures">
          <P>We implement reasonable administrative, technical, and organisational safeguards designed to protect personal data, including:</P>
          <UL>
            <li>Encryption in transit (TLS)</li>
            <li>Encryption at rest</li>
            <li>Role-based access controls</li>
            <li>Audit logging</li>
            <li>Row-level access controls designed to isolate Clinic data</li>
            <li>Authentication and session management controls</li>
          </UL>
          <P>No system can guarantee absolute security, and Clinics remain responsible for managing authorised access to their accounts and devices.</P>
        </SubSection>

        <SubSection title="Offline-first Operation">
          <P>Axon supports offline-first functionality. Certain information may be temporarily stored locally on a user's device or browser storage to enable continued operation while offline. Such locally stored data remains under the Clinic's control and may sync with our servers once connectivity is restored.</P>
          <P>Clinics are responsible for implementing appropriate device-level security controls, including password protection and access management.</P>
        </SubSection>
      </Section>

      <Divider />

      <Section title="8. Cross-border Data Transfers">
        <P>Because our infrastructure and service providers may operate outside Zimbabwe, personal data (including Patient Data) may be transferred to and processed in the United Kingdom and other jurisdictions where our providers operate.</P>
        <P>We implement reasonable contractual, organisational, and technical safeguards designed to protect personal data during such transfers.</P>
        <P>For Patient Data, cross-border processing and transfers occur on the Clinic's instructions and as necessary to provide the Service.</P>
      </Section>

      <Divider />

      <Section title="9. Data Sharing and Sub-processors">
        <P>We do not sell personal data.</P>
        <P>We may share personal data only in the following circumstances:</P>
        <UL>
          <li>With trusted infrastructure, hosting, analytics, monitoring, communication, and support providers operating under confidentiality and data processing obligations</li>
          <li>Where required by law, lawful court order, or competent regulatory authority</li>
          <li>In connection with a merger, acquisition, restructuring, or sale of assets, subject where appropriate to confidentiality protections</li>
        </UL>
        <P>Patient Data is logically isolated between Clinics, and Clinics cannot access each other's data.</P>
      </Section>

      <Divider />

      <Section title="10. Security Incidents and Breach Notification">
        <P>A "Security Incident" means a confirmed or reasonably suspected unauthorised access to, disclosure of, loss of, or compromise of personal data or the confidentiality, integrity, or availability of the Service.</P>
        <P>Where a Security Incident affects Patient Data:</P>
        <UL>
          <li>We will notify the affected Clinic without undue delay after becoming aware of the incident</li>
          <li>We will provide reasonable information and assistance necessary to help the Clinic meet its legal and regulatory obligations</li>
        </UL>
        <P>For Clinic User Data where Virelia acts as data controller, we will manage notifications and reporting obligations in accordance with applicable law.</P>
      </Section>

      <Divider />

      <Section title="11. Data Retention">
        <P>Clinics are responsible for determining retention periods applicable to their practice and legal obligations.</P>
        <P>Unless otherwise instructed by the Clinic or required by law:</P>
        <UL>
          <li>Patient Data may be retained for operational, backup, legal, compliance, and continuity purposes</li>
          <li>Clinic User accounts may be deleted or anonymised within a reasonable period following account closure</li>
          <li>Audit and security logs may be retained for security, compliance, and operational purposes</li>
        </UL>
        <P>Backup copies may persist temporarily after deletion as part of standard disaster recovery processes.</P>
      </Section>

      <Divider />

      <Section title="12. Your Rights">
        <SubSection title="Clinic Users">
          <P>Clinic Users may have rights under applicable law to request access to, correction of, deletion of, or export of their personal data. Requests may be directed to <a href="mailto:info@virelia.co.zw" className="text-teal-600 hover:underline">info@virelia.co.zw</a>.</P>
        </SubSection>

        <SubSection title="Patients">
          <P>Patients should direct privacy or medical record requests to the Clinic responsible for their care, as the Clinic acts as data controller for Patient Data.</P>
          <P>Virelia will reasonably assist Clinics in responding to such requests where required and upon lawful instruction.</P>
        </SubSection>
      </Section>

      <Divider />

      <Section title="13. Children's Data">
        <P>Patient Data processed through the Service may include information relating to minors where entered by a Clinic in connection with healthcare services.</P>
        <P>Such data is processed solely on the instructions of the relevant Clinic acting as data controller.</P>
      </Section>

      <Divider />

      <Section title="14. Cookies">
        <P>Axon uses essential session and authentication cookies necessary for operation of the Service.</P>
        <P>We do not use advertising cookies or third-party behavioural tracking technologies.</P>
      </Section>

      <Divider />

      <Section title="15. Changes to This Privacy Policy">
        <P>We may update this Privacy Policy from time to time.</P>
        <P>Where appropriate, material changes will be communicated through the Service or by other reasonable means.</P>
      </Section>

      <Divider />

      <Section title="16. Contact Us">
        <P>Questions regarding this Privacy Policy or privacy-related requests may be directed to:</P>
        <P>
          Virelia Health System (Private) Limited<br />
          <a href="mailto:info@virelia.co.zw" className="text-teal-600 hover:underline">info@virelia.co.zw</a>
        </P>
      </Section>

    </LegalLayout>
  );
}

import { ArticleLayout, H2, P, UL } from '../../components/ArticleLayout';

export function EmrVsPaperPage() {
  return (
    <ArticleLayout
      path="/guides/emr-vs-paper-records-zimbabwe"
      title="EMR vs paper records: what changes for a clinic"
      intro="Many clinics in Zimbabwe still run on files, registers and carbon copies. Paper works until it doesn't: a file goes missing, a prescription can't be read, or month-end takes three days. This guide compares the two honestly."
    >
      <H2>Where paper records struggle</H2>
      <UL>
        <li><strong>Finding a file:</strong> a returning patient waits while someone searches the shelves, and misfiled records are effectively lost.</li>
        <li><strong>One copy:</strong> a paper file can only be in one room at a time. Reception, the nurse and the doctor wait for it in turn.</li>
        <li><strong>Handwriting:</strong> unreadable notes and prescriptions cause errors and repeat questions.</li>
        <li><strong>No history of changes:</strong> it is hard to know who wrote what, or whether a page was altered.</li>
        <li><strong>Reporting:</strong> counting patients, diagnoses or revenue means going through files by hand.</li>
        <li><strong>Loss:</strong> fire, water, theft and pests can destroy years of records with no backup.</li>
      </UL>

      <H2>What an EMR changes</H2>
      <UL>
        <li>Search finds a patient in seconds, and everyone sees the same current record.</li>
        <li>Vitals, diagnosis and prescription are typed, so they are legible and stay together.</li>
        <li>Every change is logged with the person and the time.</li>
        <li>Appointments, queue and billing come from the same data, so numbers agree.</li>
        <li>Records are backed up, so a damaged computer does not mean lost history.</li>
      </UL>

      <H2>The fair objections</H2>
      <P>
        <strong>"Our internet and power are unreliable."</strong> This is the most common concern and it is valid for
        cloud-only systems. An offline-first EMR such as Axon saves on the device first and syncs later, so a cut does not stop the clinic.
        See <a href="/guides/offline-emr-zimbabwe" className="text-teal-600 hover:underline">offline EMR for Zimbabwe</a>.
      </P>
      <P>
        <strong>"My staff won't adapt."</strong> Keep the first week simple. Start with registration and appointments,
        then add triage and consultations. A system that follows the existing paper flow is learned faster than one that changes it.
      </P>
      <P>
        <strong>"Is patient data safe?"</strong> Look for role-based access, an audit log, and clear data-protection terms.
        Patient information is sensitive and falls under the Cyber and Data Protection Act. Axon&apos;s approach is described in its{' '}
        <a href="/privacy" className="text-teal-600 hover:underline">privacy policy</a>.
      </P>

      <H2>A practical way to switch</H2>
      <UL>
        <li>Do not back-enter every old file. Create a record when a patient next visits and add the key history then.</li>
        <li>Keep paper for a short overlap period, then retire it once staff are comfortable.</li>
        <li>Name one person to own the rollout so questions have a single answer.</li>
      </UL>
    </ArticleLayout>
  );
}

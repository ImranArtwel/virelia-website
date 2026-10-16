import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

const APP_URL = 'https://axon.virelia.co.zw';

const modules = [
  ['Patient registration', 'One record per patient, fast search, and consent captured at registration.'],
  ['Appointments and check-in', 'Book, reschedule and check patients in from reception.'],
  ['Nurse triage', 'Capture vital signs and prioritise the queue before the doctor sees the patient.'],
  ['Consultations and prescriptions', 'Clinicians record diagnoses and issue prescriptions in the same record.'],
  ['Billing and invoicing', 'Invoices tied to the visit, so nothing gets missed at the desk.'],
  ['Audit trail', 'Every change is logged. Locked encounters are amended, never overwritten.'],
];

const faqs = [
  [
    'What is a hospital management system?',
    'A hospital management system (HMS) is software that runs the daily work of a facility: registering patients, scheduling, clinical notes, prescriptions, billing and reporting. An EMR (electronic medical record) is the clinical core of it. Axon covers both, sized for clinics and small hospitals.',
  ],
  [
    'Does Axon work when the internet is down?',
    'Yes. Axon is offline-first. Staff keep working during outages and the data syncs automatically when the connection returns.',
  ],
  [
    'Is Axon built for Zimbabwe?',
    'Yes. It is built by Virelia Health Systems for Zimbabwean facilities, with data protection aligned to the Cyber and Data Protection Act.',
  ],
  [
    'How much does it cost?',
    'Pricing is per clinician. Nurses, receptionists, lab technicians and admins are included free. There is a 90-day free trial with no credit card.',
  ],
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export function HospitalManagementSystemPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="pt-16 pb-12 sm:pt-20 px-4 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Hospital and clinic management system for Zimbabwe
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Axon is an electronic medical records (EMR / EHR) and management system for clinics and
              small hospitals in Zimbabwe. Registration, triage, consultations, prescriptions and billing
              in one place, and it keeps working offline.
            </p>
            <a
              href={APP_URL}
              className="inline-block mt-8 px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Start your 90-day free trial
            </a>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What the system covers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {modules.map(([title, body]) => (
                <div key={title} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why offline-first matters in Zimbabwe</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Power cuts and unreliable connectivity are part of daily life. Cloud-only systems stop when
              the internet does. Axon saves every entry on the device first and syncs in the background, so
              reception, nurses and doctors never wait on a connection.
            </p>
            <p className="text-slate-600 leading-relaxed">
              It runs in a web browser on the computers you already have. No servers to maintain and no IT
              team required. See <a href="/pricing" className="text-teal-600 hover:underline">pricing</a> for plans.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
            <dl className="space-y-6">
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <dt className="font-semibold text-slate-900">{q}</dt>
                  <dd className="mt-1.5 text-slate-600 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section className="pb-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/clinic-management-software-zimbabwe" className="text-teal-600 hover:underline">Clinic management software for Zimbabwe</a></li>
              <li><a href="/emr-vs-paper-records-zimbabwe" className="text-teal-600 hover:underline">EMR vs paper records: what changes for a clinic</a></li>
              <li><a href="/offline-emr-zimbabwe" className="text-teal-600 hover:underline">Offline EMR for clinics with power cuts and weak internet</a></li>
            </ul>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

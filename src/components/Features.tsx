import { Users, CalendarCheck, Stethoscope, Receipt, WifiOff, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Users,
    title: 'Electronic health records',
    description: 'Register patients once. Search electronic health records by name, national ID, or phone number in seconds — from any device.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointments & triage',
    description: 'Schedule walk-ins and booked appointments. Nurses see the live queue and capture vitals before the doctor.',
  },
  {
    icon: Stethoscope,
    title: 'Consultations & prescriptions',
    description: 'Doctors write notes, diagnoses, and prescriptions directly into the EMR — structured, signed off, and locked from editing.',
  },
  {
    icon: Receipt,
    title: 'Billing & invoices',
    description: 'Generate itemised invoices against a fee schedule. Track what\'s paid and what\'s outstanding.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    description: 'No internet? No problem. Axon keeps working and syncs automatically when the connection returns.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & compliance',
    description: 'Every change to the health record is logged. Export a full archive anytime for compliance, audits, or migration to another system.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Everything your clinic needs, in one EMR</h2>
          <p className="mt-3 text-slate-500">From patient check-in to invoice — one health tech platform.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 hover:border-teal-200 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

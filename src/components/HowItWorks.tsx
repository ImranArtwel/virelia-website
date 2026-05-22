const STEPS = [
  {
    number: '01',
    title: 'Register your clinic',
    description: 'Create your account, set up your fee schedule, and invite your staff. Takes about 5 minutes.',
  },
  {
    number: '02',
    title: 'Add your patients and staff',
    description: 'Import existing patient lists or register patients as they walk in. Each staff member gets their own role-based login.',
  },
  {
    number: '03',
    title: 'Run your clinic',
    description: 'Receptionists check patients in, nurses capture vitals, doctors write consultations, and billing follows automatically.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Up and running in a day</h2>
          <p className="mt-3 text-slate-500">No installation. No IT support needed. Just a browser.</p>
        </div>
        <div className="space-y-6">
          {STEPS.map(({ number, title, description }) => (
            <div key={number} className="flex items-start gap-6 bg-white rounded-xl border border-slate-200 p-6">
              <span className="text-3xl font-bold text-teal-100 flex-shrink-0 leading-none">{number}</span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

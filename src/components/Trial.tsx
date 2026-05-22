const APP_URL = 'https://axon.virelia.co.zw';

export function Trial() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Try Axon free for 30 days</h2>
        <p className="mt-4 text-slate-500 leading-relaxed">
          Full access to every feature. No credit card required. If you choose not to continue,
          you get a complete export of all your clinic data.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-slate-600 text-left max-w-xs mx-auto">
          {[
            'Unlimited patients and appointments',
            'All staff roles included',
            'Billing and invoices',
            'Offline access on any device',
            'Full data export at any time',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-teal-500 font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href={APP_URL}
          className="inline-block mt-8 px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
        >
          Get started — it's free
        </a>
        <p className="mt-3 text-xs text-slate-400">No credit card · Cancel anytime</p>
      </div>
    </section>
  );
}

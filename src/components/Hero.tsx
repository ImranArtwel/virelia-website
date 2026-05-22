const APP_URL = 'https://axon.virelia.co.zw';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          Built for private clinics in Zimbabwe
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Run your clinic<br className="hidden sm:block" /> without the paperwork
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Axon is a simple, offline-ready EMR and clinic management system — electronic health
          records, appointments, triage, billing, and prescriptions in one place. No IT team required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_URL}
            className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-base shadow-sm"
          >
            Start free trial
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-base"
          >
            Request a demo
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">No credit card required · Full access for 30 days</p>
      </div>
    </section>
  );
}

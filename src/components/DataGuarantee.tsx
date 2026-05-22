import { Download, Lock } from 'lucide-react';

export function DataGuarantee() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-teal-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your data, always</h2>
          <p className="text-teal-100 leading-relaxed max-w-xl mx-auto mb-6">
            If you ever decide to leave Axon, your data leaves with you. We'll give you a
            complete export of everything — patients, appointments, records, invoices, and
            audit history — in standard CSV format that any system can read.
          </p>
          <p className="text-teal-200 leading-relaxed max-w-xl mx-auto mb-8 text-sm">
            No lock-in. No ransoming your own records. It's your data.
          </p>
          <div className="inline-flex items-center gap-2 bg-teal-500/50 rounded-lg px-4 py-2.5 text-sm font-medium">
            <Download className="w-4 h-4" />
            Full export included in every plan, anytime
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

interface Tier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  seats: string;
  cta: string;
  featured: boolean;
  badge?: string;
  features: string[];
}

const tiers: Tier[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    monthlyPrice: 50,
    annualPrice: 450,
    description: 'For solo GPs replacing paper folders.',
    seats: 'Up to 2 clinicians',
    cta: 'Start free trial',
    featured: false,
    features: [
      'Patient registration & appointments',
      'Triage + vital signs (BMI)',
      'Consultations, ICD-10, prescriptions',
      'Encounter locking & amendment trail',
      'Sick notes',
      'Multi-currency billing & daily reconciliation (USD + ZiG)',
      'Fee schedule & invoicing',
      'Diagnosis reports',
      'Data export',
      'Audit log',
      'Offline-first sync',
    ],
  },
  {
    id: 'clinic',
    name: 'Clinic',
    monthlyPrice: 90,
    annualPrice: 810,
    description: 'For established practices needing clinical depth.',
    seats: 'Up to 5 clinicians',
    cta: 'Start free trial',
    featured: true,
    badge: 'Most popular',
    features: [
      'Everything in Essentials',
      'Lab orders & results',
      'Inventory & stock tracking',
      'Expense tracking',
      'Device management',
      'Revenue analytics',
      'Inter-clinic patient sharing',
    ],
  },
  {
    id: 'practice',
    name: 'Practice',
    monthlyPrice: 150,
    annualPrice: 1350,
    description: 'For busy clinics that want consultations captured, not just typed.',
    seats: 'Unlimited clinicians',
    cta: 'Start free trial',
    featured: false,
    features: [
      'Everything in Clinic',
      'Consultation recording + AI transcription',
      'Priority support (4hr response)',
      'Dedicated WhatsApp support',
    ],
  },
];

function PriceDisplay({ tier, annual }: { tier: Tier; annual: boolean }) {
  if (annual) {
    const saving = tier.monthlyPrice * 3;
    return (
      <div className="mt-5">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-slate-900">${tier.annualPrice}</span>
          <span className="text-sm text-slate-400 mb-1.5 ml-0.5">/ clinician / yr</span>
        </div>
        <p className="mt-1 text-xs font-medium text-teal-600">
          Save ${saving} vs monthly billing
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">${tier.monthlyPrice}</span>
        <span className="text-sm text-slate-400 mb-1.5 ml-0.5">/ clinician / mo</span>
      </div>
    </div>
  );
}

export function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Header */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-14 px-4 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full mb-4">
              Pricing
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Simple, per-clinician pricing
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              Pay only for clinicians. Nurses, receptionists, lab techs, and admins are
              always included free.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center bg-slate-100 rounded-xl p-1.5 gap-1">
              <button
                type="button"
                aria-pressed={!annual}
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
                  !annual
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={annual}
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                  annual
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Annual
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-md">
                  3 months free
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    tier.featured
                      ? 'border-teal-500 shadow-xl shadow-teal-100/60'
                      : 'border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full whitespace-nowrap shadow-sm">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={tier.badge ? 'pt-2' : ''}>
                    <h2 className="text-base font-semibold text-slate-900">{tier.name}</h2>
                    <p className="mt-1 text-sm text-slate-500 leading-snug">{tier.description}</p>
                  </div>

                  <PriceDisplay tier={tier} annual={annual} />

                  <p className="mt-2 text-xs font-medium text-slate-400 uppercase tracking-wide">
                    {tier.seats}
                  </p>

                  <a
                    href="/#contact"
                    className={`mt-5 block w-full text-center py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                      tier.featured
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'border border-teal-500 text-teal-700 hover:bg-teal-50'
                    }`}
                  >
                    {tier.cta}
                  </a>

                  <ul className="mt-6 space-y-2.5 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.featured ? 'text-teal-500' : 'text-slate-400'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              All prices in USD. Annual billing invoiced upfront.
            </p>
            <p className="mt-3 text-center text-sm text-slate-500">
              Running multiple branches, or need something outside these plans?{' '}
              <a href="/#contact" className="font-medium text-teal-600 hover:text-teal-700">
                Contact us
              </a>{' '}
              and we'll figure out terms together.
            </p>
          </div>
        </section>

        {/* What's always included */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-8">
              What's always included
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'Support staff are free',
                  body:
                    'Nurses, receptionists, lab techs, and admins are included at no extra charge on every plan.',
                },
                {
                  title: '90-day free trial',
                  body:
                    'Full access to every feature. No credit card required. Cancel at any time with no penalty.',
                },
                {
                  title: 'Your data, always',
                  body:
                    'Complete export of all patient and billing records at any time — even if you stop using Axon.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-8">
              Common questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: 'What counts as a clinician seat?',
                  a: 'Only doctors, clinical officers, and nurses who create clinical records (consultations, prescriptions, lab orders). Receptionists, admins, and non-clinical staff are free and unlimited.',
                },
                {
                  q: 'Can I change plans later?',
                  a: 'Yes. Upgrade or downgrade at any time. When upgrading you get immediate access; when downgrading the change takes effect at the start of the next billing period.',
                },
                {
                  q: 'What happens if I go over my clinician limit?',
                  a: "You'll see an upgrade prompt before a new clinician account can be created. Existing clinician accounts are never blocked — only new additions require a plan upgrade.",
                },
                {
                  q: 'How does annual billing work?',
                  a: "Annual plans are invoiced upfront at 9× the monthly rate — you get 12 months of access for the price of 9. We'll send a renewal reminder 30 days before your anniversary date.",
                },
                {
                  q: 'Do you offer a discount for larger practices?',
                  a: "The per-clinician rate doesn't change based on volume — our pricing is already designed to scale. For very large deployments or multiple branches, reach out and we'll work out custom terms.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-slate-100 pb-5">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{q}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-teal-50">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Start your free trial today
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              90 days of full access. No credit card required.
            </p>
            <a
              href="/#contact"
              className="inline-block mt-6 px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
            >
              Request free trial
            </a>
            <p className="mt-3 text-xs text-slate-400">
              No credit card · Cancel anytime · Full data export
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

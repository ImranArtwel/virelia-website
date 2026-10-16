import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { guides } from '../../components/guides';

const summaries: Record<string, string> = {
  '/guides/clinic-management-software-zimbabwe':
    'What clinic software should cover, and the questions to ask before you choose.',
  '/guides/emr-vs-paper-records-zimbabwe':
    'Where paper records struggle, what an EMR changes, and how to switch without disruption.',
  '/guides/offline-emr-zimbabwe':
    'How offline-first software keeps a clinic running through power cuts and weak internet.',
  '/hospital-management-system-zimbabwe':
    'An overview of Axon as a hospital and clinic management system.',
};

export function GuidesIndexPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Guides for Zimbabwe clinics
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Practical guides on electronic medical records, clinic software and running a clinic with
            fewer headaches.
          </p>
          <ul className="mt-10 space-y-5">
            {guides.map((g) => (
              <li key={g.path} className="border border-slate-200 rounded-xl p-5">
                <a href={g.path} className="font-semibold text-teal-700 hover:underline">{g.title}</a>
                <p className="mt-1.5 text-sm text-slate-600">{summaries[g.path]}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

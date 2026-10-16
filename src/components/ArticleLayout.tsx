import type { ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { guides } from './guides';

const APP_URL = 'https://axon.virelia.co.zw';

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-10 mb-3">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-4">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4 leading-relaxed">{children}</ul>;
}

interface Props {
  path: string;
  title: string;
  intro: string;
  children: ReactNode;
}

export function ArticleLayout({ path, title, intro, children }: Props) {
  const related = guides.filter((g) => g.path !== path);
  return (
    <>
      <Nav />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">{title}</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">{intro}</p>
          {children}
          <div className="mt-12 rounded-xl bg-teal-50 border border-teal-100 p-6 text-center">
            <p className="font-semibold text-slate-900">Try Axon free for 90 days</p>
            <p className="mt-1 text-sm text-slate-600">No credit card. Full access. Offline-ready.</p>
            <a
              href={APP_URL}
              className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Start free trial
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Or <a href="/#contact" className="text-teal-600 hover:underline">request a demo</a> · <a href="/pricing" className="text-teal-600 hover:underline">see pricing</a>
            </p>
          </div>
          <nav aria-label="Related guides" className="mt-10">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Related guides</h2>
            <ul className="space-y-2 text-sm">
              {related.map((g) => (
                <li key={g.path}>
                  <a href={g.path} className="text-teal-600 hover:underline">{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}

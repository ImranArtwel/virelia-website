import type { ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

interface Props {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-semibold text-slate-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-3 text-sm">{children}</p>;
}

function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc pl-5 text-slate-600 space-y-1.5 mb-3 text-sm">
      {children}
    </ul>
  );
}

function Divider() {
  return <hr className="border-t border-slate-100 my-8" />;
}

export { Section, SubSection, P, UL, Divider };

export function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{title}</h1>
          <p className="text-xs text-slate-400">Last updated: {lastUpdated}</p>
        </div>
        <div className="space-y-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

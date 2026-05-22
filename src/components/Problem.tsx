const PAINS = [
  { emoji: '📋', text: 'Paper files go missing — no way to pull up a patient\'s history fast' },
  { emoji: '🕐', text: 'No visibility into who\'s waiting and how long they\'ve been there' },
  { emoji: '💸', text: 'End-of-month billing is hours of manual work with gaps and errors' },
];

export function Problem() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Running a clinic shouldn't mean drowning in admin
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Most private clinics in Zimbabwe are still managing everything on paper or across a
            patchwork of tools. There's a better way.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {PAINS.map(({ emoji, text }) => (
            <div key={text} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{emoji}</span>
              <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

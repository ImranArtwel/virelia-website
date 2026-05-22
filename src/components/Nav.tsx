import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const APP_URL = 'https://axon.virelia.co.zw';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-teal-600 font-bold text-xl tracking-tight">Axon</span>
          <span className="hidden sm:inline text-xs text-slate-400 font-medium border border-slate-200 rounded px-1.5 py-0.5">by Virelia</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          <a href={APP_URL} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Sign in</a>
          <a
            href={APP_URL}
            className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setOpen(false)} className="block text-sm text-slate-700 py-1">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-sm text-slate-700 py-1">How it works</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-slate-700 py-1">Contact</a>
          <a href={APP_URL} className="block text-sm text-slate-700 py-1">Sign in</a>
          <a
            href={APP_URL}
            className="block w-full text-center px-4 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Start free trial
          </a>
        </div>
      )}
    </nav>
  );
}

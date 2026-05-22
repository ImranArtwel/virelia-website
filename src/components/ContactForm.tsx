import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

// Create a free form at https://formspree.io and paste the endpoint here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', clinic: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-12 h-12 text-teal-500 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900">Thanks — we'll be in touch within 24 hours.</h3>
        <p className="mt-2 text-sm text-slate-500">In the meantime, feel free to start your free trial.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Request a demo</h2>
          <p className="mt-3 text-slate-500">
            We'll walk you through Axon and answer any questions about your clinic's setup.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Dr. Moyo"
              />
            </div>
            <div>
              <label htmlFor="clinic" className="block text-sm font-medium text-slate-700 mb-1">Clinic name</label>
              <input
                id="clinic"
                name="clinic"
                type="text"
                required
                value={form.clinic}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Sunshine Medical Centre"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="+263 77 123 4567"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="you@clinic.co.zw"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Anything you'd like us to know? <span className="text-slate-400 font-normal">(optional)</span></label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              placeholder="Number of doctors, how you currently manage records, etc."
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600">Something went wrong — please try again or email us directly.</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:opacity-60 transition-colors"
          >
            <Send className="w-4 h-4" />
            {status === 'submitting' ? 'Sending…' : 'Send request'}
          </button>
        </form>
      </div>
    </section>
  );
}

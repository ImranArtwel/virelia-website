const APP_URL = "https://axon.virelia.co.zw";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-700">Axon</span>
          <span className="text-slate-300">·</span>
          <span>by Virelia</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={APP_URL} className="hover:text-slate-800 transition-colors">
            Sign in
          </a>
          <a href="#contact" className="hover:text-slate-800 transition-colors">
            Contact
          </a>
          <a
            href="mailto:info@virelia.co.zw"
            className="hover:text-slate-800 transition-colors"
          >
            info@virelia.co.zw
          </a>
        </div>
        <p>© {new Date().getFullYear()} Virelia</p>
      </div>
    </footer>
  );
}

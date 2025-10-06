export default function BlueFooter() {
  return (
    <footer id="about" className="mt-12 border-t-4 border-slate-900/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-800 font-bold tracking-tight">
          © {new Date().getFullYear()} Blue Brutalism. All rights reserved.
        </p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#hero" className="px-3 py-2 border-4 border-slate-900/10 bg-white text-blue-900 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">Back to top</a>
          <a href="#palette" className="px-3 py-2 border-4 border-slate-900/10 bg-blue-500 text-white font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">Palette</a>
        </div>
      </div>
    </footer>
  );
}

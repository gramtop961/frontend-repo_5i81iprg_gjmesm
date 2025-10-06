import { Droplet } from 'lucide-react';

export default function BlueHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b-4 border-slate-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white border-4 border-slate-900/10 shadow-[6px_6px_0_0_rgba(2,6,23,0.15)]">
            <Droplet className="w-5 h-5" />
          </span>
          <span className="font-extrabold tracking-tight text-blue-800 text-lg">Blue Brutalism</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <a href="#hero" className="px-3 py-2 border-4 border-slate-900/10 bg-white hover:-translate-y-0.5 transition transform shadow-[6px_6px_0_0_rgba(2,6,23,0.15)]">Home</a>
          <a href="#palette" className="px-3 py-2 border-4 border-slate-900/10 bg-white hover:-translate-y-0.5 transition transform shadow-[6px_6px_0_0_rgba(2,6,23,0.15)]">Palette</a>
          <a href="#about" className="px-3 py-2 border-4 border-slate-900/10 bg-white hover:-translate-y-0.5 transition transform shadow-[6px_6px_0_0_rgba(2,6,23,0.15)]">About</a>
        </nav>
        <a
          href="#palette"
          className="inline-flex items-center gap-2 rounded-none border-4 border-slate-900/10 bg-blue-500 px-3 py-2 text-sm font-bold text-white shadow-[6px_6px_0_0_rgba(2,6,23,0.15)] active:translate-y-0.5 active:translate-x-0.5 transition"
        >
          Explore Blue
        </a>
      </div>
    </header>
  );
}

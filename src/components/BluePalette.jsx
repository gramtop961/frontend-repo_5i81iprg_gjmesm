function Swatch({ name, classes }) {
  return (
    <div className="group rounded-none border-4 border-slate-900/10 overflow-hidden bg-white shadow-[8px_8px_0_0_rgba(2,6,23,0.18)]">
      <div className={`h-20 ${classes.bg}`} />
      <div className="p-3 flex items-center justify-between">
        <span className="text-sm font-extrabold text-blue-900 tracking-tight">{name}</span>
        <span className={`text-[10px] px-2 py-1 tracking-wider uppercase ${classes.text} ${classes.badgeBg} border-4 ${classes.border}`}>
          {classes.hex}
        </span>
      </div>
    </div>
  );
}

export default function BluePalette() {
  const swatches = [
    {
      name: 'Primary Blue',
      classes: {
        bg: 'bg-gradient-to-br from-blue-500 to-sky-600',
        text: 'text-white',
        badgeBg: 'bg-blue-600',
        border: 'border-slate-900/10',
        hex: '#3B82F6',
      },
    },
    {
      name: 'Light Blue',
      classes: {
        bg: 'bg-blue-100',
        text: 'text-blue-900',
        badgeBg: 'bg-blue-100',
        border: 'border-slate-900/10',
        hex: '#DBEAFE',
      },
    },
    {
      name: 'Sky',
      classes: {
        bg: 'bg-sky-200',
        text: 'text-sky-900',
        badgeBg: 'bg-sky-100',
        border: 'border-slate-900/10',
        hex: '#BAE6FD',
      },
    },
    {
      name: 'Indigo',
      classes: {
        bg: 'bg-indigo-600',
        text: 'text-white',
        badgeBg: 'bg-indigo-600',
        border: 'border-slate-900/10',
        hex: '#4F46E5',
      },
    },
    {
      name: 'Cyan',
      classes: {
        bg: 'bg-cyan-500',
        text: 'text-white',
        badgeBg: 'bg-cyan-500',
        border: 'border-slate-900/10',
        hex: '#06B6D4',
      },
    },
    {
      name: 'Deep Blue',
      classes: {
        bg: 'bg-blue-900',
        text: 'text-white',
        badgeBg: 'bg-blue-900',
        border: 'border-slate-900/10',
        hex: '#1E3A8A',
      },
    },
  ];

  return (
    <section id="palette" className="py-10 sm:py-14">
      <div className="mb-6">
        <h2 className="inline-block text-3xl sm:text-4xl font-black text-blue-900 bg-white border-4 border-slate-900/10 px-4 py-2 shadow-[8px_8px_0_0_rgba(2,6,23,0.18)]">
          Blue Palette
        </h2>
        <p className="mt-3 text-blue-800 max-w-2xl">
          Neo brutalist tiles with bold borders and unapologetic contrast.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {swatches.map((s) => (
          <Swatch key={s.name} name={s.name} classes={s.classes} />
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="border-4 border-slate-900/10 p-6 bg-white shadow-[10px_10px_0_0_rgba(2,6,23,0.2)]">
          <h3 className="font-extrabold text-blue-900 text-lg">Usage</h3>
          <p className="mt-2 text-sm text-blue-800">
            Light blues for surfaces, punchy blues for CTAs, deep blues for structure and emphasis.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-blue-100 text-blue-900 text-xs font-bold">Background</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-sky-100 text-sky-900 text-xs font-bold">Surface</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-blue-600 text-white text-xs font-bold">Action</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-blue-900 text-white text-xs font-bold">Accent</span>
          </div>
        </div>

        <div className="relative overflow-hidden border-4 border-slate-900/10 bg-white shadow-[10px_10px_0_0_rgba(2,6,23,0.2)]">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-indigo-600/10" />
          <div className="relative p-6">
            <h3 className="font-extrabold text-blue-900 text-lg">Accessibility</h3>
            <p className="mt-2 text-sm text-blue-800">
              Pair deep blues with white and keep borders chunky for clear affordances.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="w-full border-4 border-slate-900/10 bg-blue-600 text-white px-4 py-2 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] active:translate-y-0.5 active:translate-x-0.5 transition">Primary</button>
              <button className="w-full border-4 border-slate-900/10 bg-white text-blue-900 px-4 py-2 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">Secondary</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

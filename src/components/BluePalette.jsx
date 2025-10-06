function Swatch({ name, classes }) {
  return (
    <div className="group rounded-none border-4 border-slate-900/10 overflow-hidden bg-white shadow-[8px_8px_0_0_rgba(2,6,23,0.18)]">
      <div className={`h-20 ${classes.bg}`} />
      <div className="p-3 flex items-center justify-between">
        <span className="text-sm font-extrabold text-red-900 tracking-tight">{name}</span>
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
      name: 'Primary Red',
      classes: {
        bg: 'bg-gradient-to-br from-red-500 to-rose-600',
        text: 'text-white',
        badgeBg: 'bg-red-600',
        border: 'border-slate-900/10',
        hex: '#EF4444',
      },
    },
    {
      name: 'Light Red',
      classes: {
        bg: 'bg-rose-100',
        text: 'text-red-900',
        badgeBg: 'bg-rose-100',
        border: 'border-slate-900/10',
        hex: '#FFE4E6',
      },
    },
    {
      name: 'Rose',
      classes: {
        bg: 'bg-rose-200',
        text: 'text-rose-900',
        badgeBg: 'bg-rose-100',
        border: 'border-slate-900/10',
        hex: '#FECDD3',
      },
    },
    {
      name: 'Crimson',
      classes: {
        bg: 'bg-rose-600',
        text: 'text-white',
        badgeBg: 'bg-rose-600',
        border: 'border-slate-900/10',
        hex: '#E11D48',
      },
    },
    {
      name: 'Orange Red',
      classes: {
        bg: 'bg-orange-500',
        text: 'text-white',
        badgeBg: 'bg-orange-500',
        border: 'border-slate-900/10',
        hex: '#F97316',
      },
    },
    {
      name: 'Deep Red',
      classes: {
        bg: 'bg-red-900',
        text: 'text-white',
        badgeBg: 'bg-red-900',
        border: 'border-slate-900/10',
        hex: '#7F1D1D',
      },
    },
  ];

  return (
    <section id="palette" className="py-10 sm:py-14">
      <div className="mb-6">
        <h2 className="inline-block text-3xl sm:text-4xl font-black text-red-900 bg-white border-4 border-slate-900/10 px-4 py-2 shadow-[8px_8px_0_0_rgba(2,6,23,0.18)]">
          Red Palette
        </h2>
        <p className="mt-3 text-red-800 max-w-2xl">
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
          <h3 className="font-extrabold text-red-900 text-lg">Usage</h3>
          <p className="mt-2 text-sm text-red-800">
            Light reds for surfaces, punchy reds for CTAs, deep reds for structure and emphasis.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-rose-100 text-red-900 text-xs font-bold">Background</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-rose-200 text-rose-900 text-xs font-bold">Surface</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-red-600 text-white text-xs font-bold">Action</span>
            <span className="px-3 py-1 border-4 border-slate-900/10 bg-red-900 text-white text-xs font-bold">Accent</span>
          </div>
        </div>

        <div className="relative overflow-hidden border-4 border-slate-900/10 bg-white shadow-[10px_10px_0_0_rgba(2,6,23,0.2)]">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-500/10 via-rose-400/10 to-orange-500/10" />
          <div className="relative p-6">
            <h3 className="font-extrabold text-red-900 text-lg">Accessibility</h3>
            <p className="mt-2 text-sm text-red-800">
              Pair deep reds with white and keep borders chunky for clear affordances.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="w-full border-4 border-slate-900/10 bg-red-600 text-white px-4 py-2 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] active:translate-y-0.5 active:translate-x-0.5 transition">Primary</button>
              <button className="w-full border-4 border-slate-900/10 bg-white text-red-900 px-4 py-2 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">Secondary</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

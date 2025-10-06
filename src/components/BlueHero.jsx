import Spline from '@splinetool/react-spline';

export default function BlueHero() {
  return (
    <section id="hero" className="py-0">
      <div className="relative overflow-hidden border-4 border-slate-900/10">
        <div className="relative h-[64vh] min-h-[440px] w-full">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-rose-900/10 to-rose-950/20" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="inline-block bg-white text-red-900 border-4 border-slate-900/10 p-4 sm:p-5 shadow-[10px_10px_0_0_rgba(2,6,23,0.25)]">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Make it red. Make it Bold.</h1>
              <p className="mt-2 text-sm sm:text-base max-w-2xl">
                Neo‑brutalist, high‑contrast blocks meet a living 3D cover. Edges. Depth. Motion.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#palette" className="px-4 py-2 bg-red-500 text-white border-4 border-slate-900/10 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">View Palette</a>
                <a href="#about" className="px-4 py-2 bg-white text-red-900 border-4 border-slate-900/10 font-bold shadow-[6px_6px_0_0_rgba(2,6,23,0.2)] hover:-translate-y-0.5 transition">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

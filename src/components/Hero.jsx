import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleExplore = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mt-12">
          Craftify
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-slate-700">
          Craft your logic. Shape your vision.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExplore}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
          >
            Explore Projects
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

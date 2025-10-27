export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Supercharge your skills with project ideas
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Pick a skill and dive into 10–15 curated project ideas from beginner to advanced. Build a powerful portfolio and learn by doing.
          </p>
          <div className="mt-8">
            <a href="#skills" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 transition-colors">
              Explore Skills
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 blur-3xl" aria-hidden="true">
        <div className="mx-auto h-48 sm:h-64 max-w-5xl bg-gradient-to-r from-blue-300/30 via-emerald-300/30 to-indigo-300/30 rounded-full" />
      </div>
    </section>
  );
}

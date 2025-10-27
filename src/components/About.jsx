import { useEffect, useRef } from 'react';
import { Code, Terminal, Cpu, Database, Layers, Braces } from 'lucide-react';

const skills = [
  { name: 'HTML', Icon: Code },
  { name: 'CSS', Icon: Layers },
  { name: 'JavaScript', Icon: Braces },
  { name: 'React', Icon: Cpu },
  { name: 'Python', Icon: Terminal },
  { name: 'MySQL', Icon: Database },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          ref={ref}
          className="transition-all duration-700 opacity-0 translate-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            I’m Sam, a passionate tech enthusiast exploring AI, data, and web development. I love turning ideas
            into interactive products that feel delightful, fast, and purposeful.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">Skills</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow"
                >
                  <Icon className="text-slate-700" />
                  <span className="text-sm text-slate-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

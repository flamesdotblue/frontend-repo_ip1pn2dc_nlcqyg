import { Github } from 'lucide-react';

const PROJECTS = [
  {
    name: 'InterviewPulse',
    description: 'AI-driven mock interviews with instant feedback and analytics.',
    tech: ['React', 'Tailwind', 'Node'],
    url: 'https://github.com/Samarth1518/interviewpulse',
  },
  {
    name: 'Craftify Site',
    description: 'This portfolio you are viewing — modern, responsive, and animated.',
    tech: ['React', 'Tailwind', 'Spline'],
    url: 'https://github.com/Samarth1518/craftify',
  },
  {
    name: 'DataViz Toolkit',
    description: 'Reusable charts and dashboards for quick data storytelling.',
    tech: ['Vite', 'D3.js', 'React'],
    url: 'https://github.com/Samarth1518/dataviz-toolkit',
  },
  {
    name: 'TinyTasks',
    description: 'Minimal task manager with keyboard-first UX.',
    tech: ['React', 'Zustand', 'Tailwind'],
    url: 'https://github.com/Samarth1518/tinytasks',
  },
];

function ProjectCard({ name, description, tech, url }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <p className="mt-1 text-slate-600">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Github size={18} /> View on GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Projects</h2>
          <p className="text-slate-600 mt-2">A selection of things I’ve been crafting recently.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

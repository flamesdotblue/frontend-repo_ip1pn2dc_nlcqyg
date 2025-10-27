import { useState } from 'react';

const SKILL_IDEAS = [
  {
    skill: 'JavaScript',
    color: 'ring-yellow-300/50',
    badge: 'bg-yellow-100 text-yellow-800',
    ideas: [
      'To‑Do app with drag-and-drop and localStorage persistence',
      'Weather dashboard using a public API and geolocation',
      'Quiz engine with timer, scoring, and review mode',
      'Markdown previewer with custom syntax highlighting',
      'Infinite scroll image gallery with intersection observer',
      'Pomodoro timer with notifications and stats tracking',
      'Expense tracker with charts and category insights',
      'Keyboard‑only productivity launcher (command palette)',
      'Real-time search with debouncing and fuzzy matching',
      'PWA notes app with offline sync and install prompt',
      'URL shortener client with copy-to-clipboard and QR codes',
      'Kanban board with column reordering and persistence',
      'Unit converter with custom formulas and history',
      'Typing speed test with WPM, accuracy, and leaderboard',
      'Color palette generator with accessibility checks',
    ],
  },
  {
    skill: 'React',
    color: 'ring-blue-300/50',
    badge: 'bg-blue-100 text-blue-800',
    ideas: [
      'Headless UI component library (Tabs, Modal, Dropdown)',
      'Real-time chat using WebSockets and optimistic UI',
      'Dashboard with server-side pagination and filters',
      'E-commerce product catalog with cart and checkout flow',
      'Recipe planner with drag-and-drop meal calendar',
      'File uploader with previews, progress, and retries',
      'Form builder with schema-based validation',
      'Interactive data table with column grouping and export',
      'Portfolio CMS front-end using a headless API',
      'Route‑level code splitting and skeleton loading states',
      'Design system docs site with live playground',
      'Multi-step onboarding wizard with checkpoints',
      'Real-time collaborative whiteboard (canvas + pointers)',
      'Audio podcast player with queue and bookmarks',
      'Internationalized app with language switcher and RTL',
    ],
  },
  {
    skill: 'Python',
    color: 'ring-emerald-300/50',
    badge: 'bg-emerald-100 text-emerald-800',
    ideas: [
      'CLI for managing tasks with SQLite and rich TUI',
      'Web scraper with rotating proxies and CSV export',
      'FastAPI microservice for image thumbnailing',
      'Data cleaning toolkit with Pandas and profiling',
      'Price tracker that alerts on discounts via email',
      'ML pipeline for house price prediction (scikit‑learn)',
      'News summarizer using transformers and FastAPI',
      'Log analyzer that surfaces anomalies and trends',
      'PDF toolkit: merge, split, OCR, and metadata extraction',
      'Chatbot with retrieval over local documents',
      'Automated resume parser with named entity recognition',
      'Time series forecasting for sales with Prophet',
      'IoT sensor data ingestor with MQTT and dashboards',
      'Interview question generator using NLTK/spacy',
      'Code plagiarism detector with AST comparison',
    ],
  },
  {
    skill: 'Node.js',
    color: 'ring-lime-300/50',
    badge: 'bg-lime-100 text-lime-800',
    ideas: [
      'REST API boilerplate with auth, rate limits, and tests',
      'Real-time notifications service with Socket.IO',
      'Image processing pipeline with Sharp and queues',
      'URL shortener service with Redis caching',
      'Microservice for payments with Stripe webhooks',
      'Email campaigner with templates and analytics',
      'GraphQL API with Apollo and data loaders',
      'Server-side rendering for a blog with streaming',
      'File storage proxy to S3 with signed URLs',
      'Feature flag service with SDK and UI console',
      'Webhook relay and retry service with dead letter queue',
      'Cron task runner with distributed locking',
      'Localization backend with translation management',
      'Headless CMS API with roles and permissions',
      'Real-time metrics collector with Prometheus format',
    ],
  },
  {
    skill: 'UI/UX & Frontend',
    color: 'ring-pink-300/50',
    badge: 'bg-pink-100 text-pink-800',
    ideas: [
      'Landing page A/B testing framework',
      'Design tokens system with theme switcher',
      'Accessible component gallery with audits',
      'Micro‑interactions library with animations',
      'Onboarding tours with hotspots and beacons',
      'Form UX patterns catalog with live examples',
      'SVG icon workflow and sprite optimizer',
      'Responsive email templates previewer',
      'Scroll‑based storytelling article template',
      'Grid layout generator with CSS subgrid',
      'Color contrast and readability checker',
      'Design handoff tool reading Figma JSON',
      'Cursor and focus state visualizer for demos',
      'Content skeleton loader generator',
      'Component snapshot diff visual tool',
    ],
  },
  {
    skill: 'Databases',
    color: 'ring-purple-300/50',
    badge: 'bg-purple-100 text-purple-800',
    ideas: [
      'SQL schema designer with ERD auto-layout',
      'Query performance visualizer with EXPLAIN',
      'Migration manager with versioning UI',
      'Full‑text search playground (Postgres/Meilisearch)',
      'Change data capture demo with event consumers',
      'Time‑series dashboard with retention policies',
      'Multi‑tenant data isolation patterns explorer',
      'Backup/restore orchestrator with integrity checks',
      'Sharding and partitioning simulator',
      'Local-first sync demo with conflict resolution',
      'ORM benchmark suite with report generator',
      'Index advisor that suggests and tests indexes',
      'Role-based access control schema demo',
      'Data seeding/faker toolkit with templates',
      'Caching strategies visual guide with Redis',
    ],
  },
];

export default function Skills() {
  // Show the first skill expanded only on the initial render
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Skills</h2>
        <p className="mt-3 text-slate-600">
          Explore curated project ideas grouped by skill. Open a section to see ideas you can build to level up.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {SKILL_IDEAS.map((group, idx) => (
          <div
            key={group.skill}
            className={`rounded-xl border border-slate-200 bg-white shadow-sm ${group.color}`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 text-left">
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${group.badge} ring-1 ring-inset ring-black/5`}>
                  {group.skill}
                </span>
                <span className="text-slate-800 font-semibold">
                  {group.ideas.length} project ideas
                </span>
              </div>
              <svg
                className={`h-5 w-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.832.445l5 7a1 1 0 01-1.664 1.11L10 5.882 5.832 11.555A1 1 0 114.168 10.445l5-7A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {openIndex === idx && (
              <div className="px-4 sm:px-6 pb-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.ideas.map((idea, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-slate-200 bg-slate-50/50 p-3 text-slate-700 hover:bg-slate-50"
                    >
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-slate-500">
        Tip: Start with smaller ideas and gradually tackle advanced ones. Consistency beats intensity.
      </div>
    </section>
  );
}

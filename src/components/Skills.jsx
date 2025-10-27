import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILL_IDEAS = [
  {
    skill: 'JavaScript',
    color: 'bg-yellow-100 text-yellow-800 ring-yellow-200',
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
    color: 'bg-blue-100 text-blue-800 ring-blue-200',
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
    color: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
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
    color: 'bg-lime-100 text-lime-800 ring-lime-200',
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
    color: 'bg-pink-100 text-pink-800 ring-pink-200',
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
    color: 'bg-purple-100 text-purple-800 ring-purple-200',
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

function usePreferredSkill(defaultSkill) {
  const [skill, setSkill] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('craftify.skill') : null;
    return saved || defaultSkill;
  });
  useEffect(() => {
    try {
      localStorage.setItem('craftify.skill', skill);
    } catch {}
  }, [skill]);
  return [skill, setSkill];
}

function Flashcard({ text }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);

  return (
    <motion.button
      type="button"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      className="relative h-36 w-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      aria-pressed={flipped}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500" style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-slate-200 bg-white shadow-sm p-4 flex items-center justify-center text-center">
          <span className="text-slate-800 font-medium line-clamp-3">{text}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-600 to-emerald-500 text-white p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
          <span className="font-semibold">Add this to your roadmap!</span>
        </div>
      </div>
    </motion.button>
  );
}

export default function Skills() {
  const defaultSkill = SKILL_IDEAS[0].skill;
  const [active, setActive] = usePreferredSkill(defaultSkill);

  const activeGroup = useMemo(() => SKILL_IDEAS.find((s) => s.skill === active) || SKILL_IDEAS[0], [active]);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Skills as Flashcards</h2>
        <p className="mt-3 text-slate-600">
          Pick a skill to see its 10–15 project ideas. Tap a card to flip it. Use keyboard Enter/Space to flip as well.
        </p>
      </div>

      {/* Skill selector */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {SKILL_IDEAS.map((s) => (
          <button
            key={s.skill}
            onClick={() => setActive(s.skill)}
            className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors ${
              active === s.skill
                ? `${s.color} ring-offset-1`
                : 'bg-white text-slate-700 ring-slate-200 hover:bg-slate-50'
            }`}
            aria-pressed={active === s.skill}
          >
            {s.skill}
          </button>
        ))}
      </div>

      {/* Animated grid of flashcards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup.skill}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activeGroup.ideas.map((idea, idx) => (
            <Flashcard key={idx} text={idea} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-sm text-slate-500">
        Pro tip: Shuffle by switching skills, then come back. Your last selected skill is remembered.
      </div>
    </section>
  );
}

import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Projects
 * ────────
 * Placeholder section, ready for real projects to be dropped in later.
 *
 *   const projects = [
 *     {
 *       title: 'Transaction Anomaly Reporter (MCP)',
 *       blurb: '...',
 *       href:  'https://github.com/...',
 *       tags:  ['TypeScript', 'MCP', 'Claude'],
 *     },
 *   ];
 *
 * When you're ready, just fill that array and the grid below will render it.
 */
const projects = []; // ← add real projects here later

function ProjectCard({ p }) {
  return (
    <a
      href={p.href || '#'}
      target={p.href ? '_blank' : undefined}
      rel="noreferrer"
      className="group block rounded-xl border border-ink-800/60 bg-ink-900/40 p-6 transition hover:border-ocean-500/40 hover:bg-ink-900/60"
    >
      <h3 className="text-lg font-semibold text-ink-100 group-hover:text-ocean-200">
        {p.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.blurb}</p>
      {p.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-ink-700/70 bg-ink-800/60 px-2 py-0.5 font-mono text-[11px] text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

function EmptyState() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-ink-700/70 bg-ink-900/30 p-10 text-center animate-fade-up">
      <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ocean-500/10 text-ocean-300 ring-1 ring-ocean-500/30">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
      <h3 className="font-display text-xl font-semibold text-ink-100">
        Featured projects, coming soon
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-400">
        Selected work — including AI-tool integrations and a healthcare lab
        pipeline on AWS — will appear here. Reach out if you’d like a walkthrough
        in the meantime.
      </p>
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-ocean-500/40 bg-ocean-500/10 px-4 py-1.5 text-sm font-medium text-ocean-200 transition hover:border-ocean-400 hover:bg-ocean-500/20"
      >
        Ask me about a project
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 / Projects"
          title="Selected work."
          subtitle="A small set of pieces I’m proud of — quality over quantity."
        />

        {projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

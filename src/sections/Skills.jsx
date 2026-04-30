import SectionHeading from '../components/SectionHeading.jsx';
import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 / Toolbox"
          title="The tools I reach for."
          subtitle="Comfort across the full stack — with a recent lean into AWS serverless and AI-tool integration."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.group}
              className="group relative overflow-hidden rounded-xl border border-ink-800/60 bg-ink-900/40 p-5 transition hover:border-ocean-500/40 animate-fade-up"
            >
              {/* Subtle hover sheen */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ocean-500/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">
                {group.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink-700/70 bg-ink-800/60 px-2.5 py-1 font-mono text-[12px] text-ink-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

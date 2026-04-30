/**
 * TimelineItem
 * Used by Experience and Education sections.
 *
 * Props:
 *  - title:    Job role / degree
 *  - subtitle: Company / school
 *  - location: Optional location string
 *  - period:   Date range
 *  - bullets:  Array of strings (optional)
 *  - tags:     Array of tech / focus tags (optional)
 */
export default function TimelineItem({
  title,
  subtitle,
  location,
  period,
  bullets = [],
  tags = [],
}) {
  return (
    <li className="relative pl-8 animate-fade-up">
      {/* dot */}
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-ocean-500 shadow-ocean-glow ring-4 ring-ocean-500/15" />
      {/* connector */}
      <span className="absolute left-[5px] top-5 h-[calc(100%-1rem)] w-px bg-ink-800/80" />

      <div className="rounded-xl border border-ink-800/60 bg-ink-900/40 p-5 transition hover:border-ocean-500/30 hover:bg-ink-900/60">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-ink-100">{title}</h3>
          <span className="font-mono text-xs uppercase tracking-wider text-ocean-300">
            {period}
          </span>
        </div>
        <div className="mt-1 text-sm text-ink-400">
          <span className="text-ocean-200/90">{subtitle}</span>
          {location && (
            <>
              <span className="mx-2 text-ink-700">•</span>
              <span>{location}</span>
            </>
          )}
        </div>

        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-ocean-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-700/80 bg-ink-800/60 px-2.5 py-0.5 font-mono text-[11px] text-ink-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

/**
 * SectionHeading
 * Tiny presentational component used at the top of each main section.
 *   <SectionHeading eyebrow="01" title="About" subtitle="..." />
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-10 max-w-2xl animate-fade-up">
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ocean-400">
          <span className="font-mono">{eyebrow}</span>
          <span className="h-px w-10 bg-ocean-500/50" />
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-ink-400 md:text-lg">{subtitle}</p>
      )}
    </header>
  );
}

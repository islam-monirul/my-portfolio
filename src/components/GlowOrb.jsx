/**
 * GlowOrb
 * ────────
 * A soft, ocean-blue orb that drifts continuously across the viewport.
 * Pure CSS animation — no JS, no extra libraries — and respects
 * prefers-reduced-motion.
 *
 * Two stacked orbs run on slightly different timings so the motion
 * never feels mechanical.
 */
export default function GlowOrb() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Primary orb */}
      <div
        className="
          absolute h-[36rem] w-[36rem] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.55)_0%,rgba(14,165,233,0.35)_30%,rgba(14,165,233,0)_70%)]
          blur-3xl
          animate-orb-drift animate-orb-pulse
          will-change-transform
        "
        style={{ top: '-12rem', left: '-12rem' }}
      />

      {/* Secondary, smaller, slower-drifting accent */}
      <div
        className="
          absolute h-[22rem] w-[22rem] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.45)_0%,rgba(56,189,248,0.18)_40%,rgba(56,189,248,0)_75%)]
          blur-2xl
          animate-orb-drift
          will-change-transform
        "
        style={{
          top: '-8rem',
          left: '-8rem',
          animationDuration: '40s',
          animationDirection: 'reverse',
          animationDelay: '-6s',
          opacity: 0.7,
        }}
      />
    </div>
  );
}

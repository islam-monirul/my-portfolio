import { profile } from '../data/profile.js';
import SocialIcons from '../components/SocialIcons.jsx';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-5 pt-28 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-12">
        {/* Copy */}
        <div className="md:col-span-7 animate-fade-up">
          {profile.status.available && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ocean-500/30 bg-ocean-500/10 px-3 py-1 text-xs font-medium text-ocean-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean-400" />
              </span>
              {profile.status.label}
            </div>
          )}

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-ocean-300">
            Hi, I’m
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink-100 sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name.split(' ')[0]}{' '}
            <span className="text-gradient-ocean">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="mt-3 text-lg text-ink-300 md:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-ocean-400 hover:shadow-ocean-glow"
            >
              Get in touch
              <svg
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-5 py-2.5 text-sm font-semibold text-ink-200 transition hover:border-ocean-500/60 hover:text-ocean-200"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <SocialIcons />
            <span className="hidden text-sm text-ink-500 sm:inline">
              {profile.location}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none">
            {/* Soft ocean halo behind subject */}
            <div className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-3/4 w-3/4 rounded-full bg-ocean-500/30 blur-3xl" />
            {/* Decorative ring */}
            <div className="absolute inset-0 -z-10 rounded-[2rem] border border-ocean-500/20" />
            <div className="absolute inset-3 -z-10 rounded-[1.6rem] border border-ocean-500/10" />

            <img
              src="/monir-hero.png"
              alt="Monirul Islam at his MUN graduation"
              className="relative h-full w-full select-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(2,132,199,0.35)]"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-500 transition hover:text-ocean-300 md:block"
      >
        <svg
          className="h-6 w-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}

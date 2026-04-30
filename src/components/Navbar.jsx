import { useEffect, useState } from 'react';
import { profile, navLinks } from '../data/profile.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/70 backdrop-blur-md border-b border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-wide"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-ocean-400 to-ocean-700 text-ink-950 shadow-ocean-glow">
            <span className="font-display text-[15px] font-bold">{profile.initials}</span>
          </span>
          <span className="hidden sm:inline text-ink-100">
            {profile.shortName}
            <span className="text-ocean-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-md px-3 py-2 text-sm text-ink-300 transition-colors hover:text-ocean-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-ocean-500/40 bg-ocean-500/10 px-4 py-1.5 text-sm font-medium text-ocean-200 transition hover:border-ocean-400 hover:bg-ocean-500/20 hover:text-ocean-100"
            >
              Résumé
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-800 text-ink-200 hover:border-ocean-500/50"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-ink-800/60 bg-ink-950/90 backdrop-blur">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-ink-200 hover:bg-ink-800/60 hover:text-ocean-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md border border-ocean-500/40 bg-ocean-500/10 px-3 py-2 text-sm font-medium text-ocean-200"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

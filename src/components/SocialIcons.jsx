import { profile } from '../data/profile.js';

const Icon = ({ children, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-800 bg-ink-900/60 text-ink-300 transition hover:border-ocean-500/60 hover:bg-ocean-500/10 hover:text-ocean-300"
  >
    {children}
  </a>
);

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <Icon href={profile.links.linkedin} label="LinkedIn">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Icon>
      <Icon href={`mailto:${profile.email}`} label="Email">
        <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </Icon>
      <Icon href={profile.links.github} label="GitHub">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 .296a12 12 0 0 0-3.79 23.39c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.652.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.806 5.622-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12 12 0 0 0 12 .296z" />
        </svg>
      </Icon>
    </div>
  );
}

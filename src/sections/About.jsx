import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/profile.js';

const Stat = ({ value, label }) => (
  <div className="rounded-xl border border-ink-800/60 bg-ink-900/40 p-5 text-center transition hover:border-ocean-500/40">
    <div className="font-display text-3xl font-bold text-ocean-300">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">{label}</div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 / About"
          title="A builder who likes clean APIs and quiet, reliable systems."
        />

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 space-y-5 text-base leading-relaxed text-ink-300 md:text-lg animate-fade-up">
            <p>
              I’m {profile.shortName} — a full-stack software engineer with{' '}
              <span className="text-ink-100">2+ years of experience</span> shipping
              React and Node.js applications across academic, freelance, and
              startup environments.
            </p>
            <p>
              Lately I’ve been going deeper on <span className="text-ocean-300">serverless AWS pipelines</span>{' '}
              (Lambda, S3, RDS, PostgreSQL) and{' '}
              <span className="text-ocean-300">AI tool integration</span> via the
              Model Context Protocol — building the kind of infrastructure that
              lets LLMs actually do useful work on real data.
            </p>
            <p>
              I’m comfortable across Java, TypeScript, and SQL/NoSQL databases,
              and I care about clean APIs, reliable data processing, and code
              that the next person on the team can read without flinching.
            </p>
            <p>
              I recently completed my <span className="text-ink-100">MASc in
              Software Engineering</span> at Memorial University of Newfoundland,
              and I’m currently based in St. John’s, NL.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 self-start animate-fade-up">
            <Stat value="2+ yrs" label="Engineering experience" />
            <Stat value="100+" label="Projects delivered" />
            <Stat value="17+" label="Countries served" />
            <Stat value="MASc" label="Software Engineering" />
          </div>
        </div>
      </div>
    </section>
  );
}

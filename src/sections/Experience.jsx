import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I’ve built things."
          subtitle="A short tour of the teams and projects that have shaped how I think about software."
        />

        <ol className="space-y-6">
          {experience.map((job, idx) => (
            <TimelineItem
              key={idx}
              title={job.role}
              subtitle={job.company}
              location={job.location}
              period={job.period}
              bullets={job.bullets}
              tags={job.stack}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

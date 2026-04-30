import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { education } from '../data/education.js';

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 / Education"
          title="Where I learned the fundamentals."
        />

        <ol className="space-y-6">
          {education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.degree}
              subtitle={edu.school}
              location={edu.location}
              period={edu.period}
              bullets={edu.highlights}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

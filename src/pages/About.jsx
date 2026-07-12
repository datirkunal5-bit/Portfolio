import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import MarkerText from '@/components/ui/MarkerText';
import { bio, skillGroups, experience, education } from '@/data/about';

export default function About() {
  return (
    <PageContainer>
      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
          About
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          A bit of <MarkerText delay={0.3}>my story.</MarkerText>
        </h1>

        <div className="mt-6 space-y-4">
          {bio.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-ink-soft dark:text-mist-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeading eyebrow="Toolbox" title="Skills &" markedWord="stack" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-signal/40 hover:text-ink dark:border-mist/10 dark:text-mist-soft dark:hover:text-mist"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <SectionHeading eyebrow="Career" title="Work" markedWord="experience" />
        <Timeline items={experience} />
      </div>

      {/* Education */}
      <div className="mt-20">
        <SectionHeading eyebrow="Background" title="Education" />
        <Timeline items={education} titleKey="degree" />
      </div>
    </PageContainer>
  );
}
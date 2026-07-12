import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import ProjectCard from '@/components/ui/ProjectCard';
import MarkerText from '@/components/ui/MarkerText';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
          Selected work
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I've <MarkerText delay={0.3}>built</MarkerText>
        </h1>
        <p className="mt-4 max-w-lg text-ink-soft dark:text-mist-soft">
          A mix of full-stack apps and UI-focused builds — each one shipped end to end, from schema to styling.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </PageContainer>
  );
}
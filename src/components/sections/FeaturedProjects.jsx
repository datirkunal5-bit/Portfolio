import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ui/ProjectCard';
import MarkerText from '@/components/ui/MarkerText';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
            Featured work
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Recent <MarkerText delay={0.2}>projects</MarkerText>
          </h2>
        </div>

        <Link
          to="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink dark:text-mist-soft dark:hover:text-mist"
        >
          View all projects
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
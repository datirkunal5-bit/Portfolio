import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, image, icon: Icon, tags, liveUrl, githubUrl } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft transition-shadow hover:shadow-lg dark:border-mist/10 dark:bg-graphite-soft"
    >
      {/* Image / placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-ink/5 dark:bg-mist/5">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-signal/10 via-transparent to-teal/10">
            {Icon && <Icon size={36} className="text-ink/20 dark:text-mist/20" />}
          </div>
        )}

        {/* Hover overlay with links — also reachable via visible footer icons below for touch devices */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
          
          <a  href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View live demo of ${title}`}
            className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ExternalLink size={16} />
          </a>
          
             <a href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View source code of ${title} on GitHub`}
            className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-mist-soft">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[11px] text-ink-soft dark:border-mist/10 dark:text-mist-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Always-visible links for touch/keyboard users */}
        <div className="mt-5 flex items-center gap-4 border-t border-ink/10 pt-4 text-sm font-medium dark:border-mist/10">
          
           <animateTransform href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-signal"
          >
            <ExternalLink size={14} />
            Live demo
          </animateTransform>
          
           <a href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-signal"
          >
            <FaGithub size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
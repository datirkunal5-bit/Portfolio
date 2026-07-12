import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkerText from '@/components/ui/MarkerText';
import AvatarFrame from '@/components/ui/AvatarFrame';
import { profile } from '@/data/profile';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background accent — restrained, single soft shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-signal/10 blur-3xl dark:bg-signal/5"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          {profile.available && (
            <motion.p
              variants={item}
              className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft"
            >
              {profile.role} · {profile.location}
            </motion.p>
          )}

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I turn ideas into
            <br />
            <MarkerText delay={0.6}>real, working products.</MarkerText>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-ink-soft dark:text-mist-soft sm:text-lg">
            {profile.pitch}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-mist dark:text-graphite"
            >
              View projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            
             <a href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-ink/5 dark:border-mist/15 dark:hover:bg-mist/10"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex flex-wrap gap-2">
            {profile.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-ink/10 px-3 py-1 font-mono text-xs text-ink-soft dark:border-mist/10 dark:text-mist-soft"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <AvatarFrame src={profile.avatarSrc} initials={profile.initials} />
        </motion.div>
      </div>
    </section>
  );
}
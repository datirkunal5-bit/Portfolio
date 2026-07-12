import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function AvatarFrame({ src, initials }) {
  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      {/* Rotating dashed ring — decorative, purely ambient motion */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-signal/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Photo / initials frame */}
      <div className="relative flex h-[85%] w-[85%] items-center justify-center overflow-hidden rounded-[2.25rem] border border-ink/10 bg-paper-soft shadow-sm dark:border-mist/10 dark:bg-graphite-soft">
        {src ? (
          <img src={src} alt="Portrait" className="h-full w-full object-cover" />
        ) : (
          <span className="font-display text-6xl font-semibold text-ink/20 dark:text-mist/20">
            {initials}
          </span>
        )}
      </div>

      {/* Floating status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2 text-xs font-medium shadow-sm dark:border-mist/10 dark:bg-graphite"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
        </span>
        Available for work
      </motion.div>

      {/* Floating tech chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -right-3 top-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 bg-paper text-signal shadow-sm dark:border-mist/10 dark:bg-graphite"
      >
        <Code2 size={18} />
      </motion.div>
    </div>
  );
}
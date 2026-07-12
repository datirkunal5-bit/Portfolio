import { motion } from 'framer-motion';

/**
 * Wraps a word/phrase with an animated highlighter-stroke mark behind it.
 * This is the site's signature visual motif — used sparingly on key words only.
 */
export default function MarkerText({ children, delay = 0, className = '' }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className="absolute inset-x-0 bottom-0.5 z-0 h-[0.4em] -rotate-1 bg-signal/40 dark:bg-signal/30"
      />
    </span>
  );
}
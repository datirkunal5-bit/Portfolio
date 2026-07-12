import { motion } from 'framer-motion';
import MarkerText from './MarkerText';

export default function SectionHeading({ eyebrow, title, markedWord }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {markedWord ? (
          <>
            {title}{' '}
            <MarkerText>{markedWord}</MarkerText>
          </>
        ) : (
          title
        )}
      </h2>
    </motion.div>
  );
}
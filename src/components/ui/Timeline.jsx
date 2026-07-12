import { motion } from 'framer-motion';

export default function Timeline({ items, dateKey = 'period', titleKey = 'role', orgKey = 'org' }) {
  return (
    <ol className="relative border-l border-ink/10 pl-6 dark:border-mist/10">
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="mb-8 last:mb-0"
        >
          <span
            className={`absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full ${
              item.current ? 'bg-signal' : 'bg-ink/30 dark:bg-mist/30'
            }`}
          />
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
            {item[dateKey]}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold tracking-tight">
            {item[titleKey]}
            <span className="text-ink-soft dark:text-mist-soft"> · {item[orgKey]}</span>
          </h3>
          {item.description && (
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft dark:text-mist-soft">
              {item.description}
            </p>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
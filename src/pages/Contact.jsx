import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import MarkerText from '@/components/ui/MarkerText';
import ContactForm from '@/components/sections/ContactForm';
import { contact } from '@/data/contact';

export default function Contact() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-mist-soft">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's <MarkerText delay={0.3}>build something.</MarkerText>
          </h1>
          <p className="mt-4 max-w-sm text-ink-soft dark:text-mist-soft">
            Have a role, project, or just want to talk shop? My inbox is open.
          </p>

          <ul className="mt-10 space-y-4">
            {contact.links.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                
                <a  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 text-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-colors group-hover:border-signal/40 group-hover:text-signal dark:border-mist/10 dark:text-mist-soft">
                    <Icon size={15} />
                  </span>
                  <span className="text-ink-soft transition-colors group-hover:text-ink dark:text-mist-soft dark:group-hover:text-mist">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </PageContainer>
  );
}
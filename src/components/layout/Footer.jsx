import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 dark:border-mist/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-ink-soft dark:text-mist-soft">
          © {year} Your Name. Built with React &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-ink-soft transition-colors hover:text-signal dark:text-mist-soft dark:hover:text-signal"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

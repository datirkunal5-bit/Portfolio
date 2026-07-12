import { Link } from 'react-router-dom';
import PageContainer from '@/components/ui/PageContainer';

export default function NotFound() {
  return (
    <PageContainer className="text-center">
      <p className="font-mono text-sm text-signal">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-ink-soft dark:text-mist-soft">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 dark:bg-mist dark:text-graphite"
      >
        Back home
      </Link>
    </PageContainer>
  );
}

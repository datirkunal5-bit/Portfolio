import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import PageContainer from '@/components/ui/PageContainer';
import MarkerText from '@/components/ui/MarkerText';
import { profile } from '@/data/profile';

export default function Resume() {
  return (
    <PageContainer className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex max-w-md flex-col items-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 text-signal dark:border-mist/10">
          <FileText size={22} />
        </span>

        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          My <MarkerText delay={0.3}>resume.</MarkerText>
        </h1>
        <p className="mt-4 text-ink-soft dark:text-mist-soft">
          A one-page PDF covering my experience, skills, and education — updated for {profile.role.toLowerCase()} roles.
        </p>

        
         <a  href={profile.resumeUrl}
          download
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-mist dark:text-graphite"
        >
          <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
          Download resume
        </a>
      </motion.div>
    </PageContainer>
  );
}
import { Sparkles, ShoppingCart, MessageSquare, KanbanSquare, Newspaper } from 'lucide-react';

/**
 * image: null shows a placeholder tile. To use a real screenshot, drop it in
 * public/projects/ and set image: '/projects/your-file.png'
 * (or import from src/assets/images and pass the imported variable).
 */
export const projects = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'Scores a resume against a job description using the OpenAI API, highlighting keyword gaps and giving actionable improvement suggestions.',
    image: null ,
    icon: Sparkles,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
    liveUrl: 'https://ai-resume-analyzer-peach-eight.vercel.app/',
    githubUrl: 'https://github.com/datirkunal5-bit/ai-resume-analyzer',
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'Full-stack store with cart, checkout, and an admin dashboard for managing inventory and orders.',
    image: null,
    icon: ShoppingCart,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat App',
    description:
      'Socket-based messaging with rooms, typing indicators, and message persistence.',
    image: null,
    icon: MessageSquare,
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
  {
    id: 'task-dashboard',
    title: 'Task Management Dashboard',
    description:
      'Kanban-style project tracker with drag-and-drop boards, deadlines, and team assignments.',
    image: null,
    icon: KanbanSquare,
    tags: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS',
    description:
      'Markdown-based blogging platform with a custom editor, tags, and a REST API backend.',
    image: null,
    icon: Newspaper,
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    featured: false,
  },
];
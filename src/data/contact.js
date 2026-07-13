import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const contact = {
  email: 'datirkunal5@gmail.com',
  location: 'Sangamner, India',
  // Sign up at https://formspree.io, create a form, and paste your endpoint
  // (looks like https://formspree.io/f/xxxxxxxx) here. Until you do, the
  // form will show a clear error instead of silently failing.
  formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxxx'
  links: [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com', icon: Mail },
    { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com/', icon: FaGithub },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com/', icon: FaLinkedin },
  ],
};
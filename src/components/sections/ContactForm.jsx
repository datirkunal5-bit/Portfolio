import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contact } from '@/data/contact';

const initialState = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!contact.formEndpoint) {
      setStatus('error');
      setStatusMessage(
        'Form endpoint not configured yet — add your Formspree URL in src/data/contact.js.'
      );
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage("Message sent — I'll get back to you soon.");
        setValues(initialState);
      } else {
        throw new Error('Request failed');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong sending that. Try emailing me directly instead.');
    }
  };

  const inputClasses = (field) =>
    `w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-soft/50 dark:placeholder:text-mist-soft/50 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-ink/15 focus:border-signal dark:border-mist/15'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClasses('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What are you reaching out about?"
          className={`${inputClasses('message')} resize-none`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-mist dark:text-graphite"
      >
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {(status === 'success' || status === 'error') && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 text-sm ${
            status === 'success' ? 'text-teal' : 'text-red-500'
          }`}
        >
          {status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {statusMessage}
        </motion.p>
      )}
    </form>
  );
}
import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = `Alphora inquiry from ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role || 'N/A'}`,
      '',
      'Message:',
      message,
    ];
    const mailto = `mailto:info@alphoragroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/95 backdrop-blur-strong overflow-y-auto">
      <div className="w-full max-w-2xl px-6 py-12 md:py-16">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-3">
              Contact <span className="font-serif italic">Alphora</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Share a few details and we will route your request to the right team.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close contact form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-muted-foreground">
              Full name*
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Jane Lee"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted-foreground">
              Email*
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="jane@company.com"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-muted-foreground">
              Company*
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
                className="px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Alphora Group"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted-foreground">
              Role
              <input
                type="text"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="CFO"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">
            How can we help?*
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              className="px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
              placeholder="Tell us about your treasury goals and timelines."
            />
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button type="button" onClick={onClose} className="btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

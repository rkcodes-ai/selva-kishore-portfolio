import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-surface/40 py-10 font-mono text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-bold tracking-wider text-foreground">
            {profile.name}
          </div>
          <div className="text-[11px] text-muted">
            AI/ML ENGINEER · FULL-STACK DEVELOPER · SYSTEMS BUILDER
          </div>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right: Copyright & back to top */}
        <div className="flex items-center gap-4 text-[11px]">
          <span>© 2026 {profile.name}</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 bg-surface-elevated hover:bg-surface-hover rounded border border-border-subtle hover:border-border-strong text-muted hover:text-foreground transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

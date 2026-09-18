import React, { useState } from 'react';
import { Mail, Copy, Check, Download, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/Icons';
import { profile } from '../data/profile';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface border border-border-strong p-5 sm:p-8 md:p-14 lg:p-16 relative shadow-2xl overflow-hidden tech-grid-pattern">
          {/* Subtle top indicator */}
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span>06 // INITIATE TRANSMISSION</span>
          </div>

          {/* Large Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6">
            LET'S BUILD <br />
            <span className="bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-violet bg-clip-text text-transparent">
              SOMETHING
            </span> <br />
            USEFUL.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted max-w-xl mb-10 leading-relaxed font-sans">
            Have an opportunity, project, or technical challenge? Reach out directly via email
            or connect through professional channels.
          </p>

          {/* Interactive Email Bar */}
          <div className="p-2 md:p-3 bg-surface-elevated rounded-xl border border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-3 px-2 sm:px-3 py-1 font-mono text-xs sm:text-sm text-foreground overflow-x-auto min-w-0">
              <Mail className="w-4 h-4 text-accent-blue shrink-0" />
              <span className="font-semibold select-all break-all sm:break-normal">{profile.email}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border-subtle hover:border-border-strong font-mono text-xs text-foreground transition-all active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-emerald" />
                    <span className="text-accent-emerald font-semibold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted" />
                    <span>COPY</span>
                  </>
                )}
              </button>

              <Button
                asLink
                href={`mailto:${profile.email}`}
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                SEND EMAIL
              </Button>
            </div>
          </div>

          {/* Bottom Grid of Direct Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-surface-elevated/40 border border-border-subtle hover:border-accent-blue/50 hover:bg-surface-elevated transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Github className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-blue transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="font-mono text-xs font-bold text-foreground">GITHUB</div>
              <div className="text-[11px] text-muted truncate mt-0.5 font-mono">
                github.com/rkcodes-ai
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-surface-elevated/40 border border-border-subtle hover:border-accent-violet/50 hover:bg-surface-elevated transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Linkedin className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-violet transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="font-mono text-xs font-bold text-foreground">LINKEDIN</div>
              <div className="text-[11px] text-muted truncate mt-0.5 font-mono">
                selva-kishore-c
              </div>
            </a>

            {/* Download Resume */}
            <a
              href="/Selva_Kishore_C_Resume.pdf"
              download="Selva_Kishore_C_Resume.pdf"
              className="p-4 rounded-xl bg-surface-elevated/40 border border-border-subtle hover:border-accent-cyan/50 hover:bg-surface-elevated transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Download className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-cyan transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="font-mono text-xs font-bold text-foreground">RESUME</div>
              <div className="text-[11px] text-muted truncate mt-0.5 font-mono">
                PDF Download (Direct)
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

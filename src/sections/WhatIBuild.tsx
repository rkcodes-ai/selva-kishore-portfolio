import React from 'react';
import { Bot, FileCode2, Layers, Network } from 'lucide-react';

interface BuildDomain {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  graphic: React.ReactNode;
}

export const WhatIBuild: React.FC = () => {
  const domains: BuildDomain[] = [
    {
      number: '01',
      title: 'MULTI-AGENT AI',
      description:
        'Specialized AI agents collaborating through coordinated workflows and inter-agent communication.',
      icon: Bot,
      accent: 'text-accent-violet border-accent-violet/30 bg-accent-violet/10',
      graphic: (
        <svg viewBox="0 0 200 80" className="w-full h-16 stroke-current text-accent-violet/40">
          <circle cx="40" cy="40" r="14" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="20" r="12" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="60" r="12" fill="none" strokeWidth="1.5" />
          <circle cx="160" cy="40" r="14" fill="none" strokeWidth="1.5" />
          <line x1="54" y1="36" x2="88" y2="24" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="54" y1="44" x2="88" y2="56" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="112" y1="24" x2="146" y2="36" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="112" y1="56" x2="146" y2="44" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'DOCUMENT INTELLIGENCE',
      description:
        'OCR, NLP and AI-assisted document processing, question segmentation, and evaluation pipelines.',
      icon: FileCode2,
      accent: 'text-accent-blue border-accent-blue/30 bg-accent-blue/10',
      graphic: (
        <svg viewBox="0 0 200 80" className="w-full h-16 stroke-current text-accent-blue/40">
          <rect x="30" y="16" width="36" height="48" rx="3" fill="none" strokeWidth="1.5" />
          <line x1="38" y1="26" x2="58" y2="26" strokeWidth="1.5" />
          <line x1="38" y1="36" x2="54" y2="36" strokeWidth="1.5" />
          <line x1="38" y1="46" x2="50" y2="46" strokeWidth="1.5" />
          <path d="M76 40 L104 40" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="114" y="22" width="56" height="36" rx="4" fill="none" strokeWidth="1.5" />
          <circle cx="132" cy="40" r="4" fill="currentColor" />
          <circle cx="152" cy="40" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'FULL-STACK SYSTEMS',
      description:
        'React interfaces, backend APIs, relational & document databases, and complete application workflows.',
      icon: Layers,
      accent: 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10',
      graphic: (
        <svg viewBox="0 0 200 80" className="w-full h-16 stroke-current text-accent-cyan/40">
          <rect x="30" y="24" width="40" height="32" rx="3" fill="none" strokeWidth="1.5" />
          <path d="M78 40 L112 40" strokeWidth="1.5" />
          <ellipse cx="140" cy="28" rx="24" ry="8" fill="none" strokeWidth="1.5" />
          <path d="M116 28 V52 C116 56 164 56 164 52 V28" fill="none" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'RESILIENT SYSTEMS',
      description:
        'Offline-first and decentralized communication systems for network-constrained and emergency environments.',
      icon: Network,
      accent: 'text-accent-emerald border-accent-emerald/30 bg-accent-emerald/10',
      graphic: (
        <svg viewBox="0 0 200 80" className="w-full h-16 stroke-current text-accent-emerald/40">
          <circle cx="35" cy="40" r="10" fill="none" strokeWidth="1.5" />
          <circle cx="85" cy="24" r="10" fill="none" strokeWidth="1.5" />
          <circle cx="105" cy="56" r="10" fill="none" strokeWidth="1.5" />
          <circle cx="165" cy="40" r="10" fill="none" strokeWidth="1.5" />
          <line x1="45" y1="38" x2="75" y2="26" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="43" y1="46" x2="95" y2="54" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="95" y1="26" x2="155" y2="38" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="115" y1="54" x2="155" y2="42" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="what-i-build" className="py-24 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider">
            <span>01 // SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            WHAT I BUILD
          </h2>
          <p className="text-base text-muted max-w-2xl font-sans">
            Architecting robust systems that bridge generative AI capabilities, document intelligence,
            and reliable software engineering.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-6 rounded-xl bg-surface/60 border border-border-subtle hover:border-border-strong hover:bg-surface-elevated/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Number & Icon */}
                  <div className="flex items-center justify-between mb-5 font-mono">
                    <span className="text-xs font-bold text-muted group-hover:text-foreground transition-colors">
                      {item.number}
                    </span>
                    <div
                      className={`p-2 rounded-lg border transition-colors ${item.accent}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Graphic */}
                <div className="mt-6 pt-4 border-t border-border-subtle opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.graphic}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

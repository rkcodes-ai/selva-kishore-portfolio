import React from 'react';
import { Search, Compass, Hammer, CheckSquare2, RefreshCw } from 'lucide-react';

export const HowIBuild: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'UNDERSTAND',
      subtitle: 'Define the problem.',
      description:
        'Deconstruct root constraints, user requirements, data bottlenecks, and failure modes before writing any code.',
      icon: Search,
    },
    {
      number: '02',
      title: 'ARCHITECT',
      subtitle: 'Design the system.',
      description:
        'Formulate component boundaries, data schemas, API contracts, inter-agent workflows, and fallback mechanisms.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Implement the application.',
      description:
        'Code clean, modular logic across React, FastAPI, Node, and specialized AI/ML pipelines with strict type safety.',
      icon: Hammer,
    },
    {
      number: '04',
      title: 'TEST',
      subtitle: 'Validate the system.',
      description:
        'Execute integration verifications, benchmark edge cases, test offline resilience, and conduct rubric accuracy checks.',
      icon: CheckSquare2,
    },
    {
      number: '05',
      title: 'ITERATE',
      subtitle: 'Improve the solution.',
      description:
        'Profile latency, refine prompts and model responses, optimize database queries, and harden production readiness.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="process" className="py-24 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider">
            <span>04 // METHODOLOGY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            HOW I BUILD
          </h2>
          <p className="text-base text-muted max-w-2xl font-sans">
            A disciplined, systems-first engineering methodology applied to every intelligent application.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-border-subtle -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 rounded-xl bg-surface/70 border border-border-subtle hover:border-border-strong transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step number & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-accent-blue">
                        {step.number}
                      </span>
                      <div className="p-2 rounded-lg bg-surface-elevated border border-border-subtle text-muted group-hover:text-foreground transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-mono text-sm font-bold tracking-wide text-foreground mb-1 uppercase">
                      {step.title}
                    </h3>
                    <div className="text-xs font-medium text-accent-blue mb-3 font-sans">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-muted leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

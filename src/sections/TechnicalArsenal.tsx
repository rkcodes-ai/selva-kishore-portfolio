import React, { useState } from 'react';
import { Code2, Server, Database, Cpu, Terminal, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { Badge } from '../components/ui/Badge';

export const TechnicalArsenal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    PROGRAMMING: Code2,
    'FRONTEND & BACKEND': Server,
    DATABASES: Database,
    'AI / ML': Cpu,
    'TOOLS & ENVIRONMENT': Terminal,
  };

  const categories = ['ALL', ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'ALL'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider">
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            TECHNICAL ARSENAL
          </h2>
          <p className="text-base text-muted max-w-2xl font-sans">
            Languages, frameworks, data systems, and AI paradigms actively leveraged across projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-md border transition-all ${
                selectedCategory === cat
                  ? 'bg-accent-blue/15 border-accent-blue text-foreground font-semibold'
                  : 'bg-surface border-border-subtle text-muted hover:border-border-strong hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Sparkles;
            return (
              <div
                key={cat.category}
                className="p-6 rounded-xl bg-surface/60 border border-border-subtle hover:border-border-strong transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-surface-elevated border border-border-subtle text-accent-blue">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted mb-5 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      size="sm"
                      className="hover:border-accent-blue/50 hover:text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { profile } from '../data/profile';

export const SystemStatusStrip: React.FC = () => {
  return (
    <div className="w-full border-y border-border-subtle bg-surface/40 backdrop-blur-sm py-3 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Availability Status Badge */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-semibold text-foreground tracking-wider uppercase">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Technical Domain Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-muted text-[11px] tracking-wider">
          {profile.coreDomains.map((domain, idx) => (
            <React.Fragment key={domain}>
              <span className="hover:text-foreground transition-colors cursor-default">
                {domain}
              </span>
              {idx < profile.coreDomains.length - 1 && (
                <span className="text-border-strong hidden sm:inline">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

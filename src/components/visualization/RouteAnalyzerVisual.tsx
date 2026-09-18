import React, { useState } from 'react';
import { Navigation, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const RouteAnalyzerVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [selectedCorridor, setSelectedCorridor] = useState<'optimal' | 'congested'>('optimal');

  return (
    <div className="w-full bg-surface-elevated/60 border border-border-subtle rounded-xl p-4 md:p-5 font-mono select-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="font-semibold text-foreground">EMERGENCY ROUTE DECISION MATRIX</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted">
          <span>Model: Spatial Graph + ML</span>
          <span className="text-accent-emerald">Heuristics: Active</span>
        </div>
      </div>

      {/* Map-Like Network Graph SVG */}
      <div className="relative w-full aspect-[480/260] my-2 bg-surface/80 rounded-lg border border-border-subtle overflow-hidden">
        <svg viewBox="0 0 480 260" className="w-full h-full">
          {/* Subtle Map Grid lines */}
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="480" height="260" fill="url(#smallGrid)" />

          {/* Road Network Segments */}
          {/* Congested Path (Red/Orange dashed) */}
          <path
            d="M 60 130 L 160 50 L 320 50 L 420 130"
            fill="none"
            stroke={selectedCorridor === 'congested' ? '#F43F5E' : 'rgba(244, 63, 94, 0.3)'}
            strokeWidth={selectedCorridor === 'congested' ? '3' : '1.5'}
            strokeDasharray="4 4"
          />

          {/* Optimal Emergency Path (Green solid) */}
          <path
            d="M 60 130 L 160 210 L 320 210 L 420 130"
            fill="none"
            stroke={selectedCorridor === 'optimal' ? '#10B981' : 'rgba(16, 185, 129, 0.3)'}
            strokeWidth={selectedCorridor === 'optimal' ? '3.5' : '1.5'}
          />

          {/* Direct blocked line */}
          <line x1="60" y1="130" x2="420" y2="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

          {/* Intersection Nodes */}
          {/* Start: Ambulance */}
          <g transform="translate(60, 130)">
            <circle cx="0" cy="0" r="16" fill="#0D0D0F" stroke="#3B82F6" strokeWidth="2" />
            <foreignObject x="-7" y="-7" width="14" height="14">
              <Navigation className="w-3.5 h-3.5 text-accent-blue" />
            </foreignObject>
            <text y="28" textAnchor="middle" fill="#EDEDED" className="text-[9px] font-bold">
              AMBULANCE
            </text>
          </g>

          {/* End: Trauma Center / Target */}
          <g transform="translate(420, 130)">
            <circle cx="0" cy="0" r="16" fill="#0D0D0F" stroke="#10B981" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#10B981" />
            <text y="28" textAnchor="middle" fill="#EDEDED" className="text-[9px] font-bold">
              DESTINATION
            </text>
          </g>

          {/* Intermediate Junctions */}
          <circle cx="160" cy="50" r="5" fill="#F43F5E" />
          <circle cx="320" cy="50" r="5" fill="#F43F5E" />
          <circle cx="160" cy="210" r="5" fill="#10B981" />
          <circle cx="320" cy="210" r="5" fill="#10B981" />

          {/* Hazard Marker on Upper Corridor */}
          <g transform="translate(240, 50)">
            <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#0D0D0F" stroke="#F43F5E" />
            <foreignObject x="-7" y="-7" width="14" height="14">
              <AlertOctagon className="w-3.5 h-3.5 text-rose-500" />
            </foreignObject>
          </g>

          {/* Animated vehicle dot along optimal path */}
          {!reducedMotion && (
            <circle cx="60" cy="130" r="4" fill="#10B981">
              <animate
                attributeName="cx"
                values="60;160;320;420"
                keyTimes="0;0.33;0.66;1"
                dur="3.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="130;210;210;130"
                keyTimes="0;0.33;0.66;1"
                dur="3.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.2;0.8;1"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>
      </div>

      {/* Decision Support Evaluation Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
        <button
          onClick={() => setSelectedCorridor('optimal')}
          className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition-all ${
            selectedCorridor === 'optimal'
              ? 'bg-accent-emerald/10 border-accent-emerald text-foreground'
              : 'bg-surface/50 border-border-subtle text-muted hover:border-border-strong'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Corridor Alpha (Recommended)</span>
              <span className="text-[9px] bg-accent-emerald/10 text-accent-emerald px-1.5 py-0.2 rounded">
                AI Cleared
              </span>
            </div>
            <p className="text-[11px] text-muted font-sans mt-0.5">
              Low bottleneck probability, verified lane capacity, zero hazardous choke points.
            </p>
          </div>
        </button>

        <button
          onClick={() => setSelectedCorridor('congested')}
          className={`flex items-start gap-2.5 p-3 rounded-lg border text-left transition-all ${
            selectedCorridor === 'congested'
              ? 'bg-rose-500/10 border-rose-500 text-foreground'
              : 'bg-surface/50 border-border-subtle text-muted hover:border-border-strong'
          }`}
        >
          <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Corridor Beta (High Impedance)</span>
              <span className="text-[9px] bg-rose-500/10 text-rose-400 px-1.5 py-0.2 rounded">
                Risk Flagged
              </span>
            </div>
            <p className="text-[11px] text-muted font-sans mt-0.5">
              Active road congestion and constriction detected via real-time spatial graph weights.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

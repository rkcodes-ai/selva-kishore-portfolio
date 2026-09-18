import React, { useState } from 'react';
import { Cpu, Bot, Database, Server, Smartphone, Network } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NodeInfo {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const HeroCoreVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: NodeInfo[] = [
    {
      id: 'core',
      label: 'AI CORE',
      sublabel: 'LLMs & Evaluation Engine',
      x: 250,
      y: 90,
      icon: Cpu,
      color: '#3B82F6',
    },
    {
      id: 'agent',
      label: 'AGENTS',
      sublabel: 'Multi-Agent Orchestration',
      x: 90,
      y: 230,
      icon: Bot,
      color: '#8B5CF6',
    },
    {
      id: 'data',
      label: 'DATA & OCR',
      sublabel: 'Ingestion & Vector Stores',
      x: 250,
      y: 230,
      icon: Database,
      color: '#06B6D4',
    },
    {
      id: 'api',
      label: 'APIs & SERVICES',
      sublabel: 'FastAPI & Node Services',
      x: 410,
      y: 230,
      icon: Server,
      color: '#3B82F6',
    },
    {
      id: 'systems',
      label: 'RESILIENT MESH',
      sublabel: 'Offline BLE Transport',
      x: 140,
      y: 370,
      icon: Network,
      color: '#10B981',
    },
    {
      id: 'app',
      label: 'APPLICATIONS',
      sublabel: 'React UIs & Dashboards',
      x: 360,
      y: 370,
      icon: Smartphone,
      color: '#8B5CF6',
    },
  ];

  const connections = [
    { from: 'core', to: 'agent' },
    { from: 'core', to: 'data' },
    { from: 'core', to: 'api' },
    { from: 'agent', to: 'systems' },
    { from: 'data', to: 'app' },
    { from: 'api', to: 'app' },
    { from: 'agent', to: 'data' },
    { from: 'data', to: 'api' },
    { from: 'systems', to: 'app' },
  ];

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Outer technical container with subtle frame */}
      <div className="relative p-4 md:p-6 bg-surface/80 border border-border-subtle rounded-2xl backdrop-blur-md tech-grid-pattern shadow-2xl">
        {/* Frame header bar */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="font-mono text-[11px] text-muted tracking-wider uppercase">
              System Topology Engine
            </span>
          </div>
          <span className="font-mono text-[10px] text-faint bg-surface-elevated px-2 py-0.5 rounded border border-border-subtle">
            LIVE PROTOCOL
          </span>
        </div>

        {/* SVG Diagram Canvas */}
        <div className="relative w-full aspect-[500/440]">
          <svg
            viewBox="0 0 500 440"
            className="w-full h-full overflow-visible"
            aria-label="AI System Core topology diagram"
          >
            <defs>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>

              <filter id="subtleBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connection Circuit Lines */}
            {connections.map((conn, idx) => {
              const n1 = getNode(conn.from);
              const n2 = getNode(conn.to);
              const isHighlight =
                activeNode === conn.from || activeNode === conn.to || activeNode === null;

              return (
                <g key={idx}>
                  {/* Background track line */}
                  <line
                    x1={n1.x}
                    y1={n1.y}
                    x2={n2.x}
                    y2={n2.y}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white/10 dark:text-white/10"
                  />

                  {/* Animated pulse packet along the track */}
                  {!reducedMotion && (
                    <circle
                      cx={n1.x}
                      cy={n1.y}
                      r="2.5"
                      fill="#3B82F6"
                      opacity={isHighlight ? 0.9 : 0.25}
                    >
                      <animate
                        attributeName="cx"
                        from={n1.x}
                        to={n2.x}
                        dur={`${3 + (idx % 3)}s`}
                        begin={`${(idx * 0.4) % 2.5}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from={n1.y}
                        to={n2.y}
                        dur={`${3 + (idx % 3)}s`}
                        begin={`${(idx * 0.4) % 2.5}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values={isHighlight ? "0;0.9;0" : "0;0.25;0"}
                        dur={`${3 + (idx % 3)}s`}
                        begin={`${(idx * 0.4) % 2.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Render Nodes */}
            {nodes.map((node) => {
              const Icon = node.icon;
              const isCore = node.id === 'core';
              const isHovered = activeNode === node.id;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform duration-200"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Outer pulse circle for core */}
                  {isCore && !reducedMotion && (
                    <circle
                      cx="0"
                      cy="0"
                      r="40"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="opacity-40 animate-[spin_18s_linear_infinite]"
                    />
                  )}

                  {/* Node background circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isCore ? 30 : 22}
                    fill="#0D0D0F"
                    stroke={isHovered ? node.color : 'rgba(255, 255, 255, 0.15)'}
                    strokeWidth={isHovered ? '2' : '1.5'}
                    className="transition-all duration-200"
                  />

                  {/* Node icon */}
                  <foreignObject
                    x={isCore ? -14 : -11}
                    y={isCore ? -14 : -11}
                    width={isCore ? 28 : 22}
                    height={isCore ? 28 : 22}
                  >
                    <div className="flex items-center justify-center w-full h-full text-white">
                      <Icon
                        className={`${isCore ? 'w-5 h-5' : 'w-4 h-4'} ${
                          isHovered ? 'text-accent-blue' : 'text-slate-300'
                        }`}
                      />
                    </div>
                  </foreignObject>

                  {/* Node Label */}
                  <text
                    y={isCore ? 44 : 34}
                    textAnchor="middle"
                    fill="currentColor"
                    className="font-mono text-[11px] font-semibold tracking-wide fill-foreground select-none"
                  >
                    {node.label}
                  </text>

                  {/* Node Sublabel */}
                  <text
                    y={isCore ? 56 : 45}
                    textAnchor="middle"
                    fill="currentColor"
                    className="font-mono text-[9px] fill-muted select-none"
                  >
                    {node.sublabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Footer telemetry bar */}
        <div className="mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
          <span>Active Architecture: Hybrid Async</span>
          <span className="text-accent-blue font-medium">Node Sync: 100% Verified</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Bot, GitBranch, Cpu, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AgentNetworkVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [selectedAgent, setSelectedAgent] = useState<'orchestrator' | 'researcher' | 'analyst' | 'developer' | 'output'>('orchestrator');

  const agentDescriptions = {
    orchestrator: {
      role: 'CENTRAL ORCHESTRATOR',
      detail: 'Parses macro task specifications into DAG execution graphs and manages dependency resolution.',
      status: 'DISPATCHING',
    },
    researcher: {
      role: 'RESEARCHER AGENT',
      detail: 'Gathers context, technical documentation, and relevant reference material for the query.',
      status: 'CONTEXT RETRIEVED',
    },
    analyst: {
      role: 'ANALYST AGENT',
      detail: 'Validates logical consistency, constraints, edge cases, and architectural integrity.',
      status: 'VERIFYING',
    },
    developer: {
      role: 'DEVELOPER AGENT',
      detail: 'Generates structured implementation code, tests, and validates syntax correctness.',
      status: 'SYNTHESIZING',
    },
    output: {
      role: 'CONSOLIDATED OUTPUT',
      detail: 'Merges multi-agent work streams into an aggregated, verified final response.',
      status: 'READY',
    },
  };

  return (
    <div className="w-full bg-surface-elevated/60 border border-border-subtle rounded-xl p-4 md:p-5 font-mono select-none overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
          <span className="font-semibold text-foreground">AITOOLS ORCHESTRATION GRAPH</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted">
          <span>Protocol: Event-Driven Bus</span>
          <span className="text-accent-violet">State: Synchronized</span>
        </div>
      </div>

      {/* SVG Multi-Agent Topology Canvas */}
      <div className="relative w-full aspect-[480/280] my-2">
        <svg viewBox="0 0 480 280" className="w-full h-full overflow-visible">
          {/* Coordinates:
              Orchestrator: (240, 40)
              Researcher: (100, 140)
              Analyst: (240, 140)
              Developer: (380, 140)
              Output: (240, 240)
          */}
          {/* Inter-Agent Circuit Lines */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-white/15">
            <line x1="240" y1="40" x2="100" y2="140" />
            <line x1="240" y1="40" x2="240" y2="140" />
            <line x1="240" y1="40" x2="380" y2="140" />
            <line x1="100" y1="140" x2="240" y2="240" />
            <line x1="240" y1="140" x2="240" y2="240" />
            <line x1="380" y1="140" x2="240" y2="240" />
          </g>

          {/* Animated data pulses */}
          {!reducedMotion && (
            <>
              {/* Orchestrator -> Researcher */}
              <circle cx="240" cy="40" r="2.5" fill="#8B5CF6">
                <animate attributeName="cx" from="240" to="100" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="cy" from="40" to="140" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" />
              </circle>
              {/* Orchestrator -> Analyst */}
              <circle cx="240" cy="40" r="2.5" fill="#8B5CF6">
                <animate attributeName="cx" from="240" to="240" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="cy" from="40" to="140" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              {/* Orchestrator -> Developer */}
              <circle cx="240" cy="40" r="2.5" fill="#8B5CF6">
                <animate attributeName="cx" from="240" to="380" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
                <animate attributeName="cy" from="40" to="140" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              {/* Agents -> Output */}
              <circle cx="100" cy="140" r="2.5" fill="#3B82F6">
                <animate attributeName="cx" from="100" to="240" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
                <animate attributeName="cy" from="140" to="240" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="140" r="2.5" fill="#3B82F6">
                <animate attributeName="cx" from="240" to="240" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                <animate attributeName="cy" from="140" to="240" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="380" cy="140" r="2.5" fill="#3B82F6">
                <animate attributeName="cx" from="380" to="240" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
                <animate attributeName="cy" from="140" to="240" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin="1.7s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* Node: Orchestrator */}
          <g
            transform="translate(240, 40)"
            className="cursor-pointer"
            onClick={() => setSelectedAgent('orchestrator')}
          >
            <circle
              cx="0"
              cy="0"
              r="24"
              fill="#0D0D0F"
              stroke={selectedAgent === 'orchestrator' ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}
              strokeWidth="1.5"
            />
            <foreignObject x="-10" y="-10" width="20" height="20">
              <Cpu className="w-5 h-5 text-accent-violet" />
            </foreignObject>
            <text y="-30" textAnchor="middle" fill="#EDEDED" className="text-[10px] font-bold">
              ORCHESTRATOR
            </text>
          </g>

          {/* Node: Researcher */}
          <g
            transform="translate(100, 140)"
            className="cursor-pointer"
            onClick={() => setSelectedAgent('researcher')}
          >
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#0D0D0F"
              stroke={selectedAgent === 'researcher' ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}
              strokeWidth="1.5"
            />
            <foreignObject x="-9" y="-9" width="18" height="18">
              <Bot className="w-4 h-4 text-accent-blue" />
            </foreignObject>
            <text y="32" textAnchor="middle" fill="#94A3B8" className="text-[9px]">
              RESEARCHER
            </text>
          </g>

          {/* Node: Analyst */}
          <g
            transform="translate(240, 140)"
            className="cursor-pointer"
            onClick={() => setSelectedAgent('analyst')}
          >
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#0D0D0F"
              stroke={selectedAgent === 'analyst' ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}
              strokeWidth="1.5"
            />
            <foreignObject x="-9" y="-9" width="18" height="18">
              <GitBranch className="w-4 h-4 text-accent-cyan" />
            </foreignObject>
            <text y="32" textAnchor="middle" fill="#94A3B8" className="text-[9px]">
              ANALYST
            </text>
          </g>

          {/* Node: Developer */}
          <g
            transform="translate(380, 140)"
            className="cursor-pointer"
            onClick={() => setSelectedAgent('developer')}
          >
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#0D0D0F"
              stroke={selectedAgent === 'developer' ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}
              strokeWidth="1.5"
            />
            <foreignObject x="-9" y="-9" width="18" height="18">
              <Bot className="w-4 h-4 text-accent-emerald" />
            </foreignObject>
            <text y="32" textAnchor="middle" fill="#94A3B8" className="text-[9px]">
              DEVELOPER
            </text>
          </g>

          {/* Node: Final Output */}
          <g
            transform="translate(240, 240)"
            className="cursor-pointer"
            onClick={() => setSelectedAgent('output')}
          >
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#0D0D0F"
              stroke={selectedAgent === 'output' ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}
              strokeWidth="1.5"
            />
            <foreignObject x="-9" y="-9" width="18" height="18">
              <CheckCircle className="w-4 h-4 text-accent-blue" />
            </foreignObject>
            <text y="32" textAnchor="middle" fill="#EDEDED" className="text-[10px] font-bold">
              FINAL OUTPUT
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Agent Inspector Strip */}
      <div className="bg-surface p-3 rounded-lg border border-border-subtle mt-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-accent-violet font-semibold text-xs">
              {agentDescriptions[selectedAgent].role}
            </span>
            <span className="text-[9px] bg-accent-violet/10 text-accent-violet px-2 py-0.5 rounded border border-accent-violet/20">
              {agentDescriptions[selectedAgent].status}
            </span>
          </div>
          <p className="text-[11px] text-muted font-sans">
            {agentDescriptions[selectedAgent].detail}
          </p>
        </div>
        <span className="text-[10px] text-faint self-end md:self-center shrink-0">
          Click node to inspect
        </span>
      </div>
    </div>
  );
};

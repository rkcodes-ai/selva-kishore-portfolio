import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scan, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const IntelliGradeVisual: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(3); // Default to AI Evaluation

  const steps = [
    { id: 0, label: 'Document Upload', icon: FileText, tag: 'PDF / Scan' },
    { id: 1, label: 'OCR Extraction', icon: Scan, tag: 'BBoxes' },
    { id: 2, label: 'Question Segment', icon: CheckCircle2, tag: 'Schema Match' },
    { id: 3, label: 'AI Evaluation', icon: ShieldCheck, tag: 'Rubric Engine' },
  ];

  return (
    <div className="w-full bg-surface-elevated/60 border border-border-subtle rounded-xl p-4 md:p-5 font-mono select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border-subtle text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-semibold text-foreground">INTELLIGRADE PIPELINE MONITOR</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted">
          <span>Tenant: Institutional Multi-Tenant</span>
          <span className="text-accent-emerald">RBAC: Active</span>
        </div>
      </div>

      {/* Interactive Step Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {steps.map((s) => {
          const Icon = s.icon;
          const isCurrent = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`flex flex-col text-left p-2.5 rounded-lg border transition-all ${
                isCurrent
                  ? 'bg-accent-blue/10 border-accent-blue text-foreground'
                  : 'bg-surface/50 border-border-subtle text-muted hover:border-border-strong hover:text-foreground'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-accent-blue' : 'text-muted'}`} />
                <span className="text-[10px] text-faint">{s.tag}</span>
              </div>
              <span className="text-xs font-semibold">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Inspection Terminal / Dual View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Left: Document OCR Simulator */}
        <div className="relative bg-surface p-3.5 rounded-lg border border-border-subtle text-xs">
          <div className="flex items-center justify-between text-[11px] text-muted mb-2 pb-1.5 border-b border-border-subtle">
            <span>INPUT: Answer Script Sample</span>
            <span className="text-accent-cyan">Page 01 / Q3</span>
          </div>

          <div className="relative min-h-[140px] flex flex-col justify-between text-[11px] text-muted leading-relaxed font-sans">
            <div className="space-y-1.5">
              <p className="font-semibold text-foreground font-mono text-xs">
                Question 3: Explain Deadlock Prevention vs Avoidance.
              </p>
              <div className="p-2 bg-surface-elevated/40 rounded border border-border-subtle text-foreground/90 font-mono text-[11px]">
                "Deadlock prevention eliminates at least one of Coffman's four necessary conditions
                (Hold & Wait, Mutual Exclusion, No Preemption, Circular Wait). Deadlock avoidance
                dynamically verifies safe states via Banker's Algorithm..."
              </div>
            </div>

            {/* OCR Scan Ray */}
            {!reducedMotion && activeStep === 1 && (
              <motion.div
                animate={{ y: [0, 90, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 top-6 h-0.5 bg-accent-cyan/80 shadow-[0_0_8px_#06b6d4]"
              />
            )}

            <div className="flex items-center justify-between text-[10px] text-faint pt-2 border-t border-border-subtle">
              <span>Resolution: 300 DPI</span>
              <span className="text-accent-emerald">Text Bounding: Verified</span>
            </div>
          </div>
        </div>

        {/* Right: AI Evaluation & Faculty Review Panel */}
        <div className="bg-surface p-3.5 rounded-lg border border-border-subtle text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-muted mb-2 pb-1.5 border-b border-border-subtle">
              <span>EVALUATION ENGINE</span>
              <span className="text-accent-blue">Rubric: OS-2024</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-muted">Coffman Conditions Identified</span>
                <span className="text-accent-emerald font-semibold">Matched (4/4)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Banker's Algorithm Rationale</span>
                <span className="text-accent-emerald font-semibold">Accurate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Comparative Completeness</span>
                <span className="text-foreground font-semibold">High Alignment</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between">
            <div className="text-[10px] text-muted">
              Status: <span className="text-accent-blue font-semibold">Ready for Faculty Sign-off</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-accent-blue">
              <span>View Full Audit</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

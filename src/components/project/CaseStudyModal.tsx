import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  CheckCircle2,
  Layers,
  Cpu,
  Workflow,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Github } from '../ui/Icons';
import { IntelliGradeVisual } from '../visualization/IntelliGradeVisual';
import { AgentNetworkVisual } from '../visualization/AgentNetworkVisual';
import { MeshNetworkVisual } from '../visualization/MeshNetworkVisual';
import { RouteAnalyzerVisual } from '../visualization/RouteAnalyzerVisual';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  const renderVisual = () => {
    switch (project.id) {
      case 'intelligrade':
        return <IntelliGradeVisual />;
      case 'aitools':
        return <AgentNetworkVisual />;
      case 'disastermesh':
        return <MeshNetworkVisual />;
      case 'emergency-route-analyzer':
        return <RouteAnalyzerVisual />;
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Engineering Case Study // [${project.number}] ${project.title}`}
      maxWidth="4xl"
    >
      <div className="space-y-8 font-sans">
        {/* Header Metadata */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="blue" size="md">
              PROJECT {project.number}
            </Badge>
            <Badge variant="outline" size="md">
              {project.category}
            </Badge>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {project.title}
          </h2>
          <p className="text-base text-accent-blue font-medium mt-1">
            {project.subtitle}
          </p>
          <p className="text-sm md:text-base text-muted mt-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Interactive Architecture Visualization Component */}
        <div className="border border-border-subtle rounded-xl overflow-hidden">
          <div className="px-4 py-2 bg-surface-elevated/80 border-b border-border-subtle flex items-center justify-between text-xs font-mono text-muted">
            <span>LIVE INTERACTION ENGINE</span>
            <span className="text-accent-blue font-semibold">Active Architecture</span>
          </div>
          <div className="p-2 md:p-4 bg-surface">
            {renderVisual()}
          </div>
        </div>

        {/* Workflow Sequence */}
        <div className="bg-surface-elevated/40 border border-border-subtle rounded-xl p-5">
          <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider mb-3">
            <Workflow className="w-4 h-4 text-accent-blue" />
            <span>End-to-End System Workflow</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {project.workflow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 bg-surface border border-border-subtle rounded text-foreground font-semibold">
                  {step}
                </span>
                {idx < project.workflow.length - 1 && (
                  <span className="text-accent-blue font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Two-Column Problem & Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-surface-elevated/40 border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface-elevated/40 border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-emerald uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Why It Matters</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              {project.whyItMatters}
            </p>
          </div>
        </div>

        {/* System Architecture Description */}
        <div className="p-5 rounded-xl bg-surface-elevated/40 border border-border-subtle space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-violet uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>System Architecture</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            {project.systemArchitecture}
          </p>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Engineering Components */}
        <div>
          <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent-blue" />
            <span>Key Engineering Components</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyComponents.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-surface border border-border-subtle hover:border-border-strong transition-colors"
              >
                <h4 className="text-sm font-semibold text-foreground mb-1 font-mono">
                  {comp.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Highlights */}
        <div>
          <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
            Implementation Highlights
          </h3>
          <ul className="space-y-2">
            {project.implementation.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted">
                <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Result / Current Status */}
        <div className="p-4 rounded-lg bg-accent-blue/5 border border-accent-blue/20 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-mono font-semibold text-accent-blue uppercase tracking-wider block mb-0.5">
              Result & Validation Status
            </span>
            <p className="text-xs md:text-sm text-foreground">
              {project.resultStatus}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
          <Button variant="secondary" onClick={onClose}>
            BACK TO WORK
          </Button>

          {project.githubUrl && (
            <Button
              asLink
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              icon={<Github className="w-4 h-4" />}
              iconPosition="left"
            >
              VIEW ON GITHUB
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

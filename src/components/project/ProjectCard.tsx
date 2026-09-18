import React from 'react';
import { ArrowUpRight, Workflow } from 'lucide-react';
import { Github } from '../ui/Icons';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { IntelliGradeVisual } from '../visualization/IntelliGradeVisual';
import { AgentNetworkVisual } from '../visualization/AgentNetworkVisual';
import { MeshNetworkVisual } from '../visualization/MeshNetworkVisual';
import { RouteAnalyzerVisual } from '../visualization/RouteAnalyzerVisual';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenCaseStudy,
}) => {
  const isEven = index % 2 === 0;

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
    <article className="group relative rounded-2xl bg-surface/70 border border-border-subtle hover:border-border-strong transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Top editorial accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-blue/30 via-accent-violet/30 to-accent-cyan/30 group-hover:from-accent-blue group-hover:via-accent-violet group-hover:to-accent-cyan transition-all duration-500" />

      <div className="p-6 md:p-8 lg:p-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Project Details (Left or Right depending on index) */}
          <div
            className={`lg:col-span-6 space-y-5 ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {/* Project Index and Category */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-accent-blue tracking-wider">
                {project.number}
              </span>
              <span className="w-1 h-1 rounded-full bg-border-strong" />
              <span className="font-mono text-xs text-muted tracking-wider uppercase">
                {project.category}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-medium text-accent-blue mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-muted leading-relaxed font-sans">
              {project.shortDescription}
            </p>

            {/* Workflow Quick Strip */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-faint mb-2">
                <Workflow className="w-3 h-3 text-accent-blue" />
                <span>CORE PIPELINE</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                {project.workflow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2 py-0.5 bg-surface-elevated text-muted rounded border border-border-subtle">
                      {step}
                    </span>
                    {idx < project.workflow.length - 1 && (
                      <span className="text-faint text-[10px]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Technology Badges */}
            <div className="pt-1 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenCaseStudy(project)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                VIEW CASE STUDY
              </Button>

              {project.githubUrl && (
                <Button
                  asLink
                  href={project.githubUrl}
                  target="_blank"
                  variant="secondary"
                  size="md"
                  icon={<Github className="w-4 h-4" />}
                  iconPosition="left"
                >
                  GITHUB
                </Button>
              )}
            </div>
          </div>

          {/* Interactive Visual Preview (Right or Left depending on index) */}
          <div
            className={`lg:col-span-6 ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
              {renderVisual()}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

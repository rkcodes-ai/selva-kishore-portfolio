import React from 'react';
import type { Project } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/project/ProjectCard';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenCaseStudy,
}) => {
  return (
    <section id="projects" className="py-24 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider">
            <span>02 // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            SELECTED ENGINEERING WORK
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl font-sans">
            Systems built around real-world problems.
          </p>
        </div>

        {/* Vertical Editorial Stack of Projects */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

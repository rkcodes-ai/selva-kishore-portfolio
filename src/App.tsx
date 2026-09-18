import React, { useState, useEffect } from 'react';
import type { Project } from './types';
import { projects } from './data/projects';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './sections/Hero';
import { SystemStatusStrip } from './sections/SystemStatusStrip';
import { WhatIBuild } from './sections/WhatIBuild';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { TechnicalArsenal } from './sections/TechnicalArsenal';
import { HowIBuild } from './sections/HowIBuild';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { CaseStudyModal } from './components/project/CaseStudyModal';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Check URL hash on initial load & hash changes for direct project deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const matched = projects.find((p) => p.id === projectId);
        if (matched) {
          setSelectedProject(matched);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#project-${project.id}`);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent-blue/30 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <SystemStatusStrip />
        <WhatIBuild />
        <FeaturedProjects onOpenCaseStudy={handleOpenCaseStudy} />
        <TechnicalArsenal />
        <HowIBuild />
        <About />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseCaseStudy}
      />
    </div>
  );
};

export default App;

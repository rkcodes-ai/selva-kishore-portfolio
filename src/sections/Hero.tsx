import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/Icons';
import { profile } from '../data/profile';
import { Button } from '../components/ui/Button';
import { HeroCoreVisual } from '../components/visualization/HeroCoreVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-violet/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Tagline / Subtitle */}
            <div className="space-y-1.5 font-mono">
              <div className="text-xs tracking-widest text-accent-blue uppercase font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span>{profile.name}</span>
              </div>
              <div className="text-xs md:text-sm tracking-wider text-muted uppercase">
                AI/ML ENGINEER &nbsp;·&nbsp; FULL-STACK DEVELOPER
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              I BUILD <br />
              <span className="bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-violet bg-clip-text text-transparent">
                INTELLIGENT
              </span>{' '}
              <br />
              SYSTEMS.
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed font-sans">
              {profile.supportingStatement}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asLink
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                EXPLORE PROJECTS
              </Button>

              <Button
                asLink
                href="/Selva_Kishore_C_Resume.pdf"
                download="Selva_Kishore_C_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
              >
                DOWNLOAD RESUME
              </Button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs font-mono text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Github className="w-4 h-4 text-muted group-hover:text-foreground" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-muted group-hover:text-foreground" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted group-hover:text-foreground" />
                <span>{profile.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Interactive Topology Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex justify-center"
          >
            <HeroCoreVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Terminal, GraduationCap, Award } from 'lucide-react';
import { profile, professionalSummary } from '../data/profile';
import { Badge } from '../components/ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-wider">
            <span>05 // PROFILE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            ABOUT & BACKGROUND
          </h2>
          <p className="text-base text-muted max-w-2xl font-sans">
            Engineering foundation, academic qualifications, and technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Professional Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-surface/70 border border-border-subtle space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-muted pb-3 border-b border-border-subtle">
                <Terminal className="w-4 h-4 text-accent-blue" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>

              <p className="text-base sm:text-lg text-foreground leading-relaxed font-sans font-normal">
                {professionalSummary}
              </p>

              {/* Verified Competencies */}
              <div className="pt-2">
                <span className="font-mono text-xs text-muted block mb-3 uppercase tracking-wider">
                  Core Engineering Capabilities:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="blue">Multi-Agent Systems</Badge>
                  <Badge variant="violet">Document Intelligence & OCR</Badge>
                  <Badge variant="cyan">FastAPI & React Architectures</Badge>
                  <Badge variant="emerald">Offline BLE Mesh Protocols</Badge>
                  <Badge variant="outline">Automated Evaluation Rubrics</Badge>
                  <Badge variant="outline">PostgreSQL & Role-Based Access</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certification Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-surface/70 border border-border-subtle hover:border-border-strong transition-colors space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-accent-blue uppercase tracking-wider font-semibold block">
                    EDUCATION
                  </span>
                  <h3 className="font-bold text-base text-foreground font-sans">
                    {profile.education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-1 pl-11 text-xs md:text-sm text-muted font-sans">
                <p className="text-foreground font-medium">
                  {profile.education.institution}
                </p>
                <div className="flex items-center justify-between pt-1 font-mono text-xs">
                  <span className="text-muted">{profile.education.period}</span>
                  <span className="text-accent-blue font-bold px-2 py-0.5 bg-accent-blue/10 rounded border border-accent-blue/20">
                    {profile.education.grade}
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-2xl bg-surface/70 border border-border-subtle hover:border-border-strong transition-colors space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-accent-violet uppercase tracking-wider font-semibold block">
                    CERTIFICATION
                  </span>
                  <h3 className="font-bold text-base text-foreground font-sans">
                    {profile.certification.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-1 pl-11 text-xs md:text-sm text-muted font-sans">
                <p className="text-foreground font-medium">
                  {profile.certification.issuer}
                </p>
                <div className="pt-1 font-mono text-xs text-muted">
                  Issued: <span className="text-foreground font-semibold">{profile.certification.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface ProjectComponent {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  technologies: string[];
  problem: string;
  whyItMatters: string;
  systemArchitecture: string;
  workflow: string[];
  keyComponents: ProjectComponent[];
  implementation: string[];
  resultStatus: string;
  githubUrl?: string;
  accentColor: 'blue' | 'violet' | 'cyan' | 'emerald';
  category: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface ProfileData {
  name: string;
  title: string;
  roles: string[];
  headline: string;
  supportingStatement: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  education: Education;
  certification: Certification;
  coreDomains: string[];
}

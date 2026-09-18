import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'PROGRAMMING',
    description: 'Core languages utilized for system engineering, ML pipelines, and service logic.',
    skills: ['Python', 'Java', 'JavaScript', 'C/C++'],
  },
  {
    category: 'FRONTEND & BACKEND',
    description: 'Full-stack application frameworks, API architectures, and web interfaces.',
    skills: ['React', 'HTML', 'CSS', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'DATABASES',
    description: 'Relational and document data stores for multi-tenant and application state.',
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI / ML',
    description: 'Artificial intelligence paradigms, agent coordination, and language models.',
    skills: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'NLP',
      'OCR',
      'Multi-Agent Systems',
    ],
  },
  {
    category: 'TOOLS & ENVIRONMENT',
    description: 'Development, version control, containerization, and platform tooling.',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'],
  },
];

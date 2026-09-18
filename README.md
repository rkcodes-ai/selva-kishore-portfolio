# Selva Kishore C — Engineering Portfolio

Personal engineering portfolio website for **Selva Kishore C**, AI/ML Engineer, Full-Stack Developer, and Systems Builder. Designed with a modern, dark technical aesthetic inspired by developer tooling interfaces (Vercel, Linear), focusing on real-world systems, document intelligence, multi-agent architectures, and resilient software.

---

## Overview

This portfolio showcases engineering projects and technical capabilities across:
- **Artificial Intelligence & Machine Learning:** Multi-agent collaboration, OCR pipelines, NLP, and model-assisted evaluation engines.
- **Document Intelligence:** End-to-end automated answer-script processing, handwriting extraction, and rubric-grounded assessment.
- **Full-Stack Application Development:** High-performance React interfaces, FastAPI microservices, Node.js runtimes, and PostgreSQL data persistence.
- **Resilient & Offline Systems:** Decentralized Bluetooth Low Energy (BLE) GATT mesh networking for communications in network-constrained environments.

---

## Featured Projects

1. **IntelliGrade** — *AI Answer Script Evaluation System*
   - Automated end-to-end processing pipeline: document upload → OCR ingestion → question segmentation → rubric-assisted evaluation → faculty review dashboard.
   - Built with Python, FastAPI, React, PostgreSQL, OCR, and AI/ML.

2. **AITOOLS** — *Multi-Agent AI Collaboration & Orchestration Platform*
   - Coordinated multi-agent execution framework with centralized task orchestration, role delegation (Researcher, Analyst, Developer), and real-time topology monitoring.
   - Built with Node.js, React, AI / LLMs, and Multi-Agent Architecture.

3. **DisasterMesh** — *Offline Emergency Communication System*
   - Decentralized, ad-hoc peer-to-peer mesh networking utilizing BLE GATT characteristics, multi-hop packet relay, loop deduplication, and store-and-forward caching for disaster zones.
   - Built for Mobile, BLE, and Mesh Networking.

4. **Emergency Route Analyzer** — *AI-Enhanced Emergency Route Decision Support System*
   - Spatial road network graph analysis combining historical traffic profiles, dynamic hazard inputs, and custom edge-weighting for emergency ambulance navigation.
   - Built with Python, AI/ML, and Data Science.

---

## Tech Stack

- **Frontend Core:** React 19, TypeScript, Vite 8
- **Styling & Design System:** Tailwind CSS v4, custom CSS tokens, Lucide React icons
- **Animations:** Framer Motion with automated `prefers-reduced-motion` compliance
- **Architecture:** Zero-runtime bloat, pure SVG technical visualizations, accessible HTML5 semantics

---

## Project Structure

```
├── public/
│   ├── Selva_Kishore_C_Resume.pdf    # Direct download PDF resume
│   ├── Selva_Kishore_C_Resume.docx   # Direct download DOCX resume
│   └── favicon.svg                   # Custom technical SKC favicon
├── src/
│   ├── components/
│   │   ├── navigation/               # Navbar & Footer
│   │   ├── project/                  # ProjectCard & CaseStudyModal
│   │   ├── ui/                       # Button, Badge, Modal, Icons
│   │   └── visualization/            # Custom interactive SVG visualizers
│   ├── data/
│   │   ├── profile.ts                # Biographical and contact source of truth
│   │   ├── projects.ts               # Detailed project case study data
│   │   └── skills.ts                 # Technical capabilities matrix
│   ├── hooks/
│   │   ├── useTheme.ts               # LocalStorage-persisted dark/light engine
│   │   └── useReducedMotion.ts       # Accessibility motion-reduction hook
│   ├── sections/                     # Page sections (Hero, WhatIBuild, Projects, etc.)
│   ├── types/                        # Strict TypeScript models
│   ├── App.tsx                       # Main application shell
│   └── main.tsx                      # Vite React entrypoint
├── index.html                        # Semantic HTML with SEO meta tags
├── package.json                      # Scripts & dependencies
├── tsconfig.app.json                 # Strict TypeScript client configuration
├── tsconfig.node.json                # Strict TypeScript node configuration
└── vite.config.ts                    # Vite build & alias configuration
```

---

## Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/rkcodes-ai/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Contact & Links

- **Name:** Selva Kishore C
- **Email:** [selvakishore2020@gmail.com](mailto:selvakishore2020@gmail.com)
- **GitHub:** [github.com/rkcodes-ai](https://github.com/rkcodes-ai)
- **LinkedIn:** [linkedin.com/in/selva-kishore-c-733520419](https://linkedin.com/in/selva-kishore-c-733520419)

---

## License

This project is open source and available under the [MIT License](LICENSE).

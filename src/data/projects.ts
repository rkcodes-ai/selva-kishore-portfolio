import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'intelligrade',
    number: '01',
    title: 'INTELLIGRADE',
    subtitle: 'AI Answer Script Evaluation System',
    shortDescription:
      'AI-powered platform automating answer-script processing and evaluation, covering document upload, OCR-based question extraction, and model-assisted answer evaluation.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'OCR', 'AI/ML'],
    category: 'Document Intelligence & Evaluation',
    accentColor: 'blue',
    workflow: [
      'ANSWER SCRIPT',
      'DOCUMENT UPLOAD',
      'OCR PROCESSING',
      'QUESTION EXTRACTION',
      'AI EVALUATION',
      'FACULTY REVIEW',
    ],
    problem:
      'Evaluating physical and scanned handwritten answer scripts at scale is manually exhausting, prone to grading fatigue, inconsistent across evaluators, and administratively slow for academic institutions.',
    whyItMatters:
      'Automating text extraction, question segmentation, and rubric-grounded preliminary evaluation reduces manual grading overhead while maintaining complete human-in-the-loop oversight through faculty review dashboards.',
    systemArchitecture:
      'FastAPI microservices orchestrating document preprocessing, OCR ingestion, question segmentation, and model-assisted assessment against rubrics, backed by PostgreSQL with role-based access control (RBAC) and audit logging.',
    keyComponents: [
      {
        title: 'Document Ingestion & OCR Pipeline',
        description:
          'Ingests multi-page scanned answer scripts, performs contrast normalization, and utilizes optical character recognition to extract handwritten and printed text.',
      },
      {
        title: 'Question Extraction & Segmentation',
        description:
          'Intelligently aligns OCR output with official question schemas and answer keys to segment multi-part student responses.',
      },
      {
        title: 'Model-Assisted Evaluation Engine',
        description:
          'Evaluates student responses against standard grading rubrics, generating preliminary scores and explanatory reasoning to assist evaluators.',
      },
      {
        title: 'Side-by-Side Faculty Review Dashboard',
        description:
          'React interface presenting the original scanned script alongside extracted answers and AI evaluation for final human verification and override.',
      },
      {
        title: 'Institutional RBAC & Audit Trail',
        description:
          'Multi-tenant authentication, role-based access control, and tamper-resistant audit logging tracking all grading revisions.',
      },
    ],
    implementation: [
      'Designed the full end-to-end processing pipeline: answer-script upload → OCR → question extraction → AI evaluation → faculty review.',
      'Implemented robust FastAPI backend endpoints to handle asynchronous document processing and evaluation workflows.',
      'Built authentication, role-based access control (RBAC), and audit logging to support multi-tenant institutional deployment.',
      'Developed responsive React review interfaces with synchronized document scrolling and annotation support.',
    ],
    resultStatus:
      'Core evaluation pipeline and review interfaces operational, successfully automating document ingestion, OCR extraction, and rubric-assisted scoring.',
    githubUrl: 'https://github.com/rkcodes-ai',
  },
  {
    id: 'aitools',
    number: '02',
    title: 'AITOOLS',
    subtitle: 'Multi-Agent AI Collaboration & Orchestration Platform',
    shortDescription:
      'Platform enabling specialized AI agents to collaborate on complex, multi-step tasks through coordinated workflows and inter-agent communication.',
    technologies: ['Node.js', 'React', 'AI / LLMs', 'Multi-Agent Architecture'],
    category: 'Multi-Agent Systems',
    accentColor: 'violet',
    workflow: [
      'ORCHESTRATOR',
      'TASK DECOMPOSITION',
      'AGENT DELEGATION',
      'INTER-AGENT SYNC',
      'SYNTHESIS & OUTPUT',
    ],
    problem:
      'Single-prompt LLM systems struggle with complex, multi-step engineering and research challenges that demand distinct domain expertise, iterative verification, and persistent execution state.',
    whyItMatters:
      'Decomposing workflows across coordinated, specialized agents (such as Orchestrator, Researcher, Analyst, and Developer) yields higher accuracy, structured reasoning, and automated quality verification.',
    systemArchitecture:
      'Event-driven agent orchestration architecture with dynamic task routing, inter-agent messaging bus, stateful execution contexts, and an interactive real-time visual monitor in React.',
    keyComponents: [
      {
        title: 'Central Task Orchestrator',
        description:
          'Parses high-level user directives, builds dependency graphs, and orchestrates task dispatching to specialized downstream agents.',
      },
      {
        title: 'Specialized Agent Network',
        description:
          'Configurable agent roles (Researcher, Analyst, Developer, Synthesizer) each equipped with domain prompts, context buffers, and tool interfaces.',
      },
      {
        title: 'Inter-Agent Communication Protocol',
        description:
          'Structured message-passing system enabling agents to exchange partial results, request clarifications, and peer-verify outputs.',
      },
      {
        title: 'Automated Task Execution Engine',
        description:
          'Non-blocking runtime managing concurrent agent tasks, handling retries, and synthesizing final aggregated outputs.',
      },
      {
        title: 'Interactive Topology Dashboard',
        description:
          'React frontend displaying live agent states, message transit telemetry, and workflow progress visualization.',
      },
    ],
    implementation: [
      'Architected agent orchestration, task coordination, workflow execution, and inter-agent communication protocols.',
      'Constructed scalable Node.js components for concurrent agent interaction and automated task routing.',
      'Developed structured message envelopes ensuring reliable data transfer between agent execution steps.',
      'Created an intuitive monitoring interface visualizing real-time agent collaboration and execution milestones.',
    ],
    resultStatus:
      'Platform architecture functional, supporting coordinated multi-agent task execution, dynamic routing, and automated synthesis.',
    githubUrl: 'https://github.com/rkcodes-ai',
  },
  {
    id: 'disastermesh',
    number: '03',
    title: 'DISASTERMESH',
    subtitle: 'Offline Emergency Communication System',
    shortDescription:
      'Offline-first communication system for emergency scenarios where conventional cellular and internet networks are unavailable.',
    technologies: ['Mobile', 'BLE', 'Mesh Networking'],
    category: 'Resilient Systems & Networking',
    accentColor: 'cyan',
    workflow: [
      'OFFLINE NODE',
      'BLE DISCOVERY',
      'PEER HANDSHAKE',
      'GATT PACKET RELAY',
      'MULTI-HOP DELIVERY',
    ],
    problem:
      'During extreme natural disasters, telecommunications infrastructure and cellular towers often suffer catastrophic physical failure, leaving victims and emergency responders isolated.',
    whyItMatters:
      'A decentralized, self-forming mesh network transforms everyday mobile devices into relay nodes, enabling distress beacons, GPS coordinates, and urgent messages to propagate across hops without internet.',
    systemArchitecture:
      'Ad-hoc decentralized peer-to-peer mesh networking built on Bluetooth Low Energy (BLE) GATT profiles, utilizing packet flooding with TTL constraints, loop prevention, and store-and-forward caching.',
    keyComponents: [
      {
        title: 'BLE GATT Transport Layer',
        description:
          'Optimized binary serialization and fragmentation engine delivering packets across low-energy Bluetooth characteristics.',
      },
      {
        title: 'Autonomous Peer Discovery',
        description:
          'Continuous background advertising and scanning routine establishing mesh connections with proximate mobile nodes.',
      },
      {
        title: 'Multi-Hop Relay & Loop Prevention',
        description:
          'Decentralized routing algorithm incorporating hop-count limits (TTL) and message hash deduplication to eliminate routing loops.',
      },
      {
        title: 'Store-and-Forward Cache',
        description:
          'Persistent message queue preserving undelivered emergency packets until an active peer node is discovered.',
      },
      {
        title: 'Emergency Distress Interface',
        description:
          'High-contrast emergency UI designed for swift transmission of pre-formatted SOS signals, medical triage status, and coordinates.',
      },
    ],
    implementation: [
      'Engineered an offline-first communication architecture tailored for disaster response where reliability takes precedence over throughput.',
      'Implemented BLE GATT-based packet transport and hybrid mesh communication for resilient multi-hop propagation.',
      'Built loop detection and message deduplication algorithms to maintain network stability during broadcast flooding.',
      'Designed emergency mobile workflows ensuring intuitive operation under high-stress conditions.',
    ],
    resultStatus:
      'Core mesh protocol verified with multi-hop packet forwarding, peer handshake discovery, and store-and-forward emergency relay.',
    githubUrl: 'https://github.com/rkcodes-ai',
  },
  {
    id: 'emergency-route-analyzer',
    number: '04',
    title: 'EMERGENCY ROUTE ANALYZER',
    subtitle: 'AI-Enhanced Emergency Route Decision Support System',
    shortDescription:
      'Decision-support system applying data-driven route analysis to support efficient emergency ambulance routing under dynamic conditions.',
    technologies: ['Python', 'AI/ML', 'Data Science'],
    category: 'Spatial AI & Decision Systems',
    accentColor: 'emerald',
    workflow: [
      'AMBULANCE DISPATCH',
      'ROAD NETWORK INGESTION',
      'TRAFFIC & HAZARDS',
      'AI/ML ROUTE SCORING',
      'DECISION SUPPORT',
    ],
    problem:
      'Standard GPS navigation engines optimize for civilian convenience rather than the mission-critical constraints of emergency medical transport navigating dynamic roadblocks, flood levels, and corridor blockages.',
    whyItMatters:
      'Every minute saved during emergency transit directly impacts patient survival. Data-driven route evaluation provides dispatchers and ambulance crews with risk-adjusted corridor recommendations.',
    systemArchitecture:
      'Spatial road network graph coupled with predictive machine learning modules evaluating roadway friction, historical congestion patterns, and dynamic situational constraints.',
    keyComponents: [
      {
        title: 'Spatial Graph Road Model',
        description:
          'Models complex urban road networks with directional constraints, lane availability, and priority emergency corridors.',
      },
      {
        title: 'Dynamic Hazard Assessment',
        description:
          'Ingests real-time incident reports, weather impacts, and temporary blockages to dynamically update graph edge weights.',
      },
      {
        title: 'Predictive Transit Scoring Engine',
        description:
          'Machine learning model analyzing historical transit profiles to forecast transit variability and identify optimal routing options.',
      },
      {
        title: 'Dispatcher Decision Interface',
        description:
          'Technical decision-support dashboard highlighting primary and secondary corridors with clear risk-adjusted metric breakdowns.',
      },
    ],
    implementation: [
      'Developed data-driven spatial graph analysis routines in Python for emergency routing analysis.',
      'Built predictive evaluation models to assist real-time decision-making under varying road conditions.',
      'Formulated custom edge-weighting algorithms reflecting emergency transit priorities (clearance speed vs. distance).',
      'Tested algorithm performance across diverse simulated emergency dispatch scenarios.',
    ],
    resultStatus:
      'Core decision-support algorithms and spatial route evaluation engine implemented and validated across simulated dispatch scenarios.',
    githubUrl: 'https://github.com/rkcodes-ai',
  },
];

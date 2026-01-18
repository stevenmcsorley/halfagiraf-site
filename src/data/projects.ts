export interface Project {
    id: string;
    title: string;
    status: string;
    category: string;
    audience: string;
    summary: string;
    capabilities: string[];
    technicalArchitecture: Record<string, string>;
    imageUrl?: string;
    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: "panelforge",
        title: "PanelForge",
        status: "Active / Production-ready",
        category: "Desktop-first web application",
        audience: "Enthusiasts, modders, system builders, AIDA64 users",
        summary: "PanelForge is a browser-based design and simulation tool for creating AIDA64 SensorPanel layouts without running AIDA64 or owning target hardware. It replicates AIDA64’s real rendering and animation model, enabling accurate design, preview, and export entirely in the browser.",
        capabilities: [
            "Fixed-resolution, pixel-perfect canvas (800×480, 1024×600, 1280×400, 1920×480)",
            "Drag-and-drop panel editor with precise layout control",
            "Full widget system aligned with AIDA64 behaviour",
            "Text widgets (static or sensor-bound)",
            "Image widgets (static, rotating, masked)",
            "Frame-based image sequences for gauges",
            "Built-in sensor simulation engine (Static, Sine, Random, Manual)",
            "Accurate AIDA64-compatible export (PNG, JSON)"
        ],
        technicalArchitecture: {
            "Frontend": "React 18 + TypeScript",
            "Canvas Rendering": "Konva.js via react-konva",
            "State Management": "Zustand",
            "Build Tooling": "Vite",
            "Simulation Engine": "Custom, deterministic sensor model"
        }
    },
    {
        id: "pulse-erp",
        title: "Pulse ERP",
        status: "Demo-ready / Architecture showcase",
        category: "Event-driven ERP & BI platform",
        audience: "Technical stakeholders, architects, hiring managers, system engineers",
        summary: "Pulse ERP is a modern, event-driven Enterprise Resource Planning system designed to demonstrate production-grade architecture patterns on affordable hardware. It delivers core ERP functionality with real-time business intelligence, running fully containerised on a Raspberry Pi 5. The project showcases how microservices, streaming, and analytics can be composed into a coherent system without enterprise bloat.",
        imageUrl: "/images/projects/pulse-dashboard.png",
        gallery: [
            "/images/projects/pulse-dashboard.png",
            "/images/projects/pulse-inventory.png",
            "/images/projects/pulse-orders.png",
            "/images/projects/pulse-order-details.png",
            "/images/projects/pulse-stock.png"
        ],
        capabilities: [
            "Order Management with deterministic state transitions",
            "Inventory Control with automatic reservation",
            "Billing & Invoicing with async generation",
            "Real-Time Analytics (Sales, Inventory, Cashflow)",
            "Event-Driven Architecture via NATS JetStream",
            "Fully automated end-to-end Playwright tests",
            "Runs on constrained hardware (Raspberry Pi 5) while retaining observability"
        ],
        technicalArchitecture: {
            "Frontend": "Next.js 14, TypeScript, Tailwind",
            "Backend Services": "FastAPI, Python 3.11",
            "Data & Messaging": "PostgreSQL 16, DuckDB, NATS JetStream",
            "Observability": "Grafana, Prometheus",
            "Infrastructure": "Docker, Traefik, ARM64-optimised"
        }
    },
    {
        id: "mini-sentry",
        title: "Mini Sentry",
        status: "Advanced prototype",
        category: "Observability, error tracking, developer tooling",
        audience: "Backend engineers, platform engineers, SREs, technical leads",
        summary: "Mini Sentry is a self-hosted, Sentry-inspired error and health monitoring platform that demonstrates how modern observability systems are architected end-to-end. It mirrors the core architectural patterns of Sentry—ingestion, streaming, OLAP storage, and real-time visualization—but in a inspectable, locally runnable form.",
        imageUrl: "/images/projects/sentry.gif",
        gallery: [
            "/images/projects/sentry.gif",
            "/images/projects/mini-sentry.png"
        ],
        capabilities: [
            "Event & Session Ingestion (Error events, release health)",
            "Real-Time Processing with WebSocket live updates",
            "Error Grouping & Issue Management",
            "Release & Deployment Tracking with source maps",
            "Dashboards & Analytics (Core Web Vitals, API latency, Apdex)",
            "Server-side search with token syntax",
            "Threshold-based alerting"
        ],
        technicalArchitecture: {
            "Backend": "Django REST API, Celery",
            "Data & Streaming": "PostgreSQL, Redis, Kafka, ClickHouse",
            "Frontend": "React, TypeScript, Vite, ECharts",
            "Infrastructure": "Docker Compose"
        }
    },
    {
        id: "halcyon",
        title: "HALCYON Foundry Core",
        status: "Advanced platform prototype",
        category: "Data fusion, real-time intelligence, SOAR",
        audience: "Platform architects, senior engineers, security & intelligence teams",
        summary: "HALCYON Foundry Core is a modular, high-availability intelligence platform designed to ingest, normalize, correlate, and act on heterogeneous data sources in real time. It unifies telemetry, events, documents, and infrastructure signals into a shared ontology and lineage graph, enabling cross-domain analysis through a single interactive console.",
        imageUrl: "/images/projects/halcyon-main.png",
        gallery: [
            "/images/projects/halcyon-main.png",
            "/images/projects/halcyon-cases.png",
            "/images/projects/halcyon-alerts.png"
        ],
        capabilities: [
            "Unified Ontology & Data Fusion with Knowledge Graph",
            "Real-Time Ingestion & Normalization",
            "Interactive Intelligence Console (Map, Graph, Timeline)",
            "Alert & Case Management with ML-assisted routing",
            "Playbook Studio (Visual SOAR editor)",
            "Pluggable Enrichment Engine",
            "Anomaly Detection (Statistical & ML models)",
            "Policy-driven Security (RBAC + ABAC via OPA)"
        ],
        technicalArchitecture: {
            "Backend": "FastAPI (Python 3.12), OPA",
            "Frontend": "React, TypeScript, MapLibre GL, Cytoscape",
            "Data Fabric": "PostgreSQL, Neo4j, MinIO",
            "Streaming": "Kafka (Optional)",
            "Observability": "Prometheus, Grafana, Jaeger"
        }
    },
    {
        id: "shodown",
        title: "Shodown",
        status: "Functional prototype",
        category: "Network intelligence, asset discovery",
        audience: "Infrastructure engineers, security researchers",
        summary: "Shodown is a self-hosted, open-source network intelligence platform inspired by Shodan, designed to run entirely locally with explicit controls over scanning behavior. It combines searchable host intelligence, banner/TLS extraction, and optional active scanning, all backed by a PostgreSQL datastore optimized for fuzzy search.",
        capabilities: [
            "Host Inventory & Search (pg_trgm fuzzy search)",
            "Passive Ingestion (Certstream, TLS parsing)",
            "Active Scanning (Rate-limited, Opt-in)",
            "Service & Banner Detection (HTTP, RTSP, SSH, etc.)",
            "VPN-Routed Scanning Mode",
            "GeoIP Enrichment & Batch Scanning"
        ],
        technicalArchitecture: {
            "Backend": "FastAPI, Celery",
            "Frontend": "React, Vite, Tailwind",
            "Data": "PostgreSQL 15 (pg_trgm), Redis",
            "Scanning": "TCP connect, Masscan (optional)",
            "Infrastructure": "Docker Compose"
        }
    },
    {
        id: "intel-fusion",
        title: "Intel Fusion Demo",
        status: "Functional prototype / Demo environment",
        category: "Intelligence analysis, data fusion, visualization",
        audience: "Intelligence analysts, investigators, data scientists",
        summary: "Analyst Fusion Dashboard - London Crime Demo. A demo intelligence-analysis environment that mimics capabilities of high-end fusion systems like Palantir Gotham. This system ingests multiple public data sources (UK Police, TfL, GDELT), extracts entities, links them, and visualizes relationships over maps, graphs, and timelines to uncover patterns in London crime data.",
        imageUrl: "/images/projects/intel-fusion.png",
        capabilities: [
            "Multi-source Data Fusion (UK Police, TfL, GDELT)",
            "Interactive Mapping with clustering and heatmaps",
            "Entity Relationship Graph (Network visualization)",
            "Timeline Analysis for temporal pattern detection",
            "Semantic Search via vector embeddings",
            "Case Building & Export",
            "London-wide coverage (33 boroughs)"
        ],
        technicalArchitecture: {
            "Frontend": "React, TypeScript, Vite, TanStack Query",
            "Backend": "Node.js, NestJS, TypeScript",
            "Database": "PostgreSQL, PostGIS, pgvector",
            "Visualization": "Mapbox, Cytoscape.js, D3",
            "Infrastructure": "Docker Compose"
        }
    },
    {
        id: "pocsag",
        title: "POCSAG Intelligence",
        status: "Production-grade prototype",
        category: "Emergency intelligence, real-time analytics",
        audience: "Emergency services, resilience teams, analysts",
        summary: "The POCSAG Emergency Incident Intelligence Platform transforms raw, unstructured emergency dispatch data into a fully searchable, geocoded, classified, and analytically rich intelligence environment. It provides live situational awareness, historical replay, and predictive insight for emergency response analysis.",
        capabilities: [
            "Real-Time Ingestion (IMAP polling)",
            "Intelligent Parsing Engine (Regex-driven fault tolerance)",
            "Advanced Geospatial Accuracy (OSGB36 → WGS84)",
            "7-View Dashboard Suite (Live Map, History, Playback, Analytics)",
            "Machine-Learning Analytics (DBSCAN, K-Means predictive risk)",
            "Automated Incident Classification (14 categories)",
            "Demographic & Severity Scoring"
        ],
        technicalArchitecture: {
            "Backend": "Python, Flask",
            "Data": "SQLite (FTS enabled)",
            "ML": "scikit-learn, NumPy",
            "Geospatial": "Helmert transformation, OSGB36",
            "Frontend": "HTML templates + JS"
        }
    },
    {
        id: "mini-json-summarizer",
        title: "Mini JSON Summarizer",
        status: "Production-Ready / Active",
        category: "Developer tooling, AI/ML, Operational insights",
        audience: "DevOps engineers, SREs, developers, compliance teams",
        summary: "Deterministic-first service for summarizing large JSON payloads with evidence, citations, redaction, and optional LLM refinement. Purpose-built for incident triage, compliance reporting, and operational insights, ensuring every claim is backed by JSONPath citations and value previews with zero hallucinations.",
        imageUrl: "/images/projects/mini-json-summarizer.png",
        gallery: [
            "/images/projects/mini-json-summarizer.png"
        ],
        capabilities: [
            "Domain-Specific Profiles (Logs, Metrics, Policy)",
            "Evidence-Based Summarization with JSONPath citations",
            "PII-Safe by Default (Field-level redaction)",
            "Streaming SSE Support for real-time dashboards",
            "Hybrid Engine (Deterministic + LLM Refinement)",
            "Zero Hallucinations Guarantee (Cites evidence)",
            "Production-Ready (Docker, Health checks, CORS)"
        ],
        technicalArchitecture: {
            "Backend": "Python 3.10+, FastAPI, Uvicorn",
            "AI/ML": "OpenAI, Anthropic, Ollama",
            "Testing": "pytest (100% coverage)",
            "Infrastructure": "Docker, Multi-stage builds",
            "Validation": "Pydantic"
        }
    },
    {
        id: "legal-dms",
        title: "Private Legal DMS",
        status: "Code Freeze / Production-Ready",
        category: "Enterprise Legal Tech, Compliance, Security",
        audience: "Law firms, compliance officers, security architects",
        summary: "Enterprise-grade, self-hosted legal DMS with WORM compliance, matter-centric workflows, and zero-trust security architecture. Built for law firms requiring on-premise security, regulatory compliance, and sophisticated access controls, featuring military-grade security and advanced clearance-based access control.",
        imageUrl: "/images/projects/legal-dms-matters.png",
        gallery: [
            "/images/projects/legal-dms-matters.png",
            "/images/projects/legal-dms-viewer.png",
            "/images/projects/legal-dms-audit.png"
        ],
        capabilities: [
            "WORM-Capable Storage (MinIO Object Lock)",
            "Zero-Trust Architecture (mTLS, OPA-based authorization)",
            "Security Clearance System (10-level RBAC)",
            "Matter Security Classifications (Confidential/Privileged)",
            "Intelligent Document Processing (OCR, Tika extraction)",
            "Full Compliance Audit Trails (ISO 27001 ready)",
            "Secure Client Portal & Cross-Firm Sharing"
        ],
        technicalArchitecture: {
            "Backend": "Node.js, NestJS, TypeORM",
            "Frontend": "React 18, TypeScript, Tailwind",
            "Security": "Keycloak, Open Policy Agent, Vault",
            "Storage": "PostgreSQL, MinIO (WORM), Redis",
            "Monitoring": "Prometheus, Grafana, Loki"
        }
    },
    {
        id: "job-hunt-ai",
        title: "Job Hunt AI",
        status: "Active / Production",
        category: "AI Productivity, Career Tech",
        audience: "Job seekers, developers",
        summary: "A comprehensive, AI-powered job hunting assistant designated to automate the entire lifecycle of a job search. Features multi-source scraping, universal AI provider support, and an interactive dashboard for managing applications, interviews, and coding tests.",
        imageUrl: "/images/projects/job-hunt-dashboard.png",
        gallery: [
            "/images/projects/job-hunt-dashboard.png",
            "/images/projects/job-hunt-analytics.png",
            "/images/projects/job-hunt-education.png",
            "/images/projects/job-hunt-settings.png"
        ],
        capabilities: [
            "Multi-Source Scraping (LinkedIn, Indeed, CWJobs)",
            "Universal AI Provider Support (Groq, OpenAI, Claude, DeepSeek, Local)",
            "AI-Powered CV Matching & Cover Letter Generation",
            "Interactive React Dashboard",
            "AI Live Coding Interview Simulator",
            "Multi-User Authentication with Data Isolation",
            "Technical Skill Extraction & Analysis"
        ],
        technicalArchitecture: {
            "Backend": "Node.js (Modular), SQLite, Knex.js",
            "Frontend": "React, Tailwind CSS, Vite",
            "AI": "Universal Adapter (Groq, OpenAI, Claude, DeepSeek, Ollama)",
            "Infrastructure": "Docker Compose"
        }
    },
    {
        id: "vidstream",
        title: "VidStream",
        status: "Production / v4.1",
        category: "Video Streaming Platform",
        audience: "Content Consumers, Archivists",
        summary: "A private, self-hosted video streaming service featuring a personalized 'TV Channel' experience. It tracks user viewing habits to create continuous, curated feeds and statistics. The platform includes an automated content ingestion system that manages over 29 specialized bot users to populate the library with diverse content categories 24/7.",
        imageUrl: "/images/projects/vidstream-feed.jpg",
        gallery: [
            "/images/projects/vidstream-feed.jpg",
            "/images/projects/vidstream-trending.jpg",
            "/images/projects/vidstream-channel.png",
            "/images/projects/vidstream-manage.png",
            "/images/projects/vidstream-search.png"
        ],
        technicalArchitecture: {
            "Frontend": "React, TailwindCSS",
            "Backend": "FastAPI (Python)",
            "Database": "PostgreSQL",
            "Processing": "FFmpeg, Docker",
            "Infrastructure": "Docker Compose"
        },
        capabilities: [
            "Personalized TV Channel Feed with Auto-Play",
            "User Watch History & Viewing Statistics Dashboard",
            "Automated Content Bot System (29+ bots, 24/7 schedule)",
            "Smart Tag-based Video Recommendations",
            "Multi-Resolution Video Transcoding (FFmpeg)"
        ]
    },
    {
        id: "jira-clone",
        title: "Jira Clone",
        status: "Production / MVP",
        category: "Project Management Tool",
        audience: "Developers, Agile Teams, Project Managers",
        summary: "A modern, high-performance project management tool built from scratch to replicate core Jira functionality. It features a fully interactive Kanban board with drag-and-drop capabilities, real-time collaboration powered by WebSockets, and a robust issue tracking system. One of its standout features is a documented AI integration pattern, allowing agents like Claude to autonomously manage tasks and triage issues.",
        imageUrl: "/images/projects/jira-clone-board.png",
        gallery: [
            "/images/projects/jira-clone-board.png",
            "/images/projects/jira-clone-sprint.png",
            "/images/projects/jira-clone-reports.png",
            "/images/projects/jira-clone-issues.png"
        ],
        technicalArchitecture: {
            "Frontend": "React 18, TypeScript, TailwindCSS, Zustand",
            "Backend": "NestJS, TypeORM, Socket.IO",
            "Database": "PostgreSQL, Redis",
            "Storage": "MinIO (S3 Compatible)",
            "Infrastructure": "Docker Compose, NGINX"
        },
        capabilities: [
            "Kanban Board with @dnd-kit Drag-and-Drop",
            "Real-time Updates via WebSockets",
            "Comprehensive Issue Tracking & Sprints",
            "AI Agent Integration Documentation (Claude)",
            "Role-Based Access Control (RBAC)"
        ]
    },
    {
        id: "videoshrink",
        title: "VideoShrink",
        status: "Active / Self-Hosted",
        category: "Media Processing & Transcoding",
        audience: "Self-Hosters, Archivists, Developers",
        summary: "A self-hosted video compression and transcoding platform with a modern web UI. VideoShrink queues intensive jobs via Redis, processes them with FFmpeg workers, and stores results locally or in S3-compatible storage. It features a drag-and-drop interface for converting formats, trimming video, extracting audio, and creating optimized GIFs.",
        imageUrl: "/images/projects/videoshrink_xl.gif",
        gallery: [
            "/images/projects/videoshrink_xl.gif",
            "/images/projects/videoshrink-main.png"
        ],
        technicalArchitecture: {
            "Frontend": "React, Vite, TailwindCSS (Nginx)",
            "Backend": "Fastify API, Prisma, BullMQ",
            "Worker": "Node.js, FFmpeg",
            "Database": "PostgreSQL, Redis",
            "Storage": "MinIO (S3 Compatible) or Local",
            "Infrastructure": "Docker Compose"
        },
        capabilities: [
            "Drag-and-Drop Video/Audio Uploads",
            "Queue-based Transcoding (BullMQ + Redis)",
            "Format Conversion & Audio Extraction",
            "Video Trimming & GIF Creation",
            "Real-time Progress Tracking",
            "S3/MinIO Storage Integration"
        ]
    },
    {
        id: "small-llm",
        title: "smallLLM",
        status: "Active / Local-First",
        category: "AI/ML, Local LLM, RAG",
        audience: "Developers, AI Researchers, Privacy advocates",
        summary: "A local-first LLM toolkit designed to run on consumer hardware. It provides a tiny chat interface, realtime text analysis, RAG over local files, and lightweight image generation. The system leverages Ollama for text inference, Qdrant for vector storage, and a custom FastAPI service for image generation, all orchestrated via Docker Compose.",
        imageUrl: "/images/projects/small-llm-error-analysis.png",
        gallery: [
            "/images/projects/small-llm-error-analysis.png",
            "/images/projects/small-llm-input.png",
            "/images/projects/small-llm-positive.png",
            "/images/projects/small-llm-fraud.png"
        ],
        technicalArchitecture: {
            "Frontend": "Node/Express, Static HTML/JS",
            "LLM Engine": "Ollama (Qwen 2.5 0.5b)",
            "RAG Pipeline": "@xenova/transformers + Qdrant",
            "Image Gen": "FastAPI + aMUSEd 256",
            "Infrastructure": "Docker Compose"
        },
        capabilities: [
            "Realtime Text Analysis (Sentiment, Keywords)",
            "Local RAG with Document Ingestion (txt, md, pdf)",
            "Lightweight Image Generation (256x256)",
            "100% Local Execution (Privacy Focused)",
            "Debounced Real-time Inference",
            "Vector Database Integration (Qdrant)"
        ]
    },
    {
        id: "tubedrop",
        title: "TubeDrop",
        status: "Active / Self-Hosted",
        category: "Media Archival & Automation",
        audience: "Data Archivists, Content Creators",
        summary: "TubeDrop is a robust, self-hosted YouTube downloader and archival tool. It combines a modern React frontend with a scalable Python/FastAPI backend to manage download queues via Redis. It supports batch operations, real-time WebSocket progress tracking, and custom preset management for diverse media formats, all backed by a durable SQLite database.",
        imageUrl: "/images/projects/tubedrop-dashboard.png",
        gallery: [
            "/images/projects/tubedrop-dashboard.png",
            "/images/projects/tubedrop-queue.png"
        ],
        technicalArchitecture: {
            "Frontend": "React, Vite, TailwindCSS, Zustand",
            "Backend": "FastAPI, SQLModel, Redis",
            "Worker": "Python, yt-dlp, FFmpeg",
            "Database": "SQLite + Redis (Queue)",
            "Infrastructure": "Docker Compose"
        },
        capabilities: [
            "Batch Video/Playlist Downloads",
            "Real-time WebSocket Progress Updates",
            "Custom Quality Presets & Metadata embedding",
            "Live Job Queue Management",
            "Persistent Artifact Storage",
            "Durable SQLite Job History"
        ]
    },
    {
        id: "playlist-ai",
        title: "Playlist AI",
        status: "Active / Self-Hosted",
        category: "AI/ML, Music Recommendation",
        audience: "Music Enthusiasts, Developers, Curators",
        summary: "Playlist AI is a full-stack recommendation engine that generates YouTube playlists from AI-curated 'recipes'. It uses a local embedding pipeline (Sentence Transformers) to vectorise video metadata and stores them in PostgreSQL with pgvector. The system ranks candidates by semantic similarity to user queries and mood descriptions, updating user taste profiles over time.",
        imageUrl: "/images/projects/playlist-ai-suggestions.png",
        gallery: [
            "/images/projects/playlist-ai-suggestions.png",
            "/images/projects/playlist-ai-recipes.png",
            "/images/projects/playlist-ai-recipe-create.png",
            "/images/projects/playlist-ai-search.png",
            "/images/projects/playlist-ai-playlists.png"
        ],
        technicalArchitecture: {
            "Frontend": "React, Vite, TailwindCSS (Caddy)",
            "Backend": "Go (Golang) API",
            "AI Service": "FastAPI + Sentence Transformers",
            "Database": "PostgreSQL + pgvector",
            "Infrastructure": "Docker Compose"
        },
        capabilities: [
            "AI-Powered Video Ranking (Semantic Search)",
            "YouTube Playlist Generation (OAuth)",
            "Recipe-Based Curation (Query + Mood)",
            "User Taste Profile Learning",
            "Local Embedding Pipeline",
            "Server-Side Session Management"
        ]
    }
];

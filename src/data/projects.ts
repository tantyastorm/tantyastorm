import { projectUrls } from "./config";

export type ProjectStatus =
  | "Portfolio Project"
  | "Private Project"
  | "Ongoing Private Project"
  | "Repository Available on Request"
  | "Demo Available on Request";

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  challenge: string;
  resolution: string;
};

export type ProjectDecision = {
  title: string;
  explanation: string;
};

export type ArchitectureItem = {
  title: string;
  description: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCaseStudySection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  afterListParagraphs?: string[];
};

export type WebsiteShowcase = {
  title: string;
  url: string;
  desktopImage: string;
  desktopImageAlt: string;
  mobileImage?: string;
  mobileImageAlt?: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  implementation: string[];
  liveLabel: string;
};

export type ProjectRepositoryAccess = {
  title: string;
  text: string;
  buttonLabel: string;
};

export type Project = {
  slug: keyof typeof projectUrls;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  detailedDescription: string;
  seoTitle?: string;
  seoDescription?: string;
  heroSubtitle?: string;
  heroText?: string;
  requestAccessLabel?: string;
  exploreFeaturesLabel?: string;
  technologies: string[];
  badges?: string[];
  features: ProjectFeature[];
  plannedCapabilities?: string[];
  developmentStatus?: Array<{ label: string; value: string }>;
  image?: string;
  imageAlt?: string;
  repositoryUrl?: string;
  architectureUrl?: string;
  liveDemoUrl?: string;
  videoUrl?: string;
  role?: string;
  problem?: string;
  solution?: string;
  goals?: string[];
  technicalApproach?: string[];
  workflow?: string[];
  architecture?: ArchitectureItem[];
  qualityNotes?: string[];
  challenges?: ProjectChallenge[];
  decisions?: ProjectDecision[];
  results?: string[];
  lessons?: string[];
  videoCaption?: string;
  gallery?: ProjectGalleryItem[];
  limitations?: string;
  caseStudyIntro?: string[];
  caseStudySections?: ProjectCaseStudySection[];
  websiteShowcases?: WebsiteShowcase[];
  caseStudyNotice?: string;
  sourceCodeNote?: string;
  repositoryAccess?: ProjectRepositoryAccess;
  featured: boolean;
  status: string;
  confidentialityNote?: string;
};

export const projects: Project[] = [
  {
    slug: "workflowforge",
    title: "WorkflowForge",
    shortTitle: "WorkflowForge",
    category: "Open-Source Document Workflow Automation",
    summary:
      "Open-source platform for reliable document ingestion, AI-assisted workflows, background execution, and human review.",
    detailedDescription:
      "WorkflowForge is an open-source document workflow automation platform designed for real operational use. It accepts documents, processes them through configurable workflow steps, supports AI-assisted extraction and validation, and allows human operators to review, compare, approve, retry, or reject results. The project focuses on reliability, traceability, extensibility, and clean system design rather than being a thin wrapper around an AI API.",
    seoTitle: "WorkflowForge | Open-Source Document Workflow Automation",
    seoDescription:
      "WorkflowForge is an open-source document workflow automation platform built with FastAPI, PostgreSQL, Redis, Celery, React, and Docker.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "GitHub Actions",
    ],
    badges: [
      "Active Development",
      "Open Source",
      "Built in Public",
      "Production-Oriented Architecture",
    ],
    features: [
      {
        title: "Document ingestion",
        description:
          "Accepts documents, persists metadata, and tracks document state.",
      },
      {
        title: "SHA-256 duplicate detection",
        description:
          "Hashes document content and supports duplicate-detection foundations.",
      },
      {
        title: "Idempotent execution",
        description:
          "Keeps job execution repeatable with retry and failure-handling foundations.",
      },
      {
        title: "State management",
        description:
          "Models workflow and document state so processing can be traced.",
      },
      {
        title: "PostgreSQL persistence",
        description:
          "Uses PostgreSQL with SQLAlchemy mappings and Alembic migrations.",
      },
      {
        title: "Redis and Celery",
        description:
          "Coordinates background workers, scheduled execution, and task state.",
      },
      {
        title: "Dependency health checks",
        description:
          "Checks API, database, Redis, object storage, workers, and scheduler health.",
      },
      {
        title: "S3-compatible storage",
        description:
          "Keeps document storage behind an object-storage infrastructure boundary.",
      },
      {
        title: "React operator interface",
        description:
          "Provides the frontend foundation for operational document workflows.",
      },
      {
        title: "Docker Compose environment",
        description:
          "Runs local API, frontend, database, Redis, object storage, workers, and scheduler services.",
      },
      {
        title: "Automated tests",
        description:
          "Includes backend, frontend, integration, and architecture test coverage.",
      },
      {
        title: "Public engineering record",
        description:
          "Uses GitHub Actions, ADRs, technical documentation, and incremental releases.",
      },
    ],
    plannedCapabilities: [
      "Configurable multi-step document workflows",
      "AI provider abstraction",
      "Per-step model selection",
      "Structured AI outputs with schema validation",
      "Human review and approval queues",
      "Version comparison",
      "Audit history",
      "Dead-letter and recovery tooling",
      "CSV and XLSX validation and highlighting",
      "Telegram document intake",
      "Sample workflows for invoices, resumes, and contracts",
      "Metrics, observability, and production deployment guidance",
    ],
    image: "assets/projects/new/ai_proc_platform.png",
    imageAlt:
      "WorkflowForge platform architecture and operator workflow thumbnail",
    repositoryUrl: projectUrls.workflowforge.repository,
    architectureUrl: projectUrls.workflowforge.architecture,
    role: "Full-stack platform developer",
    problem:
      "Document-heavy operations need repeatable ingestion, traceable state, review points, and resilient background processing instead of one-off AI scripts.",
    solution:
      "A modular monolith V1 combines a FastAPI backend, PostgreSQL persistence, Redis and Celery execution, S3-compatible storage, and a React operator interface with documented boundaries.",
    goals: [
      "Build a functional open-source platform for document ingestion and workflow execution.",
      "Keep completed capabilities clearly separated from planned AI and review features.",
      "Document architecture, decisions, tests, CI, and release phases in public.",
    ],
    technicalApproach: [
      "Use FastAPI for the HTTP API and React for the operator interface.",
      "Persist domain state in PostgreSQL through SQLAlchemy and Alembic.",
      "Coordinate asynchronous work with Redis, Celery workers, and scheduled tasks.",
      "Store document objects through S3-compatible infrastructure abstractions.",
      "Cover backend, frontend, integration, and architecture behavior with automated tests.",
    ],
    workflow: [
      "Ingest a document and persist its metadata.",
      "Hash content with SHA-256 and detect duplicate content.",
      "Create idempotent processing work and track state changes.",
      "Execute background tasks through Redis-backed Celery workers.",
      "Expose health and dependency status for local development and CI.",
    ],
    architecture: [
      {
        title: "Modular monolith V1",
        description:
          "The first version keeps deployment simple while maintaining clear domain boundaries and infrastructure abstractions.",
      },
      {
        title: "FastAPI application layer",
        description:
          "Exposes REST endpoints and dependency health checks around application services.",
      },
      {
        title: "PostgreSQL persistence",
        description:
          "Uses SQLAlchemy mappings and Alembic migrations for durable workflow state.",
      },
      {
        title: "Redis and Celery execution",
        description:
          "Coordinates background workers, scheduled execution, retries, and operational health.",
      },
      {
        title: "S3-compatible storage",
        description:
          "Keeps document storage behind an infrastructure boundary for local and production-compatible object storage.",
      },
      {
        title: "React operator interface",
        description:
          "Provides the frontend foundation for document, case, batch, and system-status views.",
      },
      {
        title: "Docker Compose environment",
        description:
          "Runs API, frontend, database, Redis, object storage, workers, and scheduler services locally.",
      },
      {
        title: "Pytest and GitHub Actions",
        description:
          "Verifies domain, application, infrastructure, API, frontend, integration, and architecture behavior in CI.",
      },
    ],
    qualityNotes: [
      "Domain modelling around documents, batches, cases, identity, authorization, and audit concerns.",
      "REST API design with typed schemas and explicit dependency boundaries.",
      "Asynchronous processing through Celery workers and scheduler tasks.",
      "Transactional consistency and idempotency for document-processing foundations.",
      "Failure-recovery foundations through retries, health checks, and task contracts.",
      "Testing strategy across unit, integration, frontend, architecture, and CI workflows.",
      "Infrastructure integration with PostgreSQL, Redis, S3-compatible storage, Docker Compose, and GitHub Actions.",
      "Maintainable Git history with incremental delivery through phases and pull requests.",
    ],
    decisions: [
      {
        title: "Modular monolith first",
        explanation:
          "V1 keeps operational complexity controlled while preserving clear boundaries for future extraction.",
      },
      {
        title: "Infrastructure behind ports",
        explanation:
          "Database, Redis, storage, and health behavior are integrated without leaking infrastructure concerns into domain code.",
      },
      {
        title: "Reliability before AI breadth",
        explanation:
          "The platform foundation prioritizes state, idempotency, tests, and execution reliability before adding broader AI workflow features.",
      },
    ],
    results: [
      "Functional document ingestion and metadata persistence foundations.",
      "SHA-256 content hashing and duplicate-detection behavior.",
      "Idempotent job execution foundations.",
      "PostgreSQL, Redis, Celery, S3-compatible storage, and Docker Compose integration.",
      "Backend, frontend, integration, and architecture tests running through GitHub Actions.",
      "Architecture Decision Records and technical documentation maintained publicly.",
    ],
    lessons: [
      "AI workflow products need durable state and review boundaries before model features become useful.",
      "A public phase-based build makes architecture tradeoffs easier to audit and improve.",
    ],
    developmentStatus: [
      { label: "Status", value: "Active Development" },
      { label: "Licence", value: "Open Source" },
      {
        label: "Current stage",
        value:
          "Core platform foundation and document-processing infrastructure",
      },
      {
        label: "Development model",
        value:
          "Public repository, incremental pull requests, automated tests, and documented architecture decisions",
      },
    ],
    featured: true,
    status: "Active Development",
  },
  {
    slug: "kreacher",
    title: "Kreacher",
    shortTitle: "Kreacher",
    category: "HTML Processing and Data Normalization",
    summary:
      "A local Python tool for converting saved HTML into normalized, deduplicated, filterable records through a pluggable parser architecture.",
    detailedDescription:
      "Kreacher processes local saved HTML files with parser adapters that define supported HTML structures. The public repository includes a synthetic example adapter and synthetic fixtures, separates extraction, normalization, validation, deduplication, filtering, review, and export layers, and supports both GUI and CLI workflows for deterministic structured JSON export. Local source paths are omitted by default. It does not claim universal HTML parsing, bypass authentication or access controls, solve CAPTCHAs, or evade anti-bot systems.",
    technologies: [
      "Python",
      "PySide6",
      "Beautiful Soup",
      "HTML parsing",
      "JSON export",
      "CLI",
    ],
    features: [
      {
        title: "Parser adapter architecture",
        description:
          "Keeps supported HTML structures explicit through pluggable adapters.",
      },
      {
        title: "Saved HTML loading",
        description:
          "Processes local saved HTML files instead of reaching into authenticated sessions.",
      },
      {
        title: "Normalized record schema",
        description:
          "Converts compatible HTML into predictable structured records.",
      },
      {
        title: "Validation and deduplication",
        description:
          "Separates validation and duplicate handling from extraction.",
      },
      {
        title: "Keyword and numeric filtering",
        description: "Lets records be narrowed before review and export.",
      },
      {
        title: "GUI and CLI workflows",
        description:
          "Supports local review in a desktop interface and repeatable command-line use.",
      },
      {
        title: "Deterministic JSON export",
        description:
          "Writes normalized records and analysis data in a stable export format.",
      },
      {
        title: "Synthetic public fixtures",
        description:
          "Documents the public parser with neutral example HTML and data.",
      },
    ],
    image: "assets/projects/new/kreacher.png",
    imageAlt: "Kreacher project thumbnail",
    repositoryUrl: projectUrls.kreacher.repository,
    liveDemoUrl: projectUrls.kreacher.demo,
    videoUrl: projectUrls.kreacher.video,
    role: "Python developer",
    problem:
      "Saved HTML can be difficult to review and reuse when parsing, validation, duplicate handling, and export are mixed together.",
    solution:
      "A local parser-adapter workflow converts supported saved HTML into normalized records, validates and deduplicates them, supports filtering and review, and exports deterministic JSON.",
    goals: [
      "Process local saved HTML files through explicitly supported parser adapters.",
      "Keep extraction, normalization, validation, deduplication, filtering, review, and export separate.",
      "Publish a sanitized public version with synthetic fixtures and a synthetic example adapter.",
    ],
    technicalApproach: [
      "Load local saved HTML and route compatible files through parser adapters.",
      "Normalize extracted values into a stable record schema before validation.",
      "Deduplicate and filter records before review and JSON export.",
      "Omit local source paths from exported output by default.",
    ],
    workflow: [
      "Load one or more saved HTML files.",
      "Select or detect a compatible parser adapter.",
      "Extract and normalize records.",
      "Validate and deduplicate records.",
      "Filter and review results.",
      "Export normalized JSON and analysis data.",
    ],
    architecture: [
      {
        title: "HTML loading layer",
        description:
          "Reads local saved HTML files into the processing workflow.",
      },
      {
        title: "Parser adapter layer",
        description:
          "Defines which HTML structures are supported and how records are extracted.",
      },
      {
        title: "Normalization and validation layer",
        description:
          "Converts raw extracted values into validated structured records.",
      },
      {
        title: "Deduplication layer",
        description: "Removes repeated records before review and export.",
      },
      {
        title: "Filtering layer",
        description: "Supports keyword and numeric filtering for review.",
      },
      {
        title: "GUI and CLI presentation layer",
        description: "Provides both desktop and command-line workflows.",
      },
      {
        title: "Export layer",
        description: "Writes deterministic structured JSON output.",
      },
    ],
    qualityNotes: [
      "Adapters define supported structures instead of claiming universal HTML parsing.",
      "Public examples use synthetic fixtures.",
      "Local source paths are omitted by default.",
      "Does not bypass authentication, access controls, CAPTCHAs, or anti-bot systems.",
    ],
    challenges: [
      {
        title: "Sanitized public fixtures",
        challenge:
          "The public version needed to demonstrate parser behavior without bundling real platform data.",
        resolution:
          "The repository includes a synthetic example adapter and synthetic HTML fixtures.",
      },
      {
        title: "Clear parser scope",
        challenge:
          "HTML tools can be mistaken for universal parsers if adapter support is not explicit.",
        resolution:
          "The project describes adapters as compatibility boundaries for supported structures.",
      },
    ],
    decisions: [
      {
        title: "Adapter-based parsing",
        explanation:
          "Adapters keep structure-specific extraction code isolated from validation, filtering, and export.",
      },
      {
        title: "Synthetic public data",
        explanation:
          "Neutral fixtures make the repository public without exposing source-specific samples.",
      },
    ],
    results: [
      "Separated extraction, normalization, validation, deduplication, filtering, and export.",
      "Added neutral parser adapters.",
      "Replaced real platform fixtures with synthetic HTML.",
      "Added GUI and CLI workflows.",
      "Published a sanitized MIT-licensed public repository.",
    ],
    lessons: [
      "Parser compatibility is clearer when adapters own source-specific assumptions.",
      "Synthetic fixtures make public documentation safer and easier to test.",
    ],
    gallery: [
      {
        src: "assets/projects/kreacher/kreacher_screen.png",
        alt: "Kreacher local HTML processing, filtering, and normalized record export interface",
        caption:
          "Local saved-HTML processing workflow with filtering, deduplication, and structured export.",
      },
    ],
    featured: true,
    status: "Portfolio Project",
  },
  {
    slug: "dobby",
    title: "Dobby",
    shortTitle: "Dobby",
    category: "Browser Workflow Utility",
    summary:
      "A manual Manifest V3 browser extension for importing URL queues, navigating pages, and saving user-initiated HTML snapshots locally.",
    detailedDescription:
      "Dobby is a manual Manifest V3 browser extension for importing a generic JSON queue, opening pages one at a time, and saving local HTML snapshots only after explicit user action. Queue records can include fields such as id, title, url, status, selected, and source, with id and url required. Invalid, duplicate, unsupported, or unselected records are skipped. Navigation is user-controlled with previous and next queue movement, generated filenames are filesystem-safe, queue data is stored locally, and the extension uses minimal browser permissions without broad host permissions. It does not crawl pages automatically, automate login, submit forms, extract cookies, access authentication headers, bypass CAPTCHAs, or evade anti-bot systems.",
    technologies: [
      "Chrome Extension",
      "Manifest V3",
      "JavaScript",
      "JSON",
      "Local HTML snapshots",
    ],
    features: [
      {
        title: "Generic JSON queue import",
        description:
          "Accepts structured records with required id and url fields plus optional metadata.",
      },
      {
        title: "Manual page navigation",
        description:
          "Opens selected pages one at a time and keeps movement under user control.",
      },
      {
        title: "User-initiated snapshots",
        description:
          "Saves HTML snapshots locally only after explicit user action.",
      },
      {
        title: "Safe filename generation",
        description: "Creates filesystem-safe names for local snapshot files.",
      },
      {
        title: "Local queue state",
        description:
          "Stores imported queue state locally in the browser extension workflow.",
      },
      {
        title: "Minimal browser permissions",
        description:
          "Avoids broad host permissions and keeps the extension scope narrow.",
      },
    ],
    image: "assets/projects/new/dobby.png",
    imageAlt: "Dobby manual browser page queue and snapshot workflow",
    repositoryUrl: projectUrls.dobby.repository,
    liveDemoUrl: projectUrls.dobby.demo,
    videoUrl: projectUrls.dobby.video ?? "assets/projects/dobby/dobby-demo.mp4",
    role: "JavaScript developer",
    problem:
      "Manual page review can become hard to track when a user needs to move through a structured list of URLs and save local page snapshots consistently.",
    solution:
      "A Manifest V3 extension imports a structured URL queue, skips invalid or unsupported records, lets the user navigate previous and next pages manually, and saves snapshots only on explicit command.",
    goals: [
      "Import generic JSON queues with clear validation.",
      "Keep page navigation and snapshot saving user-controlled.",
      "Store queue state locally with minimal browser permissions.",
    ],
    technicalApproach: [
      "Validate imported records and skip invalid, duplicate, unsupported, or unselected entries.",
      "Use Manifest V3 extension APIs for a narrow browser workflow.",
      "Generate filesystem-safe snapshot filenames before local saving.",
      "Avoid broad host permissions and automated crawling behavior.",
    ],
    workflow: [
      "Import a structured JSON queue.",
      "Open a selected page through the extension.",
      "Navigate between queue records manually.",
      "Save the current page as a local HTML snapshot after explicit user action.",
    ],
    architecture: [
      {
        title: "Queue import and validation layer",
        description:
          "Checks required fields and filters invalid, duplicate, unsupported, or unselected records.",
      },
      {
        title: "Local queue state layer",
        description:
          "Stores imported queue records locally for navigation and progress.",
      },
      {
        title: "User-controlled navigation layer",
        description:
          "Supports previous and next movement through queue records without automatic crawling.",
      },
      {
        title: "Snapshot and safe-filename layer",
        description:
          "Saves local HTML snapshots on explicit action with filesystem-safe filenames.",
      },
    ],
    qualityNotes: [
      "Requires explicit user action before saving snapshots.",
      "Uses minimal browser permissions and no broad host permissions.",
      "Does not automate login, submit forms, extract cookies, access authentication headers, bypass CAPTCHAs, or evade anti-bot systems.",
    ],
    challenges: [
      {
        title: "Sanitizing a source-specific helper",
        challenge:
          "The public version needed to remove platform-specific assumptions while keeping the useful queue workflow.",
        resolution:
          "The extension now accepts generic JSON records and documents its manual boundaries.",
      },
      {
        title: "Avoiding broad browser access",
        challenge:
          "A browser extension can easily ask for more permissions than a manual workflow needs.",
        resolution:
          "The public version removes broad host permissions and keeps actions user-initiated.",
      },
    ],
    decisions: [
      {
        title: "Generic JSON queue format",
        explanation:
          "A neutral queue schema keeps the extension useful without binding it to a specific source.",
      },
      {
        title: "Manual snapshot command",
        explanation:
          "Saving snapshots only after explicit action keeps the workflow review-oriented.",
      },
    ],
    results: [
      "Converted a platform-specific helper into a neutral browser workflow utility.",
      "Removed broad host permissions.",
      "Added tests for import validation, storage, filenames, and service-worker behavior.",
      "Published the sanitized implementation under the MIT License.",
    ],
    lessons: [
      "Manual browser utilities need clear boundaries around navigation, saving, and permissions.",
      "A small queue schema can make repetitive page review easier without turning it into crawling.",
    ],
    videoCaption:
      "Local demo video of the Dobby queue navigation and snapshot workflow.",
    featured: true,
    status: "Portfolio Project",
  },
  {
    slug: "email-archive-utility",
    title: "Email Archive Utility",
    shortTitle: "Email Utility",
    category: "File Processing Automation",
    summary:
      "A local desktop utility for organizing exported EML and MSG files, extracting metadata, safely renaming files, and generating searchable TXT copies.",
    detailedDescription:
      "This utility handles file and folder input, previews planned changes, creates duplicate-safe names, converts messages into searchable text, and processes archives locally.",
    technologies: ["Python", "Desktop GUI", "File processing", "Email parsing"],
    features: [
      {
        title: "EML and MSG support",
        description:
          "Handles common exported email message formats in a local processing workflow.",
      },
      {
        title: "Metadata-based filenames",
        description:
          "Uses extracted message metadata to produce more meaningful archive filenames.",
      },
      {
        title: "Preview before modification",
        description: "Shows planned changes before file names are changed.",
      },
      {
        title: "Duplicate-safe naming",
        description:
          "Avoids overwriting files when generated names would collide.",
      },
      {
        title: "TXT conversion and progress tracking",
        description:
          "Creates searchable text copies while keeping the batch process visible.",
      },
    ],
    image: "assets/projects/new/ChatGPT Image Aug 1, 2026, 12_23_05 AM (5).png",
    imageAlt: "Email Archive Utility desktop processing interface",
    repositoryUrl: projectUrls["email-archive-utility"].repository,
    liveDemoUrl: projectUrls["email-archive-utility"].demo,
    videoUrl:
      projectUrls["email-archive-utility"].video ??
      "assets/projects/email-archive-utility-demo/email-archive-utility-demo.mp4",
    videoCaption:
      "Local demo video of the email archive renaming, preview, and processing workflow.",
    role: "Python developer",
    problem:
      "Exported EML and MSG files are difficult to search and organize when filenames and metadata are inconsistent.",
    solution:
      "A local desktop utility previews planned changes, creates duplicate-safe filenames, and generates searchable TXT copies.",
    goals: [
      "Make exported email archives easier to search and browse.",
      "Avoid unsafe batch renaming by previewing planned changes.",
      "Keep email processing local and privacy-conscious.",
    ],
    technicalApproach: [
      "Accept file and folder input for batch archive processing.",
      "Extract available email metadata for safer, more meaningful naming.",
      "Generate searchable text copies while tracking batch progress.",
    ],
    workflow: [
      "Select files or folders containing exported email messages.",
      "Preview planned metadata extraction and filename changes.",
      "Generate duplicate-safe filenames and searchable TXT copies locally.",
    ],
    architecture: [
      {
        title: "Input selection",
        description:
          "Supports local file and folder input for archive batches.",
      },
      {
        title: "Metadata extraction",
        description:
          "Reads message data needed for filenames and text conversion.",
      },
      {
        title: "Safe output layer",
        description:
          "Applies duplicate-safe naming and creates searchable TXT copies.",
      },
    ],
    qualityNotes: [
      "Previews planned changes before modifying file names.",
      "Handles duplicate-safe naming to avoid accidental overwrites.",
      "Processes archives locally for privacy-conscious file handling.",
    ],
    challenges: [
      {
        title: "Multiple email formats",
        challenge:
          "The utility needs to process both EML and MSG exports while keeping behavior understandable.",
        resolution:
          "The workflow centers on metadata extraction, preview, and conversion rather than exposing format-specific complexity.",
      },
      {
        title: "Batch rename safety",
        challenge:
          "Automated renaming can create mistakes that are hard to undo if changes are applied blindly.",
        resolution:
          "Preview and duplicate-safe naming are part of the core workflow.",
      },
    ],
    decisions: [
      {
        title: "Local desktop utility",
        explanation:
          "Local processing fits sensitive archive work better than a hosted form or backend workflow.",
      },
      {
        title: "Preview-first behavior",
        explanation:
          "Showing planned changes before modification reduces risk in batch file operations.",
      },
    ],
    results: [
      "Made exported email archives easier to search and organize locally.",
      "Created a safer flow for metadata-based renaming and text conversion.",
    ],
    lessons: [
      "File automation needs preview and collision handling as first-class features.",
      "Local tools are a good fit when data may be sensitive or private.",
    ],
    featured: false,
    status: "Portfolio Project",
  },
  {
    slug: "custom-translation-management-system",
    title: "Custom Translation Management System",
    shortTitle: "Translation System",
    category: "Desktop Application / Python",
    summary:
      "Refactored and extended a private desktop Translation Management System based on the client’s original concept. I inherited an existing V1, redesigned the application structure, and separated tightly coupled logic into maintainable modules. I handled architecture, Python development, testing, debugging, workflow improvements, glossary consistency, and final delivery. The result was a cleaner, more stable, and easier-to-maintain application prepared for continued development. Project details are limited due to NDA.",
    detailedDescription:
      "I refactored and extended a private desktop Translation Management System based on the client’s original product concept and business requirements.",
    technologies: [
      "Python",
      "Software Architecture",
      "Code Refactoring",
      "Desktop Application Development",
      "API Integration",
      "Testing and Debugging",
      "Modular Architecture",
    ],
    features: [],
    image: "assets/projects/new/translator.png",
    imageAlt: "Custom Translation Management System project thumbnail",
    role: "Python Developer & Software Architect",
    caseStudyIntro: [
      "I refactored and extended a private desktop Translation Management System based on the client’s original product concept and business requirements.",
      "The project already had a working V1 created by another developer. My role was to understand the existing codebase, identify its limitations, and transform it into a cleaner, more reliable, and maintainable application.",
    ],
    caseStudySections: [
      {
        title: "Starting Point",
        paragraphs: [
          "The original version contained the foundation of the product, but the code required significant restructuring before the application could be safely extended and maintained.",
          "I reviewed the existing implementation, traced the main workflows, identified tightly coupled responsibilities, and planned a complete architectural refactor.",
        ],
      },
      {
        title: "Complete Refactor",
        paragraphs: [
          "I reorganized the application into separate modules with clearer responsibilities.",
          "The refactor focused on:",
        ],
        list: [
          "separating user interface logic from processing logic;",
          "isolating configuration and project state;",
          "separating reusable services and utilities;",
          "reducing dependencies between components;",
          "improving error handling and recovery;",
          "making individual parts easier to test and modify;",
          "creating a structure that could support future development.",
        ],
        afterListParagraphs: [
          "This was not a cosmetic cleanup. The application structure was redesigned so that new functionality could be added without continuing to increase complexity inside the original codebase.",
        ],
      },
      {
        title: "What I delivered",
        paragraphs: ["My work included:"],
        list: [
          "full analysis of the existing V1;",
          "architectural redesign;",
          "complete codebase refactoring;",
          "separation into maintainable modules;",
          "stabilization of existing functionality;",
          "implementation and refinement of workflows;",
          "translation project organization;",
          "company-specific configuration;",
          "glossary-based terminology consistency;",
          "controlled document processing;",
          "review and approval of completed results;",
          "testing, debugging, and final delivery.",
        ],
      },
      {
        title: "My contribution",
        paragraphs: [
          "The client provided the original product idea and business direction.",
          "I took responsibility for the technical evolution of the application: understanding the inherited code, redesigning its structure, implementing the required workflows, resolving edge cases, and preparing the system for reliable real-world use.",
          "The result was a significantly cleaner and more maintainable desktop application with separated modules, clearer responsibilities, and a stronger foundation for continued development.",
        ],
      },
    ],
    caseStudyNotice:
      "This project is protected by NDA. Client names, source materials, screenshots, prompts, internal business logic, proprietary workflows, and detailed architecture are not included in this case study.",
    sourceCodeNote: "Private project. Source code is not publicly available.",
    featured: false,
    status: "Private Project",
  },
  {
    slug: "excel-to-json-cli",
    title: "Excel to JSON CLI",
    shortTitle: "Excel JSON",
    category: "Data Transformation",
    summary:
      "A command-line utility that converts selected Excel worksheet columns into clean JSON with validation and clear error handling.",
    detailedDescription:
      "The CLI accepts XLSX input, validates header selections, handles empty or duplicate choices, creates output directories, and includes automated tests for key workflows.",
    technologies: ["Python", "openpyxl", "JSON", "CLI", "pytest"],
    features: [
      {
        title: "XLSX input",
        description:
          "Reads Excel workbook data for command-line transformation.",
      },
      {
        title: "Selectable headers",
        description:
          "Converts only the worksheet columns selected for JSON output.",
      },
      {
        title: "Duplicate and empty selection handling",
        description:
          "Validates selections and returns clearer errors for invalid input.",
      },
      {
        title: "JSON export",
        description:
          "Writes selected worksheet data into a reusable structured format.",
      },
      {
        title: "Automated tests",
        description:
          "Covers key conversion and validation workflows with pytest.",
      },
    ],
    image: "assets/projects/new/excel_to_json.png",
    imageAlt: "Excel to JSON CLI project thumbnail",
    repositoryUrl: projectUrls["excel-to-json-cli"].repository,
    role: "Python developer",
    problem:
      "Selected Excel worksheet columns often need to be converted into predictable JSON without manual cleanup.",
    solution:
      "A command-line utility validates selected headers, handles edge cases, and writes clean JSON output.",
    goals: [
      "Make XLSX-to-JSON conversion repeatable from the command line.",
      "Validate user selections before writing output.",
      "Keep error states clear enough for practical CLI use.",
    ],
    technicalApproach: [
      "Use openpyxl to read XLSX workbook data.",
      "Validate header selections before conversion begins.",
      "Serialize selected worksheet columns to JSON and create output directories when needed.",
      "Use pytest to cover important conversion and error-handling workflows.",
    ],
    workflow: [
      "Load an XLSX workbook and inspect available worksheet headers.",
      "Validate selected columns before export.",
      "Write clean JSON to a prepared output location.",
    ],
    architecture: [
      {
        title: "Workbook reader",
        description:
          "Loads spreadsheet data and exposes worksheet headers for selection.",
      },
      {
        title: "Validation layer",
        description:
          "Checks empty, duplicate, and invalid selections before export.",
      },
      {
        title: "JSON writer",
        description:
          "Creates output directories and writes structured JSON data.",
      },
    ],
    qualityNotes: [
      "Validates empty and duplicate header selections.",
      "Creates output directories when needed.",
      "Includes automated tests for key conversion workflows.",
    ],
    challenges: [
      {
        title: "Clear CLI failures",
        challenge:
          "Invalid header selections can produce confusing output if validation happens too late.",
        resolution:
          "The CLI validates empty and duplicate choices before writing JSON.",
      },
      {
        title: "Repeatable file output",
        challenge:
          "Manual exports can fail when output folders do not already exist.",
        resolution:
          "The utility prepares output directories as part of the conversion workflow.",
      },
    ],
    decisions: [
      {
        title: "Command-line interface",
        explanation:
          "A CLI is a lightweight fit for repeatable data transformation tasks.",
      },
      {
        title: "pytest coverage",
        explanation:
          "Tests are useful here because conversion rules and validation edge cases are easy to regress.",
      },
    ],
    results: [
      "Created a repeatable XLSX-to-JSON workflow with automated tests.",
      "Made header-selection errors clearer before output is written.",
    ],
    lessons: [
      "Small data tools benefit from the same validation discipline as larger applications.",
      "Test coverage pays off quickly when a CLI has multiple input edge cases.",
    ],
    featured: false,
    status: "Portfolio Project",
  },
  {
    slug: "books-data-scraper",
    title: "Books Data Scraper",
    shortTitle: "Books Scraper",
    category: "Web Scraping and Export",
    summary:
      "A compact Python scraper that extracts book data into structured JSON and CSV outputs, with basic validation and automated tests.",
    detailedDescription:
      "The project uses a focused parser structure, validates collected records, writes JSON and CSV outputs, and keeps the scraping logic covered by automated tests.",
    technologies: ["Python", "requests", "lxml", "JSON", "CSV", "pytest"],
    features: [
      {
        title: "Structured parser architecture",
        description: "Keeps page parsing organized and easier to adapt.",
      },
      {
        title: "Filters",
        description: "Supports narrowing collected book records before export.",
      },
      {
        title: "CSV or JSON export",
        description:
          "Writes reusable output formats for later analysis or processing.",
      },
      {
        title: "Validation",
        description:
          "Checks collected records before treating them as export-ready.",
      },
      {
        title: "Automated tests",
        description: "Keeps core scraping and parsing behavior testable.",
      },
    ],
    image: "assets/projects/new/books_to_scrape.png",
    imageAlt: "Books Data Scraper project thumbnail",
    repositoryUrl: projectUrls["books-data-scraper"].repository,
    role: "Python developer",
    problem:
      "Book data needs to be collected in a structured format that can be filtered and reused.",
    solution:
      "A tested scraper collects structured book records, applies filters, validates data, and exports reusable results.",
    goals: [
      "Collect book records into a consistent structure.",
      "Keep parser logic clean enough to test and adapt.",
      "Export data in formats that can be reused outside the scraper.",
    ],
    technicalApproach: [
      "Use requests to retrieve source pages.",
      "Use lxml to parse structured book information from page content.",
      "Validate collected records before export.",
      "Support CSV and JSON output for reusable data workflows.",
    ],
    workflow: [
      "Request book listing pages from the selected source.",
      "Parse and validate structured book records.",
      "Apply filters and export reusable CSV or JSON data.",
    ],
    architecture: [
      {
        title: "Fetcher",
        description: "Retrieves page content for the scraping workflow.",
      },
      {
        title: "Parser",
        description: "Extracts structured book records from HTML content.",
      },
      {
        title: "Exporter",
        description: "Writes validated records to CSV or JSON.",
      },
    ],
    qualityNotes: [
      "Keeps parser logic separate enough to test.",
      "Validates collected records before export.",
      "Supports reusable output formats for later processing.",
    ],
    challenges: [
      {
        title: "Parser maintainability",
        challenge:
          "Scraping logic can become hard to adapt when fetching, parsing, filtering, and export concerns are mixed together.",
        resolution:
          "The project keeps a clean parser structure and validates records before export.",
      },
      {
        title: "Reusable output",
        challenge:
          "Collected data has limited value if it cannot be reused in other tools.",
        resolution:
          "CSV and JSON export options make the results easier to inspect or process later.",
      },
    ],
    decisions: [
      {
        title: "HTTP and lxml",
        explanation:
          "The project stays intentionally lightweight with HTTP requests and direct HTML parsing rather than browser automation.",
      },
      {
        title: "Tests around scraper logic",
        explanation:
          "Automated tests help keep parsing behavior stable as the scraper evolves.",
      },
    ],
    results: [
      "Produced structured book data exports from a clear parser workflow.",
      "Kept scraping logic testable through a cleaner project structure.",
    ],
    lessons: [
      "Scrapers are easier to maintain when fetch, parse, validate, and export steps stay separate.",
      "Validation protects downstream workflows from malformed collected records.",
    ],
    featured: false,
    status: "Portfolio Project",
  },
  {
    slug: "desktop-data-extraction-tool",
    title: "Desktop Data Extraction Tool",
    shortTitle: "Extraction Tool",
    category: "Automation and Data Export",
    summary:
      "A reusable Python desktop application for extracting structured website data and exporting results to CSV and Excel.",
    detailedDescription:
      "The tool provides a configurable extraction workflow, validation, logging, and portfolio-safe sample output for demonstration.",
    technologies: ["Python", "Tkinter", "Web scraping", "CSV", "Excel"],
    features: [
      {
        title: "Desktop interface",
        description:
          "Provides a local UI for configuring and running extraction workflows.",
      },
      {
        title: "Configurable extraction workflow",
        description:
          "Keeps the tool reusable instead of tied to one private data source.",
      },
      {
        title: "CSV and Excel exports",
        description:
          "Writes collected data into familiar formats for operational use.",
      },
      {
        title: "Validation and logging",
        description:
          "Adds visibility into extraction behavior and output quality.",
      },
      {
        title: "Portfolio-safe sample output",
        description:
          "Demonstrates the workflow without exposing private source data.",
      },
    ],
    image: "assets/projects/new/data_extractor.png",
    imageAlt: "Desktop Data Extraction Tool project thumbnail",
    repositoryUrl: projectUrls["desktop-data-extraction-tool"].repository,
    liveDemoUrl: projectUrls["desktop-data-extraction-tool"].demo,
    videoUrl: projectUrls["desktop-data-extraction-tool"].video,
    role: "Python developer",
    problem:
      "Reusable website data extraction workflows need a simple operator interface and dependable export options.",
    solution:
      "A Python desktop application provides configurable extraction, validation, logging, and CSV or Excel export.",
    goals: [
      "Provide a reusable desktop workflow for website data extraction.",
      "Support CSV and Excel export for familiar downstream use.",
      "Keep demonstration data portfolio-safe.",
    ],
    technicalApproach: [
      "Use Tkinter for a local desktop interface.",
      "Keep scraping behavior modular so extraction logic can be configured.",
      "Validate collected data and log workflow activity.",
      "Export structured output to CSV and Excel formats.",
    ],
    workflow: [
      "Configure the extraction workflow from the desktop interface.",
      "Collect and validate structured website data.",
      "Export results to CSV or Excel with logging support.",
    ],
    architecture: [
      {
        title: "Tkinter interface",
        description:
          "Gives the operator a local control surface for configuration and execution.",
      },
      {
        title: "Extraction module",
        description: "Handles reusable website data collection behavior.",
      },
      {
        title: "Validation and export layer",
        description: "Checks collected records and writes CSV or Excel output.",
      },
    ],
    qualityNotes: [
      "Separates interface behavior from reusable extraction logic.",
      "Includes validation and logging for operational visibility.",
      "Uses portfolio-safe sample output rather than private data.",
    ],
    challenges: [
      {
        title: "Reusable without private data",
        challenge:
          "The tool needed to demonstrate extraction capability without exposing a private source or dataset.",
        resolution:
          "The project uses portfolio-safe sample output and a configurable workflow description.",
      },
      {
        title: "Operator visibility",
        challenge:
          "Desktop extraction tools can feel opaque if they run without feedback.",
        resolution:
          "Validation and logging are part of the workflow so activity and output quality remain visible.",
      },
    ],
    decisions: [
      {
        title: "Tkinter desktop app",
        explanation:
          "Tkinter fits a local Python tool where installation weight and operational simplicity matter.",
      },
      {
        title: "CSV and Excel exports",
        explanation:
          "These formats match common handoff needs for structured operational data.",
      },
    ],
    results: [
      "Built a portfolio-safe extraction tool structure with local export support.",
      "Created a reusable pattern for configurable extraction, validation, and export.",
    ],
    lessons: [
      "Desktop automation tools are stronger when they expose configuration and progress clearly.",
      "Portfolio examples can demonstrate architecture without revealing private datasets.",
    ],
    gallery: [
      {
        src: "assets/projects/bnbscraper/main.png",
        alt: "Desktop data extraction tool main interface",
        caption:
          "Main desktop interface for configuring and running extraction tasks.",
      },
      {
        src: "assets/projects/bnbscraper/output_xlsx.png",
        alt: "Spreadsheet output generated by the desktop data extraction tool",
        caption: "Spreadsheet output generated from collected records.",
      },
      {
        src: "assets/projects/bnbscraper/progress.png",
        alt: "Desktop data extraction tool running progress view",
        caption: "Progress view for a running extraction session.",
      },
    ],
    featured: false,
    status: "Portfolio Project",
  },
  {
    slug: "filegatekeeper",
    title: "FileGatekeeper",
    shortTitle: "FileGatekeeper",
    category: "Windows Security Utility",
    summary:
      "A local Windows security utility for inspecting, scanning, isolating, and safely releasing untrusted client files before use.",
    detailedDescription:
      "FileGatekeeper is an ongoing Windows desktop security utility designed for freelancers, developers, recruiters, and small teams who regularly receive files from clients or other external sources. It creates a controlled inspection workflow for PDFs, Microsoft Office documents, images, ZIP and 7z archives, nested archives, source-code folders, scripts, executables, virtual environments, dependency folders, Git hooks, and IDE configurations. The application combines real file-type detection, Microsoft Defender integration, static inspection, deterministic risk scoring, archive and project-folder analysis, and a secure local quarantine vault. Users receive clear, human-readable findings and can rescan, release, delete, or create sanitized copies of supported content. The application never automatically executes inspected files and never makes absolute safety guarantees. Repository access is available on request for qualified clients or technical review.",
    seoTitle: "FileGatekeeper | Windows Security Utility | TantyaStorm",
    seoDescription:
      "FileGatekeeper is an ongoing Windows desktop utility for inspecting, scanning, isolating, and reviewing untrusted client files using Python, PySide6, Microsoft Defender, and explainable static analysis.",
    heroSubtitle: "Inspect untrusted files before use",
    heroText:
      "A local Windows security utility for controlled file inspection, quarantine, explainable risk assessment, and explicit user decisions.",
    requestAccessLabel: "Request Repository Access",
    exploreFeaturesLabel: "Explore Features",
    technologies: [
      "Python",
      "PySide6",
      "SQLite",
      "SQLAlchemy",
      "Microsoft Defender",
      "Cybersecurity",
      "Desktop Application",
      "Software Testing",
      "pytest",
      "Ruff",
      "mypy",
      "Bandit",
    ],
    badges: [
      "Ongoing Project",
      "Private Repository",
      "Windows Desktop",
      "Local Processing",
    ],
    features: [
      {
        title: "Real file-type detection",
        description:
          "Inspects file signatures and structure instead of treating file extensions as authoritative.",
      },
      {
        title: "Microsoft Defender integration",
        description:
          "Runs local Defender CLI scans as part of the inspection workflow.",
      },
      {
        title: "Archive and folder analysis",
        description:
          "Reviews ZIP, 7z, nested archives, source-code folders, scripts, hooks, IDE configuration, .venv, and node_modules indicators.",
      },
      {
        title: "Document inspection",
        description:
          "Performs static checks for PDFs, OOXML Office documents, images, and supported sanitized-copy flows.",
      },
      {
        title: "Explainable risk scoring",
        description:
          "Calculates deterministic risk levels from evidence-based findings and presents them in human-readable language.",
      },
      {
        title: "Local quarantine vault",
        description:
          "Keeps untrusted files isolated until the user explicitly rescans, releases, sanitizes, or deletes them.",
      },
    ],
    image: "assets/projects/new/filegatekeeper.png",
    imageAlt:
      "FileGatekeeper Windows security utility interface showing file quarantine, inspection stages, risk findings, and explicit file actions.",
    role: "Python desktop application developer",
    problem:
      "Freelancers and technical teams frequently receive documents, archives, source-code folders, executables, scripts, dependencies, and hidden project configurations from external sources. Opening or running these files directly introduces unnecessary risk. Traditional antivirus output may detect known threats, but it often does not explain the complete file structure, risky indicators, embedded content, archive composition, or project-level configuration in a way that supports an informed decision.",
    solution:
      "FileGatekeeper creates a controlled local workflow: receive a file or folder, isolate it, detect its actual type, scan it with Microsoft Defender, perform static inspection, calculate an explainable risk level, present findings, and require an explicit user decision before rescan, release, sanitized copy creation, or deletion.",
    workflow: [
      "Intake",
      "Isolation",
      "Type Detection",
      "Defender Scan",
      "Static Inspection",
      "Risk Assessment",
      "User Review",
      "Release, Sanitize, Rescan, or Delete",
    ],
    architecture: [
      {
        title: "No automatic execution",
        description:
          "Inspected files are never launched or run as part of the review workflow.",
      },
      {
        title: "Local processing",
        description:
          "Inspection, scoring, quarantine, and user decisions remain on the local Windows machine.",
      },
      {
        title: "Evidence-based findings",
        description:
          "Findings are human-readable and distinguish known scan results, file structure, static indicators, and project-level risks.",
      },
      {
        title: "Deterministic scoring",
        description:
          "Risk levels are calculated from explainable rules and never presented as absolute safety guarantees.",
      },
      {
        title: "Explicit final actions",
        description:
          "Users must confirm release, sanitized-copy creation, rescan, or deletion decisions.",
      },
      {
        title: "Measured language",
        description:
          "The application can report no known threats detected, but it does not claim that files are free of risk.",
      },
    ],
    qualityNotes: [
      "343 automated tests passing",
      "1 intentionally skipped test",
      "Ruff clean",
      "mypy clean",
      "No high-severity Bandit findings",
      "Hardened subprocess execution",
      "Verified file-copy boundaries",
      "Typed data-access interfaces",
      "Defensive archive and document analysis",
    ],
    limitations:
      "FileGatekeeper does not guarantee that inspected files are free of risk. It is designed to provide local isolation, scan results, static evidence, and explicit review decisions without automatically executing inspected content.",
    repositoryAccess: {
      title: "Private Repository Access",
      text: "FileGatekeeper is currently developed in a private repository. Repository access can be provided on request to qualified clients for technical evaluation. Depending on the review requirements, access may include selected source code, architecture, tests, documentation, and implementation details.",
      buttonLabel: "Request Repository Access",
    },
    developmentStatus: [
      { label: "Status", value: "Ongoing Private Project" },
      { label: "Automated tests", value: "343 passing" },
      { label: "Skipped tests", value: "1 intentionally skipped" },
      { label: "Static checks", value: "Ruff clean, mypy clean" },
      { label: "Security checks", value: "No high-severity Bandit findings" },
    ],
    confidentialityNote:
      "Repository access is available on request for qualified clients or technical review.",
    featured: true,
    status: "Ongoing Private Project",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    category: "Frontend & Full-Stack Web Delivery",
    summary:
      "Two production websites demonstrating responsive frontend engineering, interaction design, technical SEO, and production integrations.",
    detailedDescription:
      "This case study brings together two live web projects with different delivery requirements: a developer portfolio focused on project presentation and static indexability, and a commercial transportation website with a secure quote workflow and production integrations.",
    seoTitle: "Web Development | TantyaStorm Portfolio",
    seoDescription:
      "A web development case study featuring the TantyaStorm developer portfolio and IMD Transportation: responsive frontend engineering, SEO, production integrations, and deployment.",
    heroSubtitle: "Two live websites, designed and delivered for different real-world needs.",
    heroText:
      "From a polished developer portfolio to a commercial quote workflow, the work combines visual direction, responsive implementation, content structure, and production-ready integrations.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Cloudflare Pages",
      "Cloudflare Functions",
      "Cloudflare D1",
      "Turnstile",
      "Resend",
      "GA4",
      "SEO",
    ],
    badges: ["Live Websites", "Responsive Design", "Production Integrations"],
    features: [
      {
        title: "Responsive web experiences",
        description:
          "Layouts and interactions are designed to work across desktop and mobile viewports without treating mobile as an afterthought.",
      },
      {
        title: "Structured project presentation",
        description:
          "Clear content hierarchy, reusable components, case-study structure, and accessible navigation support both visitors and search engines.",
      },
      {
        title: "Production form workflows",
        description:
          "The transportation site pairs its quote form with server-side validation, anti-spam protection, persistence, email delivery, and analytics-aware deployment.",
      },
    ],
    image: "assets/projects/web-development/tantyastorm-desktop.png",
    imageAlt:
      "Desktop view of the TantyaStorm developer portfolio homepage with its dark purple and cyan hero.",
    role: "Frontend and full-stack web developer",
    goals: [
      "Present technical work through clear, responsive, visually intentional web experiences.",
      "Build user-facing flows that connect polished frontend work to dependable production services.",
      "Keep information architecture, accessibility, and search visibility part of the implementation rather than post-launch additions.",
    ],
    technicalApproach: [
      "Start with content hierarchy and responsive behavior, then build reusable components around the decisions that repeat.",
      "Keep live-site interactions purposeful: navigation, forms, motion, and media should support the visitor task.",
      "Treat metadata, validation, deployment, and abuse protection as part of the product surface.",
    ],
    architecture: [
      {
        title: "Frontend systems",
        description:
          "React, TypeScript, Vite, component composition, responsive CSS, and deliberate interaction patterns provide the presentation layer.",
      },
      {
        title: "Production services",
        description:
          "Cloudflare Pages and Functions support the commercial delivery, with Turnstile, D1, Resend, and GA4 handling the supplied production requirements.",
      },
    ],
    results: [
      "Two live websites are available to review directly.",
      "The work demonstrates both frontend presentation and the delivery of a secure, production-facing form workflow.",
    ],
    websiteShowcases: [
      {
        title: "TantyaStorm Developer Portfolio",
        url: "https://tantyastorm.dev/",
        desktopImage: "assets/projects/web-development/tantyastorm-desktop.png",
        desktopImageAlt:
          "Desktop screenshot of the TantyaStorm developer portfolio homepage.",
        mobileImage: "assets/projects/web-development/tantyastorm-mobile.png",
        mobileImageAlt:
          "Mobile screenshot of the TantyaStorm developer portfolio homepage.",
        summary:
          "A developer portfolio built to present technical projects with a custom visual system, responsive layouts, interactive components, multilingual content, static project routes, and project-specific metadata.",
        technologies: ["React", "TypeScript", "Vite", "CSS", "GitHub Pages", "SEO"],
        highlights: [
          "Responsive portfolio experience with dark and light themes, motion that respects reduced-motion preferences, and keyboard-accessible navigation.",
          "Reusable component structure for project cards, detailed case studies, navigation, theme controls, and localization.",
          "Static route generation supplies project-specific metadata, structured data, and meaningful initial HTML for project pages.",
        ],
        implementation: [
          "Frontend engineering and visual experience",
          "Component architecture and responsive behavior",
          "Project presentation, multilingual content, SEO, and deployment",
        ],
        liveLabel: "Visit TantyaStorm",
      },
      {
        title: "IMD Transportation",
        url: "https://imdtrans.com/",
        desktopImage: "assets/projects/web-development/imd-transportation-desktop.png",
        desktopImageAlt:
          "Desktop screenshot of the IMD Transportation commercial website.",
        mobileImage: "assets/projects/web-development/imd-transportation-mobile.png",
        mobileImageAlt:
          "Mobile screenshot of the IMD Transportation commercial website.",
        summary:
          "A commercial transportation website that combines a premium responsive interface with a quote request flow and production integrations for validation, anti-spam protection, persistence, email, analytics, and deployment.",
        technologies: [
          "Cloudflare Pages",
          "Cloudflare Functions",
          "Turnstile",
          "Cloudflare D1",
          "Resend",
          "GA4",
          "SEO",
        ],
        highlights: [
          "Premium visual design with responsive layouts, interactive navigation, and website sections tailored to a commercial transportation service.",
          "Quote form protected by server-side validation and Turnstile anti-spam verification.",
          "Cloudflare Pages and Functions delivery with D1 persistence, Resend email integration, GA4 integration, and SEO implementation.",
        ],
        implementation: [
          "Commercial frontend design and responsive implementation",
          "Secure quote capture and backend integrations",
          "Production deployment, analytics, and search-facing metadata",
        ],
        liveLabel: "Visit IMD Transportation",
      },
    ],
    featured: false,
    status: "Portfolio Project",
  },
];

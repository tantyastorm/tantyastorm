import { projectUrls } from "./config";

export type ProjectStatus =
  | "Portfolio Project"
  | "Private Project"
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

export type Project = {
  slug: keyof typeof projectUrls;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  detailedDescription: string;
  technologies: string[];
  features: ProjectFeature[];
  image?: string;
  imageAlt?: string;
  repositoryUrl?: string;
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
  caseStudyNotice?: string;
  sourceCodeNote?: string;
  featured: boolean;
  status: string;
  confidentialityNote?: string;
};

export const projects: Project[] = [
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
        description:
          "Lets records be narrowed before review and export.",
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
    image: "assets/projects/kreacher.png",
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
        description: "Reads local saved HTML files into the processing workflow.",
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
        description:
          "Creates filesystem-safe names for local snapshot files.",
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
    image: "assets/projects/dobby.png",
    imageAlt: "Dobby manual browser page queue and snapshot workflow",
    repositoryUrl: projectUrls.dobby.repository,
    liveDemoUrl: projectUrls.dobby.demo,
    videoUrl:
      projectUrls.dobby.video ?? "assets/projects/dobby/dobby-demo.mp4",
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
    image: "assets/projects/email-archive-utility.png",
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
    image: "assets/projects/custom-translation-management-system.png",
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
    image: "assets/projects/excel-to-json-cli.png",
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
    image: "assets/projects/books-data-scraper.png",
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
    image: "assets/projects/desktop-data-extraction-tool.png",
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
        caption: "Main desktop interface for configuring and running extraction tasks.",
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
];

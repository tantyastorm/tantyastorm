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
  imageAlt: string;
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
  screenshotCaption?: string;
  limitations?: string;
  featured: boolean;
  status: string;
  confidentialityNote?: string;
};

export const projects: Project[] = [
  {
    slug: "kreacher",
    title: "Kreacher",
    shortTitle: "Kreacher",
    category: "Protected Website Data Extraction",
    summary:
      "A desktop-assisted extraction tool for websites where limited human participation is required before structured data can be collected.",
    detailedDescription:
      "Kreacher supports a human-assisted access step, then keeps collection work organized with preview, filtering, and export-ready structured data. It is designed to reduce repetitive manual collection without claiming automatic security bypass.",
    technologies: [
      "Python",
      "Desktop GUI",
      "HTML parsing",
      "Structured export",
    ],
    features: [
      {
        title: "Human-assisted access workflow",
        description:
          "Keeps the required manual participation explicit before collection work begins.",
      },
      {
        title: "Protected or difficult website parsing",
        description:
          "Organizes extraction around pages that are not appropriate for fully automatic access claims.",
      },
      {
        title: "Preview and filtering",
        description:
          "Lets collected data be inspected and narrowed before it is prepared for export.",
      },
      {
        title: "Export-ready data",
        description:
          "Structures extracted information so it can move into downstream review or processing.",
      },
      {
        title: "Desktop interface",
        description:
          "Wraps the workflow in a local interface suitable for guided operator use.",
      },
    ],
    image: "assets/projects/kreacher.png",
    imageAlt: "Kreacher protected website extraction workflow interface",
    repositoryUrl: projectUrls.kreacher.repository,
    liveDemoUrl: projectUrls.kreacher.demo,
    videoUrl: projectUrls.kreacher.video,
    role: "Python developer",
    problem:
      "Some collection workflows need a human access step before data can be organized into a reusable structure.",
    solution:
      "A desktop-assisted workflow keeps the human step explicit, then supports preview, filtering, and structured export.",
    goals: [
      "Reduce repetitive manual collection after the access step is complete.",
      "Keep operator review visible before structured data is reused.",
      "Present the project in a portfolio-safe way without overstating access automation.",
    ],
    technicalApproach: [
      "Use Python desktop GUI patterns to guide the operator through the collection workflow.",
      "Parse available HTML content after the human-assisted step has completed.",
      "Prepare structured exports from reviewed and filtered data rather than treating raw collection as final.",
    ],
    workflow: [
      "Start with an explicit human-assisted access step.",
      "Collect and parse available page content after access is complete.",
      "Preview, filter, and prepare structured data for export.",
    ],
    architecture: [
      {
        title: "Operator-guided desktop layer",
        description:
          "Provides the local workflow surface for access, preview, filtering, and export preparation.",
      },
      {
        title: "Parsing layer",
        description:
          "Focuses on extracting structured values from available page content.",
      },
      {
        title: "Export preparation layer",
        description:
          "Keeps data organized for downstream use after the operator has reviewed it.",
      },
    ],
    qualityNotes: [
      "Keeps manual review visible in the workflow.",
      "Avoids presenting protected access as automatic bypass behavior.",
      "Uses preview and filtering before exported data is reused.",
    ],
    challenges: [
      {
        title: "Portfolio-safe positioning",
        challenge:
          "The project involves difficult or protected websites, which can be easy to describe in a misleading way.",
        resolution:
          "The case study names the human-assisted step clearly and avoids claiming automatic security bypass.",
      },
      {
        title: "Review before export",
        challenge:
          "Raw collected data may need inspection before it is useful as structured output.",
        resolution:
          "Preview and filtering are treated as core workflow steps, not optional polish.",
      },
    ],
    decisions: [
      {
        title: "Desktop-first workflow",
        explanation:
          "A local GUI matches the need for controlled operator participation and visible review.",
      },
      {
        title: "Private project links",
        explanation:
          "Public repository and demo links are omitted until a portfolio-safe version is available.",
      },
    ],
    results: [
      "Reduced repetitive collection steps while keeping human review in the loop.",
      "Created a clearer workflow for moving from manual access to structured export.",
    ],
    lessons: [
      "Automation can still be valuable when a workflow intentionally includes human checkpoints.",
      "Private extraction tools need careful public wording around access, review, and limitations.",
    ],
    screenshotCaption:
      "Desktop-assisted extraction workflow with preview-oriented organization.",
    limitations:
      "Public implementation details are limited because this is a private project.",
    featured: true,
    status: "Private Project",
    confidentialityNote:
      "Public links are omitted until a portfolio-safe version is available.",
  },
  {
    slug: "dobby",
    title: "Dobby",
    shortTitle: "Dobby",
    category: "Job Discovery Automation",
    summary:
      "A Python desktop workflow for collecting, organizing, and preparing relevant job listings for later review and analysis.",
    detailedDescription:
      "Dobby collects job listings from selected sources, keeps records in a structured JSON workflow, and prepares filtered results for safe human review.",
    technologies: ["Python", "Browser automation", "JSON", "Desktop GUI"],
    features: [
      {
        title: "Keyword and source-based collection",
        description:
          "Supports a focused collection workflow based on selected search inputs and sources.",
      },
      {
        title: "Structured JSON workflow",
        description:
          "Stores collected listing records in a format that can be filtered and reviewed later.",
      },
      {
        title: "Deduplication-ready architecture",
        description:
          "Keeps records structured so duplicate handling can be added or refined cleanly.",
      },
      {
        title: "Filtering and export",
        description:
          "Prepares collected records for focused review instead of leaving them as unorganized results.",
      },
      {
        title: "Human review support",
        description:
          "Treats collected listings as candidates for review, not automatically final decisions.",
      },
    ],
    image: "assets/projects/dobby.png",
    imageAlt: "Dobby job discovery automation workflow interface",
    repositoryUrl: projectUrls.dobby.repository,
    liveDemoUrl: projectUrls.dobby.demo,
    videoUrl: projectUrls.dobby.video,
    role: "Python developer",
    problem:
      "Relevant job listings can be time-consuming to collect, deduplicate, and prepare for review.",
    solution:
      "A Python desktop workflow collects selected listings, stores records in JSON, and prepares filtered results for human review.",
    goals: [
      "Make listing collection repeatable instead of fully manual.",
      "Keep records structured for filtering, review, and future deduplication work.",
      "Support human judgment as the final review step.",
    ],
    technicalApproach: [
      "Use browser automation for source collection where a browser-driven flow is appropriate.",
      "Persist listing data as structured JSON records.",
      "Use a desktop interface to keep the workflow accessible and review-oriented.",
    ],
    workflow: [
      "Collect listings from selected sources and keywords.",
      "Store records in a structured JSON workflow.",
      "Filter and prepare listings for later human review.",
    ],
    architecture: [
      {
        title: "Collection layer",
        description:
          "Handles source and keyword-driven listing gathering through browser automation.",
      },
      {
        title: "Record layer",
        description:
          "Keeps collected listings in JSON so the data remains portable and inspectable.",
      },
      {
        title: "Review preparation layer",
        description:
          "Filters and organizes results before a person evaluates relevance.",
      },
    ],
    qualityNotes: [
      "Keeps review as part of the workflow rather than treating collected listings as final.",
      "Uses structured records so later filtering and deduplication remain practical.",
      "Limits public details for private project safety.",
    ],
    challenges: [
      {
        title: "Balancing automation and judgment",
        challenge:
          "Collected listings still need human review to determine whether they are actually relevant.",
        resolution:
          "The tool prepares and filters records for review rather than presenting automation as a replacement for judgment.",
      },
      {
        title: "Keeping records reusable",
        challenge:
          "Listings can become hard to compare if they are collected as unstructured text.",
        resolution:
          "The workflow stores data in structured JSON so records can be filtered and revisited.",
      },
    ],
    decisions: [
      {
        title: "JSON as the workflow format",
        explanation:
          "JSON keeps collected records portable without requiring a backend service.",
      },
      {
        title: "Private links",
        explanation:
          "Repository and demo links are intentionally withheld for this private project.",
      },
    ],
    results: [
      "Created a structured, repeatable discovery workflow for later analysis.",
      "Separated collection, filtering, and review into clearer steps.",
    ],
    lessons: [
      "Automation is strongest here when it prepares better review input rather than trying to make final decisions.",
      "Structured intermediate data makes later workflow changes easier.",
    ],
    screenshotCaption:
      "Job discovery workflow interface for collecting and preparing structured listing data.",
    limitations: "Repository and demo links are intentionally withheld.",
    featured: true,
    status: "Private Project",
    confidentialityNote:
      "Repository and demo links are intentionally not shown.",
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
    videoUrl: projectUrls["email-archive-utility"].video,
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
    screenshotCaption:
      "Local processing interface for email archive organization and text conversion.",
    featured: false,
    status: "Portfolio Project",
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
    imageAlt: "Excel to JSON command-line converter workflow",
    repositoryUrl: projectUrls["excel-to-json-cli"].repository,
    liveDemoUrl: projectUrls["excel-to-json-cli"].demo,
    videoUrl: projectUrls["excel-to-json-cli"].video,
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
    screenshotCaption:
      "Command-line conversion workflow for selected Excel columns and JSON output.",
    featured: false,
    status: "Portfolio Project",
  },
  {
    slug: "books-data-scraper",
    title: "Books Data Scraper",
    shortTitle: "Books Scraper",
    category: "Web Scraping and Export",
    summary:
      "A tested Python scraper that collects structured book data, applies filters, and exports results into reusable formats.",
    detailedDescription:
      "The project uses a clean parser structure, validates collected records, supports filtered exports, and keeps scraping logic testable.",
    technologies: ["Python", "HTTP requests", "BeautifulSoup", "pytest"],
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
    imageAlt: "Books Data Scraper export workflow",
    repositoryUrl: projectUrls["books-data-scraper"].repository,
    liveDemoUrl: projectUrls["books-data-scraper"].demo,
    videoUrl: projectUrls["books-data-scraper"].video,
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
      "Use HTTP requests to retrieve source pages.",
      "Use BeautifulSoup to parse structured book information from page content.",
      "Validate collected records before export.",
      "Support CSV or JSON output for reusable data workflows.",
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
        title: "HTTP and BeautifulSoup",
        explanation:
          "The existing project description supports a lightweight HTTP-based scraper rather than a browser-driven workflow.",
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
    screenshotCaption:
      "Scraping and export workflow for structured book data collection.",
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
    imageAlt: "Desktop data extraction and export tool interface",
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
    screenshotCaption:
      "Desktop extraction interface for configuring collection and export workflows.",
    featured: false,
    status: "Portfolio Project",
  },
];

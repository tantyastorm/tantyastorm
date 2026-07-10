export type ProjectStatus =
  | "Portfolio Project"
  | "Private Project"
  | "Repository Available on Request"
  | "Demo Available on Request";

export type Project = {
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  image?: string;
  imageAlt: string;
  repositoryUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  confidentialityNote?: string;
};

export const projects: Project[] = [
  {
    title: "Kreacher",
    shortTitle: "Kreacher",
    category: "Protected Website Data Extraction",
    summary:
      "A desktop-assisted extraction tool for websites where limited human participation is required before structured data can be collected.",
    detailedDescription:
      "Kreacher supports a human-assisted access step, then keeps collection work organized with preview, filtering, and export-ready structured data. It is designed to reduce repetitive manual collection without claiming automatic security bypass.",
    technologies: ["Python", "Desktop GUI", "HTML parsing", "Structured export"],
    features: [
      "Human-assisted access workflow",
      "Protected or difficult website parsing",
      "Preview and filtering",
      "Export-ready data",
      "Desktop interface",
    ],
    image: "assets/projects/kreacher.png",
    imageAlt: "Kreacher protected website extraction workflow interface",
    featured: true,
    status: "Private Project",
    confidentialityNote: "Public links are omitted until a portfolio-safe version is available.",
  },
  {
    title: "Dobby",
    shortTitle: "Dobby",
    category: "Job Discovery Automation",
    summary:
      "A Python desktop workflow for collecting, organizing, and preparing relevant job listings for later review and analysis.",
    detailedDescription:
      "Dobby collects job listings from selected sources, keeps records in a structured JSON workflow, and prepares filtered results for safe human review.",
    technologies: ["Python", "Browser automation", "JSON", "Desktop GUI"],
    features: [
      "Keyword and source-based collection",
      "Structured JSON workflow",
      "Deduplication-ready architecture",
      "Filtering and export",
      "Human review support",
    ],
    image: "assets/projects/dobby.png",
    imageAlt: "Dobby job discovery automation workflow interface",
    featured: true,
    status: "Private Project",
    confidentialityNote: "Repository and demo links are intentionally not shown.",
  },
  {
    title: "Email Archive Utility",
    shortTitle: "Email Utility",
    category: "File Processing Automation",
    summary:
      "A local desktop utility for organizing exported EML and MSG files, extracting metadata, safely renaming files, and generating searchable TXT copies.",
    detailedDescription:
      "This utility handles file and folder input, previews planned changes, creates duplicate-safe names, converts messages into searchable text, and processes archives locally.",
    technologies: ["Python", "Desktop GUI", "File processing", "Email parsing"],
    features: [
      "EML and MSG support",
      "Metadata-based filenames",
      "Preview before modification",
      "Duplicate-safe naming",
      "TXT conversion",
      "Progress tracking",
    ],
    image: "assets/projects/email-archive-utility.png",
    imageAlt: "Email Archive Utility desktop processing interface",
    featured: false,
    status: "Portfolio Project",
  },
  {
    title: "Excel to JSON CLI",
    shortTitle: "Excel JSON",
    category: "Data Transformation",
    summary:
      "A command-line utility that converts selected Excel worksheet columns into clean JSON with validation and clear error handling.",
    detailedDescription:
      "The CLI accepts XLSX input, validates header selections, handles empty or duplicate choices, creates output directories, and includes automated tests for key workflows.",
    technologies: ["Python", "openpyxl", "JSON", "CLI", "pytest"],
    features: [
      "XLSX input",
      "Selectable headers",
      "Duplicate and empty selection handling",
      "JSON export",
      "User-friendly CLI errors",
      "Automated tests",
    ],
    image: "assets/projects/excel-to-json-cli.png",
    imageAlt: "Excel to JSON command-line converter workflow",
    featured: false,
    status: "Portfolio Project",
  },
  {
    title: "Books Data Scraper",
    shortTitle: "Books Scraper",
    category: "Web Scraping and Export",
    summary:
      "A tested Python scraper that collects structured book data, applies filters, and exports results into reusable formats.",
    detailedDescription:
      "The project uses a clean parser structure, validates collected records, supports filtered exports, and keeps scraping logic testable.",
    technologies: ["Python", "HTTP requests", "BeautifulSoup", "pytest"],
    features: [
      "Structured parser architecture",
      "Filters",
      "CSV or JSON export",
      "Validation",
      "Automated tests",
      "Clean project structure",
    ],
    image: "assets/projects/books-data-scraper.png",
    imageAlt: "Books Data Scraper export workflow",
    featured: false,
    status: "Portfolio Project",
  },
  {
    title: "Desktop Data Extraction Tool",
    shortTitle: "Extraction Tool",
    category: "Automation and Data Export",
    summary:
      "A reusable Python desktop application for extracting structured website data and exporting results to CSV and Excel.",
    detailedDescription:
      "The tool provides a configurable extraction workflow, validation, logging, and portfolio-safe sample output for demonstration.",
    technologies: ["Python", "Tkinter", "Web scraping", "CSV", "Excel"],
    features: [
      "Desktop interface",
      "Configurable extraction workflow",
      "CSV and Excel exports",
      "Validation and logging",
      "Clean modular implementation",
      "Portfolio-safe sample output",
    ],
    image: "assets/projects/desktop-data-extraction-tool.png",
    imageAlt: "Desktop data extraction and export tool interface",
    featured: false,
    status: "Portfolio Project",
  },
];

export const navItems = [
  { label: "Proof", href: "#proof" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
];

export const services = [
  {
    title: "Python Automation Tools",
    problem:
      "For repetitive file, data, and workflow operations that are still being handled by hand.",
    deliverable:
      "A Python script, CLI, or small application with validation, clear inputs, and reusable output.",
    outcome:
      "A repeatable workflow that reduces manual handling while keeping edge cases visible.",
  },
  {
    title: "Web Scraping and Data Extraction",
    problem:
      "For collecting structured data from websites, online systems, or source pages that need parsing.",
    deliverable:
      "A scraper or extraction workflow with filters, validation, and CSV, JSON, or Excel export.",
    outcome:
      "Cleaner source data that can be reviewed, reused, or handed into another process.",
  },
  {
    title: "Desktop Utilities",
    problem:
      "For local workflows that need a practical GUI, progress visibility, and safer review before changes are applied.",
    deliverable:
      "A Python desktop tool for selecting files, previewing work, running batches, and exporting results.",
    outcome:
      "A usable local utility for sensitive, repetitive, or operator-guided work.",
  },
  {
    title: "MVP Development",
    problem:
      "For turning a workflow idea into a working Python-based first version without overbuilding the platform around it.",
    deliverable:
      "A scoped MVP with the core workflow, basic interface or API shape, and documented limitations.",
    outcome:
      "A working first version that can be tested against the real process before expanding.",
  },
];

export const approach = [
  {
    title: "Map the real workflow",
    description:
      "Clarify inputs, handoffs, constraints, and the result before choosing the shape of the tool.",
  },
  {
    title: "Keep risk reviewable",
    description:
      "Use previews, validation, duplicate handling, or logs where destructive or batch actions need control.",
  },
  {
    title: "Build the useful version",
    description:
      "Focus on the smallest reliable tool that solves the workflow instead of adding platform weight too early.",
  },
  {
    title: "Name limits early",
    description:
      "Communicate private-source limits, access steps, brittle inputs, and test coverage honestly.",
  },
];

export const expertise = [
  {
    icon: "PY",
    title: "Python Automation",
    description:
      "Automating repetitive operational workflows, file processing, reporting, and structured data tasks.",
  },
  {
    icon: "WS",
    title: "Web Scraping",
    description:
      "Browser-based and HTTP-based data extraction for static, dynamic, and protected website workflows.",
  },
  {
    icon: "UI",
    title: "Desktop Applications",
    description:
      "Python desktop tools with previews, progress tracking, exports, validation, and safe file handling.",
  },
];

export const heroMeta = [
  "Python developer",
  "Automation / scraping / desktop tools",
  "Remote",
  "Available for freelance projects",
];

export const proofItems = [
  {
    label: "6 case studies",
    description:
      "Automation, scraping, desktop utilities, file processing, and data transformation are documented as project pages.",
  },
  {
    label: "Structured exports",
    description:
      "Projects produce CSV, JSON, TXT, Excel, or export-ready records instead of unorganized raw output.",
  },
  {
    label: "Local-first tools",
    description:
      "Desktop and file-processing workflows keep sensitive archive and review steps on the user's machine.",
  },
  {
    label: "Tests where useful",
    description:
      "CLI conversion and scraping projects include pytest coverage for key workflows and parsing behavior.",
  },
  {
    label: "Private work handled carefully",
    description:
      "Client-style and protected-source projects are described without exposing repositories or overstating access automation.",
  },
  {
    label: "Review before output",
    description:
      "Several tools use previews, filtering, validation, logging, or duplicate-safe naming before data is reused.",
  },
];

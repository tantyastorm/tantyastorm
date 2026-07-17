import type { Translation } from "../types";

export const en: Translation = {
  languageName: "English",
  seo: {
    homeTitle: "Tatiana Furtuna | Python Developer & Automation Specialist",
    homeDescription:
      "Portfolio of Tatiana Furtuna, a Python developer specializing in automation, web scraping, desktop applications, data processing, and backend integrations.",
    notFoundTitle: "Project Not Found | Tantyastorm",
    notFoundDescription: "The requested project case study could not be found.",
    caseStudySuffix: "Case Study | Tantyastorm",
  },
  common: {
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    contact: "Contact",
    viewSelectedWork: "View selected work",
    bookCall: "Book a call",
    viewCaseStudy: "View case study",
    stack: "Stack",
    unavailableProjectLinks:
      "Source code available on request or private project.",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    languageSwitcher: "Select language",
    primaryNavigation: "Primary navigation",
    toggleNavigation: "Toggle navigation menu",
    tantyastormHome: "Tantyastorm home",
    primaryActions: "Primary actions",
    professionalStatus: "Professional status",
    profilePanel: "Tantyastorm profile",
    footerActions: "Footer actions",
  },
  nav: {
    proof: "Proof",
    projects: "Projects",
    services: "Services",
    skills: "Skills",
  },
  hero: {
    eyebrow: "Python developer / automation and data tools",
    title: "I turn repetitive workflows into reliable Python tools.",
    titleLines: ["I turn repetitive workflows into reliable Python tools."],
    lead: "I build automation, scraping, file-processing, and desktop utilities for teams and operators who need structured outputs, safer review steps, and less copy-paste work.",
    panelLabel: "Tantyastorm",
    panelText:
      "Automation, extraction, transformation, and local-first tools shaped around the workflow before the code.",
    focusLabel: "Focus",
    focusValue: "Python delivery",
    outputsLabel: "Outputs",
    signal: "TS-47.01 / WORKFLOW SIGNAL",
    meta: [
      "Python developer",
      "Automation / scraping / desktop tools",
      "Remote",
      "Available for freelance projects",
    ],
  },
  proof: {
    eyebrow: "Proof, not adjectives",
    title: "Evidence from the work already here.",
    items: [
      {
        label: "7 case studies",
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
    ],
  },
  projectsSection: {
    eyebrow: "Selected work",
    title: "Case studies from automation, extraction, and data workflows.",
    description:
      "Seven projects, each focused on turning messy inputs or repetitive steps into structured, reviewable output.",
  },
  servicesSection: {
    eyebrow: "Ways to work together",
    title: "Practical builds for workflows that need less manual handling.",
    description:
      "Engagements stay close to the work: a clear input, a safer process, and a deliverable you can actually run or review.",
    deliverable: "Deliverable",
    outcome: "Outcome",
    items: [
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
    ],
  },
  skillsSection: {
    eyebrow: "Technical strengths",
    title: "A Python-centered toolkit for practical delivery.",
    description:
      "The stack is intentionally direct: automation libraries, parsers, desktop UI tools, data formats, tests, and the web basics needed to ship usable software.",
    groups: [
      {
        title: "Languages",
        skills: ["Python", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Python and Backend",
        skills: ["FastAPI", "Flask", "Django basics", "SQLAlchemy", "pytest"],
      },
      {
        title: "Automation and Scraping",
        skills: [
          "Playwright",
          "Selenium",
          "BeautifulSoup",
          "Requests",
          "Scrapy",
        ],
      },
      {
        title: "Data",
        skills: [
          "Pandas",
          "NumPy",
          "openpyxl",
          "CSV",
          "JSON",
          "PostgreSQL",
          "MySQL",
          "SQLite",
        ],
      },
      {
        title: "Desktop and Tools",
        skills: ["PyQt", "Tkinter", "Git", "GitHub", "Bash", "Azure Functions"],
      },
    ],
  },
  approach: {
    eyebrow: "How I work",
    title: "Clear checkpoints before anything becomes automatic.",
    items: [
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
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a workflow that should not still be manual?",
    description:
      "I build practical Python tools for automation, data extraction, file processing, desktop workflows, and backend integration.",
    calendlyLabel: "Book a call on Calendly",
    linksLabel: "Contact links",
    form: {
      name: "Name",
      email: "Email",
      projectType: "Project type",
      budget: "Estimated budget",
      message: "Message",
      website: "Website",
      selectProjectType: "Select a project type",
      selectBudget: "Select a range",
      projectTypes: [
        "Python automation",
        "Web scraping",
        "Desktop application",
        "Data processing",
        "Backend or API integration",
      ],
      budgetOptions: [
        "Under $500",
        "$500 - $1,500",
        "$1,500 - $5,000",
        "$5,000+",
      ],
      errors: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        invalidEmail: "Please enter a valid email address.",
        message: "Please tell me a little about the project.",
      },
      status: {
        success: "Thanks. Your message was sent successfully.",
        error:
          "The message could not be sent. Your details are still here, so you can try again.",
        notConfiguredDev:
          "Contact form endpoint is not configured. Add VITE_CONTACT_FORM_ENDPOINT to enable submissions.",
        notConfigured:
          "The contact form is not available right now. Please use email or a profile link instead.",
      },
      sending: "Sending...",
      submit: "Send Message",
    },
  },
  detail: {
    architecture: "Architecture",
    challenges: "Challenges and Resolutions",
    challenge: "Challenge",
    resolution: "Resolution",
    decisions: "Engineering Decisions",
    screenshot: "Screenshot",
    gallery: "Screenshots",
    notFoundEyebrow: "Not Found",
    notFoundHeading: "Project not found.",
    backToProjects: "Back to projects",
    repository: "Repository",
    liveDemo: "Live Demo",
    demoVideo: "Demo Video",
    overview: "Case Study Overview",
    goals: "Goals",
    problem: "Problem",
    solution: "Solution",
    workflow: "Workflow",
    features: "Main Features",
    technicalApproach: "Technical Approach",
    quality: "Quality Safeguards",
    results: "Results",
    lessons: "Lessons",
    limitations: "Limitations",
    privacy: "Privacy or NDA Notice",
    projectInformation: "Project Information",
    snapshot: "Project Snapshot",
    status: "Status",
    role: "Role",
    category: "Category",
    technologyStack: "Technology Stack",
    sourceCode: "Source Code",
    projectLinks: "Project Links",
    repositoryLink: "GitHub repository",
    liveDemoLink: "Live demo",
    demoVideoLink: "Demo video",
    previous: "Previous",
    next: "Next",
    detailsLabel: (title) => `${title} project details`,
    navigationLabel: "Project navigation",
  },
  footer: {
    availability: "Available for freelance projects",
    title: "Python tools for workflows that should not still be manual.",
    description:
      "Automation, data extraction, desktop utilities, and practical MVPs built around real operating constraints.",
    remote: "Remote collaboration",
  },
  contactLinks: {
    email: "Email",
    github: "GitHub",
    upwork: "Upwork",
    linkedin: "LinkedIn",
    fiverr: "Fiverr",
    freelancerProfile: "Freelancer Profile",
    ariaEmail: (name, email) => `Email ${name} at ${email}`,
    ariaProfile: (name, platform) => `${name} on ${platform}`,
  },
  projects: {
    kreacher: {},
    dobby: {},
    "email-archive-utility": {},
    "custom-translation-management-system": {},
    "excel-to-json-cli": {},
    "books-data-scraper": {},
    "desktop-data-extraction-tool": {},
  },
};

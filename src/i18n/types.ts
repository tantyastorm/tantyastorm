import type { Project } from "../data/projects";

export type Language = "en" | "ro" | "ru";

export type ProjectText = Partial<
  Pick<
    Project,
    | "title"
    | "shortTitle"
    | "category"
    | "summary"
    | "detailedDescription"
    | "features"
    | "imageAlt"
    | "role"
    | "problem"
    | "solution"
    | "goals"
    | "technicalApproach"
    | "workflow"
    | "architecture"
    | "qualityNotes"
    | "challenges"
    | "decisions"
    | "results"
    | "lessons"
    | "videoCaption"
    | "gallery"
    | "limitations"
    | "confidentialityNote"
  >
> & { status?: string };

export type Translation = {
  languageName: string;
  seo: {
    homeTitle: string;
    homeDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
    caseStudySuffix: string;
  };
  common: {
    skipToContent: string;
    backToTop: string;
    contact: string;
    viewSelectedWork: string;
    bookCall: string;
    viewCaseStudy: string;
    stack: string;
    unavailableProjectLinks: string;
    switchToLight: string;
    switchToDark: string;
    languageSwitcher: string;
    primaryNavigation: string;
    toggleNavigation: string;
    tantyastormHome: string;
    primaryActions: string;
    professionalStatus: string;
    profilePanel: string;
    footerActions: string;
  };
  nav: {
    proof: string;
    projects: string;
    services: string;
    skills: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleLines: string[];
    lead: string;
    panelLabel: string;
    panelText: string;
    focusLabel: string;
    focusValue: string;
    outputsLabel: string;
    signal: string;
    meta: string[];
  };
  proof: {
    eyebrow: string;
    title: string;
    items: Array<{ label: string; description: string }>;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      problem: string;
      deliverable: string;
      outcome: string;
    }>;
    deliverable: string;
    outcome: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Array<{ title: string; skills: string[] }>;
  };
  approach: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    calendlyLabel: string;
    linksLabel: string;
    form: {
      name: string;
      email: string;
      projectType: string;
      budget: string;
      message: string;
      website: string;
      selectProjectType: string;
      selectBudget: string;
      projectTypes: string[];
      budgetOptions: string[];
      errors: {
        name: string;
        email: string;
        invalidEmail: string;
        message: string;
      };
      status: {
        success: string;
        error: string;
        notConfiguredDev: string;
        notConfigured: string;
      };
      sending: string;
      submit: string;
    };
  };
  detail: {
    architecture: string;
    challenges: string;
    challenge: string;
    resolution: string;
    decisions: string;
    screenshot: string;
    gallery: string;
    notFoundEyebrow: string;
    notFoundHeading: string;
    backToProjects: string;
    repository: string;
    liveDemo: string;
    demoVideo: string;
    overview: string;
    goals: string;
    problem: string;
    solution: string;
    workflow: string;
    features: string;
    technicalApproach: string;
    quality: string;
    results: string;
    lessons: string;
    limitations: string;
    privacy: string;
    snapshot: string;
    status: string;
    role: string;
    category: string;
    technologyStack: string;
    projectLinks: string;
    repositoryLink: string;
    liveDemoLink: string;
    demoVideoLink: string;
    previous: string;
    next: string;
    detailsLabel: (title: string) => string;
    navigationLabel: string;
  };
  footer: {
    availability: string;
    title: string;
    description: string;
    remote: string;
  };
  contactLinks: {
    email: string;
    github: string;
    upwork: string;
    linkedin: string;
    fiverr: string;
    freelancerProfile: string;
    ariaEmail: (name: string, email: string) => string;
    ariaProfile: (name: string, platform: string) => string;
  };
  projects: Record<Project["slug"], ProjectText>;
};

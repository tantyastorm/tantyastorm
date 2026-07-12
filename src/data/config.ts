const env = import.meta.env;

export function isValidHttpUrl(value?: string) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function optionalUrl(value?: string) {
  return isValidHttpUrl(value) ? value : undefined;
}

export function sitePath(path = "") {
  const base = env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
}

export function absoluteUrl(path = "") {
  const configured =
    optionalUrl(env.VITE_PORTFOLIO_URL) ?? "https://tantyastorm.dev/";
  return new URL(sitePath(path), configured).toString();
}

export const externalUrls = {
  github:
    optionalUrl(env.VITE_GITHUB_PROFILE_URL) ??
    "https://github.com/tantyastorm",
  linkedin:
    optionalUrl(env.VITE_LINKEDIN_URL) ??
    "https://www.linkedin.com/in/tatiana-furtuna/",
  upwork:
    optionalUrl(env.VITE_UPWORK_URL) ??
    "https://www.upwork.com/freelancers/~01d00e59c6273dc9cf?mp_source=share",
  fiverr: optionalUrl(env.VITE_FIVERR_URL),
  calendly: optionalUrl(env.VITE_CALENDLY_URL),
  portfolio: optionalUrl(env.VITE_PORTFOLIO_URL) ?? "https://tantyastorm.dev/",
  contactFormEndpoint: optionalUrl(env.VITE_CONTACT_FORM_ENDPOINT),
};

export const publicContact = {
  email: env.VITE_PUBLIC_EMAIL || "tatiana.furtuna29@gmail.com",
};

export const projectUrls = {
  kreacher: {
    repository:
      optionalUrl(env.VITE_PROJECT_KREACHER_REPOSITORY_URL) ??
      "https://github.com/tantyastorm/kreacher_public",
    demo: optionalUrl(env.VITE_PROJECT_KREACHER_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_KREACHER_VIDEO_URL),
  },
  dobby: {
    repository:
      optionalUrl(env.VITE_PROJECT_DOBBY_REPOSITORY_URL) ??
      "https://github.com/tantyastorm/Dobby_public",
    demo: optionalUrl(env.VITE_PROJECT_DOBBY_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_DOBBY_VIDEO_URL),
  },
  "email-archive-utility": {
    repository: optionalUrl(
      env.VITE_PROJECT_EMAIL_ARCHIVE_UTILITY_REPOSITORY_URL,
    ),
    demo: optionalUrl(env.VITE_PROJECT_EMAIL_ARCHIVE_UTILITY_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_EMAIL_ARCHIVE_UTILITY_VIDEO_URL),
  },
  "excel-to-json-cli": {
    repository:
      optionalUrl(env.VITE_PROJECT_EXCEL_TO_JSON_CLI_REPOSITORY_URL) ??
      "https://github.com/tantyastorm/excel_to_json",
    demo: optionalUrl(env.VITE_PROJECT_EXCEL_TO_JSON_CLI_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_EXCEL_TO_JSON_CLI_VIDEO_URL),
  },
  "books-data-scraper": {
    repository:
      optionalUrl(env.VITE_PROJECT_BOOKS_DATA_SCRAPER_REPOSITORY_URL) ??
      "https://github.com/tantyastorm/books_scraper",
    demo: optionalUrl(env.VITE_PROJECT_BOOKS_DATA_SCRAPER_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_BOOKS_DATA_SCRAPER_VIDEO_URL),
  },
  "desktop-data-extraction-tool": {
    repository:
      optionalUrl(
        env.VITE_PROJECT_DESKTOP_DATA_EXTRACTION_TOOL_REPOSITORY_URL,
      ) ?? "https://github.com/tantyastorm/BnBscraper",
    demo: optionalUrl(env.VITE_PROJECT_DESKTOP_DATA_EXTRACTION_TOOL_DEMO_URL),
    video: optionalUrl(env.VITE_PROJECT_DESKTOP_DATA_EXTRACTION_TOOL_VIDEO_URL),
  },
} as const;

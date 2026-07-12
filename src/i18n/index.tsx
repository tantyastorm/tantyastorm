import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { projects as baseProjects, type Project } from "../data/projects";
import { en } from "./translations/en";
import { ro } from "./translations/ro";
import { ru } from "./translations/ru";
import type { Language, Translation } from "./types";

export const LANGUAGE_STORAGE_KEY = "tantyastorm-language";

const translations: Record<Language, Translation> = { en, ro, ru };

const languages: Language[] = ["en", "ro", "ru"];

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  projects: Project[];
  languages: Language[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return Boolean(value && languages.includes(value as Language));
}

function detectLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ro")) {
    return "ro";
  }

  if (browserLanguage.startsWith("ru")) {
    return "ru";
  }

  return "en";
}

function localizeProjects(language: Language): Project[] {
  const text = translations[language].projects;
  const fallback = translations.en.projects;

  if (language !== "en") {
    return baseProjects.map((project) => {
      const localized = text[project.slug];

      return {
        ...project,
        ...localized,
        features: localized.features ?? project.features,
        goals: localized.goals ?? project.goals,
        technicalApproach:
          localized.technicalApproach ?? project.technicalApproach,
        workflow: localized.workflow ?? project.workflow,
        architecture: localized.architecture ?? project.architecture,
        qualityNotes: localized.qualityNotes ?? project.qualityNotes,
        challenges: localized.challenges ?? project.challenges,
        decisions: localized.decisions ?? project.decisions,
        results: localized.results ?? project.results,
        lessons: localized.lessons ?? project.lessons,
        videoCaption: localized.videoCaption ?? project.videoCaption,
        limitations: localized.limitations ?? project.limitations,
        gallery: localized.gallery ?? project.gallery,
      };
    });
  }

  return baseProjects.map((project) => ({
    ...project,
    ...fallback[project.slug],
    ...text[project.slug],
  }));
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) {
      return;
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language] ?? translations.en,
      projects: localizeProjects(language),
      languages,
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return value;
}

export { translations };
export type { Language };

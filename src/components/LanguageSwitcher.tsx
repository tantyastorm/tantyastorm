import { useI18n, type Language } from "../i18n";

const labels: Record<Language, string> = {
  en: "EN",
  ro: "RO",
  ru: "RU",
};

export function LanguageSwitcher() {
  const { language, languages, setLanguage, t } = useI18n();

  return (
    <div className="language-switcher" aria-label={t.common.languageSwitcher}>
      {languages.map((item) => (
        <button
          className={item === language ? "is-active" : ""}
          type="button"
          key={item}
          onClick={() => setLanguage(item)}
          aria-pressed={item === language}
          title={labels[item]}
        >
          {labels[item]}
        </button>
      ))}
    </div>
  );
}

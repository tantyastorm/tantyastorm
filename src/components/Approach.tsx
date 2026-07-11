import { useI18n } from "../i18n";

export function Approach() {
  const { t } = useI18n();
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">{t.approach.eyebrow}</p>
          <h2 id="approach-title">{t.approach.title}</h2>
        </div>
        <div className="approach-grid">
          {t.approach.items.map((step, index) => (
            <article className="approach-step reveal" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

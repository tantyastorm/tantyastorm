import { useI18n } from "../i18n";

export function ProofStrip() {
  const { t } = useI18n();
  return (
    <section className="proof-section" id="proof" aria-labelledby="proof-title">
      <div className="container proof-section__inner reveal">
        <div>
          <p className="eyebrow">{t.proof.eyebrow}</p>
          <h2 id="proof-title">{t.proof.title}</h2>
        </div>
        <dl className="proof-grid">
          {t.proof.items.map((item) => (
            <div className="proof-item reveal" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { useI18n } from "../i18n";

export function Services() {
  const { t } = useI18n();
  return (
    <section
      className="section services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <p className="eyebrow">{t.servicesSection.eyebrow}</p>
          <h2 id="services-title">{t.servicesSection.title}</h2>
          <p>{t.servicesSection.description}</p>
        </div>
        <div className="services-list">
          {t.servicesSection.items.map((service, index) => (
            <article className="service-row reveal" key={service.title}>
              <span className="service-row__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.problem}</p>
              </div>
              <dl>
                <div>
                  <dt>{t.servicesSection.deliverable}</dt>
                  <dd>{service.deliverable}</dd>
                </div>
                <div>
                  <dt>{t.servicesSection.outcome}</dt>
                  <dd>{service.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

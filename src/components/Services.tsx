import { services } from "../data/site";

export function Services() {
  return (
    <section
      className="section services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <p className="eyebrow">Ways to work together</p>
          <h2 id="services-title">
            Practical builds for workflows that need less manual handling.
          </h2>
          <p>
            Engagements stay close to the work: a clear input, a safer process,
            and a deliverable you can actually run or review.
          </p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
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
                  <dt>Deliverable</dt>
                  <dd>{service.deliverable}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
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

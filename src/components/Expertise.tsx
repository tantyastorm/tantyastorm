import { expertise } from "../data/site";

export function Expertise() {
  return (
    <section
      className="section"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Expertise</p>
          <h2 id="expertise-title">
            Software that fits the workflow around it.
          </h2>
        </div>
        <div className="card-grid card-grid--three">
          {expertise.map((item) => (
            <article className="service-card reveal" key={item.title}>
              <span className="service-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

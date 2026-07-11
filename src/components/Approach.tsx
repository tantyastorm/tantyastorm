import { approach } from "../data/site";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Working Approach</p>
          <h2 id="approach-title">
            Calm structure from first conversation to delivery.
          </h2>
        </div>
        <div className="approach-grid">
          {approach.map((step, index) => (
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

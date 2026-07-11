import { approach } from "../data/site";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">How I work</p>
          <h2 id="approach-title">
            Clear checkpoints before anything becomes automatic.
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

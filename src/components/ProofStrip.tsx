import { proofItems } from "../data/site";

export function ProofStrip() {
  return (
    <section className="proof-section" id="proof" aria-labelledby="proof-title">
      <div className="container proof-section__inner reveal">
        <div>
          <p className="eyebrow">Proof, not adjectives</p>
          <h2 id="proof-title">Evidence from the work already here.</h2>
        </div>
        <dl className="proof-grid">
          {proofItems.map((item) => (
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

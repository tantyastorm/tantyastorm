import { credibility } from "../data/site";
import { assetPath } from "../utils/assets";

export function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="eyebrow">PYTHON DEVELOPER · AUTOMATION · DATA</p>
          <h1 id="hero-title">
            I build reliable software for real-world workflows.
          </h1>
          <p className="hero__lead">
            Python applications, automation systems, web scrapers, data
            pipelines, desktop tools, and API integrations designed to solve
            practical business problems.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary" href={assetPath("#projects")}>
              View Projects
            </a>
            <a
              className="button button--secondary"
              href={assetPath("#contact")}
            >
              Contact Me
            </a>
          </div>
          <ul className="credibility" aria-label="Professional strengths">
            {credibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__brand reveal" aria-label="Tantyastorm brand mark">
          <div className="brand-card">
            <img
              src={assetPath("assets/brand/app-icon.png")}
              alt="Tantyastorm logo"
            />
            <div>
              <span>Tatiana Furtuna</span>
              <strong>Python Developer</strong>
              <small>Automation · Scraping · Desktop Tools</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { PointerEvent } from "react";
import { heroMeta } from "../data/site";
import { assetPath } from "../utils/assets";

export function Hero() {
  const updateSignal = (event: PointerEvent<HTMLDivElement>) => {
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty(
      "--signal-x",
      `${Math.round(event.clientX - rect.left)}px`,
    );
    panel.style.setProperty(
      "--signal-y",
      `${Math.round(event.clientY - rect.top)}px`,
    );
  };

  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__rule" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="eyebrow">
            Python developer / automation and data tools
          </p>
          <h1 id="hero-title">
            I turn repetitive workflows into reliable Python tools.
          </h1>
          <p className="hero__lead">
            I build automation, scraping, file-processing, and desktop utilities
            for teams and operators who need structured outputs, safer review
            steps, and less copy-paste work.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <a className="button button--primary" href={assetPath("#projects")}>
              View selected work
            </a>
            <a
              className="button button--secondary"
              href={assetPath("#contact")}
            >
              Book a call
            </a>
          </div>
          <ul className="hero-meta" aria-label="Professional status">
            {heroMeta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__aside reveal" aria-label="Tantyastorm profile">
          <div className="hero-panel" onPointerMove={updateSignal}>
            <div className="hero-panel__label">Tantyastorm</div>
            <span className="hero-panel__signal" aria-hidden="true" />
            <img
              src={assetPath("assets/brand/app-icon.png")}
              alt="Tantyastorm logo"
            />
            <p>
              Automation, extraction, transformation, and local-first tools
              shaped around the workflow before the code.
            </p>
            <dl>
              <div>
                <dt>Focus</dt>
                <dd>Python delivery</dd>
              </div>
              <div>
                <dt>Outputs</dt>
                <dd>CSV / JSON / TXT / Excel</dd>
              </div>
            </dl>
            <span className="hero-panel__coordinates" aria-hidden="true">
              TS-47.01 / WORKFLOW SIGNAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

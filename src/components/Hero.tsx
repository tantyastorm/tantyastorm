import type { PointerEvent } from "react";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";

export function Hero() {
  const { t } = useI18n();
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
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {t.hero.titleLines.map((line) => (
              <span className="hero-title__line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions" aria-label={t.common.primaryActions}>
            <a className="button button--primary" href={assetPath("#projects")}>
              {t.common.viewSelectedWork}
            </a>
            <a
              className="button button--secondary"
              href={assetPath("#contact")}
            >
              {t.common.bookCall}
            </a>
          </div>
          <ul className="hero-meta" aria-label={t.common.professionalStatus}>
            {t.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__aside reveal" aria-label={t.common.profilePanel}>
          <div className="hero-panel" onPointerMove={updateSignal}>
            <div className="hero-panel__label">{t.hero.panelLabel}</div>
            <span className="hero-panel__signal" aria-hidden="true" />
            <img
              src={assetPath("assets/brand/app-icon.png")}
              alt="Tantyastorm logo"
            />
            <p>{t.hero.panelText}</p>
            <dl>
              <div>
                <dt>{t.hero.focusLabel}</dt>
                <dd>{t.hero.focusValue}</dd>
              </div>
              <div>
                <dt>{t.hero.outputsLabel}</dt>
                <dd>CSV / JSON / TXT / Excel</dd>
              </div>
            </dl>
            <span className="hero-panel__coordinates" aria-hidden="true">
              {t.hero.signal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

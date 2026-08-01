import type { CSSProperties } from "react";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <p className="eyebrow hero-stage">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title hero-stage">
            {t.hero.titleLines.map((line) => (
              <span className="hero-title__line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__lead hero-stage">{t.hero.lead}</p>
          <div
            className="hero__actions hero-stage"
            aria-label={t.common.primaryActions}
          >
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
          <aside
            className="hero-status hero-stage"
            aria-label={t.hero.highlight.label}
          >
            <span className="hero-status__dot" aria-hidden="true" />
            <div className="hero-status__copy">
              <span>{t.hero.highlight.label}</span>
              <strong>WorkflowForge</strong>
              <p>{t.hero.highlight.text}</p>
            </div>
            <span className="hero-status__badge">{t.hero.highlight.badge}</span>
            <a
              className="hero-status__link"
              href={assetPath("projects/workflowforge/")}
            >
              {t.hero.highlight.link}
              <span aria-hidden="true">-&gt;</span>
            </a>
          </aside>
        </div>

        <div
          className="hero__aside reveal"
          aria-label={t.hero.workflow.ariaLabel}
        >
          <div className="workflow-panel">
            <div className="workflow-panel__header">
              <div>
                <span>{t.hero.workflow.project}</span>
                <strong>{t.hero.workflow.description}</strong>
              </div>
              <span className="workflow-panel__live">
                {t.hero.workflow.status}
              </span>
            </div>
            <ol className="workflow-pipeline">
              {t.hero.workflow.nodes.map((node, index) => (
                <li
                  className="workflow-node"
                  key={node.label}
                  style={{ "--node-index": index } as CSSProperties}
                >
                  <span className="workflow-node__marker" aria-hidden="true" />
                  <div>
                    <strong>{node.label}</strong>
                    <span>{node.status}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="workflow-output">
              <div>
                <span>{t.hero.workflow.outputTitle}</span>
                <p>{t.hero.workflow.outputDescription}</p>
              </div>
              <ul>
                {t.hero.workflow.formats.map((format) => (
                  <li key={format}>{format}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

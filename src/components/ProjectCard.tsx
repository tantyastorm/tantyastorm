import type { Project } from "../data/projects";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";
import { ExternalLink } from "./ExternalLink";
import type { PointerEvent } from "react";
import { GlassPanel } from "./v2/GlassPanel";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useI18n();
  const projectRoute = assetPath(`projects/${project.slug}/`);
  const stack = project.technologies.slice(0, 5).join(" / ");
  const visibleBadges = project.badges?.slice(0, 2);
  const ctaLabel =
    project.slug === "workflowforge" ? t.common.viewProject : t.common.viewCaseStudy;
  const isWorkflowForge = project.slug === "workflowforge";
  const updateCardSignal = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty(
      "--card-x",
      `${Math.round(event.clientX - rect.left)}px`,
    );
    card.style.setProperty(
      "--card-y",
      `${Math.round(event.clientY - rect.top)}px`,
    );
  };

  const media =
    project.image && project.imageAlt ? (
      <div className="project-card__media">
        <img
          src={assetPath(project.image)}
          alt={project.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          width="960"
          height="540"
          onError={(event) => {
            event.currentTarget.hidden = true;
            event.currentTarget.nextElementSibling?.removeAttribute("hidden");
          }}
        />
      </div>
    ) : null;

  const body = (
    <div className="project-card__body">
      <div className="project-card__meta">
        <span>{project.category}</span>
        {project.caseStudySections?.length ? null : (
          <span>{project.status}</span>
        )}
      </div>
      {visibleBadges?.length ? (
        <ul className="status-badges status-badges--card">
          {visibleBadges.map((badge) => (
            <li
              className={
                isWorkflowForge && badge === project.badges?.[0]
                  ? "status-badge status-badge--active"
                  : "status-badge"
              }
              key={badge}
            >
              {isWorkflowForge && badge === project.badges?.[0] ? (
                <span className="status-badge__dot" aria-hidden="true" />
              ) : null}
              {badge}
            </li>
          ))}
        </ul>
      ) : null}
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p className="project-card__stack">
        <span>{t.common.stack}</span>
        {stack}
      </p>
      {project.confidentialityNote ? (
        <p className="project-card__note">{project.confidentialityNote}</p>
      ) : null}
      <div className="project-card__actions">
        <span className="project-card__cta">
          {ctaLabel} <span aria-hidden="true">-&gt;</span>
        </span>
        <ExternalLink href={project.repositoryUrl}>
          {t.detail.repositoryLink}
        </ExternalLink>
        {isWorkflowForge && !project.repositoryUrl ? (
          <span className="project-card__placeholder">
              {t.common.unavailableRepository}
          </span>
        ) : null}
      </div>
    </div>
  );

  return (
    <GlassPanel
      role="article"
      className="project-card reveal"
      data-project={project.slug}
      onPointerMove={updateCardSignal}
    >
      <a
        className="project-card__surface-link"
        href={projectRoute}
        aria-label={t.common.viewProjectAria(project.title)}
      />
      <div className="project-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      {media}
      {body}
    </GlassPanel>
  );
}

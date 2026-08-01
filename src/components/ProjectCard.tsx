import type { Project } from "../data/projects";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";
import { ExternalLink } from "./ExternalLink";
import type { PointerEvent } from "react";

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
    project.slug === "workflowforge" ? "View Project" : t.common.viewCaseStudy;
  const isWorkflowForge = project.slug === "workflowforge";
  const isFeatured = isWorkflowForge;
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
                badge === "Active Development"
                  ? "status-badge status-badge--active"
                  : "status-badge"
              }
              key={badge}
            >
              {badge === "Active Development" ? (
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
        <a
          className="project-card__cta"
          href={projectRoute}
          aria-label={`View ${project.title} project`}
        >
          {ctaLabel} <span aria-hidden="true">-&gt;</span>
        </a>
        <ExternalLink href={project.repositoryUrl}>
          {t.detail.repositoryLink}
        </ExternalLink>
        {isWorkflowForge && !project.repositoryUrl ? (
          <span className="project-card__placeholder">
            GitHub: VITE_WORKFLOWFORGE_GITHUB_URL
          </span>
        ) : null}
      </div>
    </div>
  );

  return (
    <article
      className={`project-card reveal ${isFeatured ? "project-card--featured" : ""}`}
      data-project={project.slug}
      onPointerMove={updateCardSignal}
    >
      <div className="project-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      {isWorkflowForge ? (
        <>
          {body}
          {media}
        </>
      ) : (
        <>
          {media}
          {body}
        </>
      )}
    </article>
  );
}

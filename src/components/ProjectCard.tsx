import type { Project } from "../data/projects";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useI18n();
  const projectRoute = assetPath(`projects/${project.slug}/`);
  const stack = project.technologies.slice(0, 5).join(" / ");

  return (
    <a
      className={`project-card reveal ${index === 0 ? "project-card--featured" : ""}`}
      data-project={project.slug}
      href={projectRoute}
      aria-label={`View ${project.title} case study`}
    >
      <div className="project-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      {project.image && project.imageAlt ? (
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
      ) : null}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="project-card__stack">
          <span>{t.common.stack}</span>
          {stack}
        </p>
        {project.confidentialityNote ? (
          <p className="project-card__note">{project.confidentialityNote}</p>
        ) : null}
        <span className="project-card__cta" aria-hidden="true">
          {t.common.viewCaseStudy} <span>-&gt;</span>
        </span>
      </div>
    </a>
  );
}

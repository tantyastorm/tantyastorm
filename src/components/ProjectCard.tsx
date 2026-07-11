import type { Project } from "../data/projects";
import { assetPath } from "../utils/assets";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectRoute = assetPath(`projects/${project.slug}/`);

  return (
    <a
      className={`project-card reveal ${project.featured ? "project-card--featured" : ""}`}
      href={projectRoute}
      aria-label={`View ${project.title} case study`}
    >
      <div className="project-card__media">
        {project.image ? (
          <img
            src={assetPath(project.image)}
            alt={project.imageAlt}
            loading="lazy"
            width="960"
            height="540"
            onError={(event) => {
              event.currentTarget.hidden = true;
              event.currentTarget.nextElementSibling?.removeAttribute("hidden");
            }}
          />
        ) : null}
        <div className="project-card__fallback" hidden={Boolean(project.image)}>
          <img
            src={assetPath("assets/brand/app-icon-64.png")}
            alt=""
            loading="lazy"
            width="64"
            height="64"
          />
          <span>{project.shortTitle}</span>
          <small>{project.category}</small>
        </div>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.confidentialityNote ? (
          <p className="project-card__note">{project.confidentialityNote}</p>
        ) : null}
        <span className="project-card__cta" aria-hidden="true">
          View case study <span>-&gt;</span>
        </span>
      </div>
    </a>
  );
}

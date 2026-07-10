import type { Project } from "../data/projects";
import { assetPath } from "../utils/assets";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const links = [
    { label: "Repository", href: project.repositoryUrl },
    { label: "Live Demo", href: project.liveDemoUrl },
    { label: "Case Study", href: project.caseStudyUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className={`project-card reveal ${project.featured ? "project-card--featured" : ""}`}>
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
          <img src={assetPath("assets/brand/app-icon-64.png")} alt="" loading="lazy" width="64" height="64" />
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
        {links.length > 0 ? (
          <div className="project-card__links">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

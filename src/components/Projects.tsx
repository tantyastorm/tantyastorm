import { useI18n } from "../i18n";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { projects, t } = useI18n();
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">{t.projectsSection.eyebrow}</p>
          <h2 id="projects-title">{t.projectsSection.title}</h2>
          <p>{t.projectsSection.description}</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

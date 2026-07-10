import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Featured Projects</p>
          <h2 id="projects-title">A portfolio of automation, extraction, and data tools.</h2>
          <p>
            Each project is managed from a typed data file, so new case studies can be added without
            changing the layout.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

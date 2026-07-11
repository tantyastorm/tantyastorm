import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">
            Case studies from automation, extraction, and data workflows.
          </h2>
          <p>
            Six projects, each focused on turning messy inputs or repetitive
            steps into structured, reviewable output.
          </p>
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

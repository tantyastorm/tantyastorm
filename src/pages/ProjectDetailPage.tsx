import { ExternalLink } from "../components/ExternalLink";
import { SEO } from "../components/SEO";
import type {
  ArchitectureItem,
  ProjectChallenge,
  ProjectDecision,
  ProjectFeature,
} from "../data/projects";
import { projects } from "../data/projects";
import { assetPath } from "../utils/assets";

type ProjectDetailPageProps = {
  slug: string;
};

function SectionList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function TextSection({ title, content }: { title: string; content?: string }) {
  if (!content) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

function FeatureGrid({
  title,
  items,
}: {
  title: string;
  items?: ProjectFeature[];
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <div className="detail-card-grid">
        {items.map((item) => (
          <article className="detail-mini-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArchitectureGrid({ items }: { items?: ArchitectureItem[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>Architecture</h2>
      <div className="detail-card-grid">
        {items.map((item) => (
          <article className="detail-mini-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChallengeList({ items }: { items?: ProjectChallenge[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>Challenges and Resolutions</h2>
      <div className="challenge-list">
        {items.map((item) => (
          <article className="challenge-card" key={item.title}>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>Challenge</dt>
                <dd>{item.challenge}</dd>
              </div>
              <div>
                <dt>Resolution</dt>
                <dd>{item.resolution}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function DecisionList({ items }: { items?: ProjectDecision[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>Engineering Decisions</h2>
      <div className="detail-card-grid">
        {items.map((item) => (
          <article className="detail-mini-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.explanation}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenshotSection({
  src,
  alt,
  caption,
}: {
  src?: string;
  alt: string;
  caption?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <section className="detail-section detail-section--media">
      <h2>Screenshot</h2>
      <figure className="case-study-figure">
        <img
          src={assetPath(src)}
          alt={alt}
          loading="lazy"
          width="960"
          height="540"
        />
        {caption ? <figcaption>{caption}</figcaption> : null}
      </figure>
    </section>
  );
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main id="main" className="project-detail-main">
        <SEO
          title="Project Not Found | Tantyastorm"
          description="The requested project case study could not be found."
          path="404"
        />
        <section className="section">
          <div className="container detail-empty">
            <p className="eyebrow">Not Found</p>
            <h1>Project not found.</h1>
            <a className="button button--primary" href={assetPath("#projects")}>
              Back to projects
            </a>
          </div>
        </section>
      </main>
    );
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const projectPath = `projects/${project.slug}/`;

  return (
    <main id="main" className="project-detail-main">
      <SEO
        title={`${project.title} Case Study | Tantyastorm`}
        description={project.summary}
        path={projectPath}
        image={project.image}
        type="article"
      />
      <article className="project-detail">
        <header className="detail-hero section">
          <div className="container detail-hero__inner">
            <div>
              <a className="back-link" href={assetPath("#projects")}>
                Back to projects
              </a>
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}</h1>
              <p className="hero__lead">{project.summary}</p>
              <div className="project-card__meta">
                <span>{project.status}</span>
                {project.role ? <span>{project.role}</span> : null}
              </div>
              <div className="detail-actions">
                <ExternalLink
                  className="button button--secondary"
                  href={project.repositoryUrl}
                >
                  Repository
                </ExternalLink>
                <ExternalLink
                  className="button button--secondary"
                  href={project.liveDemoUrl}
                >
                  Live Demo
                </ExternalLink>
                <ExternalLink
                  className="button button--secondary"
                  href={project.videoUrl}
                >
                  Demo Video
                </ExternalLink>
              </div>
              {project.confidentialityNote ? (
                <p className="project-card__note">
                  {project.confidentialityNote}
                </p>
              ) : null}
            </div>
            <div className="detail-media">
              {project.image ? (
                <img
                  src={assetPath(project.image)}
                  alt={project.imageAlt}
                  width="960"
                  height="540"
                />
              ) : (
                <div className="project-card__fallback">
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
              )}
            </div>
          </div>
        </header>

        <div className="container detail-grid">
          <div className="detail-content">
            <TextSection
              title="Case Study Overview"
              content={project.detailedDescription}
            />
            <SectionList title="Goals" items={project.goals} />
            <TextSection title="Problem" content={project.problem} />
            <TextSection
              title="Solution"
              content={project.solution ?? project.detailedDescription}
            />
            <SectionList title="Workflow" items={project.workflow} />
            <FeatureGrid title="Main Features" items={project.features} />
            <SectionList
              title="Technical Approach"
              items={project.technicalApproach}
            />
            <ArchitectureGrid items={project.architecture} />
            <SectionList
              title="Quality Safeguards"
              items={project.qualityNotes}
            />
            <DecisionList items={project.decisions} />
            <ChallengeList items={project.challenges} />
            <SectionList title="Results" items={project.results} />
            <SectionList title="Lessons" items={project.lessons} />
            <ScreenshotSection
              src={project.image}
              alt={project.imageAlt}
              caption={project.screenshotCaption}
            />
            <TextSection title="Limitations" content={project.limitations} />
            <TextSection
              title="Privacy or NDA Notice"
              content={project.confidentialityNote}
            />
          </div>

          <aside
            className="detail-sidebar"
            aria-label={`${project.title} project details`}
          >
            <section>
              <h2>Project Snapshot</h2>
              <dl className="detail-facts">
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                {project.role ? (
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h2>Technology Stack</h2>
              <ul className="tag-list tag-list--loose">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Project Links</h2>
              <div className="detail-link-list">
                <ExternalLink href={project.repositoryUrl}>
                  GitHub repository
                </ExternalLink>
                <ExternalLink href={project.liveDemoUrl}>
                  Live demo
                </ExternalLink>
                <ExternalLink href={project.videoUrl}>Demo video</ExternalLink>
                {!project.repositoryUrl && (
                  <p>Source code available on request or private project.</p>
                )}
              </div>
            </section>
          </aside>
        </div>

        <nav className="container detail-nav" aria-label="Project navigation">
          <a
            className="button button--secondary"
            href={assetPath(`projects/${previousProject.slug}/`)}
          >
            Previous: {previousProject.shortTitle}
          </a>
          <a className="button button--primary" href={assetPath("#projects")}>
            Back to projects
          </a>
          <a
            className="button button--secondary"
            href={assetPath(`projects/${nextProject.slug}/`)}
          >
            Next: {nextProject.shortTitle}
          </a>
        </nav>
      </article>
    </main>
  );
}

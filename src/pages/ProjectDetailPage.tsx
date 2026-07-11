import { ExternalLink } from "../components/ExternalLink";
import { SEO } from "../components/SEO";
import type {
  ArchitectureItem,
  ProjectChallenge,
  ProjectDecision,
  ProjectFeature,
} from "../data/projects";
import { useI18n } from "../i18n";
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

function ArchitectureGrid({
  title,
  items,
}: {
  title: string;
  items?: ArchitectureItem[];
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

function ChallengeList({
  title,
  challengeLabel,
  resolutionLabel,
  items,
}: {
  title: string;
  challengeLabel: string;
  resolutionLabel: string;
  items?: ProjectChallenge[];
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <div className="challenge-list">
        {items.map((item) => (
          <article className="challenge-card" key={item.title}>
            <h3>{item.title}</h3>
            <dl>
              <div>
                <dt>{challengeLabel}</dt>
                <dd>{item.challenge}</dd>
              </div>
              <div>
                <dt>{resolutionLabel}</dt>
                <dd>{item.resolution}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function DecisionList({
  title,
  items,
}: {
  title: string;
  items?: ProjectDecision[];
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
            <p>{item.explanation}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenshotSection({
  title,
  src,
  alt,
  caption,
}: {
  title: string;
  src?: string;
  alt: string;
  caption?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <section className="detail-section detail-section--media">
      <h2>{title}</h2>
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
  const { projects, t } = useI18n();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main id="main" className="project-detail-main">
        <SEO
          title={t.seo.notFoundTitle}
          description={t.seo.notFoundDescription}
          path="404"
        />
        <section className="section">
          <div className="container detail-empty">
            <p className="eyebrow">{t.detail.notFoundEyebrow}</p>
            <h1>{t.detail.notFoundHeading}</h1>
            <a className="button button--primary" href={assetPath("#projects")}>
              {t.detail.backToProjects}
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
        title={`${project.title} ${t.seo.caseStudySuffix}`}
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
                {t.detail.backToProjects}
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
                  {t.detail.repository}
                </ExternalLink>
                <ExternalLink
                  className="button button--secondary"
                  href={project.liveDemoUrl}
                >
                  {t.detail.liveDemo}
                </ExternalLink>
                <ExternalLink
                  className="button button--secondary"
                  href={project.videoUrl}
                >
                  {t.detail.demoVideo}
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
              title={t.detail.overview}
              content={project.detailedDescription}
            />
            <SectionList title={t.detail.goals} items={project.goals} />
            <TextSection title={t.detail.problem} content={project.problem} />
            <TextSection
              title={t.detail.solution}
              content={project.solution ?? project.detailedDescription}
            />
            <SectionList title={t.detail.workflow} items={project.workflow} />
            <FeatureGrid title={t.detail.features} items={project.features} />
            <SectionList
              title={t.detail.technicalApproach}
              items={project.technicalApproach}
            />
            <ArchitectureGrid
              title={t.detail.architecture}
              items={project.architecture}
            />
            <SectionList
              title={t.detail.quality}
              items={project.qualityNotes}
            />
            <DecisionList
              title={t.detail.decisions}
              items={project.decisions}
            />
            <ChallengeList
              title={t.detail.challenges}
              challengeLabel={t.detail.challenge}
              resolutionLabel={t.detail.resolution}
              items={project.challenges}
            />
            <SectionList title={t.detail.results} items={project.results} />
            <SectionList title={t.detail.lessons} items={project.lessons} />
            <ScreenshotSection
              title={t.detail.screenshot}
              src={project.image}
              alt={project.imageAlt}
              caption={project.screenshotCaption}
            />
            <TextSection
              title={t.detail.limitations}
              content={project.limitations}
            />
            <TextSection
              title={t.detail.privacy}
              content={project.confidentialityNote}
            />
          </div>

          <aside
            className="detail-sidebar"
            aria-label={t.detail.detailsLabel(project.title)}
          >
            <section>
              <h2>{t.detail.snapshot}</h2>
              <dl className="detail-facts">
                <div>
                  <dt>{t.detail.status}</dt>
                  <dd>{project.status}</dd>
                </div>
                {project.role ? (
                  <div>
                    <dt>{t.detail.role}</dt>
                    <dd>{project.role}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>{t.detail.category}</dt>
                  <dd>{project.category}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h2>{t.detail.technologyStack}</h2>
              <ul className="tag-list tag-list--loose">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>{t.detail.projectLinks}</h2>
              <div className="detail-link-list">
                <ExternalLink href={project.repositoryUrl}>
                  {t.detail.repositoryLink}
                </ExternalLink>
                <ExternalLink href={project.liveDemoUrl}>
                  {t.detail.liveDemoLink}
                </ExternalLink>
                <ExternalLink href={project.videoUrl}>
                  {t.detail.demoVideoLink}
                </ExternalLink>
                {!project.repositoryUrl && (
                  <p>{t.common.unavailableProjectLinks}</p>
                )}
              </div>
            </section>
          </aside>
        </div>

        <nav
          className="container detail-nav"
          aria-label={t.detail.navigationLabel}
        >
          <a
            className="button button--secondary"
            href={assetPath(`projects/${previousProject.slug}/`)}
          >
            {t.detail.previous}: {previousProject.shortTitle}
          </a>
          <a className="button button--primary" href={assetPath("#projects")}>
            {t.detail.backToProjects}
          </a>
          <a
            className="button button--secondary"
            href={assetPath(`projects/${nextProject.slug}/`)}
          >
            {t.detail.next}: {nextProject.shortTitle}
          </a>
        </nav>
      </article>
    </main>
  );
}

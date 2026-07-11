import { useI18n } from "../i18n";

export function Skills() {
  const { t } = useI18n();
  return (
    <section
      className="section section--compact"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">{t.skillsSection.eyebrow}</p>
          <h2 id="skills-title">{t.skillsSection.title}</h2>
          <p>{t.skillsSection.description}</p>
        </div>
        <div className="skills-grid">
          {t.skillsSection.groups.map((group) => (
            <section
              className="skill-group reveal"
              key={group.title}
              aria-labelledby={`skill-${group.title}`}
            >
              <h3 id={`skill-${group.title}`}>{group.title}</h3>
              <ul className="tag-list tag-list--loose">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

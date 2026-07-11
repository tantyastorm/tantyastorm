import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section
      className="section section--compact"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Technical Skills</p>
          <h2 id="skills-title">Focused tools for Python-centered delivery.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
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

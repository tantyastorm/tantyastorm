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
          <p className="eyebrow">Technical strengths</p>
          <h2 id="skills-title">
            A Python-centered toolkit for practical delivery.
          </h2>
          <p>
            The stack is intentionally direct: automation libraries, parsers,
            desktop UI tools, data formats, tests, and the web basics needed to
            ship usable software.
          </p>
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

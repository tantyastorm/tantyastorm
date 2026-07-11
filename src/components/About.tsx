export function About() {
  return (
    <section
      className="section section--compact"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container split">
        <div className="section-heading reveal">
          <p className="eyebrow">About</p>
          <h2 id="about-title">
            Practical Python software for operational work.
          </h2>
        </div>
        <div className="prose reveal">
          <p>
            I am a Python developer focused on practical automation and software
            that reduces repetitive work, organizes complex data, and improves
            operational workflows.
          </p>
          <p>
            My work includes desktop applications, browser and HTTP-based web
            scraping, data extraction and transformation, Excel, CSV, and JSON
            processing, backend services, API integrations, workflow automation,
            testing, maintainable code, and privacy-conscious local tools.
          </p>
        </div>
      </div>
    </section>
  );
}

import { contactLinks } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Have a workflow that should not still be manual?</h2>
            <p>
              I build practical Python tools for automation, data extraction, file processing,
              desktop workflows, and backend integration.
            </p>
          </div>
          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                className="contact-link"
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
              >
                <span className="contact-link__icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { contactLinks, profile } from "../data/profile";
import { externalUrls } from "../data/config";
import { useI18n } from "../i18n";
import { ContactForm } from "./ContactForm";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  const { t } = useI18n();
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 id="contact-title">{t.contact.title}</h2>
            <p>{t.contact.description}</p>
            <div className="contact-actions">
              <ExternalLink
                className="button button--secondary"
                href={externalUrls.calendly}
                ariaLabel={t.contact.calendlyLabel}
              >
                <span aria-hidden="true">CAL</span>
                {t.common.bookCall}
              </ExternalLink>
            </div>
          </div>
          <div className="contact-stack">
            <div className="contact-links" aria-label={t.contact.linksLabel}>
              {contactLinks.map((link) => (
                <a
                  className="contact-link"
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={
                    link.label === "Email"
                      ? t.contactLinks.ariaEmail(profile.name, link.detail)
                      : t.contactLinks.ariaProfile(profile.name, link.label)
                  }
                >
                  <span className="contact-link__icon" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span>
                    <strong>
                      {link.label === "Email"
                        ? t.contactLinks.email
                        : link.label === "GitHub"
                          ? t.contactLinks.github
                          : link.label === "Upwork"
                            ? t.contactLinks.upwork
                            : link.label === "LinkedIn"
                              ? t.contactLinks.linkedin
                              : t.contactLinks.fiverr}
                    </strong>
                    <small>
                      {link.detail === "Freelancer Profile"
                        ? t.contactLinks.freelancerProfile
                        : link.detail}
                    </small>
                  </span>
                </a>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

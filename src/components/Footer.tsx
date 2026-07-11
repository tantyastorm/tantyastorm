import { externalUrls } from "../data/config";
import { contactLinks, profile } from "../data/profile";
import { assetPath } from "../utils/assets";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  const year = new Date().getFullYear();
  const profileLinks = contactLinks.filter((link) => link.isExternal);

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container footer-inner">
        <div className="footer-main">
          <a
            className="footer-brand"
            href={assetPath("#top")}
            aria-label="Back to top"
          >
            <img src={assetPath("assets/brand/logo-color.png")} alt="" />
            <span>{profile.brandName}</span>
          </a>
          <div>
            <p className="eyebrow">Available for freelance projects</p>
            <h2 id="footer-title">
              Python tools for workflows that should not still be manual.
            </h2>
            <p>
              Automation, data extraction, desktop utilities, and practical MVPs
              built around real operating constraints.
            </p>
          </div>
        </div>

        <div className="footer-actions" aria-label="Footer actions">
          <a className="footer-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profileLinks.map((link) => (
            <a
              className="footer-link footer-link--external"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
          <ExternalLink
            className="footer-link footer-link--call footer-link--external"
            href={externalUrls.calendly}
            ariaLabel="Book a call on Calendly"
          >
            Book a call
          </ExternalLink>
          <a className="footer-link" href={assetPath("#top")}>
            Back to top
          </a>
        </div>

        <div className="footer-bottom">
          <span>{profile.name}</span>
          <span>{profile.role}</span>
          <span>Remote collaboration</span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}

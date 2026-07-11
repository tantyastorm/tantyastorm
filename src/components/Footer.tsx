import { externalUrls } from "../data/config";
import { contactLinks, profile } from "../data/profile";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const profileLinks = contactLinks.filter((link) => link.isExternal);

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container footer-inner">
        <div className="footer-main">
          <a
            className="footer-brand"
            href={assetPath("#top")}
            aria-label={t.common.backToTop}
          >
            <img src={assetPath("assets/brand/logo-color.png")} alt="" />
            <span>{profile.brandName}</span>
          </a>
          <div>
            <p className="eyebrow">{t.footer.availability}</p>
            <h2 id="footer-title">{t.footer.title}</h2>
            <p>{t.footer.description}</p>
          </div>
        </div>

        <div className="footer-actions" aria-label={t.common.footerActions}>
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
              {link.label === "GitHub"
                ? t.contactLinks.github
                : link.label === "Upwork"
                  ? t.contactLinks.upwork
                  : link.label === "LinkedIn"
                    ? t.contactLinks.linkedin
                    : t.contactLinks.fiverr}
            </a>
          ))}
          <ExternalLink
            className="footer-link footer-link--call footer-link--external"
            href={externalUrls.calendly}
            ariaLabel={t.contact.calendlyLabel}
          >
            {t.common.bookCall}
          </ExternalLink>
          <a className="footer-link" href={assetPath("#top")}>
            {t.common.backToTop}
          </a>
        </div>

        <div className="footer-bottom">
          <span>{profile.name}</span>
          <span>{profile.role}</span>
          <span>{t.footer.remote}</span>
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}

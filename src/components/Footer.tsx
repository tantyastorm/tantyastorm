import { profile } from "../data/profile";
import { assetPath } from "../utils/assets";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a
          className="footer-brand"
          href={assetPath("#top")}
          aria-label="Back to top"
        >
          <img src={assetPath("assets/brand/logo-white.png")} alt="" />
          <span>{profile.brandName}</span>
        </a>
        <p>
          {profile.name} · {profile.role} · Automation, data extraction, desktop
          tools, and backend integration.
        </p>
      </div>
    </footer>
  );
}

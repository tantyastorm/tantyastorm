import { useEffect, useState } from "react";
import { navItems } from "../data/site";
import { assetPath } from "../utils/assets";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${hasScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Tantyastorm home" onClick={closeMenu}>
          <img src={assetPath("assets/brand/navbar-logo.png")} alt="" className="brand__wordmark" />
          <span className="brand__text">Tantyastorm</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu ${isOpen ? "nav-menu--open" : ""}`} id="primary-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button button--small button--primary" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

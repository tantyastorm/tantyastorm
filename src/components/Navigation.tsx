import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n";
import { assetPath } from "../utils/assets";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const { t } = useI18n();
  const navItems = useMemo(
    () => [
      { label: t.nav.proof, href: "#proof" },
      { label: t.nav.projects, href: "#projects" },
      { label: t.nav.services, href: "#services" },
      { label: t.nav.skills, href: "#skills" },
    ],
    [t],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]?.href);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`site-header ${hasScrolled ? "site-header--scrolled" : ""}`}
    >
      <nav className="nav container" aria-label={t.common.primaryNavigation}>
        <a
          className="brand"
          href={assetPath("#top")}
          aria-label={t.common.tantyastormHome}
          onClick={closeMenu}
        >
          <img
            src={assetPath("assets/brand/navbar-logo.png")}
            alt=""
            className="brand__wordmark"
          />
          <span className="brand__text">Tantyastorm</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={t.common.toggleNavigation}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-menu ${isOpen ? "nav-menu--open" : ""}`}
          id="primary-menu"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href ? "is-active" : ""}
              href={assetPath(item.href)}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            className="button button--small button--primary"
            href={assetPath("#contact")}
            onClick={closeMenu}
          >
            {t.common.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}

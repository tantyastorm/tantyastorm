import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function getRoutePath() {
  const storedPath = sessionStorage.getItem("tantyastorm:path");
  if (storedPath) {
    sessionStorage.removeItem("tantyastorm:path");
    window.history.replaceState(null, "", storedPath);
  }

  const base = import.meta.env.BASE_URL;
  const path = window.location.pathname;
  return path.startsWith(base)
    ? path.slice(base.length)
    : path.replace(/^\/+/, "");
}

export default function App() {
  const routePath = getRoutePath();
  const projectMatch = routePath.match(/^projects\/([^/]+)\/?$/);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.classList.add("reveal-ready");
    const revealItems = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, [routePath]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      {projectMatch ? (
        <ProjectDetailPage slug={projectMatch[1]} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  );
}

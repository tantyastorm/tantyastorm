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

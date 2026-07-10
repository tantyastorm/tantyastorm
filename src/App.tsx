import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

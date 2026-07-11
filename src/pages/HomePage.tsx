import { About } from "../components/About";
import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";
import { Expertise } from "../components/Expertise";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { SEO } from "../components/SEO";
import { Skills } from "../components/Skills";

export function HomePage() {
  return (
    <main id="main">
      <SEO
        title="Tatiana Furtuna | Python Developer & Automation Specialist"
        description="Portfolio of Tatiana Furtuna, a Python developer specializing in automation, web scraping, desktop applications, data processing, and backend integrations."
      />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Approach />
      <Contact />
    </main>
  );
}

import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { ProofStrip } from "../components/ProofStrip";
import { Projects } from "../components/Projects";
import { SEO } from "../components/SEO";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { useI18n } from "../i18n";

export function HomePage() {
  const { t } = useI18n();
  return (
    <main id="main">
      <SEO title={t.seo.homeTitle} description={t.seo.homeDescription} />
      <Hero />
      <ProofStrip />
      <Projects />
      <Services />
      <Skills />
      <Approach />
      <Contact />
    </main>
  );
}

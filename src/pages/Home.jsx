import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import SkillsPreview from "../components/SkillsPreview.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container page-shell">
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={100}>
          <AboutPreview />
        </Reveal>

        <Reveal delay={200}>
          <SkillsPreview />
        </Reveal>

        <Reveal delay={300}>
          <ProjectCarousel />
        </Reveal>

        <Reveal delay={400}>
          <ContactCTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
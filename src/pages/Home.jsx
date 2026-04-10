import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import SkillsPreview from "../components/SkillsPreview.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <Hero />
        <AboutPreview />
        <SkillsPreview />
        <ProjectCarousel />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
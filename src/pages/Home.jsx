import { motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import SkillsPreview from "../components/SkillsPreview.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";

const pageAnim = {
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main className="container page-shell" {...pageAnim}>
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
      </motion.main>

      <Footer />
    </>
  );
}
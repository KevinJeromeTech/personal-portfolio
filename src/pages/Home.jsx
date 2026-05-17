import { motion } from "motion/react";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import SkillsPreview from "../components/SkillsPreview.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <motion.main
      className="container page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
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
  );
}
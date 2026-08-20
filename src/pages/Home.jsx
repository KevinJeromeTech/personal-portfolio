import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import SkillsPreview from "../components/SkillsPreview.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Reveal from "../components/Reveal.jsx";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Jerome",
  url: "https://kevinjerome.dev",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/KevinJeromeTech",
    "https://www.linkedin.com/in/kevinjerome-kj/",
  ],
  email: "kevinjerome.dev@gmail.com",
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kevin Jerome | Full-Stack Developer</title>
        <meta name="description" content="Kevin Jerome — Full-Stack Developer specialising in React, Node.js, and modern web experiences. View projects, skills, and get in touch." />
        <link rel="canonical" href="https://kevinjerome.dev/" />
        <meta property="og:title" content="Kevin Jerome | Full-Stack Developer" />
        <meta property="og:url" content="https://kevinjerome.dev/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
    <motion.main
      id="main-content"
      className="container page-shell"
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -10 }}
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

      <Reveal delay={380}>
        <ContactCTA />
      </Reveal>
    </motion.main>
    </>
  );
}
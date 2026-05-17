import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #800020, #ff4d7b, #ffffff)",
        zIndex: 9999,
        transition: "width 0.08s linear",
        pointerEvents: "none",
        borderRadius: "0 2px 2px 0",
      }}
    />
  );
}

function useSpotlight() {
  useEffect(() => {
    const handle = (e) => {
      const card = e.target.closest(
        ".section-card, .project-showcase-card, .skill-area-card, .tech-group-card, .about-highlight-card, .core-value-card, .soft-skill-card"
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, []);
}

function useTilt() {
  useEffect(() => {
    const SEL = ".tilt-card";
    const onMove = (e) => {
      const el = e.target.closest(SEL);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform 0.1s linear";
      el.style.transform = `perspective(900px) rotateX(${ny * -6}deg) rotateY(${nx * 6}deg)`;
    };
    const onLeave = (e) => {
      const el = e.target.closest(SEL);
      if (!el) return;
      el.style.transition = "transform 0.5s ease";
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave, true);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, []);
}

function App() {
  const location = useLocation();
  useSpotlight();
  useTilt();

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import projects from "../data/projects.js";

function getStackIcon(skill) {
  const map = {
    React: <FaReact />, "Node.js": <FaNodeJs />, HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />, JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />, Vite: <SiVite />,
  };
  return map[skill] || null;
}

const SLIDE_DURATION = 0.42;
const ease = [0.22, 1, 0.36, 1];

export default function ProjectCarousel() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [featuredProjects.length, isPaused]);

  const goPrev = () => {
    setDir(-1);
    setIndex((i) => (i === 0 ? featuredProjects.length - 1 : i - 1));
  };

  const goNext = () => {
    setDir(1);
    setIndex((i) => (i + 1) % featuredProjects.length);
  };

  const project = featuredProjects[index];
  const total = featuredProjects.length;

  return (
    <section className="carousel-section section-card">
      <div className="section-heading">
        <h2>Featured Projects</h2>
        <p>
          Systems I&apos;ve built and shipped, for clients and for myself. Full
          case studies are on the Projects page.
        </p>
      </div>

      <div
        className="split-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            className="split-card"
            custom={dir}
            initial={(d) => ({ opacity: 0, x: d > 0 ? 48 : -48 })}
            animate={{ opacity: 1, x: 0 }}
            exit={(d) => ({ opacity: 0, x: d > 0 ? -48 : 48 })}
            transition={{ duration: SLIDE_DURATION, ease }}
          >
            {/* Left: info panel */}
            <div className="split-info">
              <div className="split-top-row">
                <span className="split-counter">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                {project.impact && (
                  <span className="split-impact">{project.impact}</span>
                )}
              </div>

              <h3 className="split-title">{project.title}</h3>
              <p className="split-desc">{project.description}</p>

              {Array.isArray(project.stack) && (
                <div className="split-stack">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="stack-chip">
                      {getStackIcon(tech) && (
                        <span className="stack-icon" aria-hidden="true">{getStackIcon(tech)}</span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="split-actions">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="split-btn split-btn-primary"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live Demo
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="split-btn split-btn-ghost"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                )}
                <Link to="/projects" className="split-btn split-btn-ghost">
                  View All
                </Link>
              </div>

              {/* Nav controls inside info panel */}
              <div className="split-nav">
                <button onClick={goPrev} aria-label="Previous project" className="split-arrow">
                  <FaChevronLeft />
                </button>
                <div className="split-dots">
                  {featuredProjects.map((_, i) => (
                    <button
                      key={i}
                      className={`split-dot ${i === index ? "active" : ""}`}
                      onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={goNext} aria-label="Next project" className="split-arrow">
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Right: image panel */}
            <div className="split-image-panel">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${index}`}
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.38, ease }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

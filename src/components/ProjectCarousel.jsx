import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import projects from "../data/projects.js";

function getStackIcon(skill) {
  const map = {
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />,
    Vite: <SiVite />,
  };
  return map[skill] || null;
}

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "62%" : "-62%",
    scale: 0.86,
    opacity: 0,
    rotateY: dir > 0 ? 14 : -14,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 26,
      mass: 0.9,
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? "-42%" : "42%",
    scale: 0.88,
    opacity: 0,
    rotateY: dir > 0 ? -10 : 10,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 30,
    },
  }),
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.18 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectCarousel() {
  const featuredProjects = projects;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!featuredProjects.length || isPaused) return;
    intervalRef.current = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [featuredProjects.length, isPaused]);

  const goPrev = () => {
    setDir(-1);
    setIndex((i) => (i === 0 ? featuredProjects.length - 1 : i - 1));
  };

  const goNext = () => {
    setDir(1);
    setIndex((i) => (i + 1) % featuredProjects.length);
  };

  const goTo = (i) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  const project = featuredProjects[index];
  const nextProject = featuredProjects[(index + 1) % featuredProjects.length];
  const prevProject = featuredProjects[(index - 1 + featuredProjects.length) % featuredProjects.length];

  return (
    <section className="carousel-section section-card">
      <div className="section-heading">
        <h2>Featured Projects</h2>
        <p>
          A curated look at standout builds that reflect my skills in frontend,
          full-stack development, and product-minded design.
        </p>
      </div>

      <div
        className="focus-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Blurred ambient background from current image */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${index}`}
            className="focus-carousel-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundImage: `url(${project.image})` }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* Adjacent card peek strips */}
        <div
          className="focus-peek focus-peek-left"
          style={{ backgroundImage: `url(${prevProject.image})` }}
          aria-hidden="true"
        />
        <div
          className="focus-peek focus-peek-right"
          style={{ backgroundImage: `url(${nextProject.image})` }}
          aria-hidden="true"
        />

        {/* Main stage */}
        <div className="focus-stage">
          <AnimatePresence mode="sync" custom={dir}>
            <motion.article
              key={index}
              className="focus-slide"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ perspective: 1000 }}
            >
              {/* Card image */}
              <div className="focus-slide-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="focus-slide-image-glow" aria-hidden="true" />
              </div>

              {/* Card content overlay */}
              <motion.div
                className="focus-slide-overlay"
                key={`content-${index}`}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="focus-slide-header" variants={contentItem}>
                  <h4>{project.title}</h4>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </motion.div>

                <motion.p variants={contentItem}>{project.description}</motion.p>

                {Array.isArray(project.stack) && (
                  <motion.div className="project-stack-icons" variants={contentItem}>
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="stack-chip">
                        <span className="stack-icon">{getStackIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </motion.div>
                )}

                <motion.div className="overlay-buttons" variants={contentItem}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  <Link to="/projects">View All</Link>
                </motion.div>
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          className="carousel-arrow left-arrow"
          onClick={goPrev}
          aria-label="Previous project"
          type="button"
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel-arrow right-arrow"
          onClick={goNext}
          aria-label="Next project"
          type="button"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Progress dots */}
      <div className="carousel-dots">
        {featuredProjects.map((p, i) => (
          <button
            key={p.id}
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.title}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import projects from "../data/projects.js";

function getStackIcon(skill) {
  const iconMap = {
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />,
    Vite: <SiVite />,
  };

  return iconMap[skill] || null;
}

export default function ProjectCarousel() {
  const featuredProjects = projects;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!featuredProjects.length || isPaused) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [featuredProjects.length, isPaused]);

  const goPrev = () => {
    setIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % featuredProjects.length);
  };

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
        className="portfolio-carousel premium-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="portfolio-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {featuredProjects.map((project) => (
            <article className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="portfolio-overlay always-visible-overlay">
                <div className="overlay-content">
                  <div className="carousel-card-top">
                    <h4>{project.title}</h4>
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>

                  <p>{project.description}</p>

                  {Array.isArray(project.stack) && (
                    <div className="project-stack-icons">
                      {project.stack.map((tech) => (
                        <span key={tech} className="stack-chip">
                          <span className="stack-icon">{getStackIcon(tech)}</span>
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="overlay-buttons">
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

                    <Link to="/projects">View All Projects</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="carousel-arrow left-arrow"
          onClick={goPrev}
          aria-label="Previous project"
          type="button"
        >
          ←
        </button>

        <button
          className="carousel-arrow right-arrow"
          onClick={goNext}
          aria-label="Next project"
          type="button"
        >
          →
        </button>
      </div>

      <div className="carousel-dots">
        {featuredProjects.map((project, dotIndex) => (
          <button
            key={project.id}
            className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to ${project.title}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
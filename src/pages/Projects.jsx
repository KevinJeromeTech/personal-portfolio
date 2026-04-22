import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import projects from "../data/projects.js";
import "../styles/projects.css";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    transition: {
      duration: 0.22,
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <Navbar />

      <main className="container page-shell">
        <section className="projects-page section-card">
          <h1>My Projects</h1>
          <p className="lead-text">
            A selection of projects that reflect my growth in full-stack development,
            frontend engineering, product design, and technical execution.
          </p>

          <div className="upgraded-grid">
            {sortedProjects.map((project, index) => {
              const isInProgress = project.status === "In Progress";

              return (
                <motion.article
                  className={`project-showcase-card ${
                    project.featured ? "featured-project" : ""
                  } ${isInProgress ? "in-progress-project" : ""}`}
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <button
                    type="button"
                    className="project-image-wrap project-image-button"
                    onClick={() => openModal(project)}
                    aria-label={`Open details for ${project.title}`}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    />
                  </button>

                  <div className="project-copy">
                    <div className="project-top-row">
                      <div className="project-title-group">
                        {project.status && (
                          <span className="project-status">{project.status}</span>
                        )}
                        <h3>{project.title}</h3>
                      </div>

                      {project.featured && (
                        <span className="featured-badge">Featured</span>
                      )}
                    </div>

                    <p>{project.description}</p>

                    {project.stack?.length > 0 && (
                      <div className="project-stack">
                        {project.stack.map((item) => (
                          <motion.span
                            key={item}
                            className="project-badge"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.18 }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    <div className="project-links">
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Live Demo
                        </a>
                      ) : (
                        <span className="project-link-disabled">Live Demo</span>
                      )}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={project.github === "#" ? "link-disabled" : ""}
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="project-link-disabled">GitHub</span>
                      )}

                      <button
                        type="button"
                        className="project-modal-button"
                        onClick={() => openModal(project)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={closeModal}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="project-modal-close"
                onClick={closeModal}
                aria-label="Close project modal"
                type="button"
              >
                ×
              </button>

              <div className="project-modal-image-wrap">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-image"
                />
              </div>

              <div className="project-modal-content">
                <div className="project-modal-header">
                  <div className="project-title-group">
                    {selectedProject.status && (
                      <span className="project-status">{selectedProject.status}</span>
                    )}
                    <h2 id="project-modal-title">{selectedProject.title}</h2>
                  </div>

                  {selectedProject.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <p className="project-modal-description">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {selectedProject.highlights?.length > 0 && (
                  <div className="project-modal-section">
                    <h4>Highlights</h4>
                    <ul className="project-modal-list">
                      {selectedProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.stack?.length > 0 && (
                  <div className="project-modal-section">
                    <h4>Tech Stack</h4>
                    <div className="project-stack">
                      {selectedProject.stack.map((item) => (
                        <span key={item} className="project-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-modal-actions">
                  {selectedProject.demo ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-link-disabled">Live Demo</span>
                  )}

                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className={selectedProject.github === "#" ? "link-disabled" : ""}
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link-disabled">GitHub</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
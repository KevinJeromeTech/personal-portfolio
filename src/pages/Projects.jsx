import { useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import projects from "../data/projects.js";
import "../styles/projects.css";

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
            {sortedProjects.map((project) => (
              <article
                className={`project-showcase-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.id}
              >
                <button
                  type="button"
                  className="project-image-wrap project-image-button"
                  onClick={() => openModal(project)}
                  aria-label={`Open details for ${project.title}`}
                >
                  <img src={project.image} alt={project.title} />
                </button>

                <div className="project-copy">
                  <div className="project-top-row">
                    <h3>{project.title}</h3>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>

                  <p>{project.description}</p>

                  {project.stack?.length > 0 && (
                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item} className="project-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
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
              </article>
            ))}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close project modal"
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
                <h2 id="project-modal-title">{selectedProject.title}</h2>
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
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}

                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects.js";
import "../styles/projects.css";

const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: 18, scale: 0.97, transition: { duration: 0.22 } },
};

const filterOptions = [
  { key: "all",         label: "All" },
  { key: "featured",    label: "Featured" },
  { key: "in-progress", label: "In Progress" },
];

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kevin Jerome's Projects",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    description: p.description,
    url: p.demo || p.github || "https://kevinjerome.dev/projects",
  })),
};

function ProjectImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="project-image-inner">
      {!loaded && <div className="img-skeleton" aria-hidden="true" />}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.28 }}
      />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    []
  );

  const filteredProjects = useMemo(() => {
    if (filter === "featured")    return sortedProjects.filter((p) => p.featured);
    if (filter === "in-progress") return sortedProjects.filter((p) => p.status === "In Progress");
    return sortedProjects;
  }, [sortedProjects, filter]);

  const counts = useMemo(() => ({
    all:          sortedProjects.length,
    featured:     sortedProjects.filter((p) => p.featured).length,
    "in-progress": sortedProjects.filter((p) => p.status === "In Progress").length,
  }), [sortedProjects]);

  const openModal  = (project) => { setSelectedProject(project); document.body.style.overflow = "hidden"; };
  const closeModal = ()         => { setSelectedProject(null);   document.body.style.overflow = "auto"; };

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") closeModal(); };
    if (selectedProject) window.addEventListener("keydown", handleEsc);
    return () => { window.removeEventListener("keydown", handleEsc); document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  return (
    <>
      <Helmet>
        <title>Projects | Kevin Jerome</title>
        <meta name="description" content="Explore Kevin Jerome's projects — full-stack apps, React dashboards, and web experiences built with modern technologies." />
        <link rel="canonical" href="https://kevinjerome.dev/projects" />
        <meta property="og:title" content="Projects | Kevin Jerome" />
        <meta property="og:url" content="https://kevinjerome.dev/projects" />
        <script type="application/ld+json">{JSON.stringify(projectsJsonLd)}</script>
      </Helmet>
      <motion.main
        id="main-content"
        className="container page-shell"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="projects-page section-card projects-hero-card">
          <div className="projects-hero-orb-1" aria-hidden="true" />
          <div className="projects-hero-orb-2" aria-hidden="true" />
          <div className="projects-hero-inner">
            <span className="page-eyebrow">Portfolio</span>
            <h1 className="page-hero-title">My Projects</h1>
            <p className="projects-lead">
              A selection of builds that reflect my growth in full-stack development,
              frontend engineering, product design, and technical execution.
            </p>
          </div>

          {/* Filter bar */}
          <div className="filter-bar" role="group" aria-label="Filter projects">
            {filterOptions.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`filter-btn ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {label}
                <span className="filter-count">{counts[key]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section-card projects-grid-section">
          <motion.div className="upgraded-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isInProgress = project.status === "In Progress";
                return (
                  <motion.article
                    className={`project-showcase-card ${project.featured ? "featured-project" : ""} ${isInProgress ? "in-progress-project" : ""}`}
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0,  scale: 1 }}
                    exit={{    opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.38, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    <button
                      type="button"
                      className="project-image-wrap project-image-button"
                      onClick={() => openModal(project)}
                      aria-label={`Open details for ${project.title}`}
                    >
                      <ProjectImage src={project.image} alt={project.title} />
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
                          <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
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
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>
      </motion.main>
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={closeModal}
            variants={modalOverlayVariants}
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
                aria-label="Close"
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
                        <span key={item} className="project-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-modal-actions">
                  {selectedProject.demo ? (
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer">Live Demo</a>
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
    </>
  );
}

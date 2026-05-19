import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    navigate("/projects", { replace: true });
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Kevin Jerome</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://kevinjerome.dev/projects/${project.id}`} />
        <meta property="og:title" content={`${project.title} | Kevin Jerome`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:url" content={`https://kevinjerome.dev/projects/${project.id}`} />
        <meta property="og:image" content={`https://kevinjerome.dev${project.image}`} />
      </Helmet>

      <motion.main
        id="main-content"
        className="container page-shell"
        initial={{ opacity: 0.6, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6, y: -10 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/projects" className="project-detail-back">
          <FiArrowLeft aria-hidden="true" />
          Back to Projects
        </Link>

        <section className="section-card project-detail-card">
          <div className="project-detail-orb" aria-hidden="true" />

          <div className="project-detail-header">
            <div className="project-title-group">
              {project.status && <span className="project-status">{project.status}</span>}
              <h1 className="page-hero-title">{project.title}</h1>
            </div>
            {project.featured && <span className="featured-badge">Featured</span>}
          </div>

          <div className="project-detail-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-image"
              loading="lazy"
            />
          </div>

          <div className="project-detail-body">
            <div className="project-detail-main">
              <h2>About This Project</h2>
              <p className="project-detail-desc">
                {project.longDescription || project.description}
              </p>

              {project.highlights?.length > 0 && (
                <div className="project-detail-section">
                  <h3>Highlights</h3>
                  <ul className="project-detail-list">
                    {project.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <aside className="project-detail-sidebar">
              {project.stack?.length > 0 && (
                <div className="project-detail-section">
                  <h3>Tech Stack</h3>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item} className="project-badge">{item}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-detail-links">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="hero-button hero-btn-primary">
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                ) : (
                  <span className="hero-button hero-btn-primary" style={{ opacity: 0.45, cursor: "not-allowed" }}>
                    Live Demo
                  </span>
                )}
                {project.github && project.github !== "#" ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="hero-button hero-btn-secondary">
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                ) : (
                  <span className="hero-button hero-btn-secondary" style={{ opacity: 0.45, cursor: "not-allowed" }}>
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </span>
                )}
              </div>
            </aside>
          </div>
        </section>
      </motion.main>
    </>
  );
}

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <section className="projects-page section-card">
          <h1>My Projects</h1>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="portfolio-item project-grid-item"
                key={project.id}
              >
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
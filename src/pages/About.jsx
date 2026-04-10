import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <section className="about-page section-card">
          <h1>About Me</h1>
          <p className="lead-text">
            Hi! I’m Kevin Jerome, a passionate web designer and inspiring software
            developer committed to creating exceptional digital experiences. My journey
            in technology started out of curiosity, which quickly evolved into a deep
            passion for designing and building engaging websites. I focus on crafting
            solutions that are not only visually appealing but also provide a smooth
            and intuitive user experience.
          </p>

          <div className="two-column-grid">
            <div className="info-card">
              <img
                src="/Images/LinkedInPhoto.jpg"
                alt="Kevin Jerome"
                className="profile-card-image"
              />
              <h2>My Story</h2>
              <p>
                Ever since I discovered the creative potential of technology, I’ve been
                driven to learn as much as possible. Over the years, I’ve developed a
                strong foundation in web development and design, which has allowed me to
                work on a variety of projects, from simple landing pages to fully-fledged
                dynamic websites.
              </p>
            </div>

            <div className="info-card">
              <h2>My Approach</h2>
              <p>
                I believe in continuous learning and always keeping up with industry
                trends. My approach to every project involves understanding a unique
                vision, analyzing needs, and crafting a custom solution that not only
                meets but exceeds expectations.
              </p>

              <div className="card-actions">
                <Link to="/projects" className="hero-button">
                  View My Work
                </Link>
              </div>
            </div>
          </div>

          <section className="resume-section">
            <h2>My Resume</h2>
            <p>
              Interested in learning more about my professional journey? Download my
              resume to get a detailed look at my skills, experience, and the projects
              I have worked on.
            </p>
            <a href="/Documents/Kevin-Jerome-Master-CS-Resume-V1.pdf" download className="hero-button">
              Download My Resume
            </a>
          </section>

          <div className="three-column-grid highlights-grid">
            <div className="info-card">
              <h3>Web Development</h3>
              <p>
                Experience in building responsive, high-quality websites using HTML,
                CSS, JavaScript, and popular frameworks.
              </p>
            </div>

            <div className="info-card">
              <h3>Project Management</h3>
              <p>
                Skilled in managing projects from concept to completion, ensuring strong
                execution and timely delivery.
              </p>
            </div>

            <div className="info-card">
              <h3>Continuous Learning</h3>
              <p>
                Committed to continuous growth, always keeping up with industry trends
                and best practices.
              </p>
            </div>
          </div>

          <section className="core-values">
            <h2>Core Values</h2>
            <div className="three-column-grid">
              <div className="info-card">
                <h3>Passion</h3>
                <p>
                  I’m passionate about technology and driven by the desire to solve
                  real-world problems with innovative solutions.
                </p>
              </div>
              <div className="info-card">
                <h3>Collaboration</h3>
                <p>
                  I believe in the power of collaboration and value open communication
                  to achieve the best results.
                </p>
              </div>
              <div className="info-card">
                <h3>Innovation</h3>
                <p>
                  I strive to stay on top of the latest trends and bring innovative
                  ideas to each project.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
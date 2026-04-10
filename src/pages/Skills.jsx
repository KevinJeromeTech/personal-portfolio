import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
  FaPalette,
  FaCode,
  FaServer,
  FaBullseye,
  FaPuzzlePiece,
  FaBookOpen,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaCuttlefish,
  FaJava,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiVite, SiPostman } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdGroups2, MdOutlineAutoGraph } from "react-icons/md";

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <section className="skills-page section-card">
          <h1>My Skills</h1>
          <p className="lead-text">
            Here is a detailed look at my core skills and areas of expertise. I
            specialize in multiple facets of web development, design, digital strategy,
            and backend thinking, allowing me to deliver comprehensive and quality
            solutions.
          </p>

          <div className="three-column-grid">
            <div className="skill-item">
              <div className="skill-icon-wrap">
                <FaPalette className="skill-icon" />
              </div>
              <h2>Web Design</h2>
              <p>
                Creating visually appealing and user-friendly designs that elevate your
                brand&apos;s online presence and captivate your audience.
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon-wrap">
                <FaCode className="skill-icon" />
              </div>
              <h2>Web Development</h2>
              <p>
                Building fast, responsive, and feature-rich websites using modern
                technologies and solid frontend structure.
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon-wrap">
                <FaServer className="skill-icon" />
              </div>
              <h2>Backend Development</h2>
              <p>
                Developing backend architectures with APIs, databases, and server-side
                logic to support dynamic content and functionality.
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon-wrap">
                <HiOutlineSpeakerphone className="skill-icon" />
              </div>
              <h2>Digital Strategy</h2>
              <p>
                Planning experiences that improve online visibility, usability, and
                engagement.
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon-wrap">
                <FaPuzzlePiece className="skill-icon" />
              </div>
              <h2>Problem Solving</h2>
              <p>
                Applying analytical thinking and creativity to solve challenging
                technical problems and deliver efficient solutions.
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon-wrap">
                <FaBookOpen className="skill-icon" />
              </div>
              <h2>Continuous Learning</h2>
              <p>
                Staying adaptable and committed to mastering new frameworks, tools, and
                engineering practices.
              </p>
            </div>
          </div>
        </section>

        <section className="technical-skills section-card">
          <h2>Technical Skills</h2>

          <div className="three-column-grid">
            <div className="info-card tech-card">
              <div className="tech-heading">
                <FaCode className="tech-heading-icon" />
                <h3>Languages</h3>
              </div>
              <ul className="icon-list">
                <li><FaHtml5 className="list-icon" /> HTML & CSS</li>
                <li><FaJsSquare className="list-icon" /> JavaScript</li>
                <li><FaPython className="list-icon" /> Python</li>
                <li><FaDatabase className="list-icon" /> SQL</li>
                <li><FaCuttlefish className="list-icon" /> C</li>
                <li><FaJava className="list-icon" /> Java</li>
              </ul>
            </div>

            <div className="info-card tech-card">
              <div className="tech-heading">
                <FaReact className="tech-heading-icon" />
                <h3>Frameworks & Libraries</h3>
              </div>
              <ul className="icon-list">
                <li><FaReact className="list-icon" /> React.js</li>
                <li><FaNodeJs className="list-icon" /> Node.js</li>
                <li><SiExpress className="list-icon" /> Express.js</li>
                <li><SiTailwindcss className="list-icon" /> Tailwind CSS</li>
                <li><FaBootstrap className="list-icon" /> Bootstrap</li>
              </ul>
            </div>

            <div className="info-card tech-card">
              <div className="tech-heading">
                <MdOutlineAutoGraph className="tech-heading-icon" />
                <h3>Tools & Platforms</h3>
              </div>
              <ul className="icon-list">
                <li><FaGitAlt className="list-icon" /> Git & GitHub</li>
                <li><SiVite className="list-icon" /> Vite</li>
                <li><FaFigma className="list-icon" /> Figma</li>
                <li><FaDocker className="list-icon" /> Docker</li>
                <li><FaCode className="list-icon" /> Visual Studio Code</li>
                <li><SiPostman className="list-icon" /> Postman</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="soft-skills section-card">
          <h2>Soft Skills</h2>

          <div className="three-column-grid">
            <div className="info-card soft-card">
              <div className="tech-heading">
                <MdGroups2 className="tech-heading-icon" />
                <h3>Teamwork</h3>
              </div>
              <p>
                Collaborating effectively with others to move projects forward and keep
                execution aligned.
              </p>
            </div>

            <div className="info-card soft-card">
              <div className="tech-heading">
                <HiOutlineSpeakerphone className="tech-heading-icon" />
                <h3>Communication</h3>
              </div>
              <p>
                Articulating ideas clearly in both written and verbal formats to
                teammates, users, and stakeholders.
              </p>
            </div>

            <div className="info-card soft-card">
              <div className="tech-heading">
                <FaBookOpen className="tech-heading-icon" />
                <h3>Adaptability</h3>
              </div>
              <p>
                Adjusting quickly to new tools, environments, and challenges while
                maintaining quality.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import { FaCode, FaServer, FaPalette } from "react-icons/fa";

export default function SkillsPreview() {
  return (
    <section className="skills-preview section-card">
      <h2>Core Strengths</h2>

      <div className="preview-grid skills-grid">
        <div className="preview-card">
          <div className="skill-icon-wrap">
            <FaCode className="skill-icon" />
          </div>
          <h3>Frontend Engineering</h3>
          <p>
            Responsive interfaces built with strong layout systems, reusable components,
            and clean interaction patterns.
          </p>
        </div>

        <div className="preview-card">
          <div className="skill-icon-wrap">
            <FaServer className="skill-icon" />
          </div>
          <h3>Backend Foundations</h3>
          <p>
            APIs, routing, data handling, and application structure designed to support
            scalable projects.
          </p>
        </div>

        <div className="preview-card">
          <div className="skill-icon-wrap">
            <FaPalette className="skill-icon" />
          </div>
          <h3>UI Direction</h3>
          <p>
            Classy, modern visual design with strong hierarchy, spacing, and premium
            presentation.
          </p>
        </div>
      </div>
    </section>
  );
}
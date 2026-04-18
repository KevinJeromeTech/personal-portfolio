import { FaCode, FaServer, FaPalette } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Engineering",
    description:
      "Responsive interfaces built with strong layout systems, reusable components, and clean interaction patterns.",
  },
  {
    icon: <FaServer />,
    title: "Backend Foundations",
    description:
      "APIs, routing, data handling, and application structure designed to support scalable projects.",
  },
  {
    icon: <FaPalette />,
    title: "UI Direction",
    description:
      "Classy, modern visual design with strong hierarchy, spacing, and premium presentation.",
  },
];

export default function SkillsPreview() {
  return (
    <section className="skills-preview section-card">
      <h2>Core Strengths</h2>

      <div className="preview-grid skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className="preview-card reveal reveal-visible skill-card"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="skill-icon-wrap">
              <span className="skill-icon">{skill.icon}</span>
            </div>

            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
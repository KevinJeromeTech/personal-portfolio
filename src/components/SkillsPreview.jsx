import { FaCode, FaServer, FaPalette } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Engineering",
    description:
      "Building responsive, performant interfaces with React, Next.js, TypeScript, and modern CSS.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "REST APIs, server-side logic, and database design using Node.js, Express, and PostgreSQL.",
  },
  {
    icon: <FaPalette />,
    title: "UI Design",
    description:
      "Clean, modern visual design with strong hierarchy, thoughtful spacing, and polished detail.",
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
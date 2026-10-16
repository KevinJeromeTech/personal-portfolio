import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Engineering",
    description:
      "React, Next.js, and TypeScript interfaces, with server state handled by TanStack Query.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "REST APIs in Express and Next.js, with Zod input validation, JWT auth, and rate limiting.",
  },
  {
    icon: <FaDatabase />,
    title: "Databases & Access Control",
    description:
      "PostgreSQL schemas through Prisma and Supabase, including row-level security and role-based permissions.",
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
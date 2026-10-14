import {} from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  FaPalette,
  FaCode,
  FaServer,
  FaPuzzlePiece,
  FaRobot,
  FaVial,
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
  FaCss3Alt,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiVite, SiPostman, SiTypescript, SiNextdotjs, SiPrisma, SiPostgresql, SiAnthropic } from "react-icons/si";
import { MdGroups2, MdOutlineAutoGraph } from "react-icons/md";
import ScrambleText from "../components/ScrambleText.jsx";
import "../styles/skills.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] },
});

const skillAreas = [
  {
    num: "01",
    icon: <FaCode />,
    title: "Frontend",
    desc: "React, Next.js, and TypeScript interfaces, with server state managed through TanStack Query and styling in Tailwind or plain CSS.",
  },
  {
    num: "02",
    icon: <FaServer />,
    title: "Backend & APIs",
    desc: "REST APIs in Express and Next.js route handlers and server actions, with Zod input validation, JWT auth, and rate limiting.",
  },
  {
    num: "03",
    icon: <FaDatabase />,
    title: "Databases & Access Control",
    desc: "PostgreSQL schema design through Prisma and Supabase, including row-level security policies and role-based permissions.",
  },
  {
    num: "04",
    icon: <FaRobot />,
    title: "LLM Integration",
    desc: "Claude API features that compute metrics in code first, then ask the model for structured output that is validated before it reaches the UI.",
  },
  {
    num: "05",
    icon: <FaVial />,
    title: "Testing & Deployment",
    desc: "Vitest unit tests, Playwright end-to-end tests, GitHub Actions CI, and deployments on Vercel and Render.",
  },
  {
    num: "06",
    icon: <FaPalette />,
    title: "Interface Design",
    desc: "Responsive, accessible layouts with semantic HTML, keyboard support, and Figma for design work.",
  },
];

const techGroups = [
  {
    icon: <FaCode />,
    title: "Languages",
    items: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <FaCuttlefish />, name: "C Programming" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    icon: <FaReact />,
    title: "Frameworks & Libraries",
    items: [
      { icon: <FaReact />,      name: "React.js" },
      { icon: <SiNextdotjs />,  name: "Next.js" },
      { icon: <FaNodeJs />,     name: "Node.js" },
      { icon: <SiExpress />,    name: "Express.js" },
      { icon: <SiPrisma />,     name: "Prisma" },
      { icon: <SiTailwindcss />,name: "Tailwind CSS" },
      { icon: <FaBootstrap />,  name: "Bootstrap" },
    ],
  },
  {
    icon: <MdOutlineAutoGraph />,
    title: "Tools & Platforms",
    items: [
      { icon: <FaGitAlt />,     name: "Git & GitHub" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiVite />,       name: "Vite" },
      { icon: <FaFigma />,      name: "Figma" },
      { icon: <FaDocker />,     name: "Docker" },
      { icon: <SiPostman />,    name: "Postman" },
    ],
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Core Concepts",
    items: [
      { icon: null, name: "REST APIs" },
      { icon: null, name: "JWT Auth" },
      { icon: null, name: "AI Integration" },
      { icon: null, name: "Database Design" },
      { icon: null, name: "State Management" },
      { icon: null, name: "CI/CD Pipelines" },
    ],
  },
  {
    icon: <SiAnthropic />,
    title: "AI & APIs",
    items: [
      { icon: <SiAnthropic />, name: "Anthropic Claude" },
      { icon: null,            name: "TanStack Query" },
      { icon: null,            name: "Prompt Engineering" },
      { icon: null,            name: "LLM Integration" },
      { icon: null,            name: "REST API Design" },
      { icon: null,            name: "Zod Validation" },
    ],
  },
];

const proofStats = [
  {
    icon: <MdOutlineAutoGraph />,
    stat: "3",
    label: "Apps in Production",
    desc: "ExpenseIQ, the Classic Menswear storefront with StoreLens, and the Auralith Systems platform.",
  },
  {
    icon: <FaCode />,
    stat: "30",
    label: "Tables with Row-Level Security",
    desc: "The StoreLens Postgres schema, with access scoped to five user roles.",
  },
  {
    icon: <FaServer />,
    stat: "2",
    label: "Auralith Clients",
    desc: "Classic Menswear and Redgine Creates, each delivered with me as the sole engineer.",
  },
];


export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills | Kevin Jerome</title>
        <meta name="description" content="Kevin Jerome's technical skills: React, Next.js, TypeScript, Node.js, PostgreSQL, Claude API, testing, and deployment." />
        <link rel="canonical" href="https://kevinjerome.dev/skills" />
        <meta property="og:title" content="Skills | Kevin Jerome" />
        <meta property="og:url" content="https://kevinjerome.dev/skills" />
      </Helmet>
    <motion.main
      id="main-content"
      className="container page-shell"
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Page header ── */}
      <motion.section className="section-card skills-hero-card" {...fadeUp(0)}>
        <div className="skills-hero-orb-1" aria-hidden="true" />
        <div className="skills-hero-orb-2" aria-hidden="true" />
        <div className="skills-hero-inner">
          <span className="page-eyebrow">Skills</span>
          <h1 className="page-hero-title">What I work with</h1>
          <p className="skills-lead">
            The tools I use and where I've used them in production: client
            systems for Auralith Systems and my own full-stack projects.
          </p>
        </div>
      </motion.section>

      {/* ── Skill areas ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="Skill Areas" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="skill-areas-grid">
          {skillAreas.map((skill, i) => (
            <motion.div
              className="skill-area-card tilt-card"
              key={skill.title}
              {...fadeUp(i * 0.07)}
            >
              <span className="skill-num">{skill.num}</span>
              <div className="skill-icon-wrap">
                <span className="skill-icon">{skill.icon}</span>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Technical skills ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="Technical Skills" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="tech-groups-grid">
          {techGroups.map((group, i) => (
            <motion.div className="tech-group-card tilt-card" key={group.title} {...fadeUp(i * 0.08)}>
              <div className="tech-heading">
                <span className="tech-heading-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="tech-badge-grid">
                {group.items.map((item) => (
                  <span className="tech-badge" key={item.name}>
                    {item.icon && (
                      <span className="tech-badge-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Proof of work ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="By the Numbers" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="three-column-grid">
          {proofStats.map((item, i) => (
            <motion.div
              className="soft-skill-card proof-stat-card"
              key={item.label}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -5 }}
            >
              <div className="soft-skill-icon">{item.icon}</div>
              <div className="proof-stat-number">{item.stat}</div>
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
    </>
  );
}

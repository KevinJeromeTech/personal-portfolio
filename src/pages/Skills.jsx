import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  FaPalette,
  FaCode,
  FaServer,
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
  FaCss3Alt,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiVite, SiPostman, SiTypescript, SiNextdotjs } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
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
    icon: <FaPalette />,
    title: "Web Design",
    desc: "Creating visually appealing, user-friendly designs that elevate your brand and captivate your audience.",
  },
  {
    num: "02",
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building fast, responsive, feature-rich websites using modern technologies and solid frontend structure.",
  },
  {
    num: "03",
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Developing APIs, databases, and server-side logic to support dynamic content and scalable functionality.",
  },
  {
    num: "04",
    icon: <HiOutlineSpeakerphone />,
    title: "Digital Strategy",
    desc: "Planning experiences that improve online visibility, usability, and user engagement.",
  },
  {
    num: "05",
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    desc: "Applying analytical thinking and creativity to solve challenging technical problems efficiently.",
  },
  {
    num: "06",
    icon: <FaBookOpen />,
    title: "Continuous Learning",
    desc: "Staying adaptable and committed to mastering new frameworks, tools, and engineering practices.",
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
      { icon: <FaCuttlefish />, name: "C" },
      { icon: <FaJava />, name: "Java" },
    ],
  },
  {
    icon: <FaReact />,
    title: "Frameworks & Libraries",
    items: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    icon: <MdOutlineAutoGraph />,
    title: "Tools & Platforms",
    items: [
      { icon: <FaGitAlt />, name: "Git & GitHub" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <FaCode />, name: "VS Code" },
    ],
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Core Concepts",
    items: [
      { icon: null, name: "REST APIs" },
      { icon: null, name: "Responsive Design" },
      { icon: null, name: "Auth & JWT" },
      { icon: null, name: "Database Design" },
      { icon: null, name: "State Management" },
      { icon: null, name: "Version Control" },
    ],
  },
];

const softSkills = [
  {
    icon: <MdGroups2 />,
    title: "Teamwork",
    desc: "Collaborating effectively with others to move projects forward and keep execution aligned.",
  },
  {
    icon: <HiOutlineSpeakerphone />,
    title: "Communication",
    desc: "Articulating ideas clearly in both written and verbal formats to teammates and stakeholders.",
  },
  {
    icon: <FaBookOpen />,
    title: "Adaptability",
    desc: "Adjusting quickly to new tools, environments, and challenges while maintaining quality.",
  },
];

const progressSkills = [
  { name: "HTML / CSS", percent: 92, color: "#ff4d7b" },
  { name: "JavaScript", percent: 85, color: "#facc15" },
  { name: "React.js", percent: 82, color: "#60a5fa" },
  { name: "Node.js / Express", percent: 70, color: "#4ade80" },
  { name: "Python", percent: 65, color: "#a78bfa" },
  { name: "TypeScript", percent: 58, color: "#38bdf8" },
];

function ProgressBar({ name, percent, color, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const fill = node.querySelector(".progress-fill");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        fill.style.transition = `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
        fill.style.width = `${percent}%`;
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <div className="progress-item" ref={ref}>
      <div className="progress-label">
        <span>{name}</span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ background: color, width: 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills | Kevin Jerome</title>
        <meta name="description" content="Kevin Jerome's technical skills — React, JavaScript, Node.js, Python, databases, UI/UX, and more." />
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
            A detailed look at my core skills and areas of expertise — spanning
            web development, design, digital strategy, and backend thinking.
          </p>
        </div>
      </motion.section>

      {/* ── Proficiency bars ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="Proficiency" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="progress-list">
          {progressSkills.map((skill, i) => (
            <ProgressBar key={skill.name} {...skill} delay={i * 0.1} />
          ))}
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

      {/* ── Soft skills ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="Soft Skills" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="three-column-grid">
          {softSkills.map((skill, i) => (
            <motion.div
              className="soft-skill-card"
              key={skill.title}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -5 }}
            >
              <div className="soft-skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
    </>
  );
}

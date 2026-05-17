import { motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
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
import { SiExpress, SiTailwindcss, SiVite, SiPostman, SiTypescript } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdGroups2, MdOutlineAutoGraph } from "react-icons/md";
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

export default function Skills() {
  return (
    <>
      <Navbar />

      <motion.main className="container page-shell" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>

        {/* ── Page header ── */}
        <motion.section className="section-card skills-hero-card" {...fadeUp(0)}>
          <div className="skills-hero-orb-1" aria-hidden="true" />
          <div className="skills-hero-orb-2" aria-hidden="true" />
          <div className="skills-hero-inner">
            <span className="page-eyebrow">Skills & Expertise</span>
            <h1 className="page-hero-title">What I work with</h1>
            <p className="skills-lead">
              A detailed look at my core skills and areas of expertise — spanning
              web development, design, digital strategy, and backend thinking.
            </p>
          </div>
        </motion.section>

        {/* ── Skill areas ── */}
        <motion.section className="section-card" {...fadeUp(0)}>
          <div className="section-heading-block">
            <h2>Skill Areas</h2>
            <div className="heading-accent" />
          </div>
          <div className="skill-areas-grid">
            {skillAreas.map((skill, i) => (
              <motion.div
                className="skill-area-card"
                key={skill.title}
                {...fadeUp(i * 0.07)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
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
            <h2>Technical Skills</h2>
            <div className="heading-accent" />
          </div>
          <div className="tech-groups-grid">
            {techGroups.map((group, i) => (
              <motion.div className="tech-group-card" key={group.title} {...fadeUp(i * 0.08)}>
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
            <h2>Soft Skills</h2>
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

      <Footer />
    </>
  );
}

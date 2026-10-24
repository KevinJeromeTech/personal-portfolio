import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaCode,
  FaBookOpen,
  FaFolder,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import ScrambleText from "../components/ScrambleText.jsx";
import StatCounter from "../components/StatCounter.jsx";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const highlights = [
  {
    icon: <FaFolder />,
    title: "Client Delivery",
    desc: "Through Auralith Systems I've taken two small businesses from requirements to production as the only engineer: data model, application, and deployment.",
  },
  {
    icon: <FaCode />,
    title: "Practical LLM Integration",
    desc: "I use LLMs where they fit and keep the math in code. ExpenseIQ and StoreLens both compute metrics server-side first, then have Claude turn them into specific recommendations.",
  },
  {
    icon: <FaRocket />,
    title: "Full-Stack Ownership",
    desc: "From Postgres schema and access rules to API, UI, tests, and deployment. StoreLens runs a 31-table schema with row-level security on every table.",
  },
];

const coreValues = [
  {
    icon: <FaRocket />,
    color: "#f59e0b",
    title: "Ship first",
    desc: "I'd rather put something real in front of users and iterate than spend weeks perfecting something no one has seen. Done beats perfect. Then you improve from there.",
  },
  {
    icon: <FaLightbulb />,
    color: "#3b82f6",
    title: "Own the outcome",
    desc: "When I take on a project, I care whether it actually works, not just whether my code compiles. I stay involved from the first commit to the last deployment.",
  },
  {
    icon: <FaUsers />,
    color: "#ec4899",
    title: "Build for people",
    desc: "The best technical decisions come from understanding the problem, not just the spec. I read user feedback, think about who's clicking the button, and build accordingly.",
  },
];

const timeline = [
  {
    year: "Dec 2025 – Present",
    type: "work",
    icon: <FaBriefcase />,
    title: "Founder & Software Engineer",
    org: "Auralith Systems",
    desc: "Founded a software consultancy for small businesses. Built the Classic Menswear storefront and StoreLens operations dashboard, then reused the StoreLens architecture for Redgine Creates. Sole engineer from requirements through deployment.",
  },
  {
    year: "2023 – Present",
    type: "edu",
    icon: <FaGraduationCap />,
    title: "Web Development, Technical Interview Prep & Foundations of AI",
    org: "CodePath",
    desc: "Courses in web development, technical interview preparation, and foundations of AI. Capstone: Kairos, a collaborative task-management app built with a 3-person team.",
  },
  {
    year: "Jan 2022 – Aug 2026",
    type: "edu",
    icon: <FaGraduationCap />,
    title: "B.A. Computer Science | Minor: Entrepreneurship",
    org: "Florida International University",
    desc: "Studied data structures, algorithms, software engineering, operating systems, and database systems. Graduated August 2026.",
  },
  {
    year: "2022",
    type: "milestone",
    icon: <FaStar />,
    title: "First Line of Code",
    org: "Self-taught",
    desc: "Started programming through self-study and built my first projects.",
  },
  {
    year: "Dec 2019 – Present",
    type: "work",
    icon: <FaBriefcase />,
    title: "Sales Associate / Floor Lead",
    org: "Classic Menswear Inc",
    desc: "Retail floor lead at the Miami menswear store that became Auralith's first client.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Kevin Jerome</title>
        <meta name="description" content="Kevin Jerome — full-stack software engineer, FIU Computer Science graduate, and founder of Auralith Systems." />
        <link rel="canonical" href="https://kevinjerome.dev/about" />
        <meta property="og:title" content="About | Kevin Jerome" />
        <meta property="og:url" content="https://kevinjerome.dev/about" />
      </Helmet>
    <motion.main
      id="main-content"
      className="container page-shell"
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Intro ── */}
      <motion.section className="section-card about-intro-card" {...fadeUp(0)}>
        <div className="about-intro-orb-1" aria-hidden="true" />
        <div className="about-intro-orb-2" aria-hidden="true" />
        <div className="about-intro-grid">
          <div className="about-photo-col">
            <div className="about-photo-wrap">
              <img
                src="/Images/LinkedInPhoto.jpg"
                alt="Kevin Jerome"
                className="about-photo"
              />
              <div className="about-photo-badge">
                <span className="pulse-dot" aria-hidden="true" />
                Available for work
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <span className="page-eyebrow">About Me</span>
            <h1 className="page-hero-title">
              Engineer by degree.<br />Founder by choice.
            </h1>
            <p className="about-bio-text">
              I&apos;m Kevin Jerome. I graduated from FIU in August 2026 with a B.A. in Computer
              Science and a minor in Entrepreneurship. In December 2025 I founded Auralith
              Systems, a software consultancy, and delivered its first client system before
              graduating.
            </p>
            <p className="about-bio-text">
              I build full-stack applications with React, Next.js, TypeScript, Node.js, and
              PostgreSQL. I&apos;m based in Miami and looking for my first full-time software
              engineering role.
            </p>
            <div className="about-intro-actions">
              <Link to="/projects" className="hero-button hero-btn-primary">
                View My Work
              </Link>
              <a
                href="/Documents/Kevin Jerome Resume.pdf"
                download
                className="hero-button hero-btn-secondary"
              >
                <FiDownload aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Stats ── */}
      <motion.section className="section-card about-stats-section" {...fadeUp(0)}>
        <div className="about-stats">
          <StatCounter value={2} label="Auralith Clients" suffix="" />
          <StatCounter value={3} label="Apps in Production" suffix="" />
          <StatCounter value={31} label="Tables in StoreLens Schema" suffix="" />
        </div>
      </motion.section>

      {/* ── What I Bring ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="What I Bring" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="three-column-grid">
          {highlights.map((item, i) => (
            <motion.div
              className="about-highlight-card tilt-card"
              key={item.title}
              {...fadeUp(i * 0.1)}
            >
              <div className="about-highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── My Journey (Timeline) ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="My Journey" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className={`timeline-item timeline-${item.type}`}
              {...fadeUp(i * 0.14)}
            >
              <div className="timeline-icon-col">
                <div className="timeline-icon">{item.icon}</div>
                {i < timeline.length - 1 && <div className="timeline-connector" />}
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <span className="timeline-org">{item.org}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Core Values ── */}
      <motion.section className="section-card" {...fadeUp(0)}>
        <div className="section-heading-block">
          <ScrambleText text="How I Work" as="h2" />
          <div className="heading-accent" />
        </div>
        <div className="three-column-grid">
          {coreValues.map((val, i) => (
            <motion.div
              className="core-value-card tilt-card"
              key={val.title}
              {...fadeUp(i * 0.1)}
              style={{ "--icon-color": val.color }}
            >
              <div className="core-value-icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Resume CTA ── */}
      <motion.section className="section-card resume-cta-card" {...fadeUp(0)}>
        <div className="resume-cta-orb" aria-hidden="true" />
        <div className="resume-cta-content">
          <h2>Want the full picture?</h2>
          <p>
            Download my resume for a detailed look at my skills, experience,
            and the projects I&apos;ve worked on.
          </p>
          <a
            href="/Documents/Kevin Jerome Resume.pdf"
            download
            className="hero-button hero-btn-primary"
          >
            <FiDownload aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </motion.section>
    </motion.main>
    </>
  );
}

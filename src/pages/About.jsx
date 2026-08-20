import { useEffect, useRef, useState } from "react";
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

function StatCounter({ value, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        let current = 0;
        const step = Math.ceil(value / 35);
        const timer = setInterval(() => {
          current = Math.min(current + step, value);
          setCount(current);
          if (current >= value) clearInterval(timer);
        }, 45);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const highlights = [
  {
    icon: <FaFolder />,
    title: "Client Delivery",
    desc: "I've taken a real client from contract to launched product through Auralith Systems — scoped, built, and shipped. I know what it takes to own a project end to end, not just contribute to one.",
  },
  {
    icon: <FaCode />,
    title: "AI-Native Development",
    desc: "I integrate LLM APIs as a core part of the stack, not an afterthought. ExpenseIQ uses Claude to auto-categorize transactions and generate plain-English spending insights in real time.",
  },
  {
    icon: <FaRocket />,
    title: "Full-Stack Ownership",
    desc: "From database schema to deployed UI, I own the whole thing. No handoffs, no gaps — just a working product in production with real users.",
  },
];

const coreValues = [
  {
    icon: <FaRocket />,
    color: "#f59e0b",
    title: "Ship first",
    desc: "I'd rather put something real in front of users and iterate than spend weeks perfecting something no one has seen. Done beats perfect — then you improve from there.",
  },
  {
    icon: <FaLightbulb />,
    color: "#3b82f6",
    title: "Own the outcome",
    desc: "When I take on a project, I care whether it actually works — not just whether my code compiles. I stay involved from the first commit to the last deployment.",
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
    desc: "Founded a software consultancy delivering full-stack engineering solutions for small businesses. First engagement: Classic Menswear storefront redesign and StoreLens admin dashboard. Solo engineer across architecture, frontend, admin tooling, and deployment.",
  },
  {
    year: "2023 – Present",
    type: "edu",
    icon: <FaGraduationCap />,
    title: "Web Development, iOS, Technical Interview Prep & Foundations to AI",
    org: "CodePath",
    desc: "Completed intensive training in Web Development, iOS Development (SwiftUI), Technical Interview Preparation, and Foundations to AI. Capstone: Kairos, a collaborative task management app built with a 3-person team.",
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
    desc: "Discovered programming through self-study, built my first projects, and developed a genuine passion for crafting clean and intuitive user experiences.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Kevin Jerome</title>
        <meta name="description" content="Learn about Kevin Jerome — a Full-Stack Developer passionate about React, Node.js, clean UI, and building real-world web products." />
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
              I&apos;m Kevin Jerome — I graduated from FIU in August 2026 with a CS degree
              and a company already running. Auralith Systems, the consultancy I founded in
              December 2025, had its first client delivery before I walked across the stage.
            </p>
            <p className="about-bio-text">
              I build full-stack applications with React, Next.js, TypeScript, and Node.js,
              and I&apos;ve been integrating LLM APIs into production software since before
              it was a resume buzzword. Based in Miami — open to full-time roles, contract
              work, and problems that don&apos;t have a clean answer yet.
            </p>
            <div className="about-intro-actions">
              <Link to="/projects" className="hero-button hero-btn-primary">
                View My Work
              </Link>
              <a
                href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
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
          <StatCounter value={5} label="Projects Shipped" />
          <StatCounter value={15} label="Technologies" />
          <StatCounter value={1} label="Live Client" suffix="" />
          <StatCounter value={200} label="Commits Pushed" />
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
            href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
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

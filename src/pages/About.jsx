import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FiDownload } from "react-icons/fi";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaCode,
  FaBookOpen,
  FaFolder,
} from "react-icons/fa";

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
    icon: <FaCode />,
    title: "Web Development",
    desc: "Experience building responsive, high-quality websites using modern HTML, CSS, JavaScript, and frameworks.",
  },
  {
    icon: <FaFolder />,
    title: "Project Management",
    desc: "Skilled at taking concepts from idea to shipped product — executing cleanly and staying on track.",
  },
  {
    icon: <FaBookOpen />,
    title: "Continuous Learning",
    desc: "Committed to growth, always sharpening skills and keeping pace with evolving tools and best practices.",
  },
];

const coreValues = [
  {
    icon: <FaLightbulb />,
    color: "#f59e0b",
    title: "Passion",
    desc: "Driven by genuine curiosity and the desire to solve real-world problems through elegant technical solutions.",
  },
  {
    icon: <FaUsers />,
    color: "#3b82f6",
    title: "Collaboration",
    desc: "I believe in open communication and teamwork to push projects toward their best possible outcome.",
  },
  {
    icon: <FaRocket />,
    color: "#ec4899",
    title: "Innovation",
    desc: "Staying on top of the latest trends and bringing forward-thinking ideas to every project I touch.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <motion.main className="container page-shell" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>

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
                Turning ideas into<br />digital reality
              </h1>
              <p className="about-bio-text">
                Hi! I&apos;m Kevin Jerome — a passionate web designer and software developer
                committed to creating exceptional digital experiences. My journey in technology
                started out of curiosity, which quickly evolved into a deep passion for building
                and designing engaging websites.
              </p>
              <p className="about-bio-text">
                I focus on crafting solutions that are not only visually appealing but also
                provide a smooth and intuitive user experience, always pushing toward work
                that meets and exceeds expectations.
              </p>
              <div className="about-intro-actions">
                <Link to="/projects" className="hero-button hero-btn-primary">
                  View My Work
                </Link>
                <a
                  href="/Documents/Kevin-Jerome-Master-CS-Resume-V1.pdf"
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
            <StatCounter value={5} label="Projects Built" />
            <StatCounter value={10} label="Technologies" />
            <StatCounter value={2} label="Years Learning" />
            <StatCounter value={100} label="Commits Pushed" />
          </div>
        </motion.section>

        {/* ── What I Bring ── */}
        <motion.section className="section-card" {...fadeUp(0)}>
          <div className="section-heading-block">
            <h2>What I Bring</h2>
            <div className="heading-accent" />
          </div>
          <div className="three-column-grid">
            {highlights.map((item, i) => (
              <motion.div
                className="about-highlight-card"
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

        {/* ── Core Values ── */}
        <motion.section className="section-card" {...fadeUp(0)}>
          <div className="section-heading-block">
            <h2>Core Values</h2>
            <div className="heading-accent" />
          </div>
          <div className="three-column-grid">
            {coreValues.map((val, i) => (
              <motion.div
                className="core-value-card"
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
              href="/Documents/Kevin-Jerome-Master-CS-Resume-V1.pdf"
              download
              className="hero-button hero-btn-primary"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </motion.section>

      </motion.main>
      <Footer />
    </>
  );
}

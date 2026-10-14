import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import MagneticButton from "./MagneticButton.jsx";

const roles = [
  "Full-Stack Software Engineer",
  "Founder, Auralith Systems",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const particles = [
  { size: 4, left: "14%",  top: "22%",  dur: "8s",  delay: "0s"  },
  { size: 3, left: "76%",  top: "34%",  dur: "11s", delay: "-3s" },
  { size: 5, left: "38%",  top: "68%",  dur: "9s",  delay: "-5s" },
  { size: 3, left: "86%",  top: "74%",  dur: "13s", delay: "-2s" },
  { size: 4, left: "24%",  top: "52%",  dur: "10s", delay: "-7s" },
  { size: 6, left: "61%",  top: "14%",  dur: "12s", delay: "-4s" },
  { size: 3, left: "91%",  top: "46%",  dur: "7s",  delay: "-1s" },
  { size: 4, left: "49%",  top: "82%",  dur: "15s", delay: "-6s" },
  { size: 3, left: "6%",   top: "58%",  dur: "9s",  delay: "-8s" },
  { size: 5, left: "55%",  top: "42%",  dur: "11s", delay: "-3.5s"},
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero section-card hero-enhanced">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Avatar */}
      <motion.div
        className="profile-picture"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-avatar-wrap">
          <div className="avatar-glow-ring" aria-hidden="true" />
          <img src="/Images/Logo.webp" alt="Kevin Jerome" className="hero-logo" decoding="async" />
        </div>
        <motion.span
          className="open-badge"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pulse-dot" aria-hidden="true" />
          Open to Work
        </motion.span>
      </motion.div>

      {/* Content stagger */}
      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={item}>
          Hi, I&apos;m
        </motion.p>

        <motion.h1 className="hero-name" variants={item}>
          Kevin Jerome
        </motion.h1>

        <motion.div className="hero-role-wrap" variants={item}>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="hero-role"
              initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0,  opacity: 1, filter: "blur(0px)" }}
              exit={{    y: -28, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p className="hero-bio" variants={item}>
          CS graduate from FIU and founder of Auralith Systems. I build full-stack
          applications with React, Next.js, TypeScript, Node.js, and PostgreSQL,
          including production systems for two small-business clients.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <MagneticButton>
            <Link to="/projects" className="hero-button hero-btn-primary">
              View Projects
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/Documents/Kevin Jerome Resume.pdf"
              download
              className="hero-button hero-btn-secondary"
            >
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div className="hero-socials" variants={item}>
          <MagneticButton strength={0.5}>
            <a
              href="https://github.com/KevinJeromeTech"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.5}>
            <a
              href="https://www.linkedin.com/in/kevinjerome-kj/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

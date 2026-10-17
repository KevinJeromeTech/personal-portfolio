import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import MagneticButton from "./MagneticButton.jsx";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero section-card">
      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-photo-wrap" variants={item}>
          <picture>
            <source srcSet="/Images/LinkedInPhoto.webp" type="image/webp" />
            <img
              src="/Images/LinkedInPhoto.jpg"
              alt="Kevin Jerome"
              className="hero-photo"
              width="569"
              height="799"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </motion.div>

        <motion.p className="open-badge" variants={item}>
          <span className="pulse-dot" aria-hidden="true" />
          Open to full-time roles
        </motion.p>

        <motion.h1 className="hero-name" variants={item}>
          Kevin Jerome
        </motion.h1>

        <motion.p className="hero-role" variants={item}>
          Full-Stack Software Engineer
        </motion.p>

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
          <a
            href="https://github.com/KevinJeromeTech"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kevinjerome-kj/"
            target="_blank"
            rel="noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

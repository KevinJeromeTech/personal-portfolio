import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const roles = [
  "Full-Stack Developer",
  "React Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

function useTypingEffect(words) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed === current) {
        timeout = setTimeout(() => setPhase("deleting"), 2200);
      } else {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      }
    } else {
      if (displayed === "") {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
        return;
      }
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex, words]);

  return displayed;
}

export default function Hero() {
  const role = useTypingEffect(roles);

  return (
    <section className="hero section-card hero-enhanced">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="profile-picture">
        <div className="hero-avatar-wrap">
          <div className="avatar-glow-ring" aria-hidden="true" />
          <img src="/Images/Logo.png" alt="Kevin Jerome" className="hero-logo" />
        </div>
        <span className="open-badge">
          <span className="pulse-dot" aria-hidden="true" />
          Open to Work
        </span>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name">Kevin Jerome</h1>

        <div className="hero-role-wrap">
          <span className="hero-role">{role}</span>
          <span className="typing-cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-bio">
          Crafting engaging web experiences with a blend of design, development,
          and digital strategy. Let me help you bring your online vision to life.
        </p>

        <div className="hero-actions">
          <Link to="/skills" className="hero-button hero-btn-primary">
            Explore Skills
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

        <div className="hero-socials">
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
        </div>
      </div>
    </section>
  );
}

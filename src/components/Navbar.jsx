import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { href: "#about",      label: "About",      id: "about" },
  { href: "#skills",     label: "Skills",     id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#work",       label: "Projects",   id: "work" },
  { href: "#contact",    label: "Contact",    id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("");
  const [scrolled, setScrolled]       = useState(false);
  const [darkMode, setDarkMode]       = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* track which section is in view */
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [location.pathname]);

  const closeMenu  = () => setMenuOpen(false);
  const toggleDark = () => setDarkMode((p) => !p);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-shell">

          {/* Logo */}
          <Link to="/" className="logo-holder" onClick={closeMenu}>
            <img src="/Images/Logo.webp" alt="Kevin Jerome logo" className="logo-image" />
            <div className="logo-block">
              <span className="logo-text">Kevin Jerome</span>
              <span className="logo-subtext">Full-Stack Developer</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Desktop Navigation">
            <div className="nav-links">
              {navLinks.map(({ href, label, id }) => {
                const active = activeSection === id;
                return (
                  <a key={href} href={href} className={`nav-link-item ${active ? "is-active" : ""}`}>
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="nav-active-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="nav-link-label">{label}</span>
                  </a>
                );
              })}
            </div>

            <div className="nav-sep" aria-hidden="true" />

            <div className="nav-socials">
              <a href="https://github.com/KevinJeromeTech" target="_blank" rel="noreferrer" className="nav-social-btn" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kevinjerome-kj/" target="_blank" rel="noreferrer" className="nav-social-btn" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>

            <button className="dark-toggle" type="button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} onClick={toggleDark}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-controls">
            <button className="dark-toggle" type="button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} onClick={toggleDark}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
            <button
              className="mobile-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((p) => !p)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: "inline-flex" }}
                >
                  {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile Navigation"
          >
            <div className="mobile-nav-links">
              {navLinks.map(({ href, label, id }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={href}
                    className={`mobile-nav-link ${activeSection === id ? "is-active" : ""}`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <div className="mobile-socials">
                <a href="https://github.com/KevinJeromeTech" target="_blank" rel="noreferrer" className="mobile-social-btn" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/kevinjerome-kj/" target="_blank" rel="noreferrer" className="mobile-social-btn" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="mailto:kevinjerome.dev@gmail.com" className="mobile-social-btn" aria-label="Email"><MdEmail /></a>
              </div>
              <span className="mobile-menu-tag">kevinjerome.dev</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

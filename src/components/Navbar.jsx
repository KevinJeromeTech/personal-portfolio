import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiX, HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { href: "#about",      label: "About",      num: "01", id: "about" },
  { href: "#skills",     label: "Skills",     num: "02", id: "skills" },
  { href: "#experience", label: "Experience", num: "03", id: "experience" },
  { href: "#work",       label: "Projects",   num: "04", id: "work" },
  { href: "#contact",    label: "Contact",    num: "05", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState("");
  const [scrolled, setScrolled]  = useState(false);
  const [darkMode, setDarkMode]  = useState(() => {
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* track active section via IntersectionObserver */
  useEffect(() => {
    const obs = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, [location.pathname]);

  const close = () => setMenuOpen(false);
  const toggleDark = () => setDarkMode((p) => !p);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="nav-shell">

          {/* Logo */}
          <Link to="/" className="logo-holder" onClick={close}>
            <img src="/Images/Logo.webp" alt="" className="logo-image" aria-hidden="true" />
            <div className="logo-block">
              <span className="logo-text">
                <span className="logo-kj">KJ</span> · Kevin Jerome
              </span>
              <span className="logo-subtext">Full-Stack Developer</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <div className="nav-links">
              {navLinks.map(({ href, label, id }) => (
                <a
                  key={href}
                  href={href}
                  className={`nav-link-item${activeSection === id ? " is-active" : ""}`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <a
                href="https://github.com/KevinJeromeTech"
                target="_blank"
                rel="noreferrer"
                className="nav-gh-link"
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </a>
              <button
                className="dark-toggle"
                type="button"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                onClick={toggleDark}
              >
                {darkMode ? <BsSun /> : <BsMoon />}
              </button>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-controls">
            <button
              className="dark-toggle"
              type="button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDark}
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
            <button
              className="mobile-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((p) => !p)}
            >
              <HiMenu />
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
            transition={{ duration: 0.25 }}
            onClick={close}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Side drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="mobile-menu-top">
              <button className="mobile-close" onClick={close} aria-label="Close menu">
                <HiX />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navLinks.map(({ href, label, num, id }) => (
                <a
                  key={href}
                  href={href}
                  className={`mobile-nav-link${activeSection === id ? " is-active" : ""}`}
                  onClick={close}
                >
                  <span className="mobile-link-num">{num}</span>
                  <span className="mobile-link-label">{label}</span>
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <a href="https://github.com/KevinJeromeTech" target="_blank" rel="noreferrer" className="mobile-footer-link">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/kevinjerome-kj/" target="_blank" rel="noreferrer" className="mobile-footer-link">
                LinkedIn ↗
              </a>
              <a href="mailto:kevinjerome.dev@gmail.com" className="mobile-footer-link">
                kevinjerome.dev@gmail.com
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

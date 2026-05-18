import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHome, FaUser, FaCode, FaFolder, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { to: "/",         label: "Home",     icon: <FaHome /> },
  { to: "/about",    label: "About",    icon: <FaUser /> },
  { to: "/skills",   label: "Skills",   icon: <FaCode /> },
  { to: "/projects", label: "Projects", icon: <FaFolder /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrolled, setScrolled] = useState(false);
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

  const closeMenu = () => setMenuOpen(false);
  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-shell">
          <Link to="/" className="logo-holder" onClick={closeMenu}>
            <img src="/Images/Logo.png" alt="Kevin Jerome logo" className="logo-image" />
            <div className="logo-block">
              <span className="logo-text">Kevin Jerome</span>
              <span className="logo-subtext">Full-Stack Developer</span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="desktop-nav" aria-label="Desktop Navigation">
            <div className="nav-links">
              {navLinks.map(({ to, label }) => (
                <NavLink key={to} to={to}>{label}</NavLink>
              ))}
              <NavLink to="/contact" className="button-contact">Contact</NavLink>
            </div>
            <button
              className="dark-toggle"
              type="button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleDark}
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button>
          </nav>

          {/* ── Mobile / tablet controls ── */}
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
              onClick={() => setMenuOpen((prev) => !prev)}
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

      {/* ── Backdrop ── */}
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

      {/* ── Mobile drawer ── */}
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
              {navLinks.map(({ to, label, icon }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 + i * 0.05 }}
                >
                  <NavLink to={to} className="mobile-nav-link" onClick={closeMenu}>
                    <span className="mobile-nav-icon" aria-hidden="true">{icon}</span>
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.05 + navLinks.length * 0.05 }}
              >
                <NavLink
                  to="/contact"
                  className="mobile-nav-link mobile-contact-link"
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-icon" aria-hidden="true"><MdEmail /></span>
                  Contact
                </NavLink>
              </motion.div>
            </div>

            <motion.div
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.28 }}
            >
              <div className="mobile-socials">
                <a
                  href="https://github.com/KevinJeromeTech"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-btn"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kevinjerome-kj/"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
              <span className="mobile-menu-tag">kevinjerome.dev</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

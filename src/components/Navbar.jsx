import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-shell">
        <Link to="/" className="logo-holder" onClick={closeMenu}>
          <img
            src="/Images/Logo.png"
            alt="Kevin Jerome logo"
            className="logo-image"
          />
          <div className="logo-block">
            <span className="logo-text">Kevin Jerome</span>
            <span className="logo-subtext">Full-Stack Developer</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Desktop Navigation">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact" className="button-contact">
              Contact
            </NavLink>
          </div>

          <button
            className="dark-toggle"
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className="button-contact">
          Contact
        </NavLink>

        <button
          className="dark-toggle mobile-dark-toggle"
          type="button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </header>
  );
}

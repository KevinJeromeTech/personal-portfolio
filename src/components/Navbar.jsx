import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
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
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
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
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
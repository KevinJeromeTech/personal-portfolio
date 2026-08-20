import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    href: "https://www.linkedin.com/in/kevinjerome-kj/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    external: true,
  },
  {
    href: "https://github.com/KevinJeromeTech",
    label: "GitHub",
    icon: <FaGithub />,
    external: true,
  },
  {
    href: "mailto:kevinjerome.dev@gmail.com",
    label: "Email",
    icon: <MdEmail />,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-identity">
          <div className="footer-logo">
            <img src="/Images/Logo.webp" alt="Kevin Jerome" className="footer-logo-img" />
            <div className="footer-name-block">
              <span className="footer-name">Kevin Jerome</span>
              <span className="footer-tagline">Full-Stack Developer · Founder, Auralith Systems</span>
            </div>
          </div>
          <div className="footer-availability">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Open to work · Miami, FL</span>
          </div>
        </div>

        <div className="social-links">
          {socials.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              className="footer-social-btn"
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        <p className="footer-copy">&copy; 2026 Kevin Jerome. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

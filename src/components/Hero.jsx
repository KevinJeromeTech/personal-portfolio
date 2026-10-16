import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hm-hero" aria-labelledby="hm-hero-title">
      <div className="hm-hero-text">
        <h1 id="hm-hero-title" className="hm-name">Kevin Jerome</h1>
        <p className="hm-lead">
          Full-stack software engineer in Miami. I build the software small
          businesses run on: storefronts, inventory systems, and the dashboards
          behind them.
        </p>
        <p className="hm-sub">
          FIU Computer Science graduate, founder of Auralith Systems, and open
          to full-time software engineering roles.
        </p>

        <div className="hm-actions">
          <a href="#work" className="hm-btn hm-btn-primary">See my work</a>
          <a
            href="/Documents/Kevin Jerome Resume.pdf"
            download
            className="hm-btn hm-btn-quiet"
          >
            <FiDownload aria-hidden="true" />
            Download resume
          </a>
          <span className="hm-social">
            <a href="https://github.com/KevinJeromeTech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kevinjerome-kj/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>

      <div className="hm-hero-shots" aria-hidden="true">
        <img
          className="hm-shot hm-shot-back"
          src="/Home/auralith-dashboard.webp"
          alt=""
          width="1600"
          height="882"
          decoding="async"
        />
        <img
          className="hm-shot hm-shot-front"
          src="/Home/expenseiq-dashboard.webp"
          alt=""
          width="1400"
          height="1242"
          decoding="async"
        />
      </div>
    </section>
  );
}

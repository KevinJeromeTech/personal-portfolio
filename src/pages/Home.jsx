import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiArrowDown,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../data/projects.js";
import MagneticButton from "../components/MagneticButton.jsx";
import "../styles/home.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Jerome",
  url: "https://kevinjerome.dev",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/KevinJeromeTech",
    "https://www.linkedin.com/in/kevinjerome-kj/",
  ],
  email: "kevinjerome.dev@gmail.com",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

function SectionReveal({ children, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const techGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Prisma ORM"],
  },
  {
    label: "Tools",
    items: ["PostgreSQL", "Supabase", "Docker", "GitHub Actions", "Vercel"],
  },
];

const stats = [
  { num: "6–10", label: "Active Users" },
  { num: "4", label: "Deployed Projects" },
  { num: "CS Graduate", label: "FIU" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kevin Jerome | Full-Stack Developer</title>
        <meta
          name="description"
          content="Kevin Jerome — Full-Stack Developer specialising in React, Node.js, and modern web experiences. View projects, skills, and get in touch."
        />
        <link rel="canonical" href="https://kevinjerome.dev/" />
        <meta property="og:title" content="Kevin Jerome | Full-Stack Developer" />
        <meta property="og:url" content="https://kevinjerome.dev/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="hp-hero" aria-label="Introduction">
          <motion.span className="hp-hero-badge" {...fadeUp(0.1)}>
            <span className="hp-badge-dot" aria-hidden="true" />
            Open to opportunities
          </motion.span>

          <motion.h1 className="hp-hero-name" {...fadeUp(0.22)}>
            <span className="hp-name-first">Kevin</span>
            <span className="hp-name-last">Jerome</span>
          </motion.h1>

          <motion.p className="hp-hero-role" {...fadeUp(0.34)}>
            Full-Stack Developer
          </motion.p>

          <motion.p className="hp-hero-tagline" {...fadeUp(0.44)}>
            I build production software that ships, scales, and solves real
            problems.
          </motion.p>

          <motion.div className="hp-hero-ctas" {...fadeUp(0.54)}>
            <MagneticButton>
              <a href="#work" className="hp-btn-primary">
                See My Work <FiArrowDown aria-hidden="true" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
                download
                className="hp-btn-secondary"
              >
                <FiDownload aria-hidden="true" /> Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div className="hp-hero-socials" {...fadeUp(0.62)}>
            <MagneticButton strength={0.4}>
              <a
                href="https://github.com/KevinJeromeTech"
                target="_blank"
                rel="noreferrer"
                className="hp-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="https://www.linkedin.com/in/kevinjerome-kj/"
                target="_blank"
                rel="noreferrer"
                className="hp-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href="mailto:kevinjerome.dev@gmail.com"
                className="hp-social-btn"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </MagneticButton>
          </motion.div>
        </section>

        <hr className="hp-section-divider" />

        {/* ══════════════════════════════════
            FEATURED WORK
        ══════════════════════════════════ */}
        <section id="work" className="hp-work" aria-label="Featured Work">
          <div className="hp-section-container">
            <SectionReveal>
              <div className="hp-work-header">
                <span className="hp-eyebrow">Featured Work</span>
                <h2 className="hp-section-heading">What I&apos;ve shipped</h2>
              </div>
            </SectionReveal>

            <div className="hp-project-grid">
              {featuredProjects.map((project, i) => (
                <SectionReveal key={project.id}>
                  <article className="hp-project-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="hp-project-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="hp-project-body">
                      <h3 className="hp-project-title">{project.title}</h3>
                      <p className="hp-project-desc">
                        {project.description.slice(0, 120)}
                        {project.description.length > 120 ? "…" : ""}
                      </p>
                      <div className="hp-project-stack">
                        {project.stack.slice(0, 4).map((tag) => (
                          <span key={tag} className="hp-stack-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="hp-project-links">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="hp-link-demo"
                            aria-label={`${project.title} live demo`}
                          >
                            <FiExternalLink aria-hidden="true" /> Live
                          </a>
                        )}
                        <a
                          href={project.github || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="hp-link-github"
                          aria-label={`${project.title} GitHub`}
                        >
                          <FiGithub aria-hidden="true" /> Code
                        </a>
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <div className="hp-work-footer">
                <Link to="/projects" className="hp-all-projects-link">
                  View All Projects <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        <hr className="hp-section-divider" />

        {/* ══════════════════════════════════
            ABOUT SNAPSHOT
        ══════════════════════════════════ */}
        <section className="hp-about" aria-label="About">
          <div className="hp-section-container">
            <SectionReveal>
              <div className="hp-about-grid">
                {/* Photo + stats */}
                <div className="hp-about-photo-col">
                  <img
                    src="/Images/LinkedInPhoto.webp"
                    alt="Kevin Jerome"
                    className="hp-about-photo"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hp-about-stats">
                    {stats.map((s) => (
                      <div key={s.label} className="hp-stat-pill">
                        <span className="hp-stat-num">{s.num}</span>
                        <span className="hp-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="hp-about-text-col">
                  <span className="hp-eyebrow">About</span>
                  <h2 className="hp-about-heading">Built to ship.</h2>
                  <p className="hp-about-bio">
                    I&apos;m Kevin Jerome — a Full-Stack Developer and CS
                    graduate from Florida International University. I founded
                    Auralith Systems, a software consultancy where I deliver
                    full-stack engineering solutions for small businesses end to
                    end.
                  </p>
                  <p className="hp-about-bio">
                    My work spans AI-powered analytics, custom admin systems for
                    retail clients, and my own consulting company — all shipped
                    to production with real users.
                  </p>
                  <Link to="/about" className="hp-about-link">
                    More about me <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <hr className="hp-section-divider" />

        {/* ══════════════════════════════════
            TECH STACK
        ══════════════════════════════════ */}
        <section className="hp-tech" aria-label="Tech Stack">
          <div className="hp-section-container">
            <SectionReveal>
              <div className="hp-tech-header">
                <span className="hp-eyebrow">Tech Stack</span>
                <h2 className="hp-section-heading">What I build with</h2>
              </div>
              <div className="hp-tech-groups">
                {techGroups.map((group) => (
                  <div key={group.label} className="hp-tech-group">
                    <span className="hp-tech-group-label">{group.label}</span>
                    <div className="hp-tech-badges">
                      {group.items.map((item) => (
                        <span key={item} className="hp-tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <hr className="hp-section-divider" />

        {/* ══════════════════════════════════
            CONTACT CTA
        ══════════════════════════════════ */}
        <section className="hp-contact-cta" aria-label="Contact">
          <div className="hp-section-container">
            <SectionReveal>
              <span className="hp-eyebrow">Let&apos;s Work Together</span>
              <h2 className="hp-contact-heading">Have a project in mind?</h2>
              <p className="hp-contact-sub">
                I&apos;m currently open to full-stack engineering roles and
                freelance consulting engagements.
              </p>
              <div className="hp-contact-btns">
                <MagneticButton>
                  <Link to="/contact" className="hp-btn-primary">
                    Get in Touch <FiArrowRight aria-hidden="true" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
                    download
                    className="hp-btn-secondary"
                  >
                    <FiDownload aria-hidden="true" /> Resume
                  </a>
                </MagneticButton>
              </div>
            </SectionReveal>
          </div>
        </section>
      </motion.main>
    </>
  );
}

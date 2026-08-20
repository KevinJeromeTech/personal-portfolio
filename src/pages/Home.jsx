import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FiDownload, FiArrowRight, FiExternalLink, FiGithub, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import projects from "../data/projects.js";
import "../styles/home.css";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const skillGroups = [
  {
    dot: "#4f8ef7",
    title: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C", "HTML/CSS"],
  },
  {
    dot: "#22c55e",
    title: "Frontend & UI",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    dot: "#a78bfa",
    title: "Backend & Databases",
    items: ["Node.js", "Express", "Spring Boot", "Prisma ORM", "PostgreSQL", "Supabase"],
  },
];

const specialtyCards = [
  { icon: "⚡", title: "Full-Stack Dev",    sub: "React, Node.js, APIs" },
  { icon: "🤖", title: "LLM Integration",  sub: "Claude API, Prompt Engineering" },
  { icon: "☁️", title: "Cloud & DevOps",   sub: "Vercel, Render, GitHub Actions" },
  { icon: "🏢", title: "Consulting",        sub: "Auralith Systems" },
];

function OrbitalRing() {
  return (
    <div className="orbital-wrap">
      <div className="orbital-ring orbital-ring-lg">
        <span className="orbital-dot od-1" />
        <span className="orbital-dot od-2" />
        <span className="orbital-dot od-3" />
      </div>
      <div className="orbital-ring orbital-ring-sm" />
      <div className="orbital-center">
        <span className="orbital-monogram">KJ</span>
      </div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div className="hp-section-header">
      <span className="hp-section-num">{num}</span>
      <h2 className="hp-section-title">{title}</h2>
      <div className="hp-title-accent" />
    </div>
  );
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kevin Jerome — Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer and CS graduate from FIU. Founder of Auralith Systems. Building production software with React, TypeScript, Node.js, and AI." />
        <link rel="canonical" href="https://kevinjerome.dev/" />
        <meta property="og:title" content="Kevin Jerome — Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer and CS graduate from FIU. Founder of Auralith Systems." />
        <meta property="og:url" content="https://kevinjerome.dev/" />
      </Helmet>

      <main id="main-content" className="hp-main">

        {/* ── Hero ── */}
        <section className="hp-hero">
          <div className="hp-hero-content">
            <motion.div
              className="hp-badge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="hp-badge-dot" />
              Open to opportunities
              <span className="hp-badge-sep" />
              <FiMapPin size={11} />
              Miami, FL
            </motion.div>

            <motion.h1
              className="hp-hero-name"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="hp-name-first">Kevin</span>
              <span className="hp-name-last">Jerome</span>
            </motion.h1>

            <motion.p
              className="hp-hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              I&apos;m a <span className="hp-accent-text">Full-Stack Developer</span>
            </motion.p>

            <motion.p
              className="hp-hero-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Software engineer building production apps with real users.
              Founder of Auralith Systems. CS graduate from Florida International University.
            </motion.p>

            <motion.div
              className="hp-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a
                href="https://www.linkedin.com/in/kevinjerome-kj/"
                target="_blank"
                rel="noreferrer"
                className="hp-btn-primary"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/KevinJeromeTech"
                target="_blank"
                rel="noreferrer"
                className="hp-btn-secondary"
              >
                <FaGithub /> GitHub
              </a>
            </motion.div>

            <motion.a
              href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
              download
              className="hp-resume-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <FiDownload size={13} /> Download Resume
            </motion.a>
          </div>

          <motion.div
            className="hp-hero-visual"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitalRing />
          </motion.div>

          <div className="hp-scroll-hint" aria-hidden="true">
            <span className="hp-scroll-label">SCROLL</span>
            <div className="hp-scroll-line" />
          </div>
        </section>

        {/* ── About ── */}
        <section className="hp-section" id="about">
          <div className="hp-container">
            <FadeUp><SectionHeader num="01" title="About Me" /></FadeUp>
            <div className="hp-about-grid">
              <FadeUp delay={0.1}>
                <div className="hp-about-text">
                  <p>
                    I&apos;m a Full-Stack Developer and CS graduate from Florida International University
                    with hands-on experience building and deploying production applications — including
                    an AI-powered analytics platform with real beta users and a custom storefront and
                    admin system for a live retail business.
                  </p>
                  <p>
                    I founded Auralith Systems, a software consultancy where I deliver full-stack
                    engineering solutions for small businesses, owning the complete lifecycle from
                    architecture to deployment as a sole engineer.
                  </p>
                  <div className="hp-about-meta">
                    <div>
                      <span className="hp-meta-label">Education</span>
                      <span className="hp-meta-val">B.A. Computer Science · FIU · 2026</span>
                      <span className="hp-meta-val">Minor: Entrepreneurship</span>
                    </div>
                    <div>
                      <span className="hp-meta-label">Activities</span>
                      <span className="hp-meta-val">CodePath E3 Program · Honors</span>
                      <span className="hp-meta-val">Foundations to AI</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="hp-highlights-card">
                  <h3 className="hp-highlights-title">Highlights</h3>
                  <div className="hp-highlights-list">
                    {[
                      ["Beta Users on ExpenseIQ", "6–10"],
                      ["Deployed Projects",        "4+"],
                      ["Client Engagements",       "1 Live"],
                      ["CI/CD on Every Build",     "✓"],
                      ["Technologies",             "15+"],
                    ].map(([label, val]) => (
                      <div className="hp-highlight-row" key={label}>
                        <span>{label}</span>
                        <span className="hp-highlight-val">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="hp-section" id="skills">
          <div className="hp-container">
            <FadeUp><SectionHeader num="02" title="Skills & Tech" /></FadeUp>
            <FadeUp delay={0.1}>
              <div className="hp-skill-groups">
                {skillGroups.map((group) => (
                  <div key={group.title} className="hp-skill-group-card">
                    <div className="hp-skill-group-header">
                      <span className="hp-skill-dot" style={{ background: group.dot }} />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="hp-skill-badges">
                      {group.items.map((item) => (
                        <span key={item} className="hp-skill-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="hp-specialty-grid">
                {specialtyCards.map((card) => (
                  <div key={card.title} className="hp-specialty-card">
                    <span className="hp-specialty-icon">{card.icon}</span>
                    <h4>{card.title}</h4>
                    <p>{card.sub}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="hp-section" id="experience">
          <div className="hp-container">
            <FadeUp><SectionHeader num="03" title="Experience" /></FadeUp>
            <div className="hp-exp-list">
              <FadeUp delay={0.1}>
                <div className="hp-exp-card">
                  <div className="hp-exp-header">
                    <div>
                      <h3 className="hp-exp-title">Founder &amp; Software Engineer</h3>
                      <p className="hp-exp-company">
                        <span className="hp-accent-text">Auralith Systems</span> · Miami, FL
                      </p>
                    </div>
                    <span className="hp-exp-date">Dec 2025 – Present</span>
                  </div>
                  <ul className="hp-exp-bullets">
                    <li>Founded a software consultancy delivering full-stack engineering solutions for small businesses, owning the complete lifecycle as a sole engineer.</li>
                    <li>Designed and deployed a mobile-first storefront with inquiry and reservation functionality for Classic Menswear Inc., replacing an outdated web presence.</li>
                    <li>Built StoreLens, a custom admin dashboard giving the client centralized control over inventory, content, and product tracking — replacing manual spreadsheet management.</li>
                  </ul>
                  <div className="hp-exp-tags">
                    {["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"].map((t) => (
                      <span key={t} className="hp-exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="hp-exp-card">
                  <div className="hp-exp-header">
                    <div>
                      <h3 className="hp-exp-title">Sales Associate / Floor Lead</h3>
                      <p className="hp-exp-company">
                        <span className="hp-accent-text">Classic Menswear Inc.</span> · Miami, FL
                      </p>
                    </div>
                    <span className="hp-exp-date">Dec 2019 – Present</span>
                  </div>
                  <ul className="hp-exp-bullets">
                    <li>Managed high-volume customer interactions, consistently recognized among top associates for customer satisfaction.</li>
                    <li>Onboarded and trained 5+ new employees on POS systems, cutting ramp-up time by ~30%.</li>
                  </ul>
                  <div className="hp-exp-tags">
                    {["Leadership", "Training", "Operations"].map((t) => (
                      <span key={t} className="hp-exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="hp-section" id="work">
          <div className="hp-container">
            <FadeUp><SectionHeader num="04" title="Projects" /></FadeUp>
            <div className="hp-projects-list">
              {featuredProjects.map((project, i) => (
                <FadeUp key={project.id} delay={i * 0.08}>
                  <div className="hp-project-card">
                    {project.image && (
                      <div className="hp-project-img-wrap">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="hp-project-img"
                        />
                      </div>
                    )}
                    <div className="hp-project-body">
                      <div className="hp-project-top">
                        <h3 className="hp-project-title">{project.title}</h3>
                        <div className="hp-project-links">
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="hp-project-link" aria-label="Live demo">
                              <FiExternalLink size={16} />
                            </a>
                          )}
                          {project.github && project.github !== "#" && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="hp-project-link" aria-label="GitHub">
                              <FiGithub size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="hp-project-desc">{project.description}</p>
                      <div className="hp-project-tags">
                        {project.stack.slice(0, 4).map((t) => (
                          <span key={t} className="hp-project-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2}>
              <div className="hp-all-projects">
                <Link to="/projects" className="hp-view-all">
                  View All Projects <FiArrowRight />
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="hp-section hp-contact-section" id="contact">
          <div className="hp-container">
            <FadeUp><SectionHeader num="05" title="Contact" /></FadeUp>
            <FadeUp delay={0.1}>
              <p className="hp-contact-sub">
                Open to full-stack engineering roles and freelance consulting engagements.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="hp-contact-actions">
                <a href="mailto:kevinjerome.dev@gmail.com" className="hp-btn-primary">
                  <MdEmail /> Get in Touch
                </a>
                <a
                  href="/Documents/KevinJeromeSoftwareEngineerResume.pdf"
                  download
                  className="hp-btn-secondary"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="hp-contact-links">
                <a href="https://github.com/KevinJeromeTech" target="_blank" rel="noreferrer" className="hp-social-link">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/kevinjerome-kj/" target="_blank" rel="noreferrer" className="hp-social-link">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="mailto:kevinjerome.dev@gmail.com" className="hp-social-link">
                  <MdEmail /> kevinjerome.dev@gmail.com
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>
    </>
  );
}

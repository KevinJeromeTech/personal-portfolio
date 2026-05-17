import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const contactCards = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "blade94781kj@gmail.com",
    href: "mailto:blade94781kj@gmail.com",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.12)",
    external: false,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Kevin Jerome",
    href: "https://www.linkedin.com/in/kevinjerome-kj/",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.12)",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "KevinJeromeTech",
    href: "https://github.com/KevinJeromeTech",
    color: "rgba(255,255,255,0.9)",
    bg: "rgba(255,255,255,0.08)",
    external: true,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <section className="section-card contact-page-card">
          <div className="contact-hero-orb-1" aria-hidden="true" />
          <div className="contact-hero-orb-2" aria-hidden="true" />

          <div className="contact-page-header">
            <span className="page-eyebrow">Get In Touch</span>
            <h1 className="page-hero-title">Let&apos;s Connect</h1>
            <p className="contact-lead">
              I&apos;d love to hear from you. Reach out through the form or any of the
              channels below.
            </p>
          </div>

          <div className="contact-page-grid">
            {/* ── Left: contact info ── */}
            <motion.div className="contact-info-col" {...fadeUp(0.1)}>
              <div className="contact-cards-stack">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    className="contact-info-card"
                    {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <div
                      className="contact-info-icon"
                      style={{ background: card.bg, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <div className="contact-info-text">
                      <span className="contact-info-label">{card.label}</span>
                      <span className="contact-info-value">{card.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-availability">
                <span className="pulse-dot" aria-hidden="true" />
                <span>Open to freelance &amp; full-time opportunities</span>
              </div>
            </motion.div>

            {/* ── Right: form ── */}
            <motion.div className="contact-form-col" {...fadeUp(0.18)}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="contact-submit-btn">
                      <FiSend aria-hidden="true" />
                      Send Message
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1,    y: 0  }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="success-icon">
                      <FaCheckCircle />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    <button
                      type="button"
                      className="hero-button hero-btn-secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

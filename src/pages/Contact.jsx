import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import Confetti from "../components/Confetti.jsx";

// 1. Go to https://web3forms.com
// 2. Enter your email and click "Create Access Key"
// 3. Check your inbox, copy the key, and paste it below
const WEB3FORMS_KEY = "f54d177d-d4cb-4795-8863-4864e31decd0";

const contactCards = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "kevinjerome.dev@gmail.com",
    href: "mailto:kevinjerome.dev@gmail.com",
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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const isSuccess = status === "success";
  const isError   = status === "error";

  return (
    <motion.main
      className="container page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
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
              {!isSuccess ? (
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

                  {isError && (
                    <p className="contact-error">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSending}
                  >
                    <FiSend aria-hidden="true" />
                    {isSending ? "Sending…" : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Confetti active={isSuccess} />
                  <div className="success-icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                  <button
                    type="button"
                    className="hero-button hero-btn-secondary"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

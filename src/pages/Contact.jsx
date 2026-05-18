import { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";

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

function validateForm({ name, email, message }) {
  const errors = {};
  if (!name.trim() || name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (!message.trim() || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]     = useState({});
  const [sending, setSending]   = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    const fieldErrors = validateForm({ ...formData, [name]: value });
    if (fieldErrors[name]) setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fieldErrors = validateForm(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setSending(true);

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
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | Kevin Jerome</title>
        <meta name="description" content="Get in touch with Kevin Jerome — open to freelance projects and full-time opportunities." />
        <link rel="canonical" href="https://kevinjerome.dev/contact" />
        <meta property="og:title" content="Contact | Kevin Jerome" />
        <meta property="og:url" content="https://kevinjerome.dev/contact" />
      </Helmet>
      <motion.main
        id="main-content"
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
                    aria-label={`${card.label}: ${card.value}`}
                    {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <div
                      className="contact-info-icon"
                      style={{ background: card.bg, color: card.color }}
                      aria-hidden="true"
                    >
                      {card.icon}
                    </div>
                    <div className="contact-info-text">
                      <span style={{ color: "#fff", fontSize: "1rem", fontWeight: 600 }}>{card.label}</span>
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
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text" placeholder="Your Name"
                    autoComplete="name"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    value={formData.name} onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
                </div>
                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" placeholder="Your Email"
                    autoComplete="email"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    value={formData.email} onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
                </div>
                <div className={`form-group ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows="6" placeholder="Your Message"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    value={formData.message} onChange={handleChange} onBlur={handleBlur}
                  />
                  {errors.message && <span id="message-error" className="field-error" role="alert">{errors.message}</span>}
                </div>
                <button type="submit" className="contact-submit-btn" disabled={sending} aria-busy={sending}>
                  <FiSend aria-hidden="true" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </>
  );
}

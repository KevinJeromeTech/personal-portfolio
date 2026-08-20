import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta section-card">
      <h2>Have something worth building?</h2>
      <p>
        I&apos;m open to full-time roles and consulting work through Auralith Systems.
        If you have a real problem that needs a real engineer — not a template — let&apos;s talk.
      </p>
      <Link to="/contact" className="hero-button">
        Get In Touch
      </Link>
    </section>
  );
}
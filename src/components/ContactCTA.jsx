import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta section-card">
      <h2>Let&apos;s Build Something Great</h2>
      <p>
        Open to freelance work, full-time roles, and interesting collaborations.
        If you have a project or opportunity in mind, reach out.
      </p>
      <Link to="/contact" className="hero-button">
        Get In Touch
      </Link>
    </section>
  );
}
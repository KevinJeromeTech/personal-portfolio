import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta section-card">
      <h2>Let's Build Something Great</h2>
      <p>
        I'd love to hear from you. Let's connect and talk about your next
        project, opportunity, or collaboration.
      </p>
      <Link to="/contact" className="hero-button">
        Get In Touch
      </Link>
    </section>
  );
}
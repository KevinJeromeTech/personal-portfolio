import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta section-card">
      <h2>Hiring, or need something built?</h2>
      <p>
        I&apos;m looking for my first full-time software engineering role, in Miami
        or remote. I also take on small-business projects through Auralith Systems.
      </p>
      <Link to="/contact" className="hero-button">
        Get in touch
      </Link>
    </section>
  );
}
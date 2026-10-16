import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="hm-contact" aria-labelledby="hm-contact-title">
      <h2 id="hm-contact-title">Hiring, or need something built?</h2>
      <p>
        I&apos;m looking for my first full-time software engineering role, in Miami
        or remote. I also take on small-business projects through Auralith Systems.
      </p>
      <div className="hm-actions">
        <Link to="/contact" className="hm-btn hm-btn-primary">Get in touch</Link>
        <a href="mailto:kevinjerome.dev@gmail.com" className="hm-link">kevinjerome.dev@gmail.com</a>
      </div>
    </section>
  );
}

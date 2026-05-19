import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "../data/testimonials.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Testimonials() {
  return (
    <section className="section-card testimonials-section">
      <div className="testimonials-orb" aria-hidden="true" />
      <div className="section-heading-block">
        <h2>What People Say</h2>
        <div className="heading-accent" />
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div key={t.id} className="testimonial-card tilt-card" {...fadeUp(i * 0.1)}>
            <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
              <div className="testimonial-meta">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role} · {t.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

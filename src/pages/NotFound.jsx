import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Kevin Jerome</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <motion.main
        id="main-content"
        className="container page-shell"
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="section-card not-found-card">
          <div className="not-found-orb" aria-hidden="true" />
          <p className="not-found-code">404</p>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-msg">
            Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="hero-button hero-btn-primary">Back to Home</Link>
            <Link to="/projects" className="hero-button hero-btn-secondary">View Projects</Link>
          </div>
        </section>
      </motion.main>
    </>
  );
}

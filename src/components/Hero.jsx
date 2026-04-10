import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero section-card">
      <div className="profile-picture">
        <img src="/Images/Logo.png" alt="Personal logo" className="hero-logo" />
      </div>

      <div className="hero-content">
        <h1>Welcome to My Personal Portfolio</h1>
        <p>
          Crafting engaging websites with a blend of design, development, and digital
          strategy. Let me help you bring your online vision to life.
        </p>
        <Link to="/skills" className="hero-button">
          Explore Skills
        </Link>
      </div>
    </section>
  );
}
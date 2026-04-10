import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Navbar />
      <main className="container page-shell">
        <section className="contact-page section-card">
          <h1>Get in Touch</h1>
          <p className="lead-text">
            I’d love to hear from you. Send me a message, and I’ll get back to you as
            soon as possible.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit">Send Message</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
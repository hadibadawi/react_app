// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container glass-card">
        <h2>Let’s Work Together</h2>
        <p>Have a project in mind? I’d love to hear about it.</p>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

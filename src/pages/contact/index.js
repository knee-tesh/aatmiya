const Contact = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you. Whether you want to volunteer, donate,
          partner, or just learn more — reach out.
        </p>
      </div>

      <div className="contact-grid">
        <div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone (optional)" />
            <select style={{
              width: "100%",
              padding: "0.85rem 1rem",
              border: "1px solid rgba(45, 36, 36, 0.15)",
              borderRadius: "var(--radius-sm)",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              background: "var(--color-white)",
              transition: "border-color 0.2s ease",
              minHeight: "48px"
            }}>
              <option value="">I'm interested in...</option>
              <option value="volunteer">Volunteering</option>
              <option value="donate">Making a Donation</option>
              <option value="partner">Partnering</option>
              <option value="services">Accessing Services</option>
              <option value="other">Something Else</option>
            </select>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Reach Us Directly</h3>
          <p>Prefer a conversation? Call or reach out to our team.</p>

          <div className="contact-person">
            <div className="role">Founder</div>
            <div className="name">Piyush Tiwari</div>
            <p>+91-8176060674</p>
          </div>

          <div className="contact-person">
            <div className="role">Trustee / Wellbeing Counsellor</div>
            <div className="name">UN Tiwari</div>
            <p>+91-8299641211</p>
          </div>

          <div style={{ marginTop: "var(--spacing-lg)" }}>
            <h3>Ways to Help</h3>
            <div className="service-card" style={{ marginBottom: "1rem" }}>
              <h3>🙋 Volunteer Your Time</h3>
              <p>Join us at events, help with activities, or visit elders who need companionship.</p>
            </div>
            <div className="service-card" style={{ marginBottom: "1rem" }}>
              <h3>❤️ Make a Donation</h3>
              <p>Your contribution helps us organize health camps, buy game supplies, and reach more elders.</p>
            </div>
            <div className="service-card">
              <h3>🤝 Partner With Us</h3>
              <p>If you represent a clinic, hospital, or community organization — let's work together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Image from "next/image";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>
          Aatmiya was founded with a simple belief: every elder deserves
          companionship, dignity, and purpose.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Aatmiya is a non-profit organisation dedicated to providing elderly
            citizens with compassionate companionship, engaging group activities,
            and accessible healthcare services. We believe that aging should be
            celebrated, not isolated.
          </p>
          <p>
            Based in Lucknow, we organize regular health checkup camps,
            community meetups, games and activities, wellness sessions, and
            counselling services — all designed to bring joy, health, and
            connection to the lives of our elderly community members.
          </p>
          <p>
            Our name, <strong>Aatmiya</strong>, means &ldquo;of the soul&rdquo; — reflecting our
            commitment to care that comes from the heart.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/images/wander.jpg"
            alt="Aatmiya community gathering"
            width={600}
            height={450}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "var(--font-size-2xl)",
        textAlign: "center",
        marginTop: "var(--spacing-xl)",
        marginBottom: "var(--spacing-lg)"
      }}>
        Our Team
      </h2>

      <div className="team-cards">
        <div className="team-card">
          <h3>Piyush Tiwari</h3>
          <div className="role">Founder</div>
          <p className="phone">+91-8176060674</p>
        </div>
        <div className="team-card">
          <h3>UN Tiwari</h3>
          <div className="role">Trustee / Wellbeing Counsellor</div>
          <p className="phone">+91-8299641211</p>
        </div>
      </div>
    </div>
  );
};

export default About;

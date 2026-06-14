import Hero from "@/components/Hero";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aatmiya Foundation | Community, Care & Purpose for Every Elder</title>
        <meta name="description" content="Aatmiya is a non-profit organisation dedicated to serving elderly citizens with group activities, health services, and compassionate companionship in Lucknow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

        <div className="impact-strip">
          <div className="impact-item">
            <span className="number">200+</span>
            <span className="label">Elders Served</span>
          </div>
          <div className="impact-item">
            <span className="number">12+</span>
            <span className="label">Events Organized</span>
          </div>
          <div className="impact-item">
            <span className="number">5+</span>
            <span className="label">Services Offered</span>
          </div>
          <div className="impact-item">
            <span className="number">8+</span>
            <span className="label">Active Volunteers</span>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive care and engagement programs designed for the dignity
            and well-being of every elder.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🏥</div>
              <h3>Health Checkup Camps</h3>
              <p>Free medical consultations with general physicians and surgeons to ensure regular health monitoring.</p>
            </div>
            <div className="service-card">
              <div className="icon">♟️</div>
              <h3>Games &amp; Activities</h3>
              <p>Carrom, chess, card games, and group activities that keep minds sharp and spirits high.</p>
            </div>
            <div className="service-card">
              <div className="icon">👥</div>
              <h3>Community Meetups</h3>
              <p>Regular social gatherings where elders build bonds, share stories, and find companionship.</p>
            </div>
            <div className="service-card">
              <div className="icon">🧘</div>
              <h3>Wellness Sessions</h3>
              <p>Health talks, light exercise, and wellness workshops promoting active and healthy aging.</p>
            </div>
            <div className="service-card">
              <div className="icon">💬</div>
              <h3>Counselling</h3>
              <p>Emotional support and guidance from trained wellbeing counsellors who truly care.</p>
            </div>
            <div className="service-card">
              <div className="icon">🏠</div>
              <h3>Companionship</h3>
              <p>Home visits for elders who cannot travel, bringing company and care to their doorstep.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us at our next gathering — everyone is welcome.
          </p>

          <div className="event-card">
            <div className="event-date">
              <div className="day">15</div>
              <div className="month">July</div>
            </div>
            <div className="event-info">
              <h3>Free Health CheckUp Camp</h3>
              <p>
                We organise frequent free health checkup camps around Alambagh,
                Lucknow. We offer free medical consultation by General Physicians
                and Surgeons. Our panel includes Dr. Arpit Tripathi (M.S.), Dr.
                Neha Singh (M.S.), Dr. Nilesh Tiwari (MBBS) and Dr. Bhupati Patel
                (M.S.).
              </p>
            </div>
            <Image
              src="/images/wander.jpg"
              alt="Health checkup camp"
              width={200}
              height={150}
              style={{ borderRadius: "var(--radius-sm)", objectFit: "cover", flexShrink: 0 }}
            />
          </div>

          <div className="event-card">
            <div className="event-date">
              <div className="day">22</div>
              <div className="month">July</div>
            </div>
            <div className="event-info">
              <h3>Community Game Night</h3>
              <p>
                We organise community meetups in Lucknow, encouraging the community
                to interact and build bonds. We provide various activities, engaging
                them in fruitful and healthy communication.
              </p>
            </div>
            <Image
              src="/images/wander.jpg"
              alt="Community meetup"
              width={200}
              height={150}
              style={{ borderRadius: "var(--radius-sm)", objectFit: "cover", flexShrink: 0 }}
            />
          </div>
        </section>

        <div className="testimonial">
          <blockquote>
            &ldquo;Aatmiya gave me a new family. I look forward to every meetup &mdash; it&apos;s
            the highlight of my week.&rdquo;
          </blockquote>
          <cite>&mdash; Mrs. Sharma, 72</cite>
        </div>

        <div className="cta-strip">
          <h2>Every elder deserves dignity and companionship.</h2>
          <p>Be a part of their story. Your time, skills, or contribution can make a world of difference.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-primary">Volunteer With Us</a>
            <a href="/contact" className="btn btn-secondary">Make a Donation</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

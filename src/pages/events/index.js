import Image from "next/image";

const Events = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Our Events</h1>
        <p>
          From health camps to community meetups — every event is a step toward
          a more connected, cared-for elder community.
        </p>
      </div>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "var(--font-size-2xl)",
        marginBottom: "var(--spacing-lg)"
      }}>
        Upcoming
      </h2>

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
          <h3>Community MeetUp</h3>
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

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "var(--font-size-2xl)",
        marginTop: "var(--spacing-xl)",
        marginBottom: "var(--spacing-lg)"
      }}>
        Past Events
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        <div style={{
          background: "var(--color-white)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(45,36,36,0.06)"
        }}>
          <Image
            src="/images/wander.jpg"
            alt="Previous health camp"
            width={300}
            height={200}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "1rem" }}>
            <p style={{ fontSize: "0.85rem", opacity: 0.6, marginBottom: "0.25rem" }}>March 2026</p>
            <h3 style={{ fontSize: "1rem" }}>Health Camp — Alambagh</h3>
          </div>
        </div>
        <div style={{
          background: "var(--color-white)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(45,36,36,0.06)"
        }}>
          <Image
            src="/images/wander.jpg"
            alt="Previous community meetup"
            width={300}
            height={200}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "1rem" }}>
            <p style={{ fontSize: "0.85rem", opacity: 0.6, marginBottom: "0.25rem" }}>February 2026</p>
            <h3 style={{ fontSize: "1rem" }}>Community MeetUp — Lucknow</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

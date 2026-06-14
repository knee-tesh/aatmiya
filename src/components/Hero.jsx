import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Where every elder finds <span>community</span>, <span>care</span> &{" "}
          <span>purpose</span>
        </h1>
        <p>
          Aatmiya is a non-profit organisation dedicated to serving our elderly
          community with dignity, companionship, and compassionate care through
          group activities, health services, and meaningful connection.
        </p>
        <div className="hero-actions">
          <a href="/contact" className="btn btn-primary">
            Join Us as a Volunteer
          </a>
          <a href="/contact" className="btn btn-secondary">
            Support Our Work
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <Image
          src="/images/wander.jpg"
          alt="Elders enjoying community activities"
          width={300}
          height={400}
          className="photo photo-1"
        />
        <Image
          src="/images/wander.jpg"
          alt="Health checkup camp"
          width={300}
          height={200}
          className="photo photo-2"
        />
        <Image
          src="/images/wander.jpg"
          alt="Community gathering"
          width={300}
          height={400}
          className="photo photo-3"
        />
        <Image
          src="/images/wander.jpg"
          alt="Games and activities"
          width={300}
          height={200}
          className="photo photo-4"
        />
      </div>
    </section>
  );
};

export default Hero;

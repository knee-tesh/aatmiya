import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image
                src="/images/me.jpeg"
                className="profile-img"
                width={300}
                height={300}
                alt="Nitesh Tiwari"
            />
            <div className="hero-text">
                <h1>Hey, I'm Nitesh Tiwari 👋</h1>
                <p>
                    I'm a fullstack developer based in Pune, India. I specialize in building exceptional websites,
                    applications, and everything in between.
                </p>
                <div className="social-icons">
                   
                </div>
            </div>
        </div>
    );
};

export default Hero;

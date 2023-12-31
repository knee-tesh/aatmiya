import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h3>About Aatmiya</h3>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Aatmiya is a non-profit organisation aiming to provide companionship to ailing and ageing
                        elderly.
                    </p>
                    <p>
                        Throughout my career, I have worked on a wide range of projects, from simple static websites to
                        complex enterprise-level applications. I am experienced in working with a variety of development
                        tools and frameworks, including React, Angular, Node.js, and Python. I am always eager to learn
                        and explore new technologies, and I am constantly seeking out opportunities to improve my skills
                        and knowledge.
                    </p>
                </div>
                <div className="about-img">
                    <Image
                        src="https://www.nia.nih.gov/sites/default/files/inline-images/aging-in-place-inline_1.jpg"
                        className="profile-img"
                        width={300}
                        height={500}
                        alt="Nitesh with his wife"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

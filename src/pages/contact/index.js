import Image from "next/image";

const Contact = () => {
    return (
        <div className="about-container">
            <h3>Contact Us</h3>
            <div className="flex-about">
                <div className="about-text">
                    <h2>Feel Free to Reach Out!</h2>
                    <p>
                        We constantly look for opportunities to help. If you are someone who wants to volunteer or
                        donate for the good cause, please do reach out.
                    </p>
                </div>
                <div className="about-text">
                    <div>
                        <h3>Piyush Tiwari</h3>
                        <h4>Founder</h4>
                        <p>+91-8176060674</p>
                    </div>
                    <div>
                        <h3>UN Tiwari</h3>
                        <h4>Trustee / Wellbeing Counsellor</h4>
                        <p>+91-8299641211</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

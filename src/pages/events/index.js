import Image from "next/image";

const Events = () => {
    return (
        <div className="about-container">
            <h3>Events</h3>
            <div className="flex-about">
                <div className="about-text">
                    <h3>1. Free Health CheckUp</h3>
                    <p>
                        We organised frequent free health checkup camp around Alambagh, Lucknow. We offered free medical
                        consultation by General Physicians and Surgeons. We had 4 doctors on premise namely, Dr. Arpit
                        Tripathi (M.S.), Dr. Neha Singh (M.S.), Dr. Nilesh Tiwari (MBBS) and Dr. Bhupati Patel (MS).
                    </p>
                </div>
                <div className="about-img">
                    <Image
                        src="/images/wander.jpg"
                        className="profile-img"
                        width={300}
                        height={500}
                        alt="Nitesh with his wife"
                    />
                </div>
            </div>
            <div className="flex-about">
                <div className="about-text">
                    <h3>2. Community MeetUp</h3>
                    <p>
                        We organised community meetups in Lucknow. We encouraged the community to interact and build
                        bond among each other. We also provided the community with various activities, engaging them in
                        fruitful and healthy communication.
                    </p>
                </div>
                <div className="about-img">
                    <Image
                        src="/images/wander.jpg"
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

export default Events;

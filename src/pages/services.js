import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🏥",
    title: "Health Checkup Camps",
    description:
      "Free medical consultations with general physicians and surgeons to ensure regular health monitoring.",
  },
  {
    icon: "♟️",
    title: "Games & Activities",
    description:
      "Carrom, chess, card games, and group activities that keep minds sharp and spirits high.",
  },
  {
    icon: "👥",
    title: "Community Meetups",
    description:
      "Regular social gatherings where elders build bonds, share stories, and find companionship.",
  },
  {
    icon: "🧘",
    title: "Wellness Sessions",
    description:
      "Health talks, light exercise, and wellness workshops promoting active and healthy aging.",
  },
  {
    icon: "💬",
    title: "Counselling",
    description:
      "Emotional support and guidance from trained wellbeing counsellors who truly care.",
  },
  {
    icon: "🏠",
    title: "Companionship",
    description:
      "Home visits for elders who cannot travel, bringing company and care to their doorstep.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-spacing">
          <div className="max-content">
            <h1 className="font-prata text-4xl md:text-5xl mb-4">Our Services</h1>
            <p className="font-source-serif text-lg text-ink/60 mb-12 max-w-2xl">
              Comprehensive care and engagement programs designed for the dignity
              and well-being of every elder.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-cotton rounded-lg p-8 shadow-sm border-t-4 border-amber"
                >
                  <span className="text-4xl block mb-4">{service.icon}</span>
                  <h3 className="font-inter text-base font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="font-source-serif text-sm leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

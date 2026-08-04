import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="font-inter text-lg text-white/50 mb-12 max-w-2xl">
          Comprehensive care and engagement programs designed for the dignity and well-being of every elder.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={cardVariants}>
              <GlassCard variant="interactive" className="p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-aurora/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-inter text-base font-semibold mb-2">{service.title}</h3>
                <p className="font-inter text-sm leading-relaxed text-white/50">{service.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Heart, Stethoscope, Users, Gamepad2, MessageCircle, Home } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap = [Stethoscope, Gamepad2, Users, Heart, MessageCircle, Home];

export default function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="font-body text-lg text-text-muted mb-12 max-w-2xl leading-relaxed">
            Comprehensive care and engagement programs designed for the dignity and well-being of every elder.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div key={i} variants={cardVariants}>
                <GlassCard variant="interactive" className="p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-7 h-7 text-primary" />}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="font-body text-base leading-relaxed text-text-muted">{service.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

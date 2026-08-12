import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { upcomingEvents, pastEvents } from "@/data/events";

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.2 },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Events() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-content">
          <div className="mb-12">
            <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Join Us</p>
            <h1 className="text-4xl md:text-5xl mb-4">Moments That Matter</h1>
            <p className="font-body text-lg text-text-muted">Join us at our upcoming events — everyone is welcome.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...stagger}>
            {upcomingEvents.map((event, i) => (
              <GlassCard key={i} variant="interactive" className="p-6 flex gap-4" {...cardFade}>
                <div className="bg-primary/10 text-primary rounded-xl px-4 py-3 text-center min-w-[80px] flex flex-col items-center justify-center border border-primary/20">
                  <span className="font-body text-xs font-semibold tracking-wider uppercase">{event.date.split(" ")[0]}</span>
                  <span className="font-heading text-xl font-bold leading-none mt-1">{event.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold mb-1">{event.title}</h3>
                  <p className="font-body text-base text-text-muted mb-2 line-clamp-2">{event.desc}</p>
                  <div className="flex items-center gap-2 text-text-muted">
                    <MapPin size={16} className="text-secondary" />
                    <span className="font-body text-sm">{event.location}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-content">
          <div className="mb-12">
            <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Memories</p>
            <h2 className="text-3xl md:text-4xl">Past Events</h2>
          </div>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" {...stagger}>
            {pastEvents.map((event, i) => (
              <GlassCard key={i} variant="interactive" className="overflow-hidden" {...cardFade}>
                <div className="relative aspect-[16/9]">
                  <Image src={event.img} alt={event.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-text-muted">
                    <Calendar size={14} className="text-secondary" />
                    <span className="font-body text-sm">{event.date}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

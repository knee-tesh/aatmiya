import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { upcomingEvents, pastEvents } from "@/data/events";

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.3 },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Events() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="max-content">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">Moments That Matter</h1>
            <p className="font-inter text-lg text-white/50">Join us at our upcoming events — everyone is welcome.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...stagger}>
            {upcomingEvents.map((event, i) => (
              <GlassCard key={i} variant="strong" className="p-6 flex gap-4" {...cardFade}>
                <div className="bg-aurora/20 text-aurora rounded-xl px-4 py-3 text-center min-w-[72px] flex flex-col items-center justify-center border border-aurora/30">
                  <span className="font-inter text-xs tracking-wider uppercase">{event.date.split(" ")[0]}</span>
                  <span className="font-mono text-xl font-bold leading-none mt-1">{event.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-base font-semibold mb-1">{event.title}</h3>
                  <p className="font-inter text-sm text-white/50 mb-2">{event.desc}</p>
                  <div className="flex items-center gap-2 text-white/40">
                    <MapPin size={13} />
                    <span className="font-inter text-xs">{event.location}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-content">
          <h2 className="text-3xl md:text-4xl mb-12">Past Events</h2>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" {...stagger}>
            {pastEvents.map((event, i) => (
              <GlassCard key={i} variant="strong" className="overflow-hidden" {...cardFade}>
                <div className="relative aspect-[16/9]">
                  <Image src={event.img} alt={event.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-inter text-base font-semibold">{event.title}</h3>
                  <p className="font-inter text-xs text-aurora mt-1">{event.date}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

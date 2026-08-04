import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services } from "@/data/services";
import { upcomingEvents } from "@/data/events";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

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

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center snap-section overflow-hidden">
      <Image
        src="/images/IMG-20260707-WA0010.png"
        alt="Elderly couple in Delhi park"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <div className="relative z-10 max-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight">
            Where every elder finds{" "}
            <span className="bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
              community, care & purpose
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            Aatmiya is a non-profit organisation dedicated to serving our elderly community with dignity, companionship, and compassionate care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <GlowButton variant="primary">Join Us as a Volunteer</GlowButton>
            <GlowButton variant="outline" href="/contact">Support Our Work</GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: 200, suffix: "+", label: "Elders Served" },
    { number: 12, suffix: "+", label: "Events Organized" },
    { number: 5, suffix: "+", label: "Services Offered" },
    { number: 8, suffix: "+", label: "Active Volunteers" },
  ];

  return (
    <section className="py-16 snap-section">
      <div className="max-content">
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" {...stagger}>
          {stats.map((stat, i) => (
            <GlassCard key={i} variant="subtle" className="p-8 text-center" {...cardFade}>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="font-inter text-sm tracking-wider uppercase text-white/50 mt-2">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              <Image
                src="/images/IMG-20260707-WA0001.jpg"
                alt="Grandparents with grandchild"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">About Aatmiya</p>
            <h2 className="text-4xl mb-6">Celebrating Our Elders</h2>
            <div className="text-base leading-relaxed space-y-4 text-white/60">
              <p>
                Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services.
              </p>
              <p>
                Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-4xl">What We Do</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          {...stagger}
        >
          {services.map((service, i) => (
            <GlassCard key={i} variant="interactive" className="p-8" {...cardFade}>
              <div className="w-12 h-12 rounded-full bg-aurora/10 flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-inter text-base font-semibold mb-2">{service.title}</h3>
              <p className="font-inter text-sm leading-relaxed text-white/50">{service.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">Stay Connected</p>
          <h2 className="text-4xl">Upcoming Events</h2>
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
                <p className="font-inter text-sm text-white/50 mb-3">{event.desc}</p>
                <Link href="/events" className="font-inter text-xs tracking-wider uppercase text-aurora hover:text-cyan transition-colors">
                  Learn More →
                </Link>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <span className="text-7xl md:text-8xl text-aurora/30 leading-none block font-mono">&ldquo;</span>
            <blockquote className="text-xl md:text-2xl italic leading-relaxed -mt-4">
              Aatmiya gave me a new family. I look forward to every meetup — it&apos;s the highlight of my week.
            </blockquote>
            <p className="font-inter text-sm text-white/40 mt-6">— Mrs. Sharma, 72</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 snap-section">
      <div className="max-content text-center">
        <motion.div {...fadeUp}>
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">Every elder deserves dignity and companionship.</h2>
            <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
              Be a part of their story. Your time, skills, or contribution can make a world of difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton variant="primary">Get Involved</GlowButton>
              <GlowButton variant="outline">Make a Donation</GlowButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PurposeSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}

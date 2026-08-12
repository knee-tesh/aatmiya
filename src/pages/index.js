import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, HandHeart } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services } from "@/data/services";
import { upcomingEvents } from "@/data/events";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.2 },
};

const cardFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-delhi-couple.jpg"
        alt="Elderly couple enjoying time together in a Delhi park"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cta/80 via-cta/40 to-transparent" />
      <div className="relative z-10 max-content text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold max-w-4xl mx-auto leading-tight text-white">
            Where every elder finds{" "}
            <span className="text-primary-light">
              community, care & purpose
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
            Aatmiya is a non-profit dedicated to serving our elderly community with dignity, companionship, and compassionate care through group activities, health services, and meaningful connection.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <GlowButton variant="primary">Join Us as a Volunteer</GlowButton>
            <GlowButton variant="outline" href="/contact" className="border-white text-white hover:bg-white/10 hover:border-white">
              Support Our Work
            </GlowButton>
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
    <section className="py-16 bg-surface">
      <div className="max-content">
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" {...stagger}>
          {stats.map((stat, i) => (
            <GlassCard key={i} variant="subtle" className="p-8 text-center" {...cardFade}>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="font-body text-sm font-medium tracking-wide uppercase text-text-muted mt-2">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl">Our Services</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          {...stagger}
        >
          {services.map((service, i) => (
            <GlassCard key={i} variant="interactive" className="p-8" {...cardFade}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
              <p className="font-body text-base leading-relaxed text-text-muted">{service.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card">
              <Image
                src="/images/IMG-20260707-WA0001.jpg"
                alt="Grandparents with grandchild sharing a joyful moment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">About Aatmiya</p>
            <h2 className="text-3xl md:text-4xl mb-6">Celebrating Our Elders</h2>
            <div className="text-base leading-relaxed space-y-4 text-text-muted">
              <p>
                Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services. We believe that aging should be celebrated, not isolated.
              </p>
              <p>
                Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services — all designed to bring joy, health, and connection to the lives of our elderly community members.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl leading-relaxed text-text italic">
              &ldquo;Aatmiya gave me a new family. I look forward to every meetup — it&apos;s the highlight of my week.&rdquo;
            </blockquote>
            <p className="font-body text-base text-text-muted mt-6 font-medium">— Mrs. Sharma, 72</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-content">
        <div className="mb-12">
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Stay Connected</p>
          <h2 className="text-3xl md:text-4xl">Upcoming Events</h2>
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
                <p className="font-body text-base text-text-muted mb-3 line-clamp-2">{event.desc}</p>
                <Link href="/events" className="font-body text-sm font-semibold text-primary hover:text-cta transition-colors inline-flex items-center gap-1">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content text-center">
        <motion.div {...fadeUp}>
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <HandHeart className="w-14 h-14 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4">Every elder deserves dignity and companionship.</h2>
            <p className="text-lg text-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
              Be a part of their story. Your time, skills, or contribution can make a world of difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton variant="primary">Get Involved</GlowButton>
              <GlowButton variant="outline" href="/contact">Make a Donation</GlowButton>
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
      <ServicesSection />
      <StorySection />
      <TestimonialSection />
      <EventsSection />
      <CTASection />
    </>
  );
}

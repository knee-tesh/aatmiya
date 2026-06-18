import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, Gamepad2, Stethoscope, ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-end">
      <Image
        src="/images/hero-delhi-couple.jpg"
        alt="Elderly couple in Delhi park"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 max-content pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-prata text-4xl md:text-5xl lg:text-6xl text-cotton max-w-3xl leading-tight">
            Care That Comes From the Soul
          </h1>
          <p className="font-source-serif text-lg md:text-xl text-cotton/80 mt-4 max-w-xl">
            Aatmiya is a non-profit dedicated to providing elderly citizens with group activities, health services, and companionship.
          </p>
          <button className="mt-8 bg-walnut text-cotton font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-md hover:bg-tamarind transition-colors">
            Join Us as a Volunteer
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-walnut text-cotton py-16">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "3,000+", label: "Elders Cared For" },
            { number: "15", label: "Cities Across India" },
            { number: "10", label: "Years of Service" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <p className="font-prata text-4xl md:text-5xl">{stat.number}</p>
              <p className="font-inter text-sm tracking-wider uppercase mt-2 opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section className="section-spacing">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/indian-grandparents.jpg"
                alt="Grandparents with grandchild"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">Our Purpose</p>
            <h2 className="font-prata text-4xl mb-6">Every Elder Deserves Dignity</h2>
            <div className="font-source-serif text-base leading-relaxed space-y-4 text-ink/80">
              <p>
                Aatmiya means "of the soul" — and that is what drives us. We believe that every elder
                deserves to live with dignity, joy, and connection.
              </p>
              <p>
                Through group activities, health services, and companionship programs, we bring warmth
                to the golden years of thousands across India.
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
    <section className="section-spacing bg-parchment/50">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">What We Do</p>
          <h2 className="font-prata text-4xl">Our Services</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { icon: Stethoscope, title: "Health Checkup Camps", desc: "Regular medical checkups and wellness sessions at community centers across Delhi NCR." },
            { icon: Gamepad2, title: "Games & Activities", desc: "Indoor and outdoor activities — from carrom and chess to morning walks and yoga." },
            { icon: Users, title: "Community Meetups", desc: "Weekly gatherings where elders connect, share stories, and build lasting friendships." },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-cotton rounded-lg p-8 shadow-sm border-t-4 border-amber"
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center mb-4">
                <service.icon className="text-amber" size={24} />
              </div>
              <h3 className="font-inter text-base font-semibold mb-2">{service.title}</h3>
              <p className="font-source-serif text-sm leading-relaxed text-ink/70">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="section-spacing">
      <div className="max-content">
        <div className="mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">Stay Connected</p>
          <h2 className="font-prata text-4xl">Upcoming Events</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { date: "JUL 15", title: "Grandparents Day Celebration", desc: "A special day of games, music, and storytelling at our community center." },
            { date: "AUG 5", title: "Health & Wellness Camp", desc: "Free health checkups, eye tests, and wellness consultations for seniors." },
          ].map((event, i) => (
            <motion.div
              key={i}
              className="bg-cotton rounded-lg p-6 shadow-sm flex gap-4"
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div className="bg-walnut text-cotton rounded-md px-4 py-3 text-center min-w-[72px] flex flex-col items-center justify-center">
                <span className="font-inter text-xs tracking-wider uppercase">{event.date.split(" ")[0]}</span>
                <span className="font-prata text-xl leading-none mt-1">{event.date.split(" ")[1]}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-inter text-base font-semibold mb-1">{event.title}</h3>
                <p className="font-source-serif text-sm text-ink/70 mb-3">{event.desc}</p>
                <Link href="/events" className="font-inter text-xs tracking-wider uppercase text-amber hover:text-walnut transition-colors">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="section-spacing bg-parchment">
      <div className="max-content text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-prata text-7xl md:text-8xl text-amber/30 leading-none block">"</span>
          <blockquote className="font-source-serif text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto -mt-4">
            Aatmiya gave my father his smile back. The companionship and care they provide is not just
            a service — it's family.
          </blockquote>
          <p className="font-inter text-sm text-ink/60 mt-6">
            — Priya Sharma, Daughter
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-walnut text-cotton py-20">
      <div className="max-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-prata text-4xl mb-4">Be Part of the Story</h2>
          <p className="font-source-serif text-lg text-cotton/80 mb-8 max-w-lg mx-auto">
            Your time can change a life.
          </p>
          <button className="bg-cotton text-ink font-inter text-sm tracking-wider uppercase px-10 py-4 rounded-md hover:bg-amber hover:text-ink transition-colors">
            Get Involved
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SectionDivider />
        <StatsSection />
        <SectionDivider />
        <PurposeSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <EventsSection />
        <SectionDivider />
        <TestimonialSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

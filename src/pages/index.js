import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


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
            Where every elder finds community, care & purpose
          </h1>
          <p className="font-source-serif text-lg md:text-xl text-cotton/80 mt-4 max-w-xl">
            Aatmiya is a non-profit organisation dedicated to serving our elderly community with dignity, companionship, and compassionate care through group activities, health services, and meaningful connection.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-walnut text-cotton font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-md hover:bg-tamarind transition-colors">
              Join Us as a Volunteer
            </button>
            <Link href="/contact">
              <button className="border border-cotton text-cotton font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-md bg-transparent hover:bg-cotton/10 transition-colors">
                Support Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-walnut text-cotton py-16">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "200+", label: "Elders Served" },
            { number: "12+", label: "Events Organized" },
            { number: "5+", label: "Services Offered" },
            { number: "8+", label: "Active Volunteers" },
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
            <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">About Aatmiya</p>
            <h2 className="font-prata text-4xl mb-6">Celebrating Our Elders</h2>
            <div className="font-source-serif text-base leading-relaxed space-y-4 text-ink/80">
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

function ServicesSection() {
  return (
    <section className="section-spacing bg-parchment/50">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="font-prata text-4xl">What We Do</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { icon: "🏥", title: "Health Checkup Camps", desc: "Free medical consultations with general physicians and surgeons to ensure regular health monitoring." },
            { icon: "♟️", title: "Games & Activities", desc: "Carrom, chess, card games, and group activities that keep minds sharp and spirits high." },
            { icon: "👥", title: "Community Meetups", desc: "Regular social gatherings where elders build bonds, share stories, and find companionship." },
            { icon: "🧘", title: "Wellness Sessions", desc: "Health talks, light exercise, and wellness workshops promoting active and healthy aging." },
            { icon: "💬", title: "Counselling", desc: "Emotional support and guidance from trained wellbeing counsellors who truly care." },
            { icon: "🏠", title: "Companionship", desc: "Home visits for elders who cannot travel, bringing company and care to their doorstep." },
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
                <span className="text-2xl">{service.icon}</span>
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
            { date: "JUL 15", title: "Free Health CheckUp Camp", desc: "We organise frequent free health checkup camps around Alambagh, Lucknow. We offer free medical consultation by General Physicians and Surgeons. Our panel includes Dr. Arpit Tripathi (M.S.), Dr. Neha Singh (M.S.), Dr. Nilesh Tiwari (MBBS) and Dr. Bhupati Patel (M.S.)." },
            { date: "JUL 22", title: "Community MeetUp", desc: "We organise community meetups in Lucknow, encouraging the community to interact and build bonds. We provide various activities, engaging them in fruitful and healthy communication." },
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
            Aatmiya gave me a new family. I look forward to every meetup — it's the highlight of my week.
          </blockquote>
          <p className="font-inter text-sm text-ink/60 mt-6">
            — Mrs. Sharma, 72
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
          <h2 className="font-prata text-4xl mb-4">Every elder deserves dignity and companionship.</h2>
          <p className="font-source-serif text-lg text-cotton/80 mb-8 max-w-lg mx-auto">
            Be a part of their story. Your time, skills, or contribution can make a world of difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-cotton text-ink font-inter text-sm tracking-wider uppercase px-10 py-4 rounded-md hover:bg-amber hover:text-ink transition-colors">
              Get Involved
            </button>
            <button className="border border-cotton text-cotton font-inter text-sm tracking-wider uppercase px-10 py-4 rounded-md bg-transparent hover:bg-cotton/10 transition-colors">
              Make a Donation
            </button>
          </div>
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

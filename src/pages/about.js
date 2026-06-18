import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Target, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function BannerSection() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center">
      <Image
        src="/images/indian-grandparents.jpg"
        alt="About Aatmiya Foundation"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative z-10 font-prata text-4xl md:text-5xl lg:text-6xl text-cotton">
        Our Story
      </h1>
    </section>
  );
}

function StorySpread() {
  return (
    <section className="section-spacing">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            {...fadeUp}
            className="font-source-serif text-base leading-relaxed text-ink/80 space-y-4"
          >
            <p>
              <span className="font-prata text-[72px] text-amber float-left mr-2 leading-none">
                A
              </span>
              atmiya was born from a simple belief — that every elder deserves to
              feel seen, valued, and loved. Founded in 2016 by a group of friends
              who saw their own grandparents struggling with loneliness, we started
              with small weekly meetups in a Delhi community hall.
            </p>
            <p>
              What began as a handful of people playing carrom and sharing chai has
              grown into a movement spanning 15 cities, touching the lives of
              thousands of elders across India.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="font-source-serif text-base leading-relaxed text-ink/80 space-y-4"
          >
            <p>
              Our name, Aatmiya, means &ldquo;of the soul&rdquo; — it reflects our
              belief that care for the elderly isn&rsquo;t a transaction, but a
              relationship. Every game of chess, every health checkup, every shared
              meal is an act of dignity and love.
            </p>
            <p>
              Today, we run health camps, activity centers, and companionship
              programs — and we&rsquo;re just getting started. Our vision is an
              India where no elder feels alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="section-spacing bg-parchment/50">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-cotton rounded-lg p-8 shadow-sm border-l-4 border-amber"
          >
            <Heart className="text-amber mb-4" size={32} />
            <p className="font-inter text-sm tracking-wider uppercase text-amber mb-2">
              Our Mission
            </p>
            <p className="font-source-serif text-base leading-relaxed text-ink/80">
              To provide elderly citizens with dignity, joy, and connection
              through accessible health services, engaging activities, and
              meaningful companionship.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-cotton rounded-lg p-8 shadow-sm border-l-4 border-amber"
          >
            <Target className="text-amber mb-4" size={32} />
            <p className="font-inter text-sm tracking-wider uppercase text-amber mb-2">
              Our Vision
            </p>
            <p className="font-source-serif text-base leading-relaxed text-ink/80">
              An India where every elder lives with dignity, purpose, and
              connection — and no one spends their golden years alone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const team = [
  { name: "Anita Sharma", role: "Founder & Director", initial: "A" },
  { name: "Rajesh Kumar", role: "Programs Manager", initial: "R" },
  { name: "Priya Patel", role: "Health Services Lead", initial: "P" },
  { name: "Vikram Singh", role: "Community Outreach", initial: "V" },
  { name: "Meera Iyer", role: "Volunteer Coordinator", initial: "M" },
  { name: "Arun Nair", role: "Operations Head", initial: "A" },
];

function TeamSection() {
  return (
    <section className="section-spacing">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">
            The People
          </p>
          <h2 className="font-prata text-4xl">Meet Our Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="w-20 h-20 rounded-full bg-amber flex items-center justify-center mx-auto mb-4">
                <span className="font-inter text-2xl font-semibold text-cotton">
                  {person.initial}
                </span>
              </div>
              <h3 className="font-inter text-base font-semibold">{person.name}</h3>
              <p className="font-source-serif text-sm text-ink/60">{person.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <BannerSection />
        <SectionDivider />
        <StorySpread />
        <SectionDivider />
        <MissionVision />
        <SectionDivider />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

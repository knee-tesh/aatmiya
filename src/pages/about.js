import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import { motion } from "framer-motion";

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
        src="/images/IMG-20260707-WA0001.jpg"
        alt="About Aatmiya Foundation"
        fill
        sizes="100vw"
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
              Aatmiya was founded with a simple belief: every elder deserves
              companionship, dignity, and purpose.
            </p>
            <p>
              Aatmiya is a non-profit organisation dedicated to providing elderly
              citizens with compassionate companionship, engaging group activities,
              and accessible healthcare services. We believe that aging should be
              celebrated, not isolated.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="font-source-serif text-base leading-relaxed text-ink/80 space-y-4"
          >
            <p>
              Based in Lucknow, we organize regular health checkup camps, community
              meetups, games and activities, wellness sessions, and counselling
              services — all designed to bring joy, health, and connection to the
              lives of our elderly community members.
            </p>
            <p>
              Our name, Aatmiya, means &ldquo;of the soul&rdquo; — reflecting our
              commitment to care that comes from the heart.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const galleryGroups = [
  {
    caption: "Moments of Joy",
    images: ["IMG-20260707-WA0000.png", "IMG-20260707-WA0001.jpg", "IMG-20260707-WA0002.png"],
    bg: "bg-cotton",
  },
  {
    caption: "Community Gatherings",
    images: ["IMG-20260707-WA0003.png", "IMG-20260707-WA0004.jpg", "IMG-20260707-WA0005.png"],
    bg: "bg-parchment/50",
  },
  {
    caption: "Health & Wellness",
    images: ["IMG-20260707-WA0006.png", "IMG-20260707-WA0007.png", "IMG-20260707-WA0008.png"],
    bg: "bg-cotton",
  },
  {
    caption: "Celebrating Together",
    images: ["IMG-20260707-WA0009.png", "IMG-20260707-WA0010.png", "IMG-20260707-WA0011.png"],
    bg: "bg-parchment/50",
  },
];

function GallerySection() {
  return (
    <>
      {galleryGroups.map((group, gIdx) => (
        <section key={gIdx} className={`section-spacing ${group.bg}`}>
          <div className="max-content">
            <motion.h2
              className="font-prata text-2xl md:text-3xl text-center mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {group.caption}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                initial: {},
                animate: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {group.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden"
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`${group.caption} — ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}

const team = [
  { name: "Piyush Tiwari", role: "Founder", initial: "P", phone: "+91-8176060674" },
  { name: "UN Tiwari", role: "Trustee / Wellbeing Counsellor", initial: "U", phone: "+91-8299641211" },
];

function TeamSection() {
  return (
    <section className="section-spacing">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-amber mb-3">
            The People
          </p>
          <h2 className="font-prata text-4xl">Our Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
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
              <p className="font-source-serif text-sm text-ink/60 mb-1">{person.role}</p>
              <p className="font-inter text-xs text-ink/40">{person.phone}</p>
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
        <GallerySection />
        <SectionDivider />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

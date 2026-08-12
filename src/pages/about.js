import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Shield, Users } from "lucide-react";
import { galleryGroups } from "@/data/gallery";
import { team } from "@/data/team";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function BannerSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/IMG-20260707-WA0001.jpg"
        alt="About Aatmiya Foundation — bringing joy to elders"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cta/80 via-cta/40 to-transparent" />
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">Our Story</h1>
    </section>
  );
}

function StorySpread() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="text-base leading-relaxed text-text-muted space-y-4">
            <p>Aatmiya was founded with a simple belief: every elder deserves companionship, dignity, and purpose.</p>
            <p>Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services. We believe that aging should be celebrated, not isolated.</p>
          </motion.div>
          <motion.div {...fadeUp} className="text-base leading-relaxed text-text-muted space-y-4">
            <p>Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services — all designed to bring joy, health, and connection to the lives of our elderly community members.</p>
            <p>Our name, Aatmiya, means &ldquo;of the soul&rdquo; — reflecting our commitment to care that comes from the heart.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { icon: Heart, title: "Compassion", desc: "Care that comes from the heart, treating every elder as family." },
    { icon: Shield, title: "Dignity", desc: "Respecting the autonomy and worth of every individual we serve." },
    { icon: Users, title: "Community", desc: "Building bonds that combat isolation and foster belonging." },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">What Guides Us</p>
          <h2 className="text-3xl md:text-4xl">Our Values</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="text-center p-8"
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
              <p className="font-body text-base text-text-muted leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <>
      {galleryGroups.map((group, gIdx) => (
        <section key={gIdx} className={`py-16 md:py-24 ${gIdx % 2 === 1 ? 'bg-surface' : ''}`}>
          <div className="max-content">
            <motion.h2
              className="text-2xl md:text-3xl text-center font-heading font-bold mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {group.caption}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            >
              {group.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden card hover:shadow-lg transition-shadow duration-300"
                  variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`${group.caption} — photo ${i + 1}`}
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

function TeamSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">The People</p>
          <h2 className="text-3xl md:text-4xl">Our Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="text-center p-6 card"
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-primary">{person.initial}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{person.name}</h3>
              <p className="font-body text-base text-text-muted mb-1">{person.role}</p>
              <p className="font-body text-sm text-text-muted">{person.phone}</p>
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
      <BannerSection />
      <StorySpread />
      <ValuesSection />
      <GallerySection />
      <TeamSection />
    </>
  );
}

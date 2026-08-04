import Image from "next/image";
import { motion } from "framer-motion";
import { galleryGroups } from "@/data/gallery";
import { team } from "@/data/team";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function BannerSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center snap-section overflow-hidden">
      <Image
        src="/images/IMG-20260707-WA0001.jpg"
        alt="About Aatmiya Foundation"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold">Our Story</h1>
    </section>
  );
}

function StorySpread() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="text-base leading-relaxed text-white/60 space-y-4">
            <p>Aatmiya was founded with a simple belief: every elder deserves companionship, dignity, and purpose.</p>
            <p>Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services. We believe that aging should be celebrated, not isolated.</p>
          </motion.div>
          <motion.div {...fadeUp} className="text-base leading-relaxed text-white/60 space-y-4">
            <p>Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services &mdash; all designed to bring joy, health, and connection to the lives of our elderly community members.</p>
            <p>Our name, Aatmiya, means &ldquo;of the soul&rdquo; — reflecting our commitment to care that comes from the heart.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <>
      {galleryGroups.map((group, gIdx) => (
        <section key={gIdx} className="py-16 md:py-24">
          <div className="max-content">
            <motion.h2
              className="text-2xl md:text-3xl text-center mb-8"
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
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.12 } } }}
            >
              {group.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden glass hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] transition-all duration-300"
                  variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
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

function TeamSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">The People</p>
          <h2 className="text-4xl">Our Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            >
              <div className="w-20 h-20 rounded-full bg-aurora/10 border border-aurora/30 flex items-center justify-center mx-auto mb-4">
                <span className="font-inter text-2xl font-semibold text-aurora">{person.initial}</span>
              </div>
              <h3 className="font-inter text-base font-semibold">{person.name}</h3>
              <p className="font-inter text-sm text-white/50 mb-1">{person.role}</p>
              <p className="font-inter text-xs text-white/30">{person.phone}</p>
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
      <GallerySection />
      <TeamSection />
    </>
  );
}

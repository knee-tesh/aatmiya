import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const upcomingEvents = [
  {
    month: "JUL",
    day: "15",
    title: "Free Health CheckUp Camp",
    desc: "We organise frequent free health checkup camps around Alambagh, Lucknow. We offer free medical consultation by General Physicians and Surgeons. Our panel includes Dr. Arpit Tripathi (M.S.), Dr. Neha Singh (M.S.), Dr. Nilesh Tiwari (MBBS) and Dr. Bhupati Patel (M.S.).",
    time: "Alambagh, Lucknow",
  },
  {
    month: "JUL",
    day: "22",
    title: "Community MeetUp",
    desc: "We organise community meetups in Lucknow, encouraging the community to interact and build bonds. We provide various activities, engaging them in fruitful and healthy communication.",
    time: "Lucknow",
  },
];

const pastEvents = [
  { img: "/images/indian-elder-man.jpg", title: "Health Camp — Alambagh", date: "March 2026" },
  { img: "/images/indian-family.jpg", title: "Community MeetUp — Lucknow", date: "February 2026" },
];

export default function Events() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-spacing">
          <div className="max-content">
            <div className="mb-12">
              <h1 className="font-prata text-4xl md:text-5xl mb-4">Moments That Matter</h1>
              <p className="font-source-serif text-lg text-ink/60">
                Join us at our upcoming events — everyone is welcome.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            >
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="bg-cotton rounded-lg p-6 shadow-sm flex gap-4"
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <div className="bg-walnut text-cotton rounded-md px-4 py-3 text-center min-w-[72px] flex flex-col items-center justify-center">
                    <span className="font-inter text-xs tracking-wider uppercase">{event.month}</span>
                    <span className="font-prata text-xl leading-none mt-1">{event.day}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter text-base font-semibold mb-1">{event.title}</h3>
                    <p className="font-source-serif text-sm text-ink/70 mb-2">{event.desc}</p>
                    <div className="flex items-center gap-2 text-ink/50">
                      <MapPin size={13} />
                      <span className="font-inter text-xs">{event.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        <section className="section-spacing bg-parchment/50">
          <div className="max-content">
            <h2 className="font-prata text-3xl md:text-4xl mb-12">Past Events</h2>
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            >
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  className="bg-cotton rounded-lg overflow-hidden shadow-sm"
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={event.img} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-inter text-base font-semibold">{event.title}</h3>
                    <p className="font-inter text-xs text-walnut mt-1">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

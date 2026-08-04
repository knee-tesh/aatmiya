"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import GradientCanvas from "./GradientCanvas";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
};

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <GradientCanvas />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  subtle: "glass-subtle",
  strong: "glass-strong",
  interactive:
    "glass-strong hover:bg-white/[0.18] hover:-translate-y-1 transition-all duration-300",
};

export default function GlassCard({
  variant = "strong",
  className,
  children,
  ...props
}) {
  return (
    <motion.div
      className={clsx(variants[variant], className)}
      whileHover={
        variant === "interactive"
          ? { boxShadow: "0 0 30px rgba(108, 99, 255, 0.15)" }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

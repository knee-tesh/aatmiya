import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  subtle: "card",
  strong: "card",
  interactive: "card-interactive cursor-pointer",
};

export default function GlassCard({
  variant = "subtle",
  className,
  children,
  ...props
}) {
  return (
    <motion.div
      className={clsx(variants[variant], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import Link from "next/link";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-xl transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-to-r from-aurora to-cyan text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:scale-[1.02]",
  outline:
    "border border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 hover:scale-[1.02]",
};

export default function GlowButton({
  variant = "primary",
  href,
  className,
  children,
  ...props
}) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

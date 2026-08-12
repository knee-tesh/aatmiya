import Link from "next/link";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center font-body text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 min-h-[48px] cursor-pointer";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-cta text-white hover:shadow-[0_4px_20px_rgba(180,83,9,0.3)] hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]",
};

export default function GlowButton({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
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
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

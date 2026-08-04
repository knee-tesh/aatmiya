"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="max-content flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Aatmiya Foundation"
            width={120}
            height={40}
            priority
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-inter text-sm tracking-wider uppercase transition-colors relative group",
                  isActive ? "text-aurora" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aurora transition-all duration-300 origin-left group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 glass-strong p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "font-inter text-base tracking-wider uppercase transition-colors",
                      isActive ? "text-aurora" : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

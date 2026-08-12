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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2 bg-surface/95 backdrop-blur-md shadow-sm border-b border-border"
          : "py-4 bg-surface/90 backdrop-blur-sm"
      )}
    >
      <div className="max-content flex items-center justify-between">
        <Link href="/" className="flex-shrink-0" aria-label="Aatmiya Foundation Home">
          <Image
            src="/images/logo.svg"
            alt="Aatmiya Foundation"
            width={140}
            height={45}
            priority
            className="h-10 md:h-12 w-auto"
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
                  "font-body text-base font-medium transition-colors relative group",
                  isActive ? "text-primary" : "text-text-muted hover:text-primary"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 origin-left",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden p-3 text-text-muted hover:text-primary transition-colors cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-surface p-6 shadow-xl">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-3 text-text-muted hover:text-primary transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X size={28} />
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
                      "font-body text-lg font-medium transition-colors",
                      isActive ? "text-primary" : "text-text-muted hover:text-primary"
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

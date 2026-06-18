"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setMobileOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-amber/20">
      <div className="max-content flex items-center justify-between h-16 md:h-20">
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
                className={`font-inter text-sm tracking-wider uppercase transition-colors ${
                  isActive ? "text-walnut" : "text-ink hover:text-amber"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden p-2 text-ink hover:text-amber transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-parchment shadow-xl p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ink hover:text-amber transition-colors"
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
                    className={`font-inter text-base tracking-wider uppercase transition-colors ${
                      isActive ? "text-walnut" : "text-ink hover:text-amber"
                    }`}
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

"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-walnut text-cotton">
      <div className="max-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Aatmiya Foundation"
              width={140}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="font-source-serif text-sm leading-relaxed opacity-80">
              Care That Comes From the Soul
            </p>
          </div>

          <div>
            <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-amber">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm opacity-80 hover:opacity-100 hover:text-amber transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-amber">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
                <span className="font-inter text-sm opacity-80">
                  123, Gandhi Marg, New Delhi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-amber" />
                <span className="font-inter text-sm opacity-80">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-amber" />
                <span className="font-inter text-sm opacity-80">
                  hello@aatmiya.org
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-amber">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-cotton/30 rounded-full hover:border-amber hover:text-amber transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-cotton/30 rounded-full hover:border-amber hover:text-amber transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-cotton/30 rounded-full hover:border-amber hover:text-amber transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cotton/20">
        <div className="max-content py-6">
          <p className="font-inter text-xs text-center opacity-60">
            &copy; {new Date().getFullYear()} Aatmiya Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

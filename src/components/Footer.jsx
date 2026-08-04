"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, HeartHandshake, Share2, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="h-px bg-gradient-to-r from-transparent via-aurora to-transparent" />
      <div className="glass-subtle rounded-none border-x-0 border-b-0">
        <div className="max-content py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="Aatmiya Foundation"
                width={140}
                height={45}
                className="h-10 w-auto mb-4"
              />
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Care That Comes From the Soul
              </p>
            </div>

            <div>
              <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-aurora">
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
                    className="font-inter text-sm text-white/60 hover:text-white hover:text-aurora transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-aurora">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-aurora" />
                  <div>
                    <p className="font-inter text-sm text-white/60">Piyush Tiwari (Founder)</p>
                    <p className="font-inter text-sm text-white/60">+91-8176060674</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-aurora" />
                  <div>
                    <p className="font-inter text-sm text-white/60">UN Tiwari (Trustee)</p>
                    <p className="font-inter text-sm text-white/60">+91-8299641211</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-aurora" />
                  <span className="font-inter text-sm text-white/60">hello@aatmiya.org</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-inter text-sm tracking-wider uppercase mb-4 text-aurora">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[HeartHandshake, Share2, Play].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 border border-white/20 rounded-full hover:border-aurora hover:text-aurora hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all"
                    aria-label={["Instagram", "Facebook", "YouTube"][i]}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-content py-6">
            <p className="font-inter text-xs text-center text-white/40">
              &copy; {new Date().getFullYear()} Aatmiya Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

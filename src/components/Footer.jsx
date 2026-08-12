"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="bg-surface border-t border-border">
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
              <p className="font-body text-base leading-relaxed text-text-muted">
                Care That Comes From the Soul
              </p>
            </div>

            <div>
              <h3 className="font-heading text-sm tracking-wider uppercase mb-4 text-primary">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/events", label: "Events" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-base text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-sm tracking-wider uppercase mb-4 text-primary">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-body text-base font-medium text-text">Piyush Tiwari</p>
                    <p className="font-body text-sm text-text-muted">Founder</p>
                    <p className="font-body text-base text-text-muted mt-1">+91-8176060674</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0 text-primary mt-1" />
                  <div>
                    <p className="font-body text-base font-medium text-text">UN Tiwari</p>
                    <p className="font-body text-sm text-text-muted">Trustee / Wellbeing Counsellor</p>
                    <p className="font-body text-base text-text-muted mt-1">+91-8299641211</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="shrink-0 text-primary mt-1" />
                  <span className="font-body text-base text-text-muted">hello@aatmiya.org</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-sm tracking-wider uppercase mb-4 text-primary">
                Helpline
              </h3>
              <p className="font-body text-base text-text-muted mb-4">
                Need support? Reach out to us anytime.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-xl hover:bg-cta transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="max-content py-6">
            <p className="font-body text-sm text-center text-text-muted">
              &copy; {new Date().getFullYear()} Aatmiya Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

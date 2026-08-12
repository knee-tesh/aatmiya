"use client";
import { motion } from "framer-motion";
import { Phone, Send, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.length < 2) errs.name = "Name is required (min 2 characters)";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (!form.subject || form.subject === "") errs.subject = "Please select a subject";
    if (!form.message || form.message.length < 10) errs.message = "Message is required (min 10 characters)";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-4 rounded-xl border-2 border-border bg-surface font-body text-base text-text placeholder:text-text-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors min-h-[48px]";

  return (
    <section className="py-20 md:py-28">
      <div className="max-content">
        <motion.div {...fadeUp} className="mb-12">
          <p className="font-body text-sm font-semibold tracking-wider uppercase text-secondary mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl mb-4">Reach Out</h1>
          <p className="font-body text-lg text-text-muted leading-relaxed">
            We&apos;d love to hear from you. Whether you want to volunteer, donate, partner, or just learn more — reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="font-body text-base font-medium mb-2 block">
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="font-body text-sm text-red-600 mt-1 flex items-center gap-1" role="alert">
                  <AlertCircle size={14} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-body text-base font-medium mb-2 block">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="you@example.com"
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="font-body text-sm text-red-600 mt-1 flex items-center gap-1" role="alert">
                  <AlertCircle size={14} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-body text-base font-medium mb-2 block">
                Phone <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="subject" className="font-body text-base font-medium mb-2 block">
                Subject <span className="text-primary">*</span>
              </label>
              <select
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClass}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <option value="">I&apos;m interested in...</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Donation">Making a Donation</option>
                <option value="Partnering">Partnering</option>
                <option value="Services">Accessing Services</option>
                <option value="General">Something Else</option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="font-body text-sm text-red-600 mt-1 flex items-center gap-1" role="alert">
                  <AlertCircle size={14} /> {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="font-body text-base font-medium mb-2 block">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Tell us how you'd like to help..."
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="font-body text-sm text-red-600 mt-1 flex items-center gap-1" role="alert">
                  <AlertCircle size={14} /> {errors.message}
                </p>
              )}
            </div>

            <GlowButton variant="primary" type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
              {status === "loading" ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
            </GlowButton>

            {status === "success" && (
              <div className="flex items-center gap-2 font-body text-base text-green-700 bg-green-50 px-5 py-4 rounded-xl border border-green-200" role="alert">
                <CheckCircle size={20} /> Thank you! We&apos;ll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 font-body text-base text-red-700 bg-red-50 px-5 py-4 rounded-xl border border-red-200" role="alert">
                <AlertCircle size={20} /> Something went wrong. Please try again.
              </div>
            )}
          </form>

          <div className="lg:col-span-2">
            <GlassCard variant="subtle" className="p-8 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-4">Reach Us Directly</h3>
                <p className="font-body text-base text-text-muted mb-6">Prefer a conversation? Call or reach out to our team.</p>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-body text-base font-semibold text-text">Piyush Tiwari</p>
                    <p className="font-body text-sm text-text-muted">Founder</p>
                    <p className="font-body text-base text-text-muted mt-1">+91-8176060674</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-6">
                  <Phone className="text-primary shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-body text-base font-semibold text-text">UN Tiwari</p>
                    <p className="font-body text-sm text-text-muted">Trustee / Wellbeing Counsellor</p>
                    <p className="font-body text-base text-text-muted mt-1">+91-8299641211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-6">
                  <Mail className="text-primary shrink-0 mt-1" size={22} />
                  <span className="font-body text-base text-text-muted">hello@aatmiya.org</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

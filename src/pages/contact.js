"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
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
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 font-inter text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-aurora focus:border-aurora transition-colors";

  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <motion.div {...fadeUp} className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">Reach Out</h1>
          <p className="font-inter text-lg text-white/50">
            We&apos;d love to hear from you. Whether you want to volunteer, donate, partner, or just learn more — reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div>
              <label className="font-inter text-sm font-medium mb-1 block">Name <span className="text-aurora">*</span></label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
              {errors.name && <p className="font-inter text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="font-inter text-sm font-medium mb-1 block">Email <span className="text-aurora">*</span></label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
              {errors.email && <p className="font-inter text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="font-inter text-sm font-medium mb-1 block">Phone (optional)</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91 98765 43210" />
            </div>

            <div>
              <label className="font-inter text-sm font-medium mb-1 block">Subject <span className="text-aurora">*</span></label>
              <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass}>
                <option value="">I&apos;m interested in...</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Donation">Making a Donation</option>
                <option value="Partnering">Partnering</option>
                <option value="Services">Accessing Services</option>
                <option value="General">Something Else</option>
              </select>
              {errors.subject && <p className="font-inter text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="font-inter text-sm font-medium mb-1 block">Message <span className="text-aurora">*</span></label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className={`${inputClass} resize-y`} placeholder="Tell us how you'd like to help..." />
              {errors.message && <p className="font-inter text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <GlowButton variant="primary" type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
              {status === "loading" ? "Sending..." : "Send Message"} <Send size={16} className="ml-2" />
            </GlowButton>

            {status === "success" && (
              <div className="flex items-center gap-2 font-inter text-sm text-green-400 bg-green-400/10 px-4 py-3 rounded-xl border border-green-400/20">
                <CheckCircle size={16} /> Thank you! We&apos;ll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 font-inter text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl border border-red-400/20">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </div>
            )}
          </form>

          <div className="lg:col-span-2">
            <GlassCard variant="subtle" className="p-8 space-y-6">
              <div>
                <h3 className="font-inter text-sm font-semibold text-aurora tracking-wider uppercase mb-4">Reach Us Directly</h3>
                <p className="font-inter text-sm text-white/50 mb-4">Prefer a conversation? Call or reach out to our team.</p>

                <div className="flex items-start gap-4">
                  <Phone className="text-aurora shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-inter text-sm font-semibold">Piyush Tiwari</p>
                    <p className="font-inter text-xs text-white/40">Founder</p>
                    <p className="font-inter text-sm text-white/60 mt-1">+91-8176060674</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mt-6">
                  <Phone className="text-aurora shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-inter text-sm font-semibold">UN Tiwari</p>
                    <p className="font-inter text-xs text-white/40">Trustee / Wellbeing Counsellor</p>
                    <p className="font-inter text-sm text-white/60 mt-1">+91-8299641211</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

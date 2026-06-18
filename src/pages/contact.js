import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.length < 2) errs.name = "Name is required (min 2 characters)";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.subject || form.subject === "") errs.subject = "Please select a subject";
    if (!form.message || form.message.length < 10)
      errs.message = "Message is required (min 10 characters)";
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

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="section-spacing">
          <div className="max-content">
            <div className="mb-12">
              <h1 className="font-prata text-4xl md:text-5xl mb-4">Reach Out</h1>
              <p className="font-source-serif text-lg text-ink/60">
                We'd love to hear from you. Whether you want to volunteer, donate, partner, or just learn more — reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
                <div>
                  <label className="font-inter text-sm font-medium mb-1 block">
                    Name <span className="text-tamarind">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-ink/10 bg-cotton font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="font-inter text-xs text-tamarind mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-inter text-sm font-medium mb-1 block">
                    Email <span className="text-tamarind">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-ink/10 bg-cotton font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="font-inter text-xs text-tamarind mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-inter text-sm font-medium mb-1 block">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-ink/10 bg-cotton font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="font-inter text-sm font-medium mb-1 block">
                    Subject <span className="text-tamarind">*</span>
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-ink/10 bg-cotton font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    <option value="">I'm interested in...</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Donation">Making a Donation</option>
                    <option value="Partnering">Partnering</option>
                    <option value="Services">Accessing Services</option>
                    <option value="General">Something Else</option>
                  </select>
                  {errors.subject && <p className="font-inter text-xs text-tamarind mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="font-inter text-sm font-medium mb-1 block">
                    Message <span className="text-tamarind">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-ink/10 bg-cotton font-inter text-sm focus:outline-none focus:ring-2 focus:ring-amber resize-y"
                    placeholder="Tell us how you'd like to help..."
                  />
                  {errors.message && <p className="font-inter text-xs text-tamarind mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-walnut text-cotton font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-md hover:bg-tamarind transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 font-inter text-sm text-green-700 bg-green-50 px-4 py-3 rounded-md">
                    <CheckCircle size={16} />
                    Thank you! We'll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 font-inter text-sm text-tamarind bg-tamarind/5 px-4 py-3 rounded-md">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>

              <div className="lg:col-span-2">
                <div className="bg-cotton rounded-lg p-8 shadow-sm space-y-6">
                  <div>
                    <h3 className="font-inter text-sm font-semibold text-amber tracking-wider uppercase mb-4">Reach Us Directly</h3>
                    <p className="font-source-serif text-sm text-ink/60 mb-4">Prefer a conversation? Call or reach out to our team.</p>

                    <div className="flex items-start gap-4">
                      <Phone className="text-amber shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-inter text-sm font-semibold">Piyush Tiwari</p>
                        <p className="font-source-serif text-xs text-ink/50">Founder</p>
                        <p className="font-inter text-sm text-ink/70 mt-1">+91-8176060674</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mt-6">
                      <Phone className="text-amber shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-inter text-sm font-semibold">UN Tiwari</p>
                        <p className="font-source-serif text-xs text-ink/50">Trustee / Wellbeing Counsellor</p>
                        <p className="font-inter text-sm text-ink/70 mt-1">+91-8299641211</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

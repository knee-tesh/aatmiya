# Glassmorphism Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual overhaul from warm earthy tones to glassmorphism with canvas animated background, floating particles, and frosted glass UI.

**Architecture:** Canvas gradient mesh + particles as fixed background, shared Layout component with AnimatePresence page transitions, GlassCard/GlowButton reusable components, all pages rewritten with glassmorphism theme, vertical snap-scroll on fixed-height sections only.

**Tech Stack:** Next.js 16 (Pages Router), React 19, Tailwind CSS v4, Framer Motion 12, vanilla JS canvas

## Global Constraints

- Tailwind CSS v4 with `@theme` in globals.css (no tailwind.config.js)
- Fonts via `next/font/google` (Inter, JetBrains Mono — drop Prata, Source Serif 4)
- Framer Motion 12 for all animations
- Canvas animation: 30fps mobile (frame skip), 60fps desktop
- `backdrop-filter: blur(8px)` on mobile (< 768px), `blur(12px)` desktop
- Preserve skip-link, `:focus-visible` outline (aurora glow), `prefers-reduced-motion`
- `scroll-snap-type: y proximity` on `<main>` (not mandatory)
- Only Hero/CTA sections get `height: 100vh` + snap; content sections use `min-height: 100vh` without snap

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/styles/globals.css` | Modify | New theme tokens, glass utilities, accessibility |
| `src/utils/canvas.js` | Create | Canvas animation logic (gradient mesh + particles) |
| `src/components/GradientCanvas.jsx` | Create | Canvas React component |
| `src/components/GlassCard.jsx` | Create | Reusable glass card with variants |
| `src/components/GlowButton.jsx` | Create | Button with gradient hover + glow |
| `src/components/AnimatedCounter.jsx` | Create | Number count-up hook |
| `src/components/Layout.jsx` | Create | Shared shell (canvas, navbar, footer, AnimatePresence) |
| `src/components/Navbar.jsx` | Modify | Glass treatment, mobile drawer |
| `src/components/Footer.jsx` | Modify | Glass card, gradient top border |
| `src/data/services.js` | Create | Services data |
| `src/data/events.js` | Create | Events data |
| `src/data/team.js` | Create | Team data |
| `src/data/gallery.js` | Create | Gallery photos data |
| `src/pages/_app.js` | Modify | New fonts, wrap with Layout |
| `src/pages/index.js` | Rewrite | Glassmorphism home page |
| `src/pages/about.js` | Rewrite | Glassmorphism about page |
| `src/pages/services.js` | Rewrite | Glassmorphism services page |
| `src/pages/events.js` | Rewrite | Glassmorphism events page |
| `src/pages/contact.js` | Rewrite | Glassmorphism contact page |
| `src/components/SectionDivider.jsx` | Delete | No longer needed |

---

### Task 1: Update globals.css — Theme Tokens & Glass Utilities

**Files:**
- Modify: `src/styles/globals.css`

**Interfaces:**
- Produces: Tailwind theme tokens (`void`, `nebula`, `aurora`, `cyan`, `glass`, `glass-border`, `frost`, `mist`), glass CSS utilities, accessibility styles

- [ ] **Step 1: Replace entire globals.css**

```css
@import "tailwindcss";

@theme {
  --color-void: #0A0A1A;
  --color-nebula: #1A1A3E;
  --color-aurora: #6C63FF;
  --color-cyan: #00D4FF;
  --color-frost: rgba(255, 255, 255, 0.9);
  --color-mist: rgba(255, 255, 255, 0.6);

  --font-inter: Inter, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

@layer base {
  body {
    @apply bg-void text-frost font-inter;
    overflow-y: scroll;
  }

  h1 {
    @apply text-5xl font-semibold tracking-tight;
  }

  h2 {
    @apply text-4xl font-semibold tracking-tight;
  }

  h3 {
    @apply text-2xl font-semibold;
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
  }

  .glass-subtle {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
  }

  .glass-strong {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
  }

  .glass-nav {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .max-content {
    @apply max-w-6xl mx-auto px-4 md:px-8;
  }

  .snap-section {
    scroll-snap-align: start;
  }
}

@media (max-width: 768px) {
  .glass, .glass-subtle, .glass-strong, .glass-nav {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}

*:focus-visible {
  outline: 2px solid #6C63FF;
  outline-offset: 2px;
  box-shadow: 0 0 15px rgba(108, 99, 255, 0.4);
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 100;
  padding: 8px 16px;
  background: #6C63FF;
  color: #FFFFFF;
  font-family: Inter, sans-serif;
}

.skip-link:focus {
  top: 0;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

::selection {
  background: #6C63FF;
  color: #FFFFFF;
}
```

- [ ] **Step 2: Verify CSS compiles**

Run: `npm run build 2>&1 | head -20`
Expected: No CSS errors

- [ ] **Step 3: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat: glassmorphism theme tokens and utilities in globals.css"
```

---

### Task 2: Create Canvas Animation Utility

**Files:**
- Create: `src/utils/canvas.js`

**Interfaces:**
- Produces: `initCanvas(canvas)` → starts animation, returns `{ destroy(), setScrollProgress(n) }`

- [ ] **Step 1: Create canvas.js**

```js
const BLOB_COUNT = 5;
const PARTICLE_COUNT_DESKTOP = 50;
const PARTICLE_COUNT_MOBILE = 25;
const PARTICLE_MIN_OPACITY = 0.2;
const PARTICLE_MAX_OPACITY = 0.5;

const BLOB_COLORS = [
  "rgba(108, 99, 255, 0.4)",   // aurora
  "rgba(0, 212, 255, 0.3)",    // cyan
  "rgba(90, 50, 180, 0.35)",   // deep violet
  "rgba(108, 99, 255, 0.25)",  // aurora faint
  "rgba(0, 180, 220, 0.3)",    // cyan faint
];

function isMobile() {
  return window.innerWidth < 768;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function initCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  let animId;
  let scrollProgress = 0;
  let lastTime = 0;
  const targetFps = isMobile() ? 30 : 60;
  const frameInterval = 1000 / targetFps;

  const blobs = Array.from({ length: BLOB_COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    radius: 0.15 + Math.random() * 0.15,
    color: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
  }));

  const particleCount = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.0002 + Math.random() * 0.0004,
    opacity: PARTICLE_MIN_OPACITY + Math.random() * (PARTICLE_MAX_OPACITY - PARTICLE_MIN_OPACITY),
    size: 1 + Math.random() * 2,
  }));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawBlobs(time) {
    blobs.forEach((blob) => {
      blob.x += blob.vx + Math.sin(time * 0.0005 + blob.y * 10) * 0.00005;
      blob.y += blob.vy + Math.cos(time * 0.0003 + blob.x * 10) * 0.00005;

      // wrap around
      if (blob.x < -0.2) blob.x = 1.2;
      if (blob.x > 1.2) blob.x = -0.2;
      if (blob.y < -0.2) blob.y = 1.2;
      if (blob.y > 1.2) blob.y = -0.2;

      // parallax from scroll
      const parallaxY = blob.y + scrollProgress * 0.05;

      const cx = blob.x * canvas.width;
      const cy = parallaxY * canvas.height;
      const r = blob.radius * Math.min(canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawParticles() {
    particles.forEach((p) => {
      p.y -= p.speed;
      if (p.y < -0.05) {
        p.y = 1.05;
        p.x = Math.random();
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x * canvas.width, p.y * canvas.height, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function animate(time) {
    animId = requestAnimationFrame(animate);

    // frame skip for mobile
    if (time - lastTime < frameInterval) return;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlobs(time);
    drawParticles();
  }

  function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("scroll", onScroll, { passive: true });
  animId = requestAnimationFrame(animate);

  return {
    destroy() {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    },
    setScrollProgress(p) {
      scrollProgress = p;
    },
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/utils/canvas.js
git commit -m "feat: canvas animation utility (gradient mesh + particles)"
```

---

### Task 3: Create GradientCanvas Component

**Files:**
- Create: `src/components/GradientCanvas.jsx`

**Interfaces:**
- Consumes: `initCanvas` from `src/utils/canvas.js`
- Produces: `<GradientCanvas />` React component

- [ ] **Step 1: Create GradientCanvas.jsx**

```jsx
"use client";
import { useEffect, useRef } from "react";
import { initCanvas } from "@/utils/canvas";

export default function GradientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const controller = initCanvas(canvas);
    return () => controller.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GradientCanvas.jsx
git commit -m "feat: GradientCanvas component"
```

---

### Task 4: Create GlassCard Component

**Files:**
- Create: `src/components/GlassCard.jsx`

**Interfaces:**
- Produces: `<GlassCard variant="subtle|strong|interactive" className="" children />`

- [ ] **Step 1: Create GlassCard.jsx**

```jsx
import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  subtle: "glass-subtle",
  strong: "glass-strong",
  interactive: "glass-strong hover:bg-white/[0.18] hover:-translate-y-1 transition-all duration-300",
};

export default function GlassCard({
  variant = "strong",
  className,
  children,
  ...props
}) {
  return (
    <motion.div
      className={clsx(variants[variant], className)}
      whileHover={
        variant === "interactive"
          ? { boxShadow: "0 0 30px rgba(108, 99, 255, 0.15)" }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GlassCard.jsx
git commit -m "feat: GlassCard component with variants"
```

---

### Task 5: Create GlowButton Component

**Files:**
- Create: `src/components/GlowButton.jsx`

**Interfaces:**
- Produces: `<GlowButton variant="primary|outline" href? children />`

- [ ] **Step 1: Create GlowButton.jsx**

```jsx
import Link from "next/link";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center font-inter text-sm tracking-wider uppercase px-8 py-3 rounded-xl transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-to-r from-aurora to-cyan text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:scale-[1.02]",
  outline:
    "border border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 hover:scale-[1.02]",
};

export default function GlowButton({
  variant = "primary",
  href,
  className,
  children,
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
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GlowButton.jsx
git commit -m "feat: GlowButton component"
```

---

### Task 6: Create AnimatedCounter Hook

**Files:**
- Create: `src/components/AnimatedCounter.jsx`

**Interfaces:**
- Produces: `<AnimatedCounter target={200} suffix="+" duration={2000} />`

- [ ] **Step 1: Create AnimatedCounter.jsx**

```jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AnimatedCounter.jsx
git commit -m "feat: AnimatedCounter component"
```

---

### Task 7: Create Data Files

**Files:**
- Create: `src/data/services.js`
- Create: `src/data/events.js`
- Create: `src/data/team.js`
- Create: `src/data/gallery.js`

**Interfaces:**
- Produces: Exported arrays used by all pages

- [ ] **Step 1: Create services.js**

```js
export const services = [
  { icon: "🏥", title: "Health Checkup Camps", desc: "Free medical consultations with general physicians and surgeons to ensure regular health monitoring." },
  { icon: "♟️", title: "Games & Activities", desc: "Carrom, chess, card games, and group activities that keep minds sharp and spirits high." },
  { icon: "👥", title: "Community Meetups", desc: "Regular social gatherings where elders build bonds, share stories, and find companionship." },
  { icon: "🧘", title: "Wellness Sessions", desc: "Health talks, light exercise, and wellness workshops promoting active and healthy aging." },
  { icon: "💬", title: "Counselling", desc: "Emotional support and guidance from trained wellbeing counsellors who truly care." },
  { icon: "🏠", title: "Companionship", desc: "Home visits for elders who cannot travel, bringing company and care to their doorstep." },
];
```

- [ ] **Step 2: Create events.js**

```js
export const upcomingEvents = [
  { date: "JUL 15", title: "Free Health CheckUp Camp", desc: "We organise frequent free health checkup camps around Alambagh, Lucknow. We offer free medical consultation by General Physicians and Surgeons.", location: "Alambagh, Lucknow" },
  { date: "JUL 22", title: "Community MeetUp", desc: "We organise community meetups in Lucknow, encouraging the community to interact and build bonds.", location: "Lucknow" },
];

export const pastEvents = [
  { img: "/images/IMG-20260707-WA0002.png", title: "Health Camp — Alambagh", date: "March 2026" },
  { img: "/images/IMG-20260707-WA0003.png", title: "Community MeetUp — Lucknow", date: "February 2026" },
];
```

- [ ] **Step 3: Create team.js**

```js
export const team = [
  { name: "Piyush Tiwari", role: "Founder", initial: "P", phone: "+91-8176060674" },
  { name: "UN Tiwari", role: "Trustee / Wellbeing Counsellor", initial: "U", phone: "+91-8299641211" },
];
```

- [ ] **Step 4: Create gallery.js**

```js
export const galleryGroups = [
  { caption: "Moments of Joy", images: ["IMG-20260707-WA0000.png", "IMG-20260707-WA0001.jpg", "IMG-20260707-WA0002.png"] },
  { caption: "Community Gatherings", images: ["IMG-20260707-WA0003.png", "IMG-20260707-WA0004.jpg", "IMG-20260707-WA0005.png"] },
  { caption: "Health & Wellness", images: ["IMG-20260707-WA0006.png", "IMG-20260707-WA0007.png", "IMG-20260707-WA0008.png"] },
  { caption: "Celebrating Together", images: ["IMG-20260707-WA0009.png", "IMG-20260707-WA0010.png", "IMG-20260707-WA0011.png"] },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: extract services, events, team, gallery data to src/data/"
```

---

### Task 8: Create Layout Component

**Files:**
- Create: `src/components/Layout.jsx`

**Interfaces:**
- Consumes: `GradientCanvas`, `Navbar`, `Footer`
- Produces: `<Layout>` wrapping canvas + navbar + AnimatePresence + footer

- [ ] **Step 1: Create Layout.jsx**

```jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import GradientCanvas from "./GradientCanvas";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
};

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <GradientCanvas />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Layout.jsx
git commit -m "feat: Layout component with page transitions"
```

---

### Task 9: Refactor Navbar — Glass Treatment

**Files:**
- Modify: `src/components/Navbar.jsx`

**Interfaces:**
- Consumes: None
- Produces: Glass-styled navbar with mobile drawer

- [ ] **Step 1: Replace Navbar.jsx**

```jsx
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
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-aurora transition-transform duration-300 origin-left group-hover:w-full" />
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: glass navbar with scroll shrink and underline hover"
```

---

### Task 10: Refactor Footer — Glass Treatment

**Files:**
- Modify: `src/components/Footer.jsx`

**Interfaces:**
- Produces: Glass footer with aurora gradient top border

- [ ] **Step 1: Replace Footer.jsx**

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: glass footer with aurora gradient border"
```

---

### Task 11: Update _app.js — New Fonts & Layout

**Files:**
- Modify: `src/pages/_app.js`

**Interfaces:**
- Consumes: `Layout` from `src/components/Layout.jsx`
- Produces: Updated app wrapper

- [ ] **Step 1: Replace _app.js**

```js
import "@/styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aatmiya Foundation — Care That Comes From the Soul</title>
        <meta
          name="description"
          content="Aatmiya is a non-profit dedicated to providing elderly citizens with group activities, health services, and companionship across India."
        />
        <meta property="og:title" content="Aatmiya Foundation" />
        <meta property="og:description" content="Care That Comes From the Soul" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aatmiya Foundation",
              description: "Non-profit dedicated to providing elderly citizens with group activities, health services, and companionship.",
              url: "https://aatmiya.org",
              logo: "/images/logo.svg",
            }),
          }}
        />
      </Head>
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/_app.js
git commit -m "feat: new fonts and Layout wrapper in _app.js"
```

---

### Task 12: Rewrite Home Page (index.js)

**Files:**
- Modify: `src/pages/index.js`

**Interfaces:**
- Consumes: `GlassCard`, `GlowButton`, `AnimatedCounter` from components, `services`, `upcomingEvents` from data

- [ ] **Step 1: Replace index.js**

```jsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services } from "@/data/services";
import { upcomingEvents } from "@/data/events";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.3 },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center snap-section overflow-hidden">
      <Image
        src="/images/IMG-20260707-WA0010.png"
        alt="Elderly couple in Delhi park"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <div className="relative z-10 max-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight">
            Where every elder finds{" "}
            <span className="bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
              community, care & purpose
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            Aatmiya is a non-profit organisation dedicated to serving our elderly community with dignity, companionship, and compassionate care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <GlowButton variant="primary">Join Us as a Volunteer</GlowButton>
            <GlowButton variant="outline" href="/contact">Support Our Work</GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: 200, suffix: "+", label: "Elders Served" },
    { number: 12, suffix: "+", label: "Events Organized" },
    { number: 5, suffix: "+", label: "Services Offered" },
    { number: 8, suffix: "+", label: "Active Volunteers" },
  ];

  return (
    <section className="py-16 snap-section">
      <div className="max-content">
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" {...stagger}>
          {stats.map((stat, i) => (
            <GlassCard key={i} variant="subtle" className="p-8 text-center" {...cardFade}>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aurora to-cyan bg-clip-text text-transparent">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="font-inter text-sm tracking-wider uppercase text-white/50 mt-2">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              <Image
                src="/images/IMG-20260707-WA0001.jpg"
                alt="Grandparents with grandchild"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">About Aatmiya</p>
            <h2 className="text-4xl mb-6">Celebrating Our Elders</h2>
            <div className="text-base leading-relaxed space-y-4 text-white/60">
              <p>
                Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services.
              </p>
              <p>
                Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-4xl">What We Do</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          {...stagger}
        >
          {services.map((service, i) => (
            <GlassCard key={i} variant="interactive" className="p-8" {...cardFade}>
              <div className="w-12 h-12 rounded-full bg-aurora/10 flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-inter text-base font-semibold mb-2">{service.title}</h3>
              <p className="font-inter text-sm leading-relaxed text-white/50">{service.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">Stay Connected</p>
          <h2 className="text-4xl">Upcoming Events</h2>
        </div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...stagger}>
          {upcomingEvents.map((event, i) => (
            <GlassCard key={i} variant="strong" className="p-6 flex gap-4" {...cardFade}>
              <div className="bg-aurora/20 text-aurora rounded-xl px-4 py-3 text-center min-w-[72px] flex flex-col items-center justify-center border border-aurora/30">
                <span className="font-inter text-xs tracking-wider uppercase">{event.date.split(" ")[0]}</span>
                <span className="font-mono text-xl font-bold leading-none mt-1">{event.date.split(" ")[1]}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-inter text-base font-semibold mb-1">{event.title}</h3>
                <p className="font-inter text-sm text-white/50 mb-3">{event.desc}</p>
                <Link href="/events" className="font-inter text-xs tracking-wider uppercase text-aurora hover:text-cyan transition-colors">
                  Learn More →
                </Link>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <span className="text-7xl md:text-8xl text-aurora/30 leading-none block font-mono">&ldquo;</span>
            <blockquote className="text-xl md:text-2xl italic leading-relaxed -mt-4">
              Aatmiya gave me a new family. I look forward to every meetup — it&apos;s the highlight of my week.
            </blockquote>
            <p className="font-inter text-sm text-white/40 mt-6">— Mrs. Sharma, 72</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 snap-section">
      <div className="max-content text-center">
        <motion.div {...fadeUp}>
          <GlassCard variant="subtle" className="p-12 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">Every elder deserves dignity and companionship.</h2>
            <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
              Be a part of their story. Your time, skills, or contribution can make a world of difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton variant="primary">Get Involved</GlowButton>
              <GlowButton variant="outline">Make a Donation</GlowButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PurposeSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
```

- [ ] **Step 2: Verify home page renders**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.js
git commit -m "feat: glassmorphism home page"
```

---

### Task 13: Rewrite About Page

**Files:**
- Modify: `src/pages/about.js`

**Interfaces:**
- Consumes: `GlassCard`, `galleryGroups` from data, `team` from data

- [ ] **Step 1: Replace about.js**

```jsx
import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { galleryGroups } from "@/data/gallery";
import { team } from "@/data/team";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function BannerSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center snap-section overflow-hidden">
      <Image
        src="/images/IMG-20260707-WA0001.jpg"
        alt="About Aatmiya Foundation"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold">Our Story</h1>
    </section>
  );
}

function StorySpread() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="text-base leading-relaxed text-white/60 space-y-4">
            <p>Aatmiya was founded with a simple belief: every elder deserves companionship, dignity, and purpose.</p>
            <p>Aatmiya is a non-profit organisation dedicated to providing elderly citizens with compassionate companionship, engaging group activities, and accessible healthcare services.</p>
          </motion.div>
          <motion.div {...fadeUp} className="text-base leading-relaxed text-white/60 space-y-4">
            <p>Based in Lucknow, we organize regular health checkup camps, community meetups, games and activities, wellness sessions, and counselling services.</p>
            <p>Our name, Aatmiya, means &ldquo;of the soul&rdquo; — reflecting our commitment to care that comes from the heart.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <>
      {galleryGroups.map((group, gIdx) => (
        <section key={gIdx} className="py-16 md:py-24">
          <div className="max-content">
            <motion.h2
              className="text-2xl md:text-3xl text-center mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {group.caption}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.12 } } }}
            >
              {group.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden glass hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] transition-all duration-300"
                  variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                >
                  <Image
                    src={`/images/${img}`}
                    alt={`${group.caption} — ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}

function TeamSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <div className="text-center mb-12">
          <p className="font-inter text-sm tracking-wider uppercase text-aurora mb-3">The People</p>
          <h2 className="text-4xl">Our Team</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            >
              <GlassCard variant="subtle" className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 p-0">
                <span className="font-inter text-2xl font-semibold text-aurora">{person.initial}</span>
              </GlassCard>
              <h3 className="font-inter text-base font-semibold">{person.name}</h3>
              <p className="font-inter text-sm text-white/50 mb-1">{person.role}</p>
              <p className="font-inter text-xs text-white/30">{person.phone}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <BannerSection />
      <StorySpread />
      <GallerySection />
      <TeamSection />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/about.js
git commit -m "feat: glassmorphism about page with glass gallery cards"
```

---

### Task 14: Rewrite Services Page

**Files:**
- Modify: `src/pages/services.js`

**Interfaces:**
- Consumes: `GlassCard`, `services` from data

- [ ] **Step 1: Replace services.js**

```jsx
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-content">
        <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="font-inter text-lg text-white/50 mb-12 max-w-2xl">
          Comprehensive care and engagement programs designed for the dignity and well-being of every elder.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={cardVariants}>
              <GlassCard variant="interactive" className="p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-aurora/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-inter text-base font-semibold mb-2">{service.title}</h3>
                <p className="font-inter text-sm leading-relaxed text-white/50">{service.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/services.js
git commit -m "feat: glassmorphism services page"
```

---

### Task 15: Rewrite Events Page

**Files:**
- Modify: `src/pages/events.js`

**Interfaces:**
- Consumes: `GlassCard`, `upcomingEvents`, `pastEvents` from data

- [ ] **Step 1: Replace events.js**

```jsx
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { upcomingEvents, pastEvents } from "@/data/events";

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.3 },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Events() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="max-content">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">Moments That Matter</h1>
            <p className="font-inter text-lg text-white/50">Join us at our upcoming events — everyone is welcome.</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...stagger}>
            {upcomingEvents.map((event, i) => (
              <GlassCard key={i} variant="strong" className="p-6 flex gap-4" {...cardFade}>
                <div className="bg-aurora/20 text-aurora rounded-xl px-4 py-3 text-center min-w-[72px] flex flex-col items-center justify-center border border-aurora/30">
                  <span className="font-inter text-xs tracking-wider uppercase">{event.date.split(" ")[0]}</span>
                  <span className="font-mono text-xl font-bold leading-none mt-1">{event.date.split(" ")[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter text-base font-semibold mb-1">{event.title}</h3>
                  <p className="font-inter text-sm text-white/50 mb-2">{event.desc}</p>
                  <div className="flex items-center gap-2 text-white/40">
                    <MapPin size={13} />
                    <span className="font-inter text-xs">{event.location}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-content">
          <h2 className="text-3xl md:text-4xl mb-12">Past Events</h2>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" {...stagger}>
            {pastEvents.map((event, i) => (
              <GlassCard key={i} variant="strong" className="overflow-hidden" {...cardFade}>
                <div className="relative aspect-[16/9]">
                  <Image src={event.img} alt={event.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-inter text-base font-semibold">{event.title}</h3>
                  <p className="font-inter text-xs text-aurora mt-1">{event.date}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/events.js
git commit -m "feat: glassmorphism events page"
```

---

### Task 16: Rewrite Contact Page

**Files:**
- Modify: `src/pages/contact.js`

**Interfaces:**
- Consumes: `GlassCard`, `GlowButton`

- [ ] **Step 1: Replace contact.js**

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/contact.js
git commit -m "feat: glassmorphism contact page"
```

---

### Task 17: Cleanup — Delete SectionDivider, Remove Unused Packages

**Files:**
- Delete: `src/components/SectionDivider.jsx`
- Modify: `package.json` (remove unused deps)

**Interfaces:**
- None (cleanup only)

- [ ] **Step 1: Delete SectionDivider.jsx**

```bash
rm src/components/SectionDivider.jsx
```

- [ ] **Step 2: Remove unused packages**

```bash
npm uninstall @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot clsx tailwind-merge class-variance-authority
```

- [ ] **Step 3: Verify build still works**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: delete SectionDivider, remove unused shadcn deps"
```

---

### Task 18: Final Verification

- [ ] **Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, no errors

- [ ] **Step 2: Manual visual check**

Run: `npm run dev`
- Open http://localhost:3000
- Verify: canvas animating, glass cards visible, snap-scroll works on hero/CTA, all pages render
- Check mobile: blur reduced, particles fewer, no layout overflow
- Check keyboard: focus-visible shows aurora glow
- Check reduced motion: animations disabled

- [ ] **Step 3: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: visual polish after final review"
```

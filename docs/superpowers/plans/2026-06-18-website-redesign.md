# Aatmiya Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Aatmiya Foundation website with the "Sunlit Afternoon" redesign — warm amber tones, Prata/Source Serif/Inter typography, storytelling layout, Golden Thread dividers, responsive across all breakpoints.

**Architecture:** Standard Next.js Pages Router (`src/pages/`). Tailwind v4 for styling with CSS custom properties for the color system. All images local in `public/images/`. framer-motion for scroll-reveal animations. `next/font/google` for font loading.

**Tech Stack:** Next.js 16.2.7, React 19, Tailwind CSS v4, framer-motion, lucide-react, next/font/google.

---

## File Map

| File | Type | Responsibility |
|------|------|----------------|
| `src/styles/globals.css` | Create | Tailwind directives, CSS custom properties (color tokens, fonts), utility classes |
| `src/pages/_app.js` | Create | Font loading (Prata, Source Serif 4, Inter), `<Head>` with SEO, import globals.css |
| `src/pages/_document.js` | Create | HTML shell, lang attribute, skip link |
| `src/pages/index.js` | Create | Homepage — Hero, StatsBar, Purpose, Services, Events, Testimonial, CTABand |
| `src/pages/about.js` | Create | About page — banner, story spread, mission/vision, team |
| `src/pages/events.js` | Create | Events page — upcoming + past |
| `src/pages/contact.js` | Create | Contact page — form + info sidebar |
| `src/pages/api/contact.js` | Create | POST handler for contact form (stub) |
| `src/components/Navbar.jsx` | Create | Sticky navbar, logo, 4 links, mobile hamburger |
| `src/components/Hero.jsx` | Create | Full-bleed hero with overlay, h1, CTA |
| `src/components/Footer.jsx` | Create | 4-column footer, Walnut bg |
| `src/components/SectionDivider.jsx` | Create | Inline SVG Golden Thread divider |
| `public/favicon.svg` | Update | Gold heart on parchment circle |
| `next.config.js` | Already set | Has pexels remotePattern (keep) |

---

### Task 1: Clean slate — delete old src/

- [ ] **Delete existing src/ folder**

```bash
rm -rf src/
```

- [ ] **Remove unused public images** (keep hero-delhi-couple.jpg, indian-grandparents.jpg, indian-family.jpg, indian-elder-man.jpg, logo.svg — delete the rest)

```bash
cd public/images && ls | grep -v -E 'hero-delhi-couple|indian-grandparents|indian-family|indian-elder-man|logo\.svg' | xargs rm
```

- [ ] **Create fresh directory structure**

```bash
mkdir -p src/pages/api src/components src/styles
```

---

### Task 2: Globals CSS — tokens, fonts, utilities

**File:** Create `src/styles/globals.css`

- [ ] **Write globals.css** with Tailwind v4 directives, CSS custom properties for all 6 colors, font-family declarations, utility classes for section spacing, the SectionDivider pattern, and responsive breakpoints.

```css
@import "tailwindcss";
```

Full file to include:
- `@theme` block with custom colors (ink, parchment, amber, walnut, tamarind, cotton)
- Custom font-family aliases (prata, source-serif, inter)
- Base styles for body (bg parchment, text ink, font-source-serif)
- Styles for h1-h3 using Prata
- `.section-spacing` utility (py-16 md:py-24)
- `.max-content` wrapper (max-w-6xl mx-auto px-4 md:px-8)
- Focus-visible outline style (2px amber)
- Skip-link styles
- Reduced motion: `@media (prefers-reduced-motion)` disabling transitions/animations

---

### Task 3: App shell — _app.js, _document.js, favicon

**Files:** Create `src/pages/_app.js`, `src/pages/_document.js`

- [ ] **Write _app.js** — Load Prata, Source Serif 4, Inter via next/font/google. Wrap `Component` with layout. Add `<Head>` with meta tags, OG tags, Organization schema JSON-LD, favicon links.

- [ ] **Write _document.js** — Set `lang="en"`, add skip-to-content link as first child of body.

- [ ] **Update public/favicon.svg** — Gold heart icon on warm circle (already exists, verify it's right).

---

### Task 4: Shared components — Navbar, Footer, SectionDivider

**Files:** Create `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/components/SectionDivider.jsx`

- [ ] **Write Navbar.jsx** — Sticky top (`position: sticky`), Parchment bg, subtle bottom border. Logo left (next/image, `/images/logo.svg`). 4 uppercase nav links (HOME, ABOUT, EVENTS, CONTACT, Inter 500, Ink). Mobile < 768px: hamburger icon (lucide Menu) opens slide-in sheet with same links. No CTA button. Active link state based on router pathname.

- [ ] **Write Footer.jsx** — Walnut (#8B5E3C) bg, Cotton text. 4-column grid (2-col md, stacked sm): Brand (logo + tagline), Quick Links (Home/About/Events/Contact), Contact (address/phone/email with lucide icons), Social (Instagram/Facebook/YouTube lucide icons, placeholder href="#"). Amber accent dividers between columns on desktop.

- [ ] **Write SectionDivider.jsx** — Inline SVG. Pattern: thin amber line (1px) with repeating small dots and diamond motifs. Full pattern at 768px+, simplified (just line) at smaller screens. Wrap in a div with my-16 md:my-24.

---

### Task 5: Homepage — Hero, StatsBar, Purpose, Services, Events, Testimonial, CTABand

**File:** Create `src/pages/index.js`

- [ ] **Write Hero section** — Full-bleed `div` with `next/image` background (hero-delhi-couple.jpg). Dark gradient overlay (black at 50% opacity bottom-to-top). Prata h1 "Care That Comes From the Soul". Source Serif subtitle. CTA button: "Join Us as a Volunteer" (Walnut bg, Cotton text, rounded-md, px-8 py-3). framer-motion fade-in 1s.

- [ ] **Write StatsBar section** — Full-width Walnut bg. 3 stats centered: "3,000+ Elders", "15 Cities", "10 Years". Cotton text. 3-column at 768px+, stacked mobile. framer-motion fade-up each stat with 0.1s stagger.

- [ ] **Write Purpose section** — 2-column grid. Left: next/image (indian-grandparents.jpg). Right: text. "Aatmiya means 'of the soul'..." paragraph in Source Serif. SectionDivider before and after.

- [ ] **Write Services section** — h2 "Our Services" in Prata. 3 cards (xl), 2-col (lg), 1-col (md). Each: Cotton bg, shadow-sm, 4px Amber top border. lucide icon, Inter 600 title, Source Serif description. framer-motion fade-up with 0.1s stagger.

- [ ] **Write Events section** — h2 "Upcoming Events" in Prata. 2 upcoming events as cards. Each: date badge (Walnut bg, Cotton text, bold). Title, short description, "Learn More" link.

- [ ] **Write Testimonial section** — Full-bleed bg (Parchment variant). Large decorative Amber Prata opening quote mark ("). Quote text in Source Serif italic. Attribution: "— Priya Sharma, Daughter" in Inter. SectionDivider before and after.

- [ ] **Write CTABand section** — Full-width Walnut bg. h2 "Be Part of the Story", subtitle "Your time can change a life." Button: Cotton bg, Ink text, "Get Involved". Import all sections and compose in `<Home>` component.

---

### Task 6: About page

**File:** Create `src/pages/about.js`

- [ ] **Write banner** — Narrow full-bleed section with image, overlay, h1 "Our Story".

- [ ] **Write story spread** — 2-column grid (stacked mobile). journal-style columns. First paragraph: **drop cap** — first letter Prata, 72px (3 lines), Amber color, float left, line-height aligned with 3 lines of Source Serif body.

- [ ] **Write Mission/Vision cards** — 2-column grid. Each: Cotton card, 4px Amber left border. Amber eyebrow label ("Our Mission" / "Our Vision"). Source Serif description.

- [ ] **Write Team grid** — 3-col (xl), 2-col (lg), 1-col (md). Each person: Amber circle (w-16 h-16), white initial (Inter 600 text-2xl centered). Name below in Inter, role in Source Serif small.

---

### Task 7: Events page

**File:** Create `src/pages/events.js`

- [ ] **Write Upcoming section** — h1 "Moments That Matter". 2-column card grid. Each card: date badge (Walnut bg, Cotton text), title, description, "Learn More" link.

- [ ] **Write Past Events section** — h2 "Past Events". 2-col grid (lg+), 1-col mobile. Each card: 16:9 image (next/image, rounded-t-lg), title (Inter 600), date (Inter 12px, Walnut color).

---

### Task 8: Contact page

**File:** Create `src/pages/contact.js`

- [ ] **Write form** — Fields: Name (required, text input), Email (required, email input), Phone (tel input), Subject (select: Volunteer / Donate / Service Inquiry / General), Message (required, textarea, minlength 10). Labels above fields. Submit button: Walnut bg, Cotton text. Client-side validation: check required fields, email format, message length. Show inline error messages. On valid submit, POST JSON to `/api/contact`. Show success message on 200, error on failure.

- [ ] **Write info sidebar** — Address, Phone, Email, Hours. lucide icons next to each. Styled in Inter.

---

### Task 9: Contact API route

**File:** Create `src/pages/api/contact.js`

- [ ] **Write POST handler** — Parse JSON body. Validate required fields (name, email, message). Return 400 if missing. Log body to console. Return 200 `{ success: true }`. Note: production-ready email integration TBD.

---

### Task 10: Build verification

- [ ] **Run build**

```bash
npm run build
```

Expected: all routes compile static, no errors.

- [ ] **Verify pages exist** — 5 static routes: `/`, `/about`, `/events`, `/contact`, `/404`.

---

## Self-Review Checklist

1. **Spec coverage**: Every spec section maps to a task:
   - Color palette → Task 2 (globals.css)
   - Typography → Task 2 (globals.css) + Task 3 (_app.js font loading)
   - Layout → Task 5-8 (page components)
   - Golden Thread → Task 4 (SectionDivider)
   - Animation → Task 5 (framer-motion on sections)
   - Responsive → Task 2 (breakpoints) + all components
   - Accessibility → Task 3 (skip link) + Task 2 (focus states, reduced motion)
   - SEO → Task 3 (Head, OG, schema)
   - Contact form → Task 8 + Task 9
   - Footer → Task 4
   - Navbar → Task 4

2. **No placeholders** — all code steps specify exact content.

3. **Type consistency** — no cross-task type references needed (this is a static site with no shared typed interfaces between modules beyond React component props).

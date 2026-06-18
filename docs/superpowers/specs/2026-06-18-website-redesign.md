# Aatmiya Foundation Website — Redesign Spec

> Created: June 18, 2026
> Status: Approved design direction — all gaps resolved

## Overview

Complete redesign of the Aatmiya Foundation website (elderly care NGO). Four pages: Home, About, Events, Contact. Built with Next.js 16.2.7 (Pages Router — `/src/pages/`), React 19, Tailwind CSS v4.

---

## Design Direction: "Sunlit Afternoon"

Warm, golden, intimate — like a cup of chai with a loved one. Nostalgic, deeply Indian, quietly majestic.

| Quality | Description |
|---------|-------------|
| Temperature | Warm, amber-lit |
| Texture | Cozy, soft, lived-in |
| Pace | Slow, deliberate, scrolls like a journal |
| Cultural reference | Vintage Indian photo albums, handloom textiles, old family homes |

---

## Color Palette

| Role | Name | Hex | Usage | Contrast |
|------|------|-----|-------|----------|
| Primary text | Ink | `#1A1A1A` | Body copy, headings | 15.6:1 on Parchment |
| Page background | Parchment | `#FBF6ED` | Main page background | — |
| Primary accent | Amber | `#D4A853` | Dividers, borders, decorative quote marks, large decorative elements only — never as text background | Decorative only |
| Surface accent | Walnut | `#8B5E3C` | Button backgrounds, stats bar, date badges, footer bg, CTA band | 5.5:1 on Parchment |
| Deep accent | Tamarind | `#6B3A2A` | Hover states, strong emphasis | 7:1 on Parchment |
| Card background | Cotton | `#FFFFFF` | Card backgrounds, form fields | — |

Accessibility rules:
- Amber (#D4A853) is decorative-only — never used as a text or button background
- All solid-color backgrounds that need text over them: use Walnut (#8B5E3C)
- Buttons: Walnut bg, Cotton text
- Interactive text: Ink or Walnut only
- The Golden Thread divider, quote marks, card borders, and avatar circles use Amber as thin lines/shapes against Parchment/Cotton — sufficient contrast for non-text elements

---

## Typography

| Role | Typeface | Weights | Element | Size |
|------|----------|---------|---------|------|
| Display | Prata | 400 | h1 | 48px |
| Display | Prata | 400 | h2 | 36px |
| Display | Prata | 400 | h3 | 24px |
| Body | Source Serif 4 | 400 | Body text, section paragraphs | 16px |
| Body | Source Serif 4 | 600 | Bold emphasis | 16px |
| Intro | Source Serif 4 | 400 | Section intros, subtitles | 18px |
| Utility | Inter | 500 | Nav links, buttons | 14px |
| Utility | Inter | 400 | Captions, labels, utility text | 12px |
| Utility | Inter | 600 | Card titles | 16px |

All loaded via `next/font/google`.

---

## Layout: "The Storyteller"

A scrolling narrative with journal-like sections. Each page feels like turning pages in a photo album.

### URL Structure

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Events | `/events` |
| Contact | `/contact` |

### Responsive Breakpoints

| Breakpoint | Width | Layout rules |
|------------|-------|--------------|
| Mobile | < 768px | Single column, stacked. Reduced padding (16px). Hero text centered over image. |
| Tablet | 768–1023px | 2-column grids activate. |
| Desktop | 1024px+ | 3-column grids activate. Max content width 1200px, centered. |

Collapse rules:
- 3-column grids → 2-column at < 1024px → 1-column at < 768px
- 2-column splits → stacked at < 768px
- Golden Thread divider: full pattern at 768px+, simplified thin line at < 768px
- Navbar: horizontal at 768px+, hamburger sheet menu at < 768px
- Full-bleed hero remains full-bleed at all sizes; text overlay bottom-left on desktop, centered on mobile

---

## Pages

### Homepage (7 sections, top to bottom)

1. **Hero** — Full-bleed photo (Indian elderly couple), dark overlay. Prata h1 "Care That Comes From the Soul". Source Serif subtitle. Single CTA: "Join Us as a Volunteer" (Walnut bg, Cotton text). Fade-in 1s.
2. **Stats bar** — Solid Walnut (#8B5E3C) background, Cotton text. 3 stats: "3,000+ Elders" / "15 Cities" / "10 Years". 3-column at 768px+, stacked on mobile.
3. **Purpose** — 2-column: image left, text right. Stacked on mobile (image first). Source Serif paragraph. "Aatmiya means 'of the soul'..."
4. **Services** — 3 cards (xl), 2-col (lg), 1-col (md). Cotton bg, subtle shadow, 4px Amber top border. Icon (lucide), Inter 600 title, Source Serif description.
5. **Events** — 2 upcoming events as timeline cards. Date badge: Walnut bg, Cotton text. Title, description, "Learn More" link.
6. **Testimonial** — Single pull quote. Large decorative Amber Prata opening quote mark. Source Serif italic quote text. Attribution: "— Priya Sharma, Daughter" in Inter.
7. **CTA Band** — Solid Walnut (#8B5E3C) bg, Cotton text. "Be Part of the Story" (h2). "Your time can change a life." Button: Cotton bg, Ink text.

### About Page

1. Full-bleed narrow photo banner with "Our Story" (h1, Prata) overlay.
2. Two-column journal-style text spread (stacked on mobile). **Drop cap**: first letter Prata, 72px (3 lines), Amber (#D4A853), float left, line-height matching 3 lines of Source Serif 16px body text.
3. Mission / Vision: 2 cards side by side. Cotton bg, 4px Amber left border. Amber eyebrow label. Source Serif body.
4. Team grid: 3-col (xl), 2-col (lg), 1-col (md). Each: Amber circle (bg), white initial (Inter 600). Name below (Inter), role (Source Serif).

### Events Page

1. **Upcoming events** — h1 "Moments That Matter" (Prata). 2-column card grid. Each: date badge (Walnut bg, Cotton text, bold), title, description, CTA.
2. **Past events** — 2-col grid (lg+), 1-col (mobile). Each card: 16:9 image (rounded top), title (Inter 600), date (Inter, 12px, Walnut).

### Contact Page

1. h1 "Reach Out" (Prata). 2-column: form (wider) + info sidebar. Stacked on mobile.
2. **Form fields**: Name (required), Email (required, email validation), Phone, Subject (dropdown), Message (required, min 10 chars). Submit: Walnut bg, Cotton text.
3. **Form submission**: POST to `/api/contact`. Client-side validation. **Production requirement**: API route must integrate an email service (nodemailer/SMTP or SendGrid/Resend) — console.log stub is for build only, must be replaced before deployment.
4. **Info sidebar**: Address, Phone, Email, Hours with lucide icons.

---

## Signature Element: "The Golden Thread"

Between every section on every page, an amber block-print divider — the signature element.

- Inline SVG component (`SectionDivider`)
- Full pattern (dots + diamond motifs) at 768px+, simplified line at < 768px
- Height: ~4px. Width: 100% of content area
- Zero performance cost

Amber is a cohesive accent system across the design — it appears in card borders, avatar circles, quote marks, and dividers. The Golden Thread is the *signature* element, the most distinctive and recurring expression of that system.

---

## Animation

| Element | Animation | Duration | Easing | Reduced motion |
|---------|-----------|----------|--------|----------------|
| Section reveals | Fade-up: translateY(24px)→0, opacity 0→1 | 0.6s | ease-out | No animation |
| Stagger (multi-child) | 0.1s delay between children | — | — | No stagger |
| Hero text | Fade-in: opacity 0→1 | 1s | ease-out | Instant show |

No parallax, no complex sequences.

---

## Technical Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2.7 (Pages Router — `/src/pages/`) |
| React | 19.2.x |
| Styling | Tailwind CSS v4 with CSS custom properties |
| Fonts | next/font/google (Prata, Source Serif 4, Inter) |
| Icons | lucide-react |
| Animation | framer-motion (scroll-triggered reveals) |
| Images | Next.js Image, local files in `/public/images/` |
| SEO | `<Head>` from `next/head` (Pages Router) — meta tags, OG, Organization schema |

---

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | All text meets WCAG AA. Amber (#D4A853) is decorative-only, never a text background. |
| Focus states | 2px Amber outline on all interactive elements |
| Skip link | "Skip to content" link, visible on focus |
| ARIA | Nav landmarks, form labels, image alt text |
| Reduced motion | framer-motion disabled via `prefers-reduced-motion` |
| Tap targets | Min 44x44px on mobile |

---

## SEO & Metadata

```html
<title>Aatmiya Foundation — Care That Comes From the Soul</title>
<meta name="description" content="Aatmiya is a non-profit dedicated to providing elderly citizens with group activities, health services, and companionship across India." />
```

Page titles:
- Home: "Aatmiya Foundation — Care That Comes From the Soul"
- About: "Our Story — Aatmiya Foundation"
- Events: "Moments That Matter — Aatmiya Foundation"
- Contact: "Reach Out — Aatmiya Foundation"

Open Graph: og:title, og:description, og:type (website), og:url, og:image (`/images/og-image.jpg` — must be created from existing hero image or a dedicated graphic).

Structured data: Organization schema with name, description, url, logo, contactPoint, address.

---

## Footer

4-column layout (2-col at md, stacked at sm):

| Column | Content |
|--------|---------|
| Brand | Aatmiya logo, tagline |
| Quick Links | Home, About, Events, Contact |
| Contact | Address, Phone, Email |
| Social | Instagram, Facebook, YouTube (lucide icons, placeholder links) |

Walnut (#8B5E3C) bg, Cotton text. Amber accent on dividers. No newsletter signup.

---

## Navbar

- Logo left (existing SVG)
- 4 uppercase nav links: HOME / ABOUT / EVENTS / CONTACT (Inter 500, Ink text)
- No CTA button — intentional. Primary conversion is hero CTA + CTA band.
- Mobile (< 768px): hamburger → slide-in sheet menu
- Sticky top, Parchment bg, subtle bottom border

---

## Team Avatars

Initial-only circles — intentional design choice, not placeholder. Amber circle background, white first initial (Inter 600). Name below in Inter, role in Source Serif. Can swap to photos later.

---

## Images

All in `/public/images/`, used via Next.js `Image` component:

| File | Page | Description | Status |
|------|------|-------------|--------|
| hero-delhi-couple.jpg | Home (Hero) | Indian elderly couple in Delhi park | Existing |
| indian-grandparents.jpg | Home (Purpose) | Grandparents holding grandchild | Existing |
| indian-family.jpg | Events | Indian family in traditional attire | Existing |
| indian-elder-man.jpg | Events thumbnail | Elderly Rajasthani man portrait | Existing |
| og-image.jpg | All (OG) | Open Graph share image | Needs creation |

All existing images from Pexels. OG image needs to be produced (1200x630, from hero image or dedicated design).

---

## Implementation Checklist

- [ ] Delete existing `src/` folder
- [ ] Scaffold fresh Next.js app structure in `src/`
- [ ] `globals.css` — color tokens, font loading, utility classes
- [ ] `_app.js` — font loading via next/font, global Head with SEO
- [ ] `SectionDivider` component (inline SVG Golden Thread)
- [ ] `Navbar` — logo, 4 links, hamburger sheet, sticky
- [ ] `Footer` — 4 columns, Walnut bg, social icons
- [ ] `pages/index.js` — Hero, StatsBar, Purpose, Services, Events, Testimonial, CTABand
- [ ] `pages/about.js` — Banner, story spread, mission/vision, team grid
- [ ] `pages/events.js` — Upcoming cards, past grid
- [ ] `pages/contact.js` — Form with validation, info sidebar
- [ ] `pages/api/contact.js` — API route stub (POST handler)
- [ ] `public/favicon.svg` — Gold heart on parchment circle
- [ ] Build verification: `npm run build` passes

# Glassmorphism Redesign — Design Spec

## Overview

Complete visual overhaul of the Aatmiya Foundation website from warm earthy tones to a modern glassmorphism aesthetic with canvas-based animated background, floating particles, and frosted glass UI components.

## Tech Stack (unchanged)

- Next.js 16 (Pages Router)
- React 19
- Tailwind CSS v4
- Framer Motion 12
- Vanilla JS for canvas animation

## Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `void` | `#0A0A1A` | Primary background (near-black blue) |
| `nebula` | `#1A1A3E` | Secondary background (deep indigo) |
| `aurora` | `#6C63FF` | Primary accent (electric purple) |
| `cyan` | `#00D4FF` | Secondary accent (bright cyan) |
| `glass` | `rgba(255, 255, 255, 0.08)` | Glass card background |
| `glass-border` | `rgba(255, 255, 255, 0.15)` | Glass card borders |
| `frost` | `rgba(255, 255, 255, 0.9)` | Primary text |
| `mist` | `rgba(255, 255, 255, 0.6)` | Secondary text |

## Typography

- **Headings:** Inter (variable weight) — clean, modern, geometric
- **Body:** Inter (lighter weights) — consistency
- **Accent/Stats:** JetBrains Mono (monospace) — techy feel for numbers
- Drop Prata and Source Serif 4 (too traditional)

## Background System

### Canvas Layer (fixed, z-0)
- Full-viewport `<canvas>` behind all content
- **Gradient mesh:** 4-5 large blurred circles (aurora purple, cyan, deep violet) orbiting slowly via `requestAnimationFrame`
- **Particles:** 40-60 small floating dots (white, 0.2-0.5 opacity) drifting upward, resetting on exit
- Animation pauses on hidden tab (`document.visibilityState`)
- 30fps on mobile (frame skip), 60fps on desktop
- Particles use simple `ctx.arc()` — no physics, no trails
- `will-change` not used on canvas (meaningless for canvas-drawn elements; applies to glass cards only)

### Fallback
- Static radial gradient for degraded environments

## Glass Card System

### Base Glass Card
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);
border-radius: 16px;
```

### Mobile Optimization
- `backdrop-filter: blur(8px)` on screens < 768px (reduced blur over animating canvas)
- Reduce particle count to 20-30 on mobile

### Variants
- **Subtle:** `rgba(255, 255, 255, 0.05)` — stat counters, testimonials
- **Strong:** `rgba(255, 255, 255, 0.12)` — service cards, event cards
- **Interactive:** Strong + hover `rgba(255, 255, 255, 0.18)` + `translateY(-4px)` + glow

### Glow Effect (hover)
`box-shadow: 0 0 30px rgba(108, 99, 255, 0.15)`

### Section Containers
- Each 100vh section uses glass card wrapper for content areas
- Hero and CTA sections are full-bleed with glass only on inner content block

### About Gallery (supersedes 2026-07-07-about-gallery-split-scroll.md)
- 12 community photos displayed in a glass-card grid (3 columns desktop, 2 tablet, 1 mobile)
- Each photo wrapped in a subtle glass card with `border-radius: 12px` and `overflow: hidden`
- Hover: scale 1.03 + aurora glow border
- Hero photo and purpose image: full-width glass card with gradient overlay (same treatment as hero section)
- Old alternating bg-cotton/bg-parchment groups and font-prata captions are dropped (incompatible with glassmorphism theme)

## Layout

### Shared Layout Component
- Extract `<Layout>` wrapping all pages: canvas bg + Navbar + Footer + `<main>`
- Page transitions via framer-motion `AnimatePresence` — fade + slide-up between routes

### Navbar
- Fixed top, glass background (`rgba(255, 255, 255, 0.05)`) + `backdrop-filter: blur(20px)`
- Logo left, nav links right
- Links: frosted text, aurora purple on hover with underline glow
- Mobile: glass overlay drawer from right
- Shrinks slightly on scroll (padding reduction)

### Footer
- Glass card, same subtle treatment
- Aurora gradient border at top
- Social icons with hover glow

### Section Layout
- `<main>` gets `scroll-snap-type: y proximity` (not mandatory — avoids trapping overflow content)
- Hero and CTA sections: `height: 100vh` + `scroll-snap-align: start` (exact fit, safe to snap)
- Content-heavy sections (services, about gallery, events): `min-height: 100vh` without snap (allows scrolling within)
- Content centered vertically and horizontally within each section

## Animations & Transitions

### Scroll Reveals (framer-motion)
- Sections: fade in + scale 0.98 → 1
- Cards: stagger in (0.1s delay) with fade-up (y: 30 → 0)
- Stats: count-up using simple counter hook

### Hover Micro-interactions
- Glass cards: `translateY(-4px)` + aurora glow shadow
- Buttons: scale 1.02 + background shift (aurora → cyan gradient)
- Nav links: underline slides in from left (`scaleX`)

### Page Transitions (AnimatePresence)
- Exit: fade out + scale 0.98
- Enter: fade in + slide up (y: 20)
- Duration: 0.3s ease-out

### Canvas Parallax
- Gradient blobs shift ~5% based on scroll position
- Particles continue during scroll

### Reduced Motion
- Respect `prefers-reduced-motion`: disable canvas, disable scroll reveals, keep hover states only

## Component Inventory

### New Components
- `<Layout>` — shared shell (canvas, navbar, footer, AnimatePresence)
- `<GlassCard>` — reusable glass card with variants
- `<GradientCanvas>` — canvas background (mesh + particles)
- `<GlowButton>` — button with gradient hover + glow
- `<AnimatedCounter>` — number count-up hook

### Refactored Components
- `Navbar` — glass treatment, mobile drawer
- `Footer` — glass card, gradient top border
- All page sections — use GlassCard and GlowButton

### Removed
- `SectionDivider.jsx` — glass cards provide visual separation
- Unused Radix packages, clsx, tailwind-merge, class-variance-authority

### Data Extraction
- Move hardcoded services, events, team data to `src/data/` files

## File Changes

### Modify
- `src/pages/_app.js` — wrap with Layout
- `src/pages/index.js` — glassmorphism sections
- `src/pages/about.js` — glassmorphism sections
- `src/pages/services.js` — glassmorphism sections
- `src/pages/events.js` — glassmorphism sections
- `src/pages/contact.js` — glassmorphism sections
- `src/styles/globals.css` — new theme tokens, glass utilities
- `src/components/Navbar.jsx` — glass treatment
- `src/components/Footer.jsx` — glass treatment

### Create
- `src/components/Layout.jsx`
- `src/components/GlassCard.jsx`
- `src/components/GradientCanvas.jsx`
- `src/components/GlowButton.jsx`
- `src/components/AnimatedCounter.jsx`
- `src/utils/canvas.js` (canvas animation logic)
- `src/data/services.js`
- `src/data/events.js`
- `src/data/team.js`
- `src/data/gallery.js` (community photos + hero/purpose images)

### Delete
- `src/components/SectionDivider.jsx`

### Dependencies
- Remove: `@radix-ui/react-avatar`, `@radix-ui/react-dialog`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `clsx`, `tailwind-merge`, `class-variance-authority`
- Fonts: Load JetBrains Mono via `next/font/google` in `_app.js` (no npm package needed)

## Accessibility

- Preserve existing skip-link (`_document.js`) — update styles for dark background
- Preserve `:focus-visible` outline from globals.css — restyle with aurora purple glow for visibility on dark bg
- Keep `@media (prefers-reduced-motion: reduce)` block — disable canvas, scroll reveals; keep hover states
- All glass cards maintain sufficient contrast ratios (frost on void = 14.5:1)

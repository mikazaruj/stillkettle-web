# StillKettle Design System

A modern, clean SaaS design system with vibrant gradient accents and bold typography.

---

## Design Philosophy

**Aesthetic Direction:** Clean Gradient SaaS
**Tone:** Professional yet approachable, modern and trustworthy
**Key Differentiator:** Vibrant sunset gradients against stark black/white creates visual pop without feeling chaotic

### Core Principles
1. **Contrast is king** - Black and white dominance with strategic color bursts
2. **Bold typography** - Large, confident headlines that command attention
3. **Playful accents** - Soft gradients and organic shapes add warmth
4. **Generous whitespace** - Let elements breathe, avoid clutter

---

## Color Palette

### CSS Variables

```css
:root {
  /* Base Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-off-white: #FAFAFA;

  /* Neutral Scale */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Primary Gradient (Sunset) */
  --color-magenta: #E879F9;
  --color-pink: #F472B6;
  --color-orange: #FB923C;
  --color-amber: #FBBF24;
  --color-yellow: #FDE047;

  /* Decorative (Soft Lavender) */
  --color-lavender-100: #F3E8FF;
  --color-lavender-200: #E9D5FF;
  --color-lavender-300: #D8B4FE;
  --color-lavender-400: #C084FC;

  /* Semantic */
  --color-success: #10B981;
  --color-success-light: #D1FAE5;
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--color-magenta) 0%, var(--color-orange) 50%, var(--color-yellow) 100%);
  --gradient-sunset: linear-gradient(180deg, var(--color-pink) 0%, var(--color-orange) 50%, var(--color-amber) 100%);
  --gradient-soft: linear-gradient(135deg, var(--color-lavender-200) 0%, var(--color-lavender-100) 100%);
}
```

### Tailwind Config Extension

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'sk': {
          'black': '#000000',
          'white': '#FFFFFF',
          'magenta': '#E879F9',
          'pink': '#F472B6',
          'orange': '#FB923C',
          'amber': '#FBBF24',
          'yellow': '#FDE047',
          'lavender': {
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
          }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E879F9 0%, #FB923C 50%, #FDE047 100%)',
        'gradient-sunset': 'linear-gradient(180deg, #F472B6 0%, #FB923C 50%, #FBBF24 100%)',
        'gradient-soft': 'linear-gradient(135deg, #E9D5FF 0%, #F3E8FF 100%)',
      }
    }
  }
}
```

---

## Typography

### Font Stack

**Primary (Headlines):** [Satoshi](https://www.fontshare.com/fonts/satoshi) or [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
**Secondary (Body):** [Inter](https://fonts.google.com/specimen/Inter) or Plus Jakarta Sans

```css
:root {
  --font-display: 'Satoshi', 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

### Type Scale

```css
:root {
  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */
  --text-8xl: 6rem;        /* 96px */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}
```

### Typography Classes

```css
/* Hero Headline - Large, bold, stacked */
.headline-hero {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-black);
}

/* Section Headline */
.headline-section {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-black);
}

/* Subheadline */
.subheadline {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--color-gray-600);
}

/* Body */
.body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--color-gray-700);
}

/* Small/Caption */
.caption {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: var(--leading-normal);
  color: var(--color-gray-500);
}
```

---

## Spacing System

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

---

## Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Pill shape */
}
```

---

## Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Colored shadows for gradient elements */
  --shadow-glow-pink: 0 20px 40px -10px rgb(244 114 182 / 0.3);
  --shadow-glow-orange: 0 20px 40px -10px rgb(251 146 60 / 0.3);
}
```

---

## Components

### Buttons

```css
/* Base Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}

/* Primary Button - Black filled */
.btn-primary {
  background-color: var(--color-black);
  color: var(--color-white);
  border: 2px solid var(--color-black);
}

.btn-primary:hover {
  background-color: var(--color-gray-800);
  border-color: var(--color-gray-800);
}

/* Secondary Button - White with border */
.btn-secondary {
  background-color: var(--color-white);
  color: var(--color-black);
  border: 2px solid var(--color-gray-300);
}

.btn-secondary:hover {
  border-color: var(--color-black);
}

/* Gradient Button */
.btn-gradient {
  background: var(--gradient-primary);
  color: var(--color-black);
  border: none;
  font-weight: 600;
}

.btn-gradient:hover {
  box-shadow: var(--shadow-glow-pink);
  transform: translateY(-1px);
}

/* Button Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}
```

### HTML Button Examples

```html
<!-- Primary Button -->
<button class="btn btn-primary">
  Get Started — It's Free
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">
  Download — Mobile App
</button>

<!-- Gradient Button -->
<button class="btn btn-gradient">
  Start Free Trial
</button>
```

### Cards

```css
/* Floating Card */
.card {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--space-4);
  box-shadow: var(--shadow-lg);
}

/* Card with gradient border */
.card-gradient {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--space-4);
  position: relative;
}

.card-gradient::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: calc(var(--radius-xl) + 2px);
  background: var(--gradient-primary);
  z-index: -1;
}
```

### Status Badges

```html
<!-- Success Badge -->
<span class="badge badge-success">
  <span class="badge-dot"></span>
  Secure
</span>

<!-- Gradient Badge -->
<span class="badge badge-gradient">PRO</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
}

.badge-success {
  color: #047857;
  background-color: var(--color-success-light);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--color-success);
  border-radius: 50%;
}

.badge-gradient {
  color: var(--color-black);
  background: var(--gradient-primary);
  font-weight: 600;
}
```

### Navigation

```html
<nav class="nav">
  <!-- Logo -->
  <div class="nav-logo">
    <svg class="nav-logo-icon" viewBox="0 0 24 24"><!-- Logo SVG --></svg>
    <span class="nav-logo-text">StillKettle</span>
  </div>

  <!-- Nav Links -->
  <div class="nav-links">
    <a href="#" class="nav-link">Product</a>
    <a href="#" class="nav-link">Solutions</a>
    <a href="#" class="nav-link">FAQ</a>
    <a href="#" class="nav-link">Support</a>
  </div>

  <!-- CTA -->
  <div class="nav-cta">
    <a href="#" class="nav-link">Pricing</a>
    <button class="btn btn-primary btn-sm">Download for Web</button>
  </div>
</nav>
```

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-logo-icon {
  width: 24px;
  height: 24px;
}

.nav-logo-text {
  font-size: var(--text-lg);
  font-weight: 700;
}

.nav-links {
  display: none;
  align-items: center;
  gap: var(--space-8);
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-gray-700);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-black);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
```

---

## Decorative Elements

### Cloud Shapes

```css
/* Soft decorative cloud */
.cloud-shape {
  position: absolute;
  background: var(--gradient-soft);
  border-radius: 50%;
  opacity: 0.8;
}

/* Gradient blob */
.gradient-blob {
  position: absolute;
  background: var(--gradient-sunset);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(40px);
  opacity: 0.6;
}
```

### Hero Image Treatment

```css
/* Black and white photo with gradient overlay */
.hero-image-container {
  position: relative;
  overflow: hidden;
}

.hero-image {
  filter: grayscale(100%);
  mix-blend-mode: multiply;
}

.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-sunset);
  mix-blend-mode: screen;
  opacity: 0.4;
}
```

---

## Animation Guidelines

### Transitions

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
}
```

### Hover States

```css
/* Subtle lift effect */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Scale effect */
.hover-scale {
  transition: transform var(--duration-fast) var(--ease-out);
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

### Page Load Animations

```css
/* Fade up entrance */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s var(--ease-out) forwards;
}

/* Stagger children */
.stagger-children > * {
  opacity: 0;
  animation: fadeUp 0.6s var(--ease-out) forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }
.stagger-children > *:nth-child(5) { animation-delay: 400ms; }
```

---

## Layout Patterns

### Hero Section

```html
<section class="hero">
  <!-- Decorative clouds -->
  <div class="cloud-shape" style="top: 33%; left: 40px; width: 128px; height: 80px;"></div>
  <div class="cloud-shape" style="top: 25%; right: 80px; width: 96px; height: 64px; opacity: 0.6;"></div>

  <div class="hero-content">
    <!-- Headline -->
    <h1 class="headline-hero">
      AI Smart Agent<br>
      Project Management<br>
      Analyser
    </h1>

    <!-- Subheadline -->
    <p class="subheadline">
      Manage Project and Build Your Ultimate AI Agent — Workforce
    </p>

    <!-- CTAs -->
    <div class="hero-cta">
      <button class="btn btn-primary">Get Started — It's Free</button>
      <button class="btn btn-secondary">Download — Mobile App</button>
    </div>

    <!-- Hero Image -->
    <div class="hero-image-wrapper">
      <!-- Gradient backdrop -->
      <div class="hero-backdrop"></div>

      <!-- Image container -->
      <div class="hero-image-container">
        <img src="hero-image.png" alt="Hero" class="hero-image">
      </div>

      <!-- Floating UI cards -->
      <div class="card hero-card-left">
        <!-- Card content -->
      </div>
    </div>
  </div>
</section>
```

```css
.hero {
  position: relative;
  overflow: hidden;
  background: var(--color-white);
}

.hero-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-20) var(--space-6) var(--space-24);
  text-align: center;
}

.hero-content .headline-hero {
  margin-bottom: var(--space-6);
}

.hero-content .subheadline {
  max-width: 560px;
  margin: 0 auto var(--space-10);
}

.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .hero-cta {
    flex-direction: row;
    justify-content: center;
  }
}

.hero-image-wrapper {
  position: relative;
  max-width: 768px;
  margin: var(--space-16) auto 0;
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  border-radius: var(--radius-2xl);
  transform: rotate(2deg);
}

.hero-image-container {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.hero-card-left {
  position: absolute;
  left: -32px;
  top: 32px;
}
```

### Logo Bar

```html
<section class="logo-bar">
  <div class="logo-bar-content">
    <img src="logo-1.svg" alt="Partner 1" class="logo-bar-item">
    <img src="logo-2.svg" alt="Partner 2" class="logo-bar-item">
    <img src="logo-3.svg" alt="Partner 3" class="logo-bar-item">
    <img src="logo-4.svg" alt="Partner 4" class="logo-bar-item">
    <img src="logo-5.svg" alt="Partner 5" class="logo-bar-item">
  </div>
</section>
```

```css
.logo-bar {
  padding: var(--space-12) 0;
  border-top: 1px solid var(--color-gray-100);
}

.logo-bar-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
}

.logo-bar-item {
  height: 24px;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.logo-bar-item:hover {
  opacity: 1;
}
```

---

## Accessibility

- Maintain minimum 4.5:1 contrast ratio for text
- All interactive elements must have visible focus states
- Use semantic HTML elements
- Include skip links for keyboard navigation
- Ensure buttons have minimum 44x44px touch targets on mobile

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-black);
  outline-offset: 2px;
}

.btn:focus-visible {
  outline: 2px solid var(--color-black);
  outline-offset: 2px;
}
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

---

## Implementation Checklist

- [ ] Add font imports (Satoshi via Fontshare, Inter via Google Fonts)
- [ ] Create styles.css with all CSS variables
- [ ] Implement button component classes
- [ ] Build hero section with decorative elements
- [ ] Implement navigation
- [ ] Add page entrance animations
- [ ] Test accessibility and focus states
- [ ] Optimize for mobile responsiveness

---

## Quick Start: Font Imports

Add to your HTML `<head>`:

```html
<!-- Satoshi from Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">

<!-- Inter from Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

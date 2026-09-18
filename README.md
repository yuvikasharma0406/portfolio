# Yuvika Sharma — Branding × Content × Creative Strategy

> **Portfolio Website for Yuvika Sharma**  
> MBA in Marketing (Narayana Business School) · Brand Communicator · Content Strategist · Creative Director

A bespoke, editorial portfolio designed to showcase strategic brand positioning, multi-account campaign leadership, short-form video storytelling, and empirical consumer research.

---

## 🌟 Highlights & Featured Work

* **TEDxNarayanaBusinessSchool**: Built digital brand identity from scratch, scaling organic reach to **600K+** in Month 1.
* **Vacha.inc Agency Direction**: Managed brand communication, video scriptwriting, and creator campaigns independently across **7+ client brands** (including Mission Health).
* **NBS Social Media Committee**: Orchestrated campus branding, event story campaigns, and trend-jacking formats.
* **Empirical Market Research**: Field study analyzing dynamic pricing and consumer bargaining psychology in informal street markets.
* **OCTAPACE Cultural Audit**: 8-dimensional internal organizational branding analysis for Satvam Nutrifoods Ltd.

---

## 🎨 Design Philosophy & Aesthetic

* **Editorial & Restrained**: Warm off-white background (`#FAF8F5`), near-black typography (`#121316`), and a single vibrant accent (`#FF3E1D`).
* **Typography**: Strong display serif headings (*Playfair Display*) paired with high-legibility modern sans-serif body copy (*Plus Jakarta Sans*).
* **Tactile Micro-Interactions**: Purposeful motion with Framer Motion, accessible `:focus-visible` rings, and full `prefers-reduced-motion` compliance.
* **Zero Backend Overhead**: Native `mailto:` communication flow eliminating third-party latency and data storage risks.

---

## 🛠️ Tech Stack & Architecture

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: `next/font/google` (Playfair Display & Plus Jakarta Sans)
* **SEO & Social**: Automated `sitemap.xml`, `robots.txt`, dynamic OpenGraph cards, and `schema.org/Person` JSON-LD structured data.

---

## 📁 Project Structure

```bash
portfolio/
├── app/
│   ├── about/            # About page (narrative, competencies, observations)
│   ├── contact/          # Direct contact page with pre-filled email trigger
│   ├── experience/       # Professional timeline & verified leadership ledger
│   ├── work/             # Work index & multi-category filter
│   │   └── [slug]/       # Dynamic case study architecture
│   ├── globals.css       # Design tokens, variables & accessibility styles
│   ├── layout.tsx        # Root layout, JSON-LD Schema & OpenGraph metadata
│   ├── page.tsx          # Homepage with editorial hero & snapshot modules
│   ├── robots.ts         # Search engine crawler configuration
│   └── sitemap.ts        # Dynamic XML sitemap generator
├── components/           # Modular design system components
│   ├── motion/           # Framer motion utilities & easing curves
│   ├── Button.tsx        # Accessible interactive button with micro-interactions
│   ├── ContactCTA.tsx    # Global contact trigger module
│   ├── Footer.tsx        # Minimal editorial footer
│   ├── Hero.tsx          # Large display typography hero
│   ├── Navbar.tsx        # Responsive header with animated mobile drawer
│   ├── ProjectCard.tsx   # Detailed & compact project card variants
│   └── WhatIDo.tsx       # 4 core capabilities breakdown
├── data/
│   └── portfolio.ts      # Structured portfolio dataset (case studies, bio, metrics)
└── public/               # Static assets & PDF Resume
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yuvikasharma0406/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### 4. Build for production
```bash
npm run build
```
Prerenders all 15 routes into optimized static HTML (SSG).

---

## 📄 License & Contact

Designed & built for **Yuvika Sharma**.  
- **Email**: [yuvika.mba25@nbs.edu.in](mailto:yuvika.mba25@nbs.edu.in)  
- **LinkedIn**: [linkedin.com/in/yuvika-sharma-676132354](https://www.linkedin.com/in/yuvika-sharma-676132354/)

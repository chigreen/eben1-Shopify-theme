# EBEN1 Speed - Shopify Theme

## Overview
Custom Shopify 2.0 theme for **EBEN1 Speed**, a high-end single speed mountain bike outfitter. The brand features a subtle extraterrestrial theme inspired by Skinny Bob/Roswell lore—interesting but not cheesy.

## Brand Identity

**Name**: EBEN1 Speed (no hyphen)
**Tagline**: "One Gear. Zero Compromise."
**Logo Format**: `EBEN1 <span>Speed</span>` (Speed in hot pink accent)

### Design Aesthetic
- Pop art black background (#0A0A0A)
- Hot pink accent (#FF2D9B)
- Banana yellow text highlights (#FFD700)
- Electric cyan accent (#00BFFF)
- Animated CSS "Starmap" background (multi-color pop art parallax)
- Monolithic, sharp design (2px border radius)
- Bold, graphic typography

## Project Structure

```
eben1-Shopify-theme/
├── layout/
│   └── theme.liquid           # Main HTML wrapper
├── templates/
│   ├── index.json             # Homepage
│   ├── product.json           # Product page
│   ├── collection.json        # Collection page
│   ├── cart.json              # Cart page
│   ├── page.json              # Generic page
│   ├── password.json          # Coming soon/password
│   ├── page.races.json        # Race calendar
│   ├── page.trails.json       # Trail guide
│   ├── page.community.json    # Community hub
│   ├── page.rides.json        # Group rides
│   └── page.team.json         # Team/ambassadors
├── sections/
│   ├── header.liquid          # Site header with nav
│   ├── footer.liquid          # Footer with newsletter
│   ├── hero.liquid            # Homepage hero
│   ├── featured-collection.liquid
│   ├── product-main.liquid
│   ├── product-specs.liquid
│   ├── collection-grid.liquid
│   ├── collection-banner.liquid
│   ├── cart-main.liquid
│   ├── about-preview.liquid
│   ├── glow-line.liquid       # Decorative sage gradient divider
│   ├── specs-preview.liquid   # Homepage specs grid
│   ├── password-main.liquid   # Coming soon section
│   ├── page-banner.liquid     # Reusable page headers
│   ├── races-list.liquid      # Event listings
│   ├── trails-list.liquid     # Trail cards
│   ├── community-hub.liquid   # Community links
│   ├── group-rides.liquid     # Weekly rides
│   ├── team-grid.liquid       # Team profiles
│   └── rider-resources.liquid # Guides/tools
├── assets/
│   ├── theme.css              # Main stylesheet (~1540 lines)
│   ├── theme.js               # Vanilla JS interactions
│   ├── new-detroit.ttf        # Custom brand font
│   └── [images]               # hero-1, hero-2, build-apex, product placeholders
├── config/
│   ├── settings_schema.json   # Theme settings
│   └── settings_data.json     # Current values
├── preview.html               # Static preview for GitHub Pages
└── coming-soon.html           # Standalone landing page with brand story
```

## CSS Variables (Design Tokens)

```css
:root {
  /* Colors - Pop art palette */
  --color-primary: #FF2D9B;       /* Hot pink */
  --color-primary-dim: #CC2480;   /* Deep pink for hover */
  --color-bg: #0A0A0A;            /* Pop art black */
  --color-bg-elevated: #1A1A1A;
  --color-bg-card: #121212;
  --color-text: #F5F5F5;
  --color-text-muted: #FFD700;    /* Banana yellow */
  --color-text-dim: #888888;
  --color-accent: #00BFFF;        /* Electric cyan */
  --color-border: rgba(255, 45, 155, 0.2);
  --color-glow: rgba(255, 45, 155, 0.25);

  /* Typography */
  --font-display: 'New Detroit', 'Orbitron', sans-serif;
  --font-heading: 'New Detroit', 'Orbitron', sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;

  /* Design tokens */
  --radius: 2px;
  --radius-lg: 4px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Key Technical Details

- **Shopify 2.0**: JSON templates with section architecture
- **Liquid**: Shopify templating language
- **No build process**: Pure CSS/JS, no bundler needed
- **Custom font**: New Detroit (TTF loaded directly via CSS)
- **Fallback font**: Orbitron (Google Fonts)
- **Design Branch**: `warhol-v1` (active)
- **Starfield**: Multi-layer CSS parallax using `html::before`, `html::after`, `body::before`
- **Features**: Scroll reveal animations, glassmorphism panels, sci-fi cursor, tech specs visualizer

## Community Pages

The theme includes MTB community features:
- **Race Calendar**: Filterable by region/type, registration links
- **Trail Guide**: SS ratings, difficulty, Trailforks/MTB Project/Strava links
- **Group Rides**: Weekly meetups, special events
- **Team Page**: Ambassadors and racers
- **Resources**: Gear ratio calculator, sizing guide, maintenance tips

## GitHub

- **Repo**: https://github.com/chigreen/eben1-Shopify-theme
- **GitHub Pages**: Enabled for preview.html and coming-soon.html
- **Auth**: Uses PAT token for push operations

## Conventions

1. **Brand name**: Always "EBEN1 Speed" (no hyphen between EBEN and 1)
2. **Logo HTML**: `EBEN1 <span>Speed</span>` with span in gold
3. **Comments**: Section files start with `<!-- Section Name - EBEN1 Speed -->`
4. **Button classes**: `.btn-primary` (hot pink), `.btn-secondary` (outline)
5. **Section labels**: Mono font, 0.625rem, uppercase, hot pink color

## Coming Soon Page Story

The coming-soon.html tells the Skinny Bob origin story:
- File 001: Skinny Bob survived Roswell, escaped on a single speed
- File 002: Why everyone needs a single speed
- File 003: "These guys are racers"

This narrative maintains the subtle ET theme without being cheesy.

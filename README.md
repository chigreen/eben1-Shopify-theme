# Eben1 Shopify Theme

Custom Shopify theme for mountain bike shop. Built for direct code control.

## Structure

```
├── layout/theme.liquid     # Main HTML wrapper
├── templates/              # Page templates (JSON - Shopify 2.0)
├── sections/               # Page sections (Liquid)
├── snippets/               # Reusable components
├── assets/
│   ├── theme.css          # All styles - edit directly
│   └── theme.js           # All JS - edit directly
├── config/
│   ├── settings_schema.json   # Theme settings definition
│   └── settings_data.json     # Current settings values
└── locales/               # Translations
```

## Quick Start

1. Zip the theme: `zip -r eben1-theme.zip . -x "*.git*"`
2. Upload to Shopify Admin → Themes → Add theme → Upload zip
3. Preview and publish

## Development

Edit files directly. No build step required.

- `assets/theme.css` - All styles with CSS variables
- `assets/theme.js` - Vanilla JS, no frameworks
- `sections/*.liquid` - Individual page components

## Customization

Colors and fonts are controlled via CSS variables in `theme.css`:

```css
:root {
  --color-primary: #FF6B35;
  --color-bg: #0F0F0F;
  --color-text: #FFFFFF;
}
```

## MTB-Specific Features

- Product specs section with bike-specific fields (frame, fork, travel, etc.)
- Dark theme optimized for outdoor/action sports
- Ready for product metafields (set up in Shopify admin)

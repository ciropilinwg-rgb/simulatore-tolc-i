# Design — Simulatore TOLC-I

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal

## Macrostructure family
Pick one base macrostructure for marketing pages, one for app pages, one for
content pages (if applicable). Pages within a family share the family's shape;
they vary only in component archetypes.

- Marketing pages: Marquee Hero with a split preview panel and a compact metric rail.
- App pages: Workbench with a framed header, one primary panel, and one support rail.
- Content pages: Long Document with a reading column and a contextual summary rail.

## Theme
- `--color-paper`        oklch(97.6% 0.010 85)
- `--color-paper-2`      oklch(95.7% 0.013 85)
- `--color-paper-3`      oklch(92.9% 0.016 85)
- `--color-surface`      oklch(99.1% 0.004 95)
- `--color-surface-2`    oklch(96.8% 0.010 250)
- `--color-ink`          oklch(24.0% 0.022 258)
- `--color-ink-2`        oklch(42.0% 0.016 255)
- `--color-ink-3`        oklch(58.0% 0.013 255)
- `--color-rule`         oklch(88.5% 0.008 255)
- `--color-rule-strong`  oklch(79.5% 0.012 255)
- `--color-accent`       oklch(56.5% 0.190 259)
- `--color-accent-soft`  oklch(94.4% 0.030 259)
- `--color-accent-ink`   oklch(98.8% 0.006 250)
- `--color-focus`        oklch(63.0% 0.170 259)

## Typography
- Display: Manrope, weight 700, style normal
- Body: Instrument Sans, weight 400
- Mono: IBM Plex Mono, weight 500
- Display tracking: -0.035em
- Type scale anchor: `--text-display` = `clamp(2.8rem, 6vw, 5.2rem)`

## Spacing
4-point named scale. The values are in `tokens.css`. Pages must use named
tokens (`var(--space-md)`), never raw values.

## Motion
- Easings: `--ease-out`, `--ease-in`, `--ease-in-out`
- Reveal pattern: fade + short slide on page containers only
- Reduced-motion fallback: opacity-only, 120 ms

## Microinteractions stance
- Silent success, never celebratory toasts
- Hover delay: none for core controls; focus feedback immediate
- Interactive states: border, background, and shadow shift only; no bounce, no elastic easing

## CTA voice
- Primary CTA: filled cobalt button, medium radius, compact label, no emoji
- Secondary CTA: paper surface with rule border, same padding rhythm as the primary

## Per-page allowances
- Marketing pages MAY use Tier-A CSS preview panels and subtle metric rails.
- App pages MUST NOT use decorative enrichment beyond soft paper washes.
- Content pages: typography first, no decorative media unless instructional.

## What pages MUST share
- The Simulatore TOLC-I wordmark and top chrome.
- The cobalt accent and its placement (small, strategic, never full-surface).
- The display + body fonts.
- The CTA voice and button proportions.
- The same spacing and border-radius system.

## What pages MAY differ on
- Marketing pages may lean more editorial than app pages while staying in the same palette.
- App pages may vary their support rail contents depending on task density.
- Content pages may collapse into a single column on narrow screens faster than app pages.

## Exports

Drop-in formats for re-using this design system in other projects.

### tokens.css
```css
:root {
  --color-paper:        oklch(97.6% 0.010 85);
  --color-paper-2:      oklch(95.7% 0.013 85);
  --color-paper-3:      oklch(92.9% 0.016 85);
  --color-surface:      oklch(99.1% 0.004 95);
  --color-surface-2:    oklch(96.8% 0.010 250);
  --color-ink:          oklch(24.0% 0.022 258);
  --color-ink-2:        oklch(42.0% 0.016 255);
  --color-ink-3:        oklch(58.0% 0.013 255);
  --color-rule:         oklch(88.5% 0.008 255);
  --color-rule-strong:  oklch(79.5% 0.012 255);
  --color-accent:       oklch(56.5% 0.190 259);
  --color-accent-soft:  oklch(94.4% 0.030 259);
  --color-accent-ink:   oklch(98.8% 0.006 250);
  --color-focus:        oklch(63.0% 0.170 259);

  --font-display: "Manrope", "Segoe UI", sans-serif;
  --font-body: "Instrument Sans", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "Cascadia Code", monospace;

  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4.5rem;
  --space-3xl: 7rem;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.875rem;
  --text-display: clamp(2.8rem, 6vw, 5.2rem);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-short: 180ms;
  --dur-medium: 280ms;
  --dur-long: 420ms;

  --radius-sm: 0.75rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-pill: 999px;
}
```

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper: oklch(97.6% 0.010 85);
  --color-ink: oklch(24.0% 0.022 258);
  --color-accent: oklch(56.5% 0.190 259);
  --font-display: "Manrope", sans-serif;
  --font-body: "Instrument Sans", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --spacing-md: 1.5rem;
  --text-md: 1rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper": { "$value": "oklch(97.6% 0.010 85)", "$type": "color" },
    "ink": { "$value": "oklch(24.0% 0.022 258)", "$type": "color" },
    "accent": { "$value": "oklch(56.5% 0.190 259)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Manrope", "$type": "fontFamily" },
    "body": { "$value": "Instrument Sans", "$type": "fontFamily" },
    "mono": { "$value": "IBM Plex Mono", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background: 97.6% 0.010 85;
  --foreground: 24.0% 0.022 258;
  --primary: 56.5% 0.190 259;
  --primary-foreground: 98.8% 0.006 250;
  --muted: 88.5% 0.008 255;
  --muted-foreground: 58.0% 0.013 255;
  --border: 88.5% 0.008 255;
  --input: 88.5% 0.008 255;
  --ring: 63.0% 0.170 259;
  --radius: 1rem;
}
```

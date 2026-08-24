# Design — Simulatore TOLC-I

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
editorial-classic

## Macrostructure family
Pick one base macrostructure for marketing pages, one for app pages, one for
content pages (if applicable). Pages within a family share the family's shape;
they vary only in component archetypes.

- Marketing pages: Centered editorial hero with one statement block and one compact action panel underneath.
- App pages: Workbench with a framed header, one primary panel, and one support rail.
- Content pages: Long Document with a reading column and a contextual summary rail.

## Theme
- `--color-paper`        oklch(95.9% 0.024 236)
- `--color-paper-2`      oklch(93.6% 0.028 236)
- `--color-paper-3`      oklch(90.8% 0.032 236)
- `--color-surface`      oklch(98.6% 0.010 238)
- `--color-surface-2`    oklch(95.2% 0.018 236)
- `--color-ink`          oklch(18.0% 0.010 255)
- `--color-ink-2`        oklch(29.0% 0.018 252)
- `--color-ink-3`        oklch(46.0% 0.016 248)
- `--color-rule`         oklch(82.0% 0.018 238)
- `--color-rule-strong`  oklch(70.0% 0.024 236)
- `--color-accent`       oklch(44.0% 0.150 257)
- `--color-accent-soft`  oklch(88.5% 0.040 236)
- `--color-accent-ink`   oklch(98.9% 0.005 240)
- `--color-focus`        oklch(52.0% 0.145 257)

## Typography
- Display: Times New Roman, weight 700, style normal
- Body: Times New Roman, weight 400
- Mono: Times New Roman, weight 400
- Display tracking: 0
- Type scale anchor: `--text-display` = `clamp(2.6rem, 5vw, 4.3rem)`

## Spacing
4-point named scale. The values are in `tokens.css`. Pages must use named
tokens (`var(--space-md)`), never raw values.

## Motion
- Easings: `--ease-out`, `--ease-in`, `--ease-in-out`
- Reveal pattern: none on the public landing, restrained fades elsewhere
- Reduced-motion fallback: opacity-only, 120 ms

## Microinteractions stance
- Silent success, never celebratory toasts
- Hover delay: none for core controls; focus feedback immediate
- Interactive states: border, background, and shadow shift only; no bounce, no elastic easing

## CTA voice
- Primary CTA: filled royal-blue button, classic radius, compact label, no emoji
- Secondary CTA: white paper surface with blue-grey border, same padding rhythm as the primary

## Per-page allowances
- Marketing pages MAY use Tier-A CSS preview panels and subtle metric rails.
- App pages MUST NOT use decorative enrichment beyond soft paper washes.
- Blur, glassmorphism, floating orbs, and glossy button highlights are excluded from the system.
- Content pages: typography first, no decorative media unless instructional.

## What pages MUST share
- The Simulatore TOLC-I wordmark and top chrome.
- The royal-blue accent and its placement (small, strategic, never full-surface).
- The Times New Roman display + body typography.
- The CTA voice and button proportions.
- The same spacing and border-radius system.
- Opaque paper surfaces with visible rules instead of frosted or translucent cards.

## What pages MAY differ on
- Marketing pages may center the main statement and use a single-column introduction while staying in the same palette.
- App pages may vary their support rail contents depending on task density.
- Content pages may collapse into a single column on narrow screens faster than app pages.

## Exports

Drop-in formats for re-using this design system in other projects.

### tokens.css
```css
:root {
  --color-paper:        oklch(95.9% 0.024 236);
  --color-paper-2:      oklch(93.6% 0.028 236);
  --color-paper-3:      oklch(90.8% 0.032 236);
  --color-surface:      oklch(98.6% 0.010 238);
  --color-surface-2:    oklch(95.2% 0.018 236);
  --color-ink:          oklch(18.0% 0.010 255);
  --color-ink-2:        oklch(29.0% 0.018 252);
  --color-ink-3:        oklch(46.0% 0.016 248);
  --color-rule:         oklch(82.0% 0.018 238);
  --color-rule-strong:  oklch(70.0% 0.024 236);
  --color-accent:       oklch(44.0% 0.150 257);
  --color-accent-soft:  oklch(88.5% 0.040 236);
  --color-accent-ink:   oklch(98.9% 0.005 240);
  --color-focus:        oklch(52.0% 0.145 257);

  --font-display: "Times New Roman", Times, serif;
  --font-body: "Times New Roman", Times, serif;
  --font-mono: "Times New Roman", Times, serif;

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
  --text-display: clamp(2.6rem, 5vw, 4.3rem);

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
  --color-paper: oklch(95.9% 0.024 236);
  --color-ink: oklch(18.0% 0.010 255);
  --color-accent: oklch(44.0% 0.150 257);
  --font-display: "Times New Roman", serif;
  --font-body: "Times New Roman", serif;
  --font-mono: "Times New Roman", serif;
  --spacing-md: 1.5rem;
  --text-md: 1rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper": { "$value": "oklch(95.9% 0.024 236)", "$type": "color" },
    "ink": { "$value": "oklch(18.0% 0.010 255)", "$type": "color" },
    "accent": { "$value": "oklch(44.0% 0.150 257)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Times New Roman", "$type": "fontFamily" },
    "body": { "$value": "Times New Roman", "$type": "fontFamily" },
    "mono": { "$value": "Times New Roman", "$type": "fontFamily" }
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
  --background: 95.9% 0.024 236;
  --foreground: 18.0% 0.010 255;
  --primary: 44.0% 0.150 257;
  --primary-foreground: 98.9% 0.005 240;
  --muted: 82.0% 0.018 238;
  --muted-foreground: 46.0% 0.016 248;
  --border: 82.0% 0.018 238;
  --input: 82.0% 0.018 238;
  --ring: 52.0% 0.145 257;
  --radius: 1rem;
}
```

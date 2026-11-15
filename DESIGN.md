# DESIGN.md: Centre for the Creative Economy

Design language: **Press & Vermilion**. A modern editorial sans system: cool paper, ink, one vermilion accent, large confident grotesk type, asymmetric grids. Replaces the earlier Taana-Baana look (cream, serif, five pigments). Source of truth for tokens is `app/cci.css` (section 1).

## 1. Principles

1. **Editorial, not institutional.** Big type, asymmetric grids, long white space, real people.
2. **Equal standing.** Living traditions and contemporary industries get identical cards, tags and headlines. Never rank one above the other.
3. **One accent.** Vermilion marks action and emphasis. Everything else is paper, ink and cool neutrals.
4. **Pattern as punctuation.** CSS motifs (jaal, twill, rangoli, weave) are faint backgrounds and dividers, one per surface, never behind text.
5. **Legible in every script.** Noto Sans Devanagari backs every face; Hindi works without redesign.
6. **People, named and credited.** Photographs carry caption, place, photographer. No stock imagery.

## 2. Colour

Light / dark. Cool paper, never cream or beige.

| Role | Light | Dark |
| --- | --- | --- |
| bg | #F1F2EE | #0C0E10 |
| bg-alt | #E6E8E2 | #13171A |
| surface | #FAFAF7 | #171B1F |
| ink / ink-soft | #0F1214 / #4A5058 | #ECEEE9 / #A3AAA6 |
| line / line-strong | #D5D8D0 / #7E847C | #262C30 / #5C645F |
| **Accent (vermilion)** text / fill | #C42E16 / #C42E16 | #FF8567 / #C42E16 |
| on-fill | #FFFDF9 | #FFFDF9 |

Tone system (kept for card variants, remapped to cool neutrals plus the accent):
`tone-indigo` = slate ink · `tone-madder` = vermilion (the only chromatic tone) · `tone-tur` = sage chalk (dark text) · `tone-lac` = forest · `tone-neem` = steel. Bands: ink (`--band-indigo`), forest (`--band-lac`), vermilion (`tone-madder`).

Rules: accent for primary actions, the single emphasised headline word, and one vermilion band per page. Never put tone text on a different tone fill. Never hard-code colours.

## 3. Typography

- Display: **Bricolage Grotesque** (variable, optical size), fallback Noto Sans Devanagari.
- Text/UI: **Geist**, fallback Noto Sans Devanagari, system-ui.
- No serif, no italics for emphasis. Emphasis is a single word with a marker highlight (`em`), same family.
- Headings carry tight tracking (-0.03em), weights 600-700; body 17px / 1.65, 65ch.
- No eyebrows above headings. Hindi labels sit in the breadcrumb row or inline.

## 4. Space, grid, shape

- 12-column grid from 900px, max width 1360px. Spacing scale 4 to 144 (`--s1..--s10`).
- Radii: 10 inputs, 16 cards, pill buttons and tags. No arches.
- Layout families vary by section: split hero, bento, sticky list, band carousel, logo grid. No three equal feature cards, no 3+ zigzags.

## 5. Components

Class names are stable across the redesign (`.btn`, `.card`, `.tag`, `.band`, `.ph`, `.vm`, `.path`, ...). Icons: Heroicons outline only, 1.5 stroke, in `.ico` tiles.

## 6. Motion

GSAP orchestrates one hero sequence, scroll reveals and a nav tuck. Every effect is disabled under `prefers-reduced-motion`. Animate transform and opacity only.

## 7. Imagery

Placeholder frames (`.ph`) show art direction until real photography exists. Each has caption, person/place and credit.

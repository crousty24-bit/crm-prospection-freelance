# Fuji Sushi Bar Preview - Design Source

## Direction

Reference Stitch: `Preview-Fuji-refonte`, project `4343690171082404917`, target screen `Fuji Sushi Bar - Modern Redesign`.

The page should feel like a premium sushi bar, not a generic dark landing page. The visual language is Japanese minimalism applied to a direct ordering experience: strong black surfaces, precise red accents, editorial serif titles, clear product decisions, and practical information visible without friction.

## Principles

- Keep the first viewport commercial: brand, food image, order action, address/phone/opening cue.
- Use asymmetry: text and image should feel composed, not centered by default.
- Let photography drive appetite; avoid decorative shapes that do not carry product meaning.
- Use red as a sharp action/accent color, not as a broad background theme.
- Use gold only for premium or signature cues.
- Keep all corners square.
- Prefer large visual sections over many small generic cards.
- Preserve public, factual information only. Do not include internal notes, custom pricing, humiliating audit language, or unverifiable promises.

## Tokens

Colors:

- Ink: `#000000`
- Charcoal: `#111111`
- Raised: `#1A1A1A`
- Soft line: `#2A2020`
- Paper: `#F5F5F5`
- Muted: `#B7B1AD`
- Crimson: `#E60000`
- Crimson dark: `#9F0000`
- Gold: `#D4AF37`

Typography:

- Display and dish names: `Playfair Display`, serif.
- Body, labels, CTA, navigation: `Montserrat`, sans-serif.
- Labels may use uppercase and moderate tracking.
- Do not use viewport-scaled type.

Layout:

- Desktop max content width: `1200px`.
- Desktop side margin: `48px` to `64px`.
- Mobile side margin: `20px`.
- Section rhythm: generous but never empty; next content should be hinted after the hero.
- Hero should be image-led, with text on a controlled column and practical details visible.

Components:

- Buttons: square, high contrast, minimum 46px tall.
- Menu category controls: rectangular segmented buttons.
- Menu cards: dark surfaces with thin red/soft borders, dish name in serif, short description.
- Practical information: compact strips or rows, not a dense administrative table.
- Mobile header: keep brand and menu accessible; primary ordering action should remain present in the hero.

## Acceptance

- No horizontal overflow at `390px` mobile width.
- Hero, first CTA, and food image are visible on mobile without awkward empty space.
- Desktop first viewport shows a deliberate restaurant redesign concept, not only a large photo and generic copy.
- The menu area communicates ordering and composition more clearly than the current site.
- The design remains static and can be served from GitHub Pages.

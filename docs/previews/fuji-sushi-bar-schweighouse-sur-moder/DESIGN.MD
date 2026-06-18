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
- Menu category controls: rectangular segmented buttons with clear hover, active, and keyboard focus states.
- Menu cards: dark surfaces with thin red/soft borders, dish name in serif, short description, visible price, and direct add action.
- Signature cards: same structure as other products, with a restrained gold border and badge only. Gold is reserved for premium product cues.
- Click&collect cart: local preview only, sticky on desktop and mobile, with line items, quantity controls, subtotal, and confirmation copy.
- Practical information: compact strips or rows, not a dense administrative table.
- Mobile header: keep brand and menu accessible; primary ordering action should remain present in the hero.

## Click&Collect Pattern

The Carte section demonstrates a static ordering journey, not a real shop.

- Product data is a representative public sample from Fuji public Shopify collections, captured on 2026-06-18.
- Categories shown: Signatures, California, Boxs.
- Product names should remove source prefixes such as `l`, `I`, and `|`.
- Prices are shown to help users compare quickly, but must be rechecked before any real commercial use.
- The cart lives only in browser memory for the current page view.
- The final action is `Preparer ma selection`; it must never create checkout, submit an order, call Shopify Ajax Cart, send email, or trigger payment.
- Copy must state: click&collect without online payment, payment at pickup.
- Empty, added, quantity change, removed, and local confirmation states must remain readable on mobile.

Motion:

- Hover and focus transitions are allowed on nav, filters, product cards, buttons, and cart controls.
- Entry and cart-row animations must be subtle and disabled under `prefers-reduced-motion: reduce`.
- Do not add scroll-driven animation logic.

## Acceptance

- No horizontal overflow at `390px` mobile width.
- Hero, first CTA, and food image are visible on mobile without awkward empty space.
- Desktop first viewport shows a deliberate restaurant redesign concept, not only a large photo and generic copy.
- The menu area communicates ordering and composition more clearly than the current site, with prices, add buttons, and a local cart.
- The design remains static and can be served from GitHub Pages.
- No internal CRM content, audit note, personalized price, checkout, or outbound order request appears in the public preview.

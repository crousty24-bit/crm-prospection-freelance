# Take Your Gloves - Design Source

## Source Stitch

Reference Stitch: `Auto Event Experiences Premium`, project `8805296050293502255`.

Verified project metadata:

- Stitch title: `Auto Event Experiences Premium`.
- Stitch design theme: `Grand Tour Prestige`.
- Project type: `TEXT_TO_UI_PRO`.
- Device type: desktop.
- Created: `2026-07-07T16:35:01.254777Z`.
- Updated: `2026-07-07T16:41:15.766258Z`.

Verified screens:

- `Apex Heritage Events Landing Page`: `projects/8805296050293502255/screens/7cfa5e3cc7724b44904cae275a442545`, desktop, `2560 x 8928`.
- `Apex Heritage Events Logo`: `projects/8805296050293502255/screens/5e42e21b9abf441ca494984098e9f348`, `512 x 512`.
- Automotive interior visual direction: `projects/8805296050293502255/screens/d5768cba4b9b453690c35ee03a940212`, `1376 x 768`.
- Cinematic driving visual direction: `projects/8805296050293502255/screens/61cbc887443e4b03b1944f8cc44370a9`, `1376 x 768`.

Observed from the Stitch landing screenshot:

- Dark luxury landing page with compact header, centered editorial hero, champagne CTA, service cards, large automotive interior image, feature block, testimonial-style cards, and minimal footer.
- Brand mark direction: gold serif primary word, white spaced sans-serif secondary word, thin champagne rule.
- Visual direction: cinematic automotive imagery, dark scrims, editorial rhythm, sharp corners, restrained champagne accents.

Local note: the MCP `download_assets` call reported success to `tmp/stitch-auto-event`, but that directory was not visible from the repository shell. The preview uses local assets intentionally placed under `docs/previews/auto-event/assets/`.

Image implementation note:

- The previous JPG files came from `512 x 286` sources and remained visibly pixelated after enlargement.
- The three photographs were regenerated at their native display ratios, then exported directly to high-quality WebP without enlargement:
  - `hero-grand-tour.webp`, `1672 x 941`, composed as a full-bleed 16:9 hero with copy space and the car in the lower-right third.
  - `interior-detail.webp`, `1672 x 941`, composed for the 16:9 editorial frame.
  - `organisation-route-brief.webp`, `1586 x 992`, composed for the 16:10 organization frame.
- SVG remains reserved for interface icons. WebP is used for photographs because it preserves photographic detail at a lower transfer weight than PNG.
- Obsolete JPG sources and the unused Stitch logo were removed from the public assets directory.

## Current Preview Direction

Build a static one-page commercial preview for `Take Your Gloves`, a premium automotive event service for owners of sport and collector cars.

The company promise is not a brand-launch event offer. It is owner-focused: help owners enjoy their vehicle, meet enthusiasts with the same passion, and delegate the full organization of a high-end experience.

Core offer:

- Private road trips.
- Track days.
- Enthusiast meetings.
- Private automotive events.
- End-to-end organization: brief, route or circuit format, timing, welcome, coordination, and day-of experience.

The page should feel like a confidential automotive atelier, not a generic event agency site and not a motorsport fan page. The tone is cinematic, controlled, exclusive, and precise. The design should sell orchestration, confidence, driving pleasure, and shared passion.

The preview lives under `docs/previews/auto-event/` and may be public through GitHub Pages. It must not include private CRM notes, real contact details, personalized pricing, invented proof, or any real form submission.

## Brand And Logo

Public preview brand label: `Take Your Gloves`.

Stitch brand reference: `Apex Heritage`.

Implementation direction:

- Replace the Stitch logo in public UI with a CSS typographic lockup: serif `Take`, spaced sans-serif `Your Gloves`, thin champagne rule.
- Keep the existing Stitch logo asset in `assets/` only as an unused reference if needed.
- Do not show `Apex Heritage` in public preview content.
- Avoid racing flags, speed streaks, cartoon cars, aggressive motorsport styling, and manufacturer partner logos.

## Content Scope

Required sections:

- Header with `Take Your Gloves` lockup, compact navigation, and `Demander un devis` CTA.
- Hero with owner-focused premium automotive promise.
- Proof strip with safe, non-metric positioning.
- Experience formats: road trips, track days, enthusiast meetings, private automotive events.
- Three explicitly fictional testimonial examples between experience formats and organization.
- Organization journey: owner brief, route and rhythm, supervision, day-of experience.
- Image-led editorial section about rediscovering the pleasure of using the car.
- Trust section without fabricated metrics.
- Static contact section with a non-sending form.
- Footer with static preview disclaimer.

Forbidden unless supplied by a validated fiche or explicit user copy:

- Phone number, email, address, SIRET, prices, ratings, named testimonials, partner brands, number of cars, number of events, celebrity or luxury-client claims.
- Real booking, payment, checkout, email submission, external lead dispatch, analytics capture, or storage of form data.
- Claims about exact vehicles, locations, safety certifications, staff, insurance, or availability.

## Hero

Goal: make the grand tour hero visual visible while keeping the dark premium Stitch atmosphere and strong H1 readability.

Implementation:

- Full-bleed hero, left-aligned text in the image's intentional negative space, editorial Stitch rhythm.
- `.hero-bg` should render at full opacity and use the native-ratio WebP asset.
- Dark overlay remains, but scrims should stay light enough that Chrome and Firefox both show the vehicle image clearly.
- Text readability should come from the scrim plus subtle text shadow, not from making the full image opaque black.
- Keep next section close enough that the page does not feel like an isolated splash screen.

Content:

- Eyebrow: `Pour proprietaires de sportives et collections`
- H1: `Profitez de votre voiture, on organise le reste`
- Supporting copy: `Road trips, circuits et rencontres entre passionnes, organises de A a Z dans un cadre haut de gamme.`
- Primary CTA: `Take Your Gloves`
- Secondary CTA: `Explorer les formats`

Proof strip:

- `Proprietaires de sportives`
- `Vehicules de collection`
- `Road trips et circuits`
- `Organisation de A a Z`

## Page Structure

### Header

- Left: `Take Your Gloves` typographic lockup.
- Nav labels: `Experiences`, `Organisation`, `Plaisir`, `Contact`.
- Header CTA: `Demander un devis`.
- Mobile menu opens as a dark full-screen panel below the fixed header.

### Experience Formats

Cards:

- `Road trips prives`: route, stops, rhythm, and welcome handled so owners focus on driving.
- `Journees sur circuit`: organized track day for exploring the car in a supervised setting.
- `Rencontres entre passionnes`: meeting owners who share the same automotive culture.
- `Evenements automobiles prives`: venue, welcome, schedule, and field coordination handled end to end.

### Organization Journey

Steps:

- `Brief proprietaire`: understand the car, the group, and the desired moment.
- `Trace et rythme`: build a coherent route, track day, or private format.
- `Encadrement`: manage welcome, timing, practical details, and coordination.
- `Experience`: leave room for driving, encounters, and pleasure on the day.

Visual:

- Add `organisation-route-brief.webp` below the organization heading and intro copy.
- On desktop and tablet, keep the heading and image inside the same sticky left column while the process list scrolls.
- On narrow mobile, keep the same content order but allow normal document flow so the image does not block the viewport.

### Testimonials

- Place the section between experience formats and organization.
- Show exactly three clearly delimited cards in one row on desktop and one column on mobile.
- Keep every quote short enough to read at a glance.
- Label the testimonials as fictional examples so the public preview cannot be mistaken for verified customer proof.

### Editorial Section

Use `assets/interior-detail.webp` for craft and intimacy.

Message:

- `Le plaisir automobile retrouve son cadre.`
- Take Your Gloves turns a personal car into a shared, fluid, carefully managed experience.

Deliverables:

- `Itineraire`
- `Circuit`
- `Rencontres`
- `Coordination`
- `Accueil premium`

### Trust

The section replaces fake social proof with clear operating principles:

- `Cadre clair`
- `Organisation complete`
- `Experience adaptee`

Do not show ratings, event counts, fleet counts, or luxury brand partnerships without proof.

### Contact

Form fields:

- Name.
- Email.
- Phone.
- Audience type: `Proprietaire`, `Groupe d'amis`, `Club automobile`, `Autre`.
- Desired format: `Road trip`, `Journee circuit`, `Rencontre passionnes`, `Evenement prive`, `Autre`.
- Approximate date.
- Vehicle.
- Location or region.
- Message.

Behavior:

- Static preview only.
- On submit, prevent default and show local confirmation copy.
- Do not send email, call an API, open a payment flow, or store personal data.

## Visual System

Colors:

- Deep black: `#050505`
- Background: `#131313`
- Surface low: `#0E0E0E`
- Surface: `#1C1B1B`
- Surface raised: `#20201F`
- Surface high: `#2A2A2A`
- Surface highest: `#353535`
- Text: `#E5E2E1`
- Text muted: `#C4C7C7`
- Text dim: `#797777`
- Border: `#444748`
- Border strong: `#8E9192`
- Champagne: `#E9C176`
- Champagne deep: `#937230`
- CTA champagne: `#C5A059`
- CTA text dark: `#1C1B1B`

Color use:

- Use deep black for the hero foundation and cinematic sections.
- Use charcoal surfaces only when content needs separation.
- Use champagne for primary CTA, active states, thin rules, and premium cues.
- Do not add bright red, blue, neon, racing colors, or a one-note gradient palette.

Typography:

- Display and major headings: `Playfair Display`, serif.
- Body, nav, labels, forms, buttons: `Inter`, sans-serif.
- Display desktop: about `72px`, `600`, `84px` line-height.
- Display mobile: about `42px` to `48px`, `600`, `50px` to `56px` line-height.
- Section headings: about `48px` desktop, `34px` mobile, `500`.
- Body large: `18px`, `400`, `28px` line-height.
- Labels and nav: `12px`, `600`, uppercase with moderate tracking.
- Avoid viewport-scaled type.

Layout:

- Desktop max content width: `1440px`.
- Desktop side margin: `80px`.
- Tablet side margin: `40px`.
- Mobile side margin: `24px`.
- Base spacing unit: `8px`.
- Major section vertical padding: `120px` to `160px` desktop, `72px` to `96px` mobile.
- Header height: about `72px` desktop, `64px` mobile.
- Border radius: `0px` for buttons, inputs, cards, and media.

Animation:

- Sections reveal on scroll through `IntersectionObserver`.
- Do not bind reveal behavior to global scroll events.
- Do not use broad all-property transitions.
- Respect `prefers-reduced-motion`.

## Public Safety

This preview lives under `docs/` and may be public through GitHub Pages.

Therefore:

- No internal CRM notes.
- No personalized pricing.
- No humiliating audit language.
- No sensitive prospect data.
- No fake client proof.
- No real form submission.
- No claim that a contact has happened.

If a validated prospect fiche later provides factual data, add only the fields that are safe for public display.

## Acceptance

- The page can be served statically from GitHub Pages.
- Desktop first viewport feels like a premium automotive experience and the hero image is visible.
- Mobile around `500px` has no horizontal overflow and keeps brand, headline, CTA, and visual cue readable.
- Mobile menu is visible and opens.
- `#formats` and `#contact` remain reachable.
- CTA and form interactions remain local and non-sending.
- No fabricated ratings, names, prices, partners, contact details, fleet size, or event counts.
- The visual system follows Stitch's `Grand Tour Prestige`: dark canvas, Playfair Display headings, Inter interface text, sharp corners, champagne accents, cinematic images.

## Known Unknowns

- Exact company legal name: unknown.
- Verified contact details: unknown.
- Verified services, locations, fleet, partners, prices, testimonials, and availability: unknown.
- Prospect fiche source: not identified in this request.
- Local reusable Stitch asset files from MCP download: not verified in the repository.

# Demenag'Man Strasbourg Landing Page - Design Source

## Source Stitch

Reference Stitch: `Demenag'Man Strasbourg Landing Page`, project `17901986046315124225`.

Verified screens:

- `Demenag'Man - Landing Page`: `projects/17901986046315124225/screens/d4e7e398d5874005a8a0247d7b73e09f`, desktop, `2560 x 6324`.
- `Logo Demenag'Man`: `projects/17901986046315124225/screens/11cd075726ab492ab2e0a72504ef5bc4`, `1024 x 1024`.

Stitch design theme: `Strasbourg Logistic Excellence`.

The MCP returned the project metadata, screen list, generated design theme, and screenshot URLs. The `download_assets` call reported success, but the expected local directories were not visible from the workspace or `/tmp`; do not claim local asset reuse until assets are actually present.

## Direction

Build a simple, clean, static one-page landing page for a Strasbourg moving service. The page should feel practical, reliable, and local: a service business that knows logistics, protects belongings, and answers quickly.

The visual language is minimal, structured, and confidence-first. White space and deep navy carry the brand. Accent blue is reserved for conversion actions, focus states, and small proof markers.

Do not make the page feel like a generic SaaS landing page. The subject is physical service work: moving trucks, careful handling, furniture assembly, clear scheduling, and direct quote requests.

## Content Scope

Required sections:

- Header with brand logo, navigation, and quote CTA.
- Hero with primary value proposition, social proof area, and two CTAs.
- Services.
- Customer reviews.
- About.
- Contact with a simple form.
- Footer.

Required service offers:

- Demenagement with 20m3 high-volume truck, secure handling, experienced team, all distances across France.
- Fast, efficient bulky-item clearance for apartments, cellars, and attics.
- Furniture assembly and disassembly.
- Waste disposal center transport included.
- Piano and fragile or luxury object transport.

Required commercial mentions:

- Free quote.
- Home intervention.
- Eco-responsible approach.
- For professionals and individuals.

Public-safety rule: do not publish unverifiable numbers, ratings, named reviews, exact operating claims, phone numbers, prices, legal identifiers, or addresses unless they come from a verified prospect fiche or explicit user-provided copy.

## Brand And Logo

Brand name: `Demenag'Man`.

Logo concept: a simple super mover mascot showing his biceps. Use a friendly professional superhero tone, not a childish comic. The mascot should read instantly at small size:

- Navy uniform or shirt.
- Light accent blue cape or motion detail.
- Flexed arm silhouette.
- Optional small moving box or truck icon integrated into the mark.
- Keep linework simple enough for SVG or React component implementation.

Logo lockup:

- Icon at left, wordmark at right on desktop.
- Compact icon plus `Demenag'Man` on mobile.
- Avoid tiny slogans in the logo.

## Principles

- Keep the first viewport commercial: brand, service category, Strasbourg locality, free quote CTA, and reassurance must be visible immediately.
- Use real service structure over decoration. Every visual block should explain a service, a benefit, or a next action.
- Preserve a clean white and navy palette. Do not turn the page into a blue monochrome wall.
- Keep cards shallow and useful. Avoid nested cards.
- Use icon-led lists for scannability.
- Use stable responsive dimensions for service cards, hero media, form fields, and review cards.
- Keep all copy public, respectful, and non-auditing.
- The preview must remain static and should not send messages, emails, orders, or real lead submissions.

## Tokens

Colors:

- Background: `#F7FAFC`
- Surface: `#FFFFFF`
- Surface muted: `#F1F4F6`
- Surface raised: `#EBEEF0`
- Navy: `#002045`
- Navy soft: `#1A365D`
- Action blue: `#0061A5`
- Action blue light: `#66AFFE`
- Text: `#181C1E`
- Text muted: `#43474E`
- Border: `#C4C6CF`
- Border strong: `#74777F`
- Success/eco accent: `#2F855A`
- Warning only if needed: `#B7791F`

Color use:

- Use navy for header, hero foundation, headings, and strong trust blocks.
- Use action blue for primary buttons, active nav, form focus, and key CTA chips.
- Use green only for eco-responsible cues. Do not let it become a secondary theme.
- Keep most page backgrounds white or very light gray.

Typography:

- Font family: `Inter`, sans-serif.
- Display desktop: `48px`, `700`, `56px` line-height.
- Display mobile: `32px`, `700`, `40px` line-height.
- Section headings: `32px` desktop, `26px` mobile, `700`.
- Card headings: `20px` to `24px`, `600`.
- Body large: `18px`, `400`, `28px` line-height.
- Body: `16px`, `400`, `24px` line-height.
- Labels and nav: `14px`, `600`, `20px` line-height.
- Do not use viewport-scaled type. Letter spacing should be `0` except small uppercase labels, max `0.01em`.

Layout:

- Desktop max content width: `1280px`.
- Desktop side margin: `40px`.
- Tablet side margin: `32px`.
- Mobile side margin: `16px`.
- Grid: 12 columns desktop, 8 tablet, 4 mobile.
- Base spacing unit: `8px`.
- Major section vertical padding: `80px` to `112px` desktop, `56px` to `72px` mobile.
- Header height: about `72px` desktop, `64px` mobile.
- Border radius: `4px` buttons and inputs, `8px` cards and media.

Elevation:

- Prefer 1px soft borders over heavy shadows.
- Hover elevation may use `0 16px 40px rgba(0, 32, 69, 0.08)`.
- Sticky or floating elements may use `0 20px 48px rgba(0, 32, 69, 0.12)`.

## Page Structure

### Header

Desktop:

- Left: logo lockup.
- Center or right: nav links `Services`, `Avis`, `A propos`, `Contact`.
- Right: primary CTA `Devis offert`.

Mobile:

- Logo at left.
- Menu icon button at right.
- Open menu as a simple full-width panel below header.
- Keep `Devis offert` visible inside the opened menu.

Header style:

- White surface.
- Thin bottom border.
- Sticky is acceptable if it does not cover anchor targets.

### Hero

Goal: immediate quote request and trust.

Composition:

- Desktop: two-column layout. Left text and CTAs, right visual panel with truck/mover imagery or illustrated moving scene.
- Mobile: text first, visual below or compact proof strip below CTAs.

Hero content:

- Eyebrow: `Demenagement a Strasbourg et partout en France`.
- H1: direct service promise, e.g. `Votre demenagement gere avec methode, du devis au dernier carton`.
- Supporting copy: mention particuliers, professionnels, free quote, home intervention.
- Primary CTA: `Demander un devis offert`.
- Secondary CTA: `Voir les services`.

Social proof area:

- Use non-factual trust chips unless verified facts are provided:
  - `Particuliers et professionnels`
  - `Toutes distances`
  - `Intervention a domicile`
  - `Objets fragiles pris en charge`
- Do not display star ratings, review counts, or named testimonials without source.

### Services

Use a responsive grid:

- Desktop: 3 columns for primary service cards, then 2-column or full-width rows for specialized services.
- Tablet: 2 columns.
- Mobile: 1 column.

Service cards:

- Icon at top.
- Short title.
- One paragraph max.
- 3 bullet benefits where useful.
- CTA text link `Demander un devis`.

Services to include:

- `Demenagement toutes distances`
- `Debarras d'encombrants`
- `Montage et demontage de meubles`
- `Transport dechetterie inclus`
- `Piano, objets fragiles et luxe`

Icon direction:

- Use lucide icons when implemented in React: `Truck`, `ShieldCheck`, `PackageCheck`, `Wrench`, `Recycle`, `Piano`, `Gem`, `Home`, `Building2`.
- Icons should be line icons in navy or action blue, not filled cartoons.

### Reviews

The section exists in layout but must avoid fabricated proof.

Recommended implementation until verified copy exists:

- Title: `Avis clients`
- Intro: neutral, e.g. `Une section prevue pour mettre en avant les retours clients verifies.`
- Three review cards with placeholder states only if the page is clearly an internal preview.
- For a public preview, either use anonymized non-quantified snippets explicitly supplied by the user, or show a review-ready layout without named claims.

Do not invent:

- Client names.
- Star averages.
- Number of completed moves.
- Review platform ratings.

### About

Purpose: humanize the local service without unverifiable biography.

Content points:

- Strasbourg-based moving service.
- Works for individuals and professionals.
- Emphasis on preparation, protection, punctuality, and clean handling.
- Eco-responsible angle: sorting, optimized trips, waste disposal transport. Keep wording modest unless proof exists.

Layout:

- Split section with text plus a checklist or compact stat-free proof list.
- Optional visual: team carrying boxes, organized truck, or mascot detail.

### Contact

Form fields:

- Name.
- Email.
- Phone.
- Moving type select: `Demenagement`, `Debarras`, `Meubles`, `Piano / fragile`, `Autre`.
- From / to location.
- Desired date.
- Message.

Static preview behavior:

- The form must not submit to any real endpoint.
- Client-side confirmation can be local only, e.g. `Votre demande est prete a etre envoyee dans une version connectee.`
- Do not use `mailto:` unless explicitly requested later.

Contact block should also include:

- `Devis offert`
- `Intervention a domicile`
- `Strasbourg et France entiere`

### Footer

Footer content:

- Logo lockup.
- Short service summary.
- Links back to page anchors.
- Mention that the page is a preview if needed.

Do not include legal details unless supplied and verified.

## React Adaptation

Recommended component split:

- `App`
- `Header`
- `Logo`
- `Hero`
- `ProofStrip`
- `Services`
- `ServiceCard`
- `Reviews`
- `About`
- `ContactForm`
- `Footer`

Data should live in simple arrays:

- `services`
- `proofItems`
- `navItems`
- `reviewPlaceholders` or verified `reviews`

Implementation constraints:

- Static React page only.
- No router required.
- Use semantic sections with stable `id` anchors.
- Use accessible labels for the mobile menu and form controls.
- Keep form state local if implemented.
- Support reduced motion.
- No network requests.
- No external lead capture.

## Responsive Acceptance

- No horizontal overflow at `390px`.
- Header remains usable at `320px` to `430px`.
- Hero H1, CTAs, and trust chips are visible in the first mobile viewport without excessive empty space.
- Service cards do not change height on hover.
- Button text must not wrap awkwardly; use shorter labels on mobile if needed.
- Contact form is single-column on mobile and two-column on desktop.
- Touch targets are at least `44px` high.
- Desktop first viewport should show the brand, H1, CTA, and service context without needing scroll.

## Public Preview Guardrails

- Do not include internal CRM notes.
- Do not include personalized prices.
- Do not include humiliating audit language.
- Do not include real customer reviews without source.
- Do not include invented company facts.
- Do not send contact forms.
- Do not mark the prospect as contacted because a preview exists.

## Open Questions Before Implementation

- Should the final implementation live under `docs/previews/demenagman/` for GitHub Pages, despite this design brief being requested under `previews/denemagman/`?
- Which verified contact details, if any, may be public?
- Are real customer reviews available, or should the preview keep the review section as a layout placeholder?
- Should the logo be generated as SVG/React markup, or should a bitmap mascot be generated as an asset?
- Should the final copy use `Demenag'Man` or `Demenag'Man Strasbourg` as the visible primary brand?

# Pegasus Racing — direction de la preview Event

## Source Stitch

- Projet MCP Stitch : `Pegasus Racing Website Redesign` — `projects/687836934108515302`.
- Écran reproduit : `Event — Pegasus Racing` — `projects/687836934108515302/screens/f92c78f3c96745cbb9b28142a4b8101c`, format desktop `2560 × 13472`.
- Écran complémentaire : `Accueil — Pegasus Racing` — `projects/687836934108515302/screens/bea78438ab01471184530c74ecdd273b`, format desktop `2560 × 16444`.
- Design system Stitch : `High-End Motorsport Editorial`, récupéré le `2026-10-19`.

La preview reproduit fidèlement l'écran Stitch `Event` (refonte du `2026-10-19`) :

- header vitré avec navigation en pilule ;
- hero 90vh avec bandeau télémétrie ;
- section 01 éditoriale asymétrique ;
- cartes formats blanches sur fond clair ;
- interlude en parallaxe ;
- timeline en 4 étapes ;
- galerie bento ;
- panneau contact et footer.

Le code est réécrit en HTML, CSS et JS statiques, sans dépendre du Tailwind exporté. Les tokens viennent de `stitch_reference/high_end_motorsport_editorial/DESIGN.md`.

Le site `https://take-your-gloves.vercel.app/` sert de référence pour le mouvement : apparitions échelonnées au scroll, header qui change d'état, compteurs animés. Tout mouvement est désactivé si `prefers-reduced-motion` est actif.

## Intention

Présenter une piste de refonte de la page Event de Pegasus Racing. Le ton est sportif, précis et accueillant. Les formats décrits sont des **propositions** : le site actuel ne détaille pas d'offre événementielle.

## Système visuel

| Usage | Valeur |
|---|---|
| Fond carbone | `#040404` |
| Racing navy | `#091D35` |
| Bleu d'action | `#1254A1` |
| Primary clair | `#A9C7FF` |
| Electric cyan | `#00E5FF` |
| Speed crimson | `#E11D48` |
| Surface claire | `#F4F7FA` |
| Titres | Space Grotesk |
| Corps | Montserrat |
| Index techniques | Space Mono |
| Icônes | Material Symbols Outlined (sous-ensemble) |

- Grille max `1440px`, marges `20 / 32 / 56px` selon le breakpoint.
- Rayons : boutons `2px`, cartes `8px`, panneau contact `16px`.

## Contenus vérifiés

Source : `https://www.pegasus-racing.com/`, consultée le `2026-10-19`.

- Team de compétition et atelier mécanique ; Julien et Claude Schell accompagnent pilotes amateurs et confirmés depuis plus de 20 ans.
- 4 participations aux 24 Heures du Mans ; titres européens ; courses WEC en Chine et en Indonésie.
- Connaissance de la plupart des circuits de France et d'Europe ; prestations sur mesure.
- Coordonnées publiques : 12 rue de l'Ill, 67118 Geispolsheim ; 03 88 65 99 99 ; info@ et event@pegasus-racing.com ; lien Facebook (URL non relevée).

Éléments de la maquette Stitch retirés car non vérifiables :

- atelier de 1500 m² et motor-homes ;
- instructeurs BPJEPS ;
- traiteur étoilé et hôtellerie 5 étoiles ;
- « 100% Pro LMP/GT/monoplaces » ;
- liste de circuits ;
- réponse garantie sous 24h ;
- citation attribuée aux dirigeants ;
- compte Instagram.

## Images et logo

- `hero.webp`, `private.webp`, `corporate.webp` et `roadtrip.webp` ont été générés pour la version précédente.
- `prototype.webp` est un recadrage 4:5 de `hero.webp`.
- `team.webp`, `cockpit.webp`, `reception.webp`, `chateau.webp`, `pitstop.webp` et `celebration.webp` ont été générés le `2026-10-19` via Blueprint Studio (GPT Image 2.5, 1K). Ils ne contiennent ni logo ni texte et sont ré-encodés en WebP qualité 80.
- Toutes les photos sont des visuels d'intention fictifs ; une mention visible figure sous la galerie.
- Les images de l'export Stitch ne sont pas utilisées : elles ne font que 512 px et montrent de faux logos Pegasus, des marques tierces et un palmarès fictif.
- `logo-pegasus.png` est l'emblème recadré du logo public du site (`wp-content/uploads/2024/08/logo-Pegasus-blanc-300x233.png`).

## Contenu et interactions

- Les liens internes fonctionnent. Racing et Trackday sont affichés mais inactifs : ces pages sont hors du périmètre de la preview.
- Le menu mobile est accessible au clavier et se ferme avec `Échap`.
- Le formulaire est une démonstration : validation locale, aucune requête réseau, aucun stockage ni email.
- Aucun prix, témoignage, nom de client ou événement réel n'est affirmé.

## Statut et validations

Prototype de prospection, accessible publiquement via GitHub Pages (`noindex`). Avant tout usage commercial :

- valider les formats proposés ;
- vérifier les droits sur le logo et les visuels ;
- définir la destination réelle du formulaire.

# Pegasus Racing — direction de la preview (5 pages)

## Source Stitch

- Projet MCP Stitch : `Pegasus Racing Website Redesign` — `projects/687836934108515302`.
- Écran reproduit : `Event — Pegasus Racing` — `projects/687836934108515302/screens/f92c78f3c96745cbb9b28142a4b8101c`, format desktop `2560 × 13472`.
- Écran complémentaire : `Accueil — Pegasus Racing` — `projects/687836934108515302/screens/bea78438ab01471184530c74ecdd273b`, format desktop `2560 × 16444`.
- Design system Stitch : `High-End Motorsport Editorial`, récupéré le `2026-10-19`.

La preview reproduit les 5 écrans Stitch du projet, chacun dans une page statique :

| Page | Écran Stitch | Fichier |
|---|---|---|
| Accueil | `accueil_pegasus_racing` | `index.html` |
| Racing | `racing_pegasus_racing` | `racing.html` |
| Trackday | `trackday_pegasus_racing` | `trackday.html` |
| Event | `event_pegasus_racing` | `event.html` |
| Contact | `contact_pegasus_racing` | `contact.html` |

L'en-tête (navigation en pilule, page active surlignée, bouton « Nous contacter ») et le pied de page sont identiques sur les 5 pages. Les pages partagent `style.css` et `index.js`. Le code est réécrit en HTML, CSS et JS statiques, sans dépendre du Tailwind exporté. Les tokens viennent de `stitch_reference/high_end_motorsport_editorial/DESIGN.md`.

Le site `https://take-your-gloves.vercel.app/` sert de référence pour le mouvement : apparitions échelonnées au scroll, header qui change d'état, compteurs animés. Tout mouvement est désactivé si `prefers-reduced-motion` est actif.

## Intention

Présenter une piste de refonte complète du site de Pegasus Racing. Le ton est sportif, précis et accueillant. Les formats Event et les formules Trackday sont des **propositions** : le site actuel ne détaille ni offre événementielle ni contenu trackday.

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

Éléments des maquettes Stitch retirés ou reformulés car non vérifiables :

- Accueil : « Est. 2000 », coordonnées GPS, catégorie LMP2, marques MoTeC/Cosworth, flotte de semi-remorques et fret, horaires d'ouverture, « Saisons 2025/2026 ouvertes ».
- Racing : « Saison 2025 », LMP3/LMP2/GT, ELMS et Asian Le Mans Series, Shanghai/Fuji/Monza, citation attribuée à Julien Schell, rôles « Team Principal » et « Ingénierie », 800 m², outillage homologué FIA, « Réponse sous 24h », « 64 canaux ».
- Trackday : box VIP et open-bar, moniteurs BPJEPS, « 5h à 7h open pitlane », « Calendrier européen régulier », « Inscriptions ouvertes 2025 ». Les circuits sont présentés comme des destinations à étudier, sans nombre de virages ni grade FIA.
- Event : atelier de 1500 m², motor-homes, BPJEPS, traiteur étoilé, hôtellerie 5 étoiles, « 100% Pro LMP/GT/monoplaces », liste de circuits, réponse garantie sous 24h, citation des dirigeants.
- Contact : « Réponse certifiée < 48h », horaires, « Devis gratuit », « Accueil VIP », « SSL 256-bit », temps de trajet précis. Les cartes de réassurance deviennent des liens vers Racing, Trackday et Event.
- Partout : compte Instagram (seul un lien Facebook est attesté, sans URL relevée).

Inférences signalées :

- « Direction d'écurie » pour Julien et Claude Schell (le site dit qu'ils accompagnent les pilotes depuis plus de 20 ans) ;
- « 100+ courses », tiré de « des centaines de courses » ;
- longueurs de circuits (Paul Ricard 5,8 km, Spa 7,0 km, Dijon 3,8 km, Magny-Cours 4,4 km, Nordschleife 20,8 km) : connaissances générales, à revérifier ;
- accès par la route, le train et l'aéroport de Strasbourg-Entzheim : description générale, sans durée.

## Images et logo

- `hero.webp`, `private.webp`, `corporate.webp` et `roadtrip.webp` ont été générés pour la version précédente.
- `prototype.webp` est un recadrage 4:5 de `hero.webp`.
- `team.webp`, `cockpit.webp`, `reception.webp`, `chateau.webp`, `pitstop.webp` et `celebration.webp` ont été générés le `2026-10-19` via Blueprint Studio (GPT Image 2.5, 1K). Ils ne contiennent ni logo ni texte et sont ré-encodés en WebP qualité 80.
- Toutes les photos sont des visuels d'intention fictifs ; une mention visible figure sous les galeries.
- Avec 11 visuels pour 5 pages, certaines images sont réutilisées avec des cadrages différents. Plus de visuels réduiraient ces répétitions.
- Les cartes circuits de Trackday utilisent des tracés SVG schématiques, marqués non contractuels, plutôt que des photos qui ne montreraient pas le vrai circuit.
- La page Contact intègre une carte Google Maps (iframe, chargement différé) centrée sur l'adresse publique.
- Les images de l'export Stitch ne sont pas utilisées : elles ne font que 512 px et montrent de faux logos Pegasus, des marques tierces et un palmarès fictif.
- `logo-pegasus.png` est l'emblème recadré du logo public du site (`wp-content/uploads/2024/08/logo-Pegasus-blanc-300x233.png`).

## Contenu et interactions

- Navigation complète entre les 5 pages, en-tête et pied de page ; page active indiquée par `aria-current`.
- Menu mobile accessible au clavier, fermeture par `Échap`.
- Les CTA renvoient vers `contact.html?sujet=racing|trackday`, ce qui présélectionne la catégorie du formulaire.
- Formulaires Event et Contact de démonstration : validation locale, compteur de caractères, aucune requête réseau, aucun stockage ni email.
- Animations : apparitions au scroll, parallaxe, compteurs, bandeau défilant (Racing). Toutes sont désactivées avec `prefers-reduced-motion`.
- Aucun prix, témoignage, nom de client ou événement réel n'est affirmé.

## Statut et validations

Prototype de prospection, accessible publiquement via GitHub Pages (`noindex`). Avant tout usage commercial :

- valider les formats proposés ;
- vérifier les droits sur le logo et les visuels ;
- définir la destination réelle du formulaire.

# Pegasus Racing — direction de la preview Event

## Source Stitch

- Projet MCP Stitch : `Pegasus Racing Website Redesign` — `projects/687836934108515302`.
- Écran de référence principal : `Event — Pegasus Racing` — `projects/687836934108515302/screens/f92c78f3c96745cbb9b28142a4b8101c`, format desktop `2560 × 13472`.
- Écran complémentaire : `Accueil — Pegasus Racing` — `projects/687836934108515302/screens/bea78438ab01471184530c74ecdd273b`, format desktop `2560 × 16444`.
- Design system Stitch : `High-End Motorsport Editorial`, récupéré le `2026-10-19`.

La maquette Event inspire le grand hero photographique, le contraste bleu nuit / surfaces claires, les cartes de formats, les repères numérotés et le rythme éditorial. La preview est reconstruite en HTML, CSS et JavaScript statiques ; elle ne dépend pas du code Tailwind exporté par Stitch.

## Intention

Présenter une piste de site vitrine pour l'univers événementiel de Pegasus Racing. Le ton est sportif, précis et accueillant. Le contenu décrit des **idées de formats**, sans affirmer qu'il s'agit de prestations confirmées ni d'événements déjà réalisés.

## Système visuel

| Usage | Valeur |
|---|---|
| Fond principal | `#061321` |
| Surface bleu nuit | `#0B1C2E` |
| Bleu d'action | `#1254A1` |
| Accent cyan | `#78D4EB` |
| Surface claire | `#F2F5F7` |
| Texte sombre | `#0B1C2E` |
| Titres | Space Grotesk |
| Corps | Montserrat |
| Repères techniques | Space Mono |

- Grille : largeur maximale `1320px`, marges latérales adaptées de `48px` à `18px`.
- Titres en capitales, hiérarchie ample et cadrage asymétrique ; filets fins pour la structure.
- Sur mobile, navigation repliée, formats empilés et contenu lisible sans défilement horizontal.
- Les mouvements sont limités aux retours d'interaction et sont réduits si `prefers-reduced-motion` est actif.

## Images

Les visuels `assets/hero.webp`, `private.webp`, `corporate.webp` et `roadtrip.webp` ont été générés pour cette preview le `2026-10-19`, en suivant la direction Stitch. Ils montrent des scènes fictives, sans logo, et ne doivent pas être présentés comme des photographies d'événements Pegasus Racing. Une mention visible figure sous les cartes.

Les images de l'export Stitch n'ont pas été intégrées dans la page : certaines contiennent des logos ou personnes fictifs susceptibles d'être pris pour des preuves réelles. Le logo de navigation est un monogramme typographique de démonstration, pas une reproduction du logo officiel.

## Contenu et interactions

- Sections : ouverture, concept, formats, vision, approche, contact.
- Liens internes fonctionnels ; menu mobile ouvrable et fermable au clavier.
- Formulaire de démonstration uniquement : soumission interceptée localement, sans requête réseau, stockage ni email.
- Aucun prix, chiffre de performance, nom de client, témoignage, calendrier, adresse ou coordonnée n'est publié.
- Aucun événement réel, service disponible ou résultat commercial n'est affirmé par cette preview.

## Statut et validations

Cette version est un prototype local. Avant une publication commerciale, confirmer le contenu métier, l'identité visuelle, les droits sur les visuels, les coordonnées, les mentions légales et la destination réelle du formulaire. La présence du dossier sous `docs/previews/` peut rendre ces fichiers accessibles si le dépôt est publié via GitHub Pages.

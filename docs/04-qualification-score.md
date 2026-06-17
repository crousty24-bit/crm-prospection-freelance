# Qualification et score

## Objectif

Le score aide a ordonner le travail. Il ne decide jamais automatiquement si un
prospect doit etre contacte.

## Informations obligatoires avant qualification

- nom de l'entreprise ;
- categorie ou secteur ;
- commune ou zone geographique ;
- source de decouverte ;
- date de verification ;
- etat de presence web ;
- besoin ou probleme observe ;
- au moins un moyen de contact professionnel public, ou la mention explicite
  qu'aucun moyen n'a ete trouve.

Pour un prospect importe, l'URL de la source est obligatoire.

Si la qualification repose sur l'absence de site, la fiche doit aussi conserver
la preuve que le protocole `docs/09-protocole-verification-site.md` a ete
execute integralement.

Si la qualification repose sur les faiblesses d'un site existant, la fiche doit
conserver ou referencer l'analyse conforme a
`docs/10-protocole-analyse-refonte.md`.

## Criteres proposes

| Critere | Points |
|---|---:|
| Aucun site officiel trouve apres protocole complet et reproductible | +30 |
| Site manifestement obsolete ou difficile a utiliser | +20 |
| Site non adapte au mobile | +15 |
| Absence de formulaire ou de contact clair sur le site | +10 |
| Activite dans un secteur cible | +15 |
| Entreprise dans la zone geographique prioritaire | +10 |
| Besoin concret et descriptible | +15 |
| Contact professionnel public disponible | +10 |
| Offre indicative clairement adaptee | +10 |
| Presence web correcte et recente | -25 |
| Besoin non identifiable | -15 |
| Donnees trop incertaines ou contradictoires | -20 |
| Contact commercial recent deja connu | -20 |

## Preuves attendues pour un site existant

### Site obsolete ou difficile a utiliser

Le critere exige au moins une faiblesse documentee qui affecte l'usage, la
comprehension ou une action essentielle. Une appreciation comme `design moche`
ou `site date` sans URL, contexte et observation reproductible vaut 0 point.

### Site non adapte au mobile

Le critere exige une observation dans un contexte mobile documente, par
exemple un debordement horizontal, un texte illisible sans zoom, une
navigation inutilisable ou un contenu masque. La seule anciennete supposee du
site vaut 0 point.

### Absence de formulaire ou de contact clair

Le critere exige l'examen de la page de contact ou la preuve de son absence,
ainsi que des pages principales applicables. Un formulaire casse, des
coordonnees difficiles a trouver ou l'absence de moyen de contact peuvent
justifier le critere.

Une mesure automatisee reste un indice et conserve son outil, sa page, sa date,
son profil d'execution et ses limites. Les consequences commerciales non
mesurees sont des inferences.

## Calcul

- le score brut est la somme des criteres applicables ;
- le score calcule est borne entre 0 et 100 ;
- chaque critere actif reste visible ;
- toute modification des donnees pertinentes recalcule le score.
- le critere `Aucun site officiel trouve` vaut 0 si l'etat est `incertain` ou
  `verification_impossible`, ou si le journal de verification est incomplet ;
- la decouverte ulterieure d'un site impose de retirer ces 30 points et
  d'evaluer les criteres propres au site existant.
- les criteres propres au site existant valent 0 si leurs preuves sont
  insuffisantes ou si l'analyse est `a_analyser`, `analyse_partielle` ou
  `analyse_impossible` ;
- le fichier de recherche ne calcule aucun second score : ces criteres sont
  appliques uniquement dans le score CRM apres import.

Niveaux proposes :

| Score | Priorite |
|---:|---|
| 70 a 100 | forte |
| 40 a 69 | moyenne |
| 0 a 39 | faible |

## Correction manuelle

L'utilisateur peut remplacer la priorite ou ajuster le score.

La correction exige :

- une justification ;
- la conservation du score calcule ;
- l'enregistrement du score final ;
- un evenement dans l'historique.

Le CRM doit donc distinguer `score_calcule` et `score_final`.

## Points a tester pendant l'usage

- le cumul de criteres proches ne survalorise-t-il pas l'absence de site ?
- les entreprises sans coordonnee publique remontent-elles trop haut ?
- le secteur et la zone ont-ils un poids suffisant ?
- les seuils correspondent-ils aux choix reels de prospection ?

Les poids doivent etre ajustes a partir des premiers prospects traites.

# Protocole de verification d'un site officiel

## Objectif

Eviter les faux negatifs lors d'une recherche de prospects fondee sur l'absence
de site. OpenStreetMap et Overpass servent a decouvrir des etablissements, pas a
prouver qu'ils ne possedent pas de site.

La precision prime sur le volume. Une verification incomplete produit
`incertain`, jamais `aucun_site_trouve`.

## Definition d'un site officiel

Un site officiel est une page web controlee, revendiquee ou publiee pour le
compte de l'entreprise et dont l'attribution peut etre verifiee.

Sont inclus :

- un domaine propre ;
- une page officielle sur un sous-domaine ou une plateforme comme Eatbu,
  Wifeo ou un fournisseur de site ;
- une page d'une marque mere consacree explicitement a l'etablissement.

Les pages de reseaux sociaux, annuaires, communes et plateformes touristiques
ne sont pas elles-memes des sites officiels. Elles doivent toutefois etre
controlees car elles peuvent contenir un lien vers le site officiel.

## Phase 1 - Decouverte geographique

Utiliser des sources ouvertes ou autorisees pour constituer une liste initiale :

- OpenStreetMap et Overpass ;
- annuaires institutionnels ;
- donnees publiques ou API autorisees ;
- sites de communes et organismes sectoriels.

Les donnees de cette phase sont des indices. L'absence de champ `website` ne
permet aucune conclusion sur la presence web.

## Phase 2 - Resolution d'identite

Avant de rechercher un site, etablir autant que possible :

- nom commercial actuel ;
- raison sociale eventuelle ;
- adresse commerciale actuelle ;
- commune ;
- telephone et email professionnels ;
- variantes du nom sans accents, apostrophes, tirets ou suffixes ;
- ancienne enseigne, marque mere ou reseau eventuel ;
- identifiant stable de la source, lorsqu'il existe.

Toute contradiction importante entre le nom, l'adresse ou l'activite doit etre
consignee. Si l'identite reste ambigue, l'etat final est `incertain`.

## Phase 3 - Recherche web obligatoire

Executer et consigner les requetes applicables suivantes :

1. `"nom exact" commune` ;
2. `"nom exact" adresse` ;
3. `"nom exact" telephone` lorsqu'un telephone est disponible ;
4. `"raison sociale" commune` lorsqu'elle est connue ;
5. variantes du nom avec accents, apostrophes et suffixes retires ;
6. marque mere ou ancienne enseigne avec la commune.

Examiner ensuite les liens sortants trouves sur :

- les reseaux sociaux attribuables a l'entreprise ;
- les annuaires et fiches cartographiques ;
- les pages de communes et organismes institutionnels ;
- les plateformes sectorielles, touristiques ou de reservation.

Chaque requete et chaque URL plausible examinee doivent rester dans le fichier
de recherche, y compris lorsqu'une URL est rejetee.

## Phase 4 - Attribution d'un site

Un site est attribue a l'entreprise dans l'un des cas suivants :

- au moins deux correspondances sont verifiees parmi le nom, l'adresse, le
  telephone, l'email et les mentions legales ;
- un lien vers le site provient d'une presence officielle clairement
  attribuable a l'entreprise ;
- l'utilisateur identifie explicitement l'URL comme site officiel, avec cette
  validation humaine conservee comme preuve.

La fiche doit preciser les criteres de correspondance. Un nom ressemblant ou la
seule proximite geographique ne suffisent pas. Une contradiction d'adresse,
d'activite ou de coordonnees reste documentee meme apres validation humaine.

## Etats de verification

### `site_officiel_trouve`

Un site a ete attribue selon les regles ci-dessus. Enregistrer son URL, son type
de presence et les preuves d'attribution.

### `aucun_site_trouve`

Toutes les etapes applicables ont ete executees et documentees. Aucun site
attribuable n'a ete trouve et aucun domaine plausible ne reste non resolu.

Cette conclusion est une inference datee, pas une preuve absolue.

### `incertain`

Utiliser cet etat si :

- l'identite de l'entreprise est ambigue ;
- une etape obligatoire reste incomplete sans blocage technique ou juridique
  definitif ;
- un domaine plausible ne peut pas etre attribue ou rejete ;
- les sources se contredisent ;
- le journal de verification est incomplet.

### `verification_impossible`

Utiliser cet etat lorsqu'une contrainte technique ou juridique empeche la
verification, ou lorsque les informations disponibles ne permettent pas de
lancer les recherches minimales.

Si les recherches minimales ont pu etre lancees mais restent non concluantes,
utiliser `incertain`.

## Checklist obligatoire

Avant `aucun_site_trouve`, toutes les cases applicables doivent etre cochees :

- [ ] identite normalisee ;
- [ ] adresse et commune controlees ;
- [ ] raison sociale ou mention `inconnue` documentee ;
- [ ] variantes du nom recherchees ;
- [ ] requetes par nom et commune executees ;
- [ ] requete par adresse executee ;
- [ ] requete par telephone executee ou telephone indisponible documente ;
- [ ] requete par raison sociale executee ou raison sociale inconnue documentee ;
- [ ] liens sortants des presences tierces controles ;
- [ ] URLs plausibles acceptees ou rejetees avec motif ;
- [ ] aucune contradiction non resolue ;
- [ ] date et sources de verification enregistrees.

Une case obligatoire non traitee impose `incertain`, sauf blocage technique ou
juridique documente imposant `verification_impossible`.

## Regles avant import et score

- un candidat `incertain` ou `verification_impossible` ne peut pas etre importe
  sur le motif qu'il ne possede pas de site ;
- les points lies a l'absence de site ne sont applicables qu'avec
  `aucun_site_trouve` et une checklist complete ;
- le journal de verification est copie ou reference dans la fiche prospect ;
- toute nouvelle information sur un site declenche une mise a jour, un
  recalcul du score et un evenement historique.

## Cas de controle

Les cas de controle publics doivent rester generiques et ne jamais contenir de
donnee reelle de prospection.

| Situation | Resultat attendu |
|---|---|
| Site relie depuis une presence officielle attribuable | `site_officiel_trouve` |
| Site avec nom, adresse et telephone concordants | `site_officiel_trouve` |
| Page officielle hebergee sur une plateforme de site | `site_officiel_trouve` |
| Recherches completes sans domaine attribuable | `aucun_site_trouve` |
| Identite contradictoire ou recherches minimales incompletes | `incertain` |

Un cas dont l'identite ou les recherches minimales ne peuvent pas etre
terminees doit produire `incertain`.

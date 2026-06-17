# Protocole d'analyse d'une opportunite de refonte

## Objectif

Evaluer un site officiel existant sans confondre presence web, qualite du site
et decision commerciale.

Un site officiel trouve exclut la piste prioritaire de creation d'un premier
site, mais il peut ouvrir une piste de refonte. Cette piste exige des constats
dates, sources et reproductibles. Un jugement esthetique isole ne suffit pas.

Le protocole `docs/09-protocole-verification-site.md` reste obligatoire et
precede toujours cette analyse. Aucun site ne doit etre analyse comme site de
l'entreprise tant que son attribution reste `incertain`.

## Conditions d'entree

L'analyse de refonte s'applique lorsque :

- l'etat du site est `site_officiel_trouve` ;
- l'URL a ete attribuee selon `docs/09-protocole-verification-site.md` ;
- aucune exclusion explicite ne dispense de la preanalyse.

Pour `aucun_site_trouve`, l'etat d'analyse est `non_applicable` et
l'orientation commerciale peut etre `creation_site`.

Pour `incertain` ou `verification_impossible`, l'orientation reste
`indeterminee` et aucune conclusion de refonte n'est autorisee.

## Dimensions independantes

### Orientation commerciale

- `creation_site` : aucun site officiel trouve apres protocole complet ;
- `refonte_site` : site officiel trouve et refonte recommandee ;
- `aucune` : aucune opportunite retenue ou exclusion commerciale ;
- `indeterminee` : donnees ou analyse insuffisantes.

### Etat de l'analyse de refonte

- `non_applicable` : aucun site attribue a analyser ;
- `a_analyser` : site attribue, preanalyse non terminee ;
- `analyse_partielle` : analyse commencee mais insuffisante pour conclure ;
- `refonte_recommandee` : criteres de selection remplis ;
- `refonte_non_prioritaire` : analyse suffisante sans faiblesse justifiant une
  prospection de refonte ;
- `analyse_impossible` : contrainte technique durable ou juridique documentee
  empechant l'analyse.

### Decision de recherche

- `a_verifier` : candidat non valide ou analyse incomplete ;
- `a_importer` : validation humaine explicite pour import ;
- `importe` : fiche prospect creee et referencee ;
- `non_retenu` : resultat conserve mais ecarte avec motif.

Ces trois dimensions ne doivent pas etre deduites silencieusement l'une de
l'autre. `site_officiel_trouve` ne signifie jamais automatiquement
`non_retenu`.

## Niveau 1 - Preanalyse systematique

Examiner au minimum la page d'accueil et, lorsqu'elles existent, une page
d'offre et la page de contact. Consigner pour chaque page l'URL, la date et le
contexte d'observation.

Verifier :

- accessibilite du site et chargement des pages principales ;
- fonctionnement general de la navigation ;
- affichage sur une largeur mobile et sur ordinateur ;
- clarte de l'activite, de la zone et de l'offre ;
- visibilite des coordonnees ou d'un moyen de contact ;
- presence d'un appel a l'action adapte a l'activite ;
- signes manifestes d'informations ou de composants obsoletes.

Si aucun signal important n'est observe et que la preanalyse est complete,
classer `refonte_non_prioritaire`.

Si au moins un signal plausible est observe, poursuivre avec l'audit
approfondi. Si la preanalyse ne peut pas etre terminee, utiliser
`analyse_partielle` ou `analyse_impossible`.

Une indisponibilite temporaire ou une erreur ponctuelle produit
`analyse_partielle`. `analyse_impossible` est reserve a un blocage durable,
reproductible ou juridique qui empeche l'analyse.

## Niveau 2 - Audit approfondi

### Mobile et responsive

Rechercher notamment :

- debordement horizontal ;
- texte ou controles illisibles sans zoom ;
- navigation ou formulaire inutilisable sur mobile ;
- contenu masque, superpose ou tronque ;
- mise en page ne s'adaptant pas a la largeur disponible.

### Navigation et utilisabilite

Rechercher notamment :

- architecture ou libelles ambigus ;
- actions essentielles difficiles a trouver ;
- parcours incoherent entre les pages ;
- erreurs empechant d'acceder a une information importante.

### Clarte et pertinence du contenu

Verifier si le site permet d'identifier :

- l'activite et les services ;
- la zone desservie ou l'adresse ;
- les informations utiles a la decision du visiteur ;
- les coordonnees, horaires ou modalites pertinentes.

### Conversion et prise de contact

Rechercher notamment :

- absence de moyen de contact clair ;
- formulaire casse ou inutilisable ;
- appel a l'action absent, ambigu ou inadapte ;
- coordonnees importantes difficiles a trouver.

### Technique

Rechercher notamment :

- erreurs de chargement ;
- pages ou liens internes casses ;
- probleme HTTPS visible ;
- fonctionnalite essentielle defaillante ;
- lenteur importante constatee dans un contexte documente.

Une mesure automatisee de performance reste un indice. Elle doit conserver
l'outil, la page, la date, le profil d'execution et ses limites.

### Referencement de base

Rechercher notamment :

- titre de page absent ou non descriptif ;
- structure de titres incoherente ;
- contenu principal insuffisamment descriptif ;
- pages essentielles sans information exploitable.

Ces observations ne constituent pas un audit SEO exhaustif.

### Actualite des informations

Rechercher des preuves explicites :

- horaires ou coordonnees contredits par une source actuelle ;
- dates, offres ou actualites manifestement perimees ;
- mentions d'une ancienne adresse ou d'une activite abandonnee.

Une absence de contenu recent ne prouve pas, seule, que le site est obsolete.

### Coherence visuelle

Decrire uniquement des observations reproductibles :

- contraste insuffisant ;
- typographie difficile a lire ;
- images deformees ou de mauvaise qualite ;
- mise en page cassee ou incoherente ;
- composants visuels qui nuisent a la comprehension.

Les formulations comme `design moche` ou `site date` sans preuve observable
sont interdites.

## Gravite des faiblesses

- `critique` : bloque une action essentielle ou rend une information
  indispensable inaccessible ;
- `importante` : degrade nettement l'usage, la comprehension ou la conversion
  sans bloquer totalement le parcours ;
- `mineure` : amelioration souhaitable sans impact commercial suffisamment
  etabli.

Chaque faiblesse doit indiquer son axe, sa gravite, sa preuve et sa consequence
probable. Une consequence non mesuree reste une inference, jamais un fait.

## Regle de selection

Utiliser `refonte_recommandee` uniquement si toutes les conditions suivantes
sont remplies :

- le site est officiellement attribue ;
- la preanalyse et les axes applicables de l'audit sont suffisamment
  documentes ;
- une faiblesse `critique`, ou au moins deux faiblesses `importante` sur des
  axes distincts, sont etablies ;
- le besoin de refonte peut etre formule concretement ;
- aucune opposition connue a la prospection n'est presente.

Les faiblesses mineures ne se cumulent pas pour atteindre ce seuil. Un jugement
esthetique isole ne peut pas produire `refonte_recommandee`.

Si le seuil n'est pas atteint apres une analyse suffisante, utiliser
`refonte_non_prioritaire` et l'orientation `aucune`.

Si l'analyse est incomplete, utiliser `analyse_partielle` avec l'orientation
`indeterminee`. Un tel resultat ne peut pas etre importe sur le motif d'une
refonte.

Une opposition connue a la prospection impose l'orientation `aucune` et la
decision `non_retenu`, meme si le site presente des faiblesses.

## Donnees a conserver

Pour chaque analyse :

- URL du site et pages examinees ;
- date de verification ;
- contexte `desktop`, `mobile` ou outil automatise documente ;
- constats factuels ;
- axe et gravite de chaque faiblesse ;
- preuve ou methode de reproduction ;
- consequence probable, identifiee comme inference ;
- limites, pages non examinees et inconnues ;
- besoin de refonte propose ;
- offre indicative ;
- etat de l'analyse, orientation commerciale et decision.

## Checklist avant `refonte_recommandee`

- [ ] site officiellement attribue ;
- [ ] page d'accueil examinee ;
- [ ] page d'offre examinee ou absence documentee ;
- [ ] page de contact examinee ou absence documentee ;
- [ ] contexte desktop documente ;
- [ ] contexte mobile documente ;
- [ ] constats dates et rattaches a leurs URLs ;
- [ ] gravite justifiee pour chaque faiblesse retenue ;
- [ ] seuil d'une faiblesse critique ou de deux faiblesses importantes sur des
      axes distincts atteint ;
- [ ] besoin concret et descriptible ;
- [ ] opposition a la prospection recherchee et non connue ;
- [ ] limites et inconnues enregistrees.

Une case applicable non traitee impose `analyse_partielle`, sauf blocage
technique ou juridique documente imposant `analyse_impossible`.

## Import et score

- aucune analyse ne provoque un import automatique ;
- `refonte_recommandee` reste en `a_verifier` avant validation humaine ;
- un import motive par la refonte exige `refonte_recommandee` ;
- les preuves sont copiees ou referencees dans la fiche prospect ;
- l'offre indicative est `refonte_legere` si le besoin est circonscrit, sinon
  `besoin_a_definir` ;
- aucun second score de recherche n'est calcule ;
- le score CRM reutilise les criteres de
  `docs/04-qualification-score.md`.

## Conservation de l'historique

Les recherches existantes ne sont pas reecrites automatiquement. Une analyse
ulterieure est consignee dans une recherche complementaire datee qui reference
la recherche initiale et conserve sa decision historique.

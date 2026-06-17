# Recherche et import de prospects

## Objectif

Repondre a une demande comme :

> Trouve les entreprises d'un secteur donne dans une zone definie pour
> lesquelles aucun site officiel n'a ete trouve.

Le resultat est une liste de candidats a verifier, pas une affirmation
exhaustive.

Le protocole `docs/09-protocole-verification-site.md` est obligatoire pour
toute recherche qui utilise la presence ou l'absence d'un site comme critere.
Lorsqu'un site officiel est trouve, `docs/10-protocole-analyse-refonte.md`
determine s'il existe une opportunite de refonte. La presence du site, sa
qualite et la decision commerciale restent trois informations distinctes.

## Parametres d'une recherche

- activite ou categorie ;
- centre geographique ;
- rayon, communes ou zone ;
- nombre maximal de resultats ;
- criteres d'exclusion ;
- date de recherche.

## Sources

Pour la decouverte geographique, utiliser en priorite :

- API officielles ou ouvertes ;
- donnees publiques autorisees ;
- OpenStreetMap et services compatibles ;
- annuaires ou sites institutionnels.

Pour la verification, utiliser le moteur de recherche, les presences tierces et
les sites officiels supposes selon `docs/09-protocole-verification-site.md`.

OpenStreetMap et Overpass servent uniquement a constituer et localiser le lot
initial. Leurs champs ne suffisent pas a conclure sur la presence web.

Les conditions d'utilisation et limites techniques de chaque source doivent
etre verifiees avant automatisation. Le scraping direct n'est pas autorise par
defaut lorsqu'une source l'interdit ou fournit une API adaptee.

## Donnees collectees

- nom de l'entreprise ;
- categorie ;
- adresse et commune ;
- coordonnees geographiques si disponibles ;
- telephone professionnel public ;
- email professionnel public ;
- URL du site eventuellement trouve ;
- URL de la source ;
- date de verification ;
- resultat de la verification du site ;
- niveau de confiance ;
- identite normalisee et variantes recherchees ;
- requetes web executees ;
- URLs examinees et motif d'acceptation ou de rejet ;
- liens sortants controles ;
- criteres d'attribution du site ;
- checklist du protocole ;
- orientation commerciale ;
- etat de l'analyse de refonte ;
- pages examinees et contextes desktop ou mobile ;
- faiblesses observees, axe, gravite et preuve ;
- consequences probables distinguees des faits ;
- besoin de refonte et offre indicative ;
- decision de recherche ;
- notes.

## Etat de verification du site

- `site_officiel_trouve` ;
- `aucun_site_trouve` ;
- `incertain` ;
- `verification_impossible`.

Les definitions et conditions d'emploi de ces etats sont celles de
`docs/09-protocole-verification-site.md`.

Une page officielle hebergee sur Eatbu, Wifeo ou un autre sous-domaine
fournisseur compte comme `site_officiel_trouve` si elle est attribuable a
l'entreprise.

## Orientation commerciale

- `creation_site` : `aucun_site_trouve` apres protocole complet ;
- `refonte_site` : `site_officiel_trouve` et `refonte_recommandee` ;
- `aucune` : aucune opportunite retenue ou exclusion commerciale ;
- `indeterminee` : verification ou analyse insuffisante.

## Etat de l'analyse de refonte

- `non_applicable` ;
- `a_analyser` ;
- `analyse_partielle` ;
- `refonte_recommandee` ;
- `refonte_non_prioritaire` ;
- `analyse_impossible`.

Les definitions, le seuil de selection et les preuves obligatoires sont ceux de
`docs/10-protocole-analyse-refonte.md`.

Un site officiel trouve passe en `a_analyser`, sauf exclusion explicite. Il
n'est jamais ecarte automatiquement du seul fait de son existence.

## Decision de recherche

- `a_verifier` ;
- `a_importer` ;
- `importe` ;
- `non_retenu`.

La decision reste independante de l'etat du site et de l'etat de l'analyse.
Seule une validation humaine explicite permet `a_importer`.

## Deroulement

1. Decouvrir les etablissements correspondant a l'activite et a la zone.
2. Resoudre l'identite de chaque etablissement.
3. Executer le protocole de verification du site.
4. Orienter `aucun_site_trouve` vers `creation_site`.
5. Pour `site_officiel_trouve`, executer la preanalyse puis l'audit approfondi
   lorsqu'un signal est detecte.
6. Enregistrer les requetes, URLs, pages, contextes, preuves, sources et niveau
   de confiance.
7. Detecter les doublons dans les resultats et dans le CRM.
8. Laisser `incertain` toute verification de site incomplete ou ambigue.
9. Laisser `analyse_partielle` toute analyse de refonte insuffisante et
   `analyse_impossible` tout blocage technique ou juridique documente.
10. Presenter une liste de validation.
11. Importer uniquement les prospects selectionnes et eligibles.
12. Creer un evenement d'import pour chaque fiche.

## Selection pour une refonte

`refonte_recommandee` exige :

- un site officiellement attribue ;
- une analyse suffisamment complete ;
- une faiblesse critique ou deux faiblesses importantes sur des axes
  distincts ;
- un besoin concret et descriptible ;
- aucune opposition connue a la prospection.

Un jugement esthetique isole, des faiblesses seulement mineures ou une analyse
incomplete ne permettent pas cette conclusion.

## Deduplication

Comparer au minimum :

- nom normalise et commune ;
- adresse ;
- telephone ;
- domaine web ;
- identifiant stable fourni par la source.

Aucun doublon incertain ne doit etre fusionne automatiquement.

## Garde-fous

- pas de collecte massive sans limite explicite ;
- pas de contournement de protection technique ;
- pas d'envoi automatique apres import ;
- respect immediat du statut `ne_plus_contacter` ;
- validation humaine obligatoire avant import dans la V1.
- pas d'import motive par l'absence de site avec l'etat `incertain` ou
  `verification_impossible` ;
- pas d'import motive par la refonte avec `a_analyser`, `analyse_partielle` ou
  `analyse_impossible` ;
- pas de recommandation de refonte fondee uniquement sur une appreciation
  esthetique ;
- pas de second score dans le fichier de recherche ;
- une opposition connue a la prospection impose `orientation_commerciale:
  aucune` et `decision: non_retenu` ;
- pas de conclusion negative sans journal de verification reproductible.

Les recherches historiques ne sont pas reecrites automatiquement. Une nouvelle
analyse est conservee dans une recherche complementaire datee qui reference la
recherche initiale.

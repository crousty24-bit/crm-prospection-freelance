# Workflow operationnel fonde sur les prompts

## Objectif

Permettre a un agent de traiter des demandes en utilisant le depot comme source
de verite, avant la creation d'une application visuelle.

## Types de demandes

| Intention | Exemple | Sortie principale |
|---|---|---|
| Rechercher | Trouve des restaurants sans site dans une zone | Fichier de recherche |
| Importer | Importe les candidats valides | Fiches prospects |
| Qualifier | Evalue et priorise ces prospects | Fiches et evenements |
| Previsualiser | Prepare une preview commerciale pour une fiche validee | Fiche, preview statique et evenement |
| Enregistrer | J'ai envoye ce message aujourd'hui | Fiche et evenement |
| Planifier | Relance ce prospect dans 7 jours | Prochaine action |
| Cloturer | Le prospect refuse | Statut et evenement |
| Rapporter | Que dois-je faire aujourd'hui ? | Rapport date |

## Workflow 1 - Recherche assistee

1. Reformuler les parametres : activite, zone, limite et exclusions.
2. Creer une recherche depuis `templates/recherche-prospects.md`.
3. Decouvrir les entreprises avec les sources autorisees.
4. Resoudre leur identite avant toute conclusion sur leur presence web.
5. Executer `docs/09-protocole-verification-site.md` pour chaque candidat.
6. Orienter `aucun_site_trouve` vers `creation_site`.
7. Pour `site_officiel_trouve`, executer la preanalyse puis, si un signal est
   detecte, l'audit de `docs/10-protocole-analyse-refonte.md`.
8. Conserver separement l'etat du site, l'etat de l'analyse de refonte,
   l'orientation commerciale et la decision de recherche.
9. Consigner les requetes, URLs examinees, pages analysees, preuves et dates.
10. Classer `incertain` toute verification de site incomplete ou ambigue et
    `analyse_partielle` toute analyse de refonte insuffisante.
11. Comparer avec `workspace/prospects/` et les recherches existantes.
12. Marquer les doublons et laisser les candidats non valides en `a_verifier`.
13. Presenter la recherche pour validation.

Resultat : aucun prospect n'est importe automatiquement.

`site_officiel_trouve` n'est pas un motif automatique de rejet. Il exclut la
piste `creation_site`, puis ouvre la preanalyse de l'opportunite
`refonte_site`, sauf exclusion explicite.

## Workflow 2 - Validation et import

1. Lire le fichier de recherche indique.
2. Ne retenir que les candidats explicitement marques `a_importer`.
3. Verifier une derniere fois l'identite, les donnees obligatoires et les
   doublons.
4. Refuser l'import motive par l'absence de site si l'etat est `incertain` ou
   `verification_impossible`.
5. Verifier que le journal du protocole est complet avant d'accepter
   `aucun_site_trouve`.
6. Pour un import motive par la refonte, exiger `refonte_recommandee`, la
   checklist applicable complete et les preuves datees.
7. Refuser l'import motive par la refonte si l'analyse est `a_analyser`,
   `analyse_partielle` ou `analyse_impossible`.
8. Verifier qu'aucune opposition connue a la prospection n'est presente.
9. Creer une fiche depuis `templates/fiche-prospect.md`.
10. Copier ou referencer les preuves de verification du site et, le cas
    echeant, de l'analyse de refonte.
11. Calculer le score critere par critere sans ajouter de second score de
    recherche.
12. Ajouter l'evenement `import_recherche`.
13. Passer la fiche a `nouveau`, puis a `a_qualifier` si des informations
   obligatoires manquent.
14. Marquer le candidat `importe` et ajouter le chemin de sa fiche.

## Workflow 3 - Qualification

1. Verifier les informations obligatoires.
2. Appliquer les criteres de `docs/04-qualification-score.md`.
3. N'accorder les points d'absence de site qu'apres protocole complet.
4. N'accorder les points propres a un site existant qu'avec des preuves
   conformes a `docs/10-protocole-analyse-refonte.md`.
5. Ecrire le detail du calcul dans la fiche.
6. Conserver le score entre 0 et 100.
7. Mettre `score_final` egal a `score_calcule` en l'absence de correction.
8. Ajouter un evenement `score_recalcule`.
9. Passer a `qualifie` uniquement si les donnees sont suffisantes.

## Workflow 4 - Preview commerciale

1. Identifier une fiche prospect existante dans `workspace/prospects/`.
2. Verifier que le statut n'est pas `gagne`, `perdu` non reactive ou
   `ne_plus_contacter`.
3. Extraire depuis la fiche un brief court : secteur, probleme observe, besoin
   suppose, offre indicative, ton, sections utiles et CTA.
4. Produire ou importer une direction visuelle depuis Stitch, puis la
   reconstruire proprement avec Codex.
5. Creer uniquement une preview statique sous :

```text
docs/previews/slug-prospect/
  index.html
  style.css
  index.js
  assets/
```

6. Verifier que la preview s'ouvre localement, reste responsive, ne contient
   pas de donnees sensibles, de prix personnalise, d'audit humiliant, de fausse
   promesse ou d'asset repris sans autorisation.
7. Publier via GitHub Pages depuis `main` et le dossier `/docs`.
8. Enregistrer dans la fiche l'URL publique, la date de publication, la date
   d'expiration et les limites.
9. Ajouter un evenement `preview_creee` ou `preview_publiee`.
10. Archiver ou supprimer la preview apres expiration et ajouter
    `preview_archivee`.

La page `docs/index.html` reste neutre et ne liste pas les previews. Une
preview commerciale ne constitue jamais un contact : le statut `contacte`
exige toujours un envoi reel.

URL attendue :

```text
https://<user>.github.io/<repo>/previews/<slug-prospect>/
```

## Workflow 5 - Enregistrement d'une interaction

1. Identifier sans ambiguite le prospect.
2. Extraire le fait, la date, le canal et le resultat depuis le prompt.
3. Mettre a jour l'etat courant de la fiche.
4. Ajouter un evenement depuis `templates/evenement.md`.
5. Appliquer la transition de statut si elle est justifiee.
6. Definir la prochaine action ou signaler son absence.

Un brouillon ne constitue jamais un contact. `contacte` exige un envoi reel.

## Workflow 6 - Relances

1. Lire les prochaines actions des fiches actives.
2. Exclure `gagne`, `perdu` non reactive et `ne_plus_contacter`.
3. Classer les actions :
   - `a_venir` avant la date ;
   - `due_aujourdhui` le jour prevu ;
   - `en_retard` a partir du lendemain.
4. Ne jamais deduire qu'une relance a ete envoyee.
5. Generer un rapport depuis `templates/rapport-quotidien.md`.

Par defaut, la vue a venir couvre 14 jours. Cette valeur reste une decision
provisoire.

## Workflow 7 - Cloture ou reactivation

- `gagne` : ajouter l'evenement et arreter le suivi CRM ;
- `perdu` : exiger un motif et supprimer toute prochaine relance ;
- `ne_plus_contacter` : exiger un motif, supprimer toute relance et interdire
  toute nouvelle action commerciale ;
- reactivation : seulement de `perdu` vers `a_qualifier`, avec motif et nouvel
  evenement.

## Controle de fin de traitement

- les sources externes sont-elles presentes et datees ?
- le journal de verification du site est-il reproductible ?
- si un site officiel a ete trouve, sa preanalyse est-elle presente ou son
  exclusion est-elle justifiee ?
- une recommandation de refonte respecte-t-elle le seuil et la checklist du
  protocole ?
- un etat negatif incomplet a-t-il bien ete classe `incertain` ?
- la fiche contient-elle un identifiant et un slug uniques ?
- le statut respecte-t-il le pipeline ?
- chaque changement est-il historise ?
- une preview publiee contient-elle uniquement des informations partageables
  publiquement ?
- la prochaine action est-elle coherente avec le statut ?
- un doublon possible reste-t-il non resolu ?
- une validation humaine est-elle encore requise ?

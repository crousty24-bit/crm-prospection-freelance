# Instructions agent - CRM de prospection

## Role du depot

Ce depot est la source de verite du MVP personnel de CRM de prospection
automatise d'Allen, actuellement en phase de test. Il sert a transformer des
demandes en recherches tracables, fiches prospects, previews commerciales,
evenements et rapports.

## Ordre de lecture

Avant toute action :

1. lire ce fichier ;
2. lire `docs/08-workflow-operationnel.md` ;
3. pour toute recherche, lire `docs/09-protocole-verification-site.md` ;
4. lire uniquement les autres documents metier utiles dans `docs/` ;
5. inspecter les fichiers de travail concernes ;
6. annoncer les fichiers qui seront crees ou modifies.

## Sources de verite

- `docs/` contient les regles metier ;
- `workspace/prospects/` contient les fiches prospects validees ;
- `workspace/recherches/` contient les recherches et candidats non valides ;
- `workspace/rapports/` contient des vues calculees, jamais la source primaire ;
- `templates/` contient des modeles et ne doit pas etre traite comme une donnee.
- `docs/previews/` contient les previews statiques publiees via GitHub Pages.

Le depot peut etre public pour permettre GitHub Pages. `docs/` et
`docs/previews/` doivent donc etre consideres comme publics. `workspace/` est un
stockage local prive et ne doit jamais etre commit.

En cas de contradiction, ne pas inventer. Signaler le conflit et appliquer le
document metier le plus precis apres validation de l'utilisateur.

## Regles obligatoires

- Ne jamais inventer une entreprise, une coordonnee, une source ou une action.
- Distinguer explicitement fait verifie, inference et information inconnue.
- Conserver l'URL et la date de verification de toute donnee externe.
- Une affirmation negative non reproductible reste `incertain`.
- L'absence de champ `website` dans une source ne prouve jamais l'absence de
  site.
- Appliquer integralement `docs/09-protocole-verification-site.md` avant
  d'utiliser `aucun_site_trouve`.
- Utiliser la date ISO `YYYY-MM-DD` et l'heure locale `Europe/Paris`.
- Utiliser un slug stable en minuscules : `nom-entreprise-ville`.
- Rechercher un doublon avant de creer une fiche.
- Ne jamais envoyer de message ni contacter un prospect.
- Ne jamais commiter `workspace/`.
- Ne jamais mettre de donnee sensible, note interne, prix personnalise ou audit
  humiliant dans `docs/` ou dans une preview publiee.
- Ne jamais importer un resultat de recherche sans validation explicite.
- Ne jamais planifier de relance pour `ne_plus_contacter`.
- Ne jamais modifier silencieusement un evenement historique.
- Conserver le score calcule lorsqu'un score final est corrige manuellement.
- S'arreter au statut `gagne`.

## Actions autorisees selon le prompt

### Analyser

Lire et restituer sans modifier les donnees.

### Rechercher

Creer ou mettre a jour un fichier dans `workspace/recherches/`. Ne pas creer de
fiche prospect tant que les candidats ne sont pas marques `a_importer` ou
explicitement valides par l'utilisateur. Conserver le journal des requetes,
URLs examinees et preuves d'attribution ou de rejet.

### Importer

Creer une fiche dans `workspace/prospects/` depuis un candidat valide. Ajouter
un evenement `import_recherche`, calculer le score et conserver les sources.
Ne pas importer sur le motif d'absence de site si l'etat est `incertain` ou
`verification_impossible`.

### Mettre a jour

Modifier l'etat courant d'une fiche et ajouter un evenement correspondant. Ne
pas reecrire les evenements passes.

### Previsualiser

Creer ou mettre a jour une preview commerciale statique dans
`docs/previews/<slug-prospect>/` depuis une fiche prospect existante. Une
preview ne constitue jamais un contact commercial et ne fait pas passer le
prospect a `contacte`.

### Rapporter

Generer un fichier date dans `workspace/rapports/` a partir des fiches. Signaler
les donnees incoherentes ou incompletes separement.

## Validation humaine requise

Demander une validation avant :

- import d'un candidat de recherche ;
- fusion de doublons incertains ;
- passage a `gagne`, `perdu` ou `ne_plus_contacter` si le prompt ne l'ordonne
  pas explicitement ;
- correction manuelle du score sans justification fournie ;
- modification d'une regle dans `docs/`.

## Format des sorties

Utiliser les templates du depot. Ne supprimer aucun champ : employer `null`,
`[]` ou `inconnu` lorsque l'information manque.

En fin de traitement, indiquer :

- les fichiers crees ou modifies ;
- les faits etablis ;
- les incertitudes ;
- les validations encore requises ;
- la prochaine action operationnelle.

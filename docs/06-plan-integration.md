# Plan d'integration de la V1

## Vue d'ensemble

La mise en place suit des tranches fonctionnelles verifiables. Le choix de la
technologie intervient apres validation des regles metier et d'un prototype de
stockage.

## Phase 0 - Valider la specification

### Tache 0.1 - Relire les regles metier

**Acceptation :**

- les statuts ont une signification non ambigue ;
- les transitions et les statuts terminaux sont approuves ;
- les regles de retard et de relance sont approuvees.

**Verification :** simuler manuellement trois parcours : sans reponse,
interesse puis gagne, perdu puis reactive.

### Tache 0.2 - Valider le score initial

**Acceptation :**

- chaque critere peut etre determine depuis une fiche ;
- les criteres proches ne sont pas contradictoires ;
- la correction manuelle est tracable.

**Verification :** scorer manuellement dix prospects representatifs.

## Phase 1 - Choisir le support local

### Tache 1.1 - Comparer web local et desktop

Comparer au minimum :

- installation et lancement ;
- stockage et sauvegarde ;
- acces au systeme de fichiers ;
- maintenance ;
- possibilite future d'executer les recherches ;
- complexite de distribution.

**Acceptation :** une decision technique argumentee est ajoutee au depot.

### Tache 1.2 - Definir le stockage

Le stockage devra prendre en charge :

- fiches prospects ;
- evenements d'historique ;
- actions et relances ;
- recherches externes et sources ;
- regles de score.

**Acceptation :** le modele permet une fiche unique par prospect sans perdre la
chronologie ni les sources.

## Phase 2 - Premier flux prospect

### Tache 2.1 - Creer et consulter une fiche

**Acceptation :**

- une fiche contient les informations obligatoires ;
- sa creation genere un evenement ;
- elle peut etre retrouvee et consultee.

### Tache 2.2 - Qualifier un prospect

**Acceptation :**

- le score est calcule automatiquement ;
- le detail des criteres est visible ;
- une correction manuelle motivee est possible.

### Tache 2.3 - Faire progresser le pipeline

**Acceptation :**

- seules les transitions autorisees sont acceptees ;
- `contacte` correspond a un envoi reel ;
- chaque transition est historisee.

### Point de controle

Un prospect peut etre cree, qualifie, contacte puis cloture sans modifier
directement les donnees de stockage.

## Phase 3 - Suivi des actions

### Tache 3.1 - Ajouter des evenements

**Acceptation :**

- les types prevus peuvent etre ajoutes ;
- la chronologie est ordonnee ;
- les corrections ne suppriment pas les faits precedents.

### Tache 3.2 - Planifier les relances

**Acceptation :**

- une prochaine action peut etre datee ;
- son etat est `a venir`, `due aujourd'hui` ou `en retard` ;
- `ne_plus_contacter` bloque toute relance.

### Tache 3.3 - Construire le tableau de travail

Le tableau doit afficher :

- relances en retard ;
- actions du jour ;
- actions a venir ;
- prospects actifs par statut.

**Acceptation :** chaque element affiche mene a la fiche concernee.

### Point de controle

Le CRM permet de savoir quoi faire aujourd'hui sans parcourir toutes les fiches.

## Phase 4 - Recherche et import

### Tache 4.1 - Enregistrer une demande de recherche

**Acceptation :** activite, zone, limite et date sont conservees.

### Tache 4.2 - Integrer une premiere source autorisee

Commencer par une seule source dont les conditions et le mode d'acces sont
documentes. Cette source sert a la decouverte ; elle ne prouve pas a elle seule
la presence ou l'absence d'un site.

**Acceptation :**

- les resultats sont tracables ;
- les erreurs et resultats incertains sont visibles ;
- aucun resultat n'est importe automatiquement.

### Tache 4.3 - Verifier les sites et dedupliquer

**Acceptation :**

- les quatre etats de verification sont pris en charge ;
- la resolution d'identite precede la recherche web ;
- les requetes, liens sortants et URLs examinees sont conserves ;
- une page officielle hebergee est reconnue comme site existant ;
- `aucun_site_trouve` exige la checklist complete du protocole ;
- une verification incomplete reste `incertain` ;
- les doublons probables sont signales ;
- aucune fusion incertaine n'est automatique.

**Verification :** des cas generiques representant un site relie depuis une
presence officielle, un site avec coordonnees concordantes et une page hebergee
sur une plateforme doivent retourner `site_officiel_trouve`. Un cas non resolu
doit retourner `incertain`.

### Tache 4.4 - Analyser les opportunites de refonte

**Acceptation :**

- chaque `site_officiel_trouve` passe en preanalyse, sauf exclusion explicite ;
- l'etat du site, l'etat de l'analyse, l'orientation commerciale et la
  decision restent independants ;
- une faiblesse conserve son axe, sa gravite, sa preuve, son URL, son contexte
  et sa date ;
- `refonte_recommandee` exige une faiblesse critique ou deux faiblesses
  importantes sur des axes distincts ;
- un jugement esthetique isole ne permet pas une recommandation ;
- une analyse incomplete reste `analyse_partielle` ou `analyse_impossible` ;
- aucun second score de recherche n'est introduit.

**Verification :**

- aucun site trouve apres protocole complet produit `creation_site` ;
- un site moderne, clair et responsive produit `refonte_non_prioritaire` puis
  `non_retenu` ;
- un site non responsive avec contact difficile peut produire
  `refonte_recommandee` si toutes les preuves sont presentes ;
- un site seulement juge visuellement date ne produit pas de recommandation ;
- un site temporairement inaccessible reste `analyse_partielle` ;
- un blocage technique durable ou juridique produit `analyse_impossible` ;
- un domaine qui ne peut pas etre attribue avec certitude conserve l'etat du
  site `incertain` et l'orientation `indeterminee` ;
- une page officielle sur Wifeo, Webnode, Eatbu ou une autre plateforme est
  analysee comme tout autre site attribue ;
- une opposition connue a la prospection impose `aucune` et `non_retenu`.

### Tache 4.5 - Valider et importer

**Acceptation :**

- l'utilisateur selectionne les resultats ;
- chaque import conserve sa source ;
- aucun import motive par l'absence de site ne provient d'un resultat
  `incertain` ou `verification_impossible` ;
- aucun import motive par la refonte ne provient d'une analyse `a_analyser`,
  `analyse_partielle` ou `analyse_impossible` ;
- un candidat valide pour refonte conserve les preuves et utilise l'offre
  `refonte_legere` ou `besoin_a_definir` ;
- les prospects existants ne sont pas dupliques silencieusement ;
- aucun candidat n'est importe ou contacte automatiquement.

### Point de controle

Une recherche geographique limitee produit une liste verifiable et permet
d'importer uniquement les entreprises retenues.

## Phase 5 - Stabilisation

### Tache 5.1 - Sauvegarde et restauration

**Acceptation :** les donnees peuvent etre sauvegardees puis restaurees sur une
installation locale vide.

### Tache 5.2 - Verification du perimetre

**Acceptation :**

- aucun envoi automatique n'existe ;
- aucune fonction de devis, facturation ou projet client n'a ete ajoutee ;
- le cycle s'arrete a `gagne`.

### Tache 5.3 - Test d'usage reel

Utiliser la V1 sur un petit lot de prospects et noter :

- les champs inutiles ou manquants ;
- les transitions problematiques ;
- la pertinence du score ;
- les informations necessaires au tableau de travail.

## Ordre de dependance

```text
regles metier
  -> choix technique et stockage
  -> fiche prospect
  -> score et pipeline
  -> historique et relances
  -> tableau de travail
  -> recherche
  -> verification du site
  -> analyse de refonte
  -> validation et import
  -> sauvegarde et test reel
```

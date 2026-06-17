# CRM de prospection freelance

MVP personnel de CRM de prospection assiste par agent, actuellement en phase de
test.

Le depot contient les regles metier, les templates et l'espace public utilise
pour publier des previews commerciales statiques via GitHub Pages. Les donnees
reelles de prospection restent locales et ne doivent jamais etre commitees.

## Objectif

Le CRM aide un developpeur web freelance a :

- rechercher des prospects depuis des sources ouvertes ou autorisees ;
- verifier l'existence et l'attribution d'un site officiel ;
- qualifier les opportunites avec un score explicable ;
- conserver les sources, preuves et evenements importants ;
- suivre les contacts, relances et statuts commerciaux ;
- preparer des previews statiques pour appuyer une demarche commerciale ;
- produire des rapports operationnels locaux.

Le projet ne gere pas l'envoi automatique d'emails, la facturation, les devis
contractuels ni la gestion des projets clients.

## Structure

```text
AGENTS.md                  Instructions permanentes pour l'agent
docs/                      Regles metier publiques et source GitHub Pages
docs/index.html            Page publique neutre pour GitHub Pages
docs/previews/             Previews statiques partageables par lien direct
templates/                 Modeles generiques, jamais donnees reelles
workspace/                 Donnees locales privees ignorees par Git
```

`workspace/` contient les fiches prospects, recherches, rapports et archives
locaux. Ce dossier est ignore par `.gitignore` et ne doit pas etre pousse sur
GitHub.

## GitHub Pages

La publication la plus simple utilise GitHub Pages avec :

- branche : `main` ;
- dossier source : `/docs`.

Les previews suivent cette structure :

```text
docs/
  index.html
  previews/
    slug-prospect/
      index.html
      style.css
      index.js
      assets/
```

URL attendue :

```text
https://<user>.github.io/<repo>/previews/<slug-prospect>/
```

La page `docs/index.html` reste volontairement neutre et ne liste pas les
previews. Les liens sont partages directement avec les prospects concernes.

## Confidentialite

Le depot public ne doit contenir aucune donnee reelle de prospection :

- pas de fiche prospect ;
- pas de rapport local ;
- pas d'email, telephone, SIREN, SIRET ou note interne ;
- pas de prix personnalise ;
- pas d'audit nominatif ou humiliant ;
- pas d'asset repris sans autorisation.

Les documents de `docs/` doivent rester generiques. Toute donnee operationnelle
reste dans `workspace/`.

## Documents principaux

- [Perimetre V1](docs/01-perimetre-v1.md)
- [Pipeline commercial](docs/02-pipeline.md)
- [Historique des evenements](docs/03-historique.md)
- [Qualification et score](docs/04-qualification-score.md)
- [Recherche et import de prospects](docs/05-recherche-prospects.md)
- [Plan d'integration](docs/06-plan-integration.md)
- [Decisions ouvertes](docs/07-decisions-ouvertes.md)
- [Workflow operationnel](docs/08-workflow-operationnel.md)
- [Protocole de verification d'un site](docs/09-protocole-verification-site.md)
- [Protocole d'analyse d'une opportunite de refonte](docs/10-protocole-analyse-refonte.md)

## Regle de travail

Les documents de `docs/` font autorite. Toute decision fonctionnelle durable
doit y etre inscrite avant d'etre appliquee aux donnees locales. Les recherches,
imports, previews et modifications de fiches suivent [AGENTS.md](AGENTS.md).

# Pipeline commercial

## Statuts

| Statut | Signification |
|---|---|
| `nouveau` | Prospect cree ou importe, pas encore examine. |
| `a_qualifier` | Informations a verifier avant de decider d'un contact. |
| `qualifie` | Prospect pertinent et suffisamment documente. |
| `contacte` | Premier message reellement envoye. |
| `en_relance` | Une prochaine relance est planifiee apres absence de reponse. |
| `interesse` | Le prospect a exprime un interet positif. |
| `gagne` | Accord obtenu ; le suivi quitte le CRM. |
| `perdu` | Opportunite abandonnee ou refusee sans opposition definitive. |
| `ne_plus_contacter` | Opposition explicite ; tout nouveau contact est interdit. |

Un brouillon prepare mais non envoye ne fait pas passer le prospect a
`contacte`.

## Flux principal

```text
nouveau
  -> a_qualifier
  -> qualifie
  -> contacte
  -> en_relance
  -> interesse
  -> gagne
```

Depuis les statuts actifs, le prospect peut aussi passer a `perdu` ou
`ne_plus_contacter`.

## Retours autorises

- `perdu -> a_qualifier` : nouvelle information ou nouvelle opportunite ;
- `interesse -> en_relance` : attente d'une reponse ou d'une decision ;
- `en_relance -> contacte` : nouveau message envoye, avant planification de la
  prochaine action ;
- `qualifie -> a_qualifier` : donnees devenues insuffisantes ou douteuses.

Le statut `ne_plus_contacter` est terminal. Le statut `gagne` termine la V1 du
suivi commercial.

## Regles de relance

- premiere relance recommandee : 7 jours apres le premier contact ;
- derniere relance recommandee : 21 jours apres le premier contact ;
- une relance est `a venir` avant sa date prevue ;
- elle est `due aujourd'hui` le jour prevu ;
- elle devient `en retard` a partir du lendemain de sa date prevue ;
- aucune relance si le statut est `gagne` ou `ne_plus_contacter` ;
- pour `perdu`, aucune relance n'est planifiee tant que le prospect n'est pas
  reactive manuellement ;
- apres la derniere relance sans reponse, une decision manuelle est requise,
  generalement `perdu`.

## Regles de transition

Chaque changement de statut cree un evenement d'historique avec :

- ancien statut ;
- nouveau statut ;
- date et heure ;
- motif facultatif, obligatoire pour `perdu` et `ne_plus_contacter`.


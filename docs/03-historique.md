# Historique des evenements

## Principe

Chaque fiche prospect contient une chronologie detaillee. L'historique doit
permettre de comprendre ce qui s'est passe sans reconstruire la relation depuis
des champs disperses.

## Structure minimale d'un evenement

```text
Date : 10 juin 2026, 14:30
Type : premier_contact
Canal : email
Resume : proposition d'un diagnostic gratuit
Prochaine action : relance le 17 juin 2026
```

Champs :

- date et heure ;
- type d'evenement ;
- resume ;
- canal facultatif ;
- date de prochaine action facultative ;
- donnees liees au changement, si necessaire.

## Types d'evenements

- creation manuelle ;
- import depuis une recherche ;
- modification importante de la fiche ;
- changement de statut ;
- note ajoutee ;
- premier contact envoye ;
- relance planifiee ;
- relance effectuee ;
- appel effectue ;
- reponse recue ;
- rendez-vous planifie ;
- rendez-vous effectue ;
- offre indicative modifiee ;
- score recalcule ;
- score corrige manuellement ;
- preview_creee ;
- preview_publiee ;
- preview_archivee ;
- refus recu ;
- opposition recue ;
- prospect gagne ;
- prospect perdu ;
- prospect reactive.

## Regles

- un evenement passe ne doit pas etre reecrit silencieusement ;
- une correction cree un nouvel evenement ;
- une action planifiee et une action effectuee sont deux faits distincts ;
- un brouillon, une maquette ou une preview publiee ne constitue pas un contact
  commercial ;
- les changements automatiques doivent etre identifies comme tels ;
- le resume reste court et factuel.

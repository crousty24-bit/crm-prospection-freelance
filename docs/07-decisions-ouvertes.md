# Decisions ouvertes

Ces points ne bloquent pas la validation fonctionnelle, mais doivent etre
tranches avant ou pendant la conception technique.

## Avant implementation

- application web locale ou application desktop ;
- technologie de stockage local ;
- comportement exact d'une fiche archivee ;
- possibilite de rouvrir un prospect `gagne`, actuellement non prevue ;
- canaux de contact pris en charge dans la V1 ;
- horizon utilise pour la vue `a venir` : 7, 14 ou 30 jours.

## Avant le module de recherche

- premiere source de donnees a integrer ;
- definition des zones prioritaires ;
- nombre maximal de resultats par recherche ;
- duree de conservation des resultats non importes ;
- traitement des franchises et entreprises multi-sites.

La methode de verification d'un site officiel est definie dans
`docs/09-protocole-verification-site.md`.

## A valider par l'usage

- poids et seuils du score ;
- cadence J+7 et J+21 ;
- utilite des categories d'offres ;
- types d'evenements reellement necessaires ;
- criteres de passage manuel a `perdu`.

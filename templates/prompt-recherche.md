# Prompt - Recherche de prospects

```text
Recherche jusqu'a [NOMBRE] [ACTIVITE] dans [ZONE OU RAYON].

Critere principal :
- [EXEMPLE : aucun site officiel trouve]

Exclusions :
- [EXCLUSIONS]

Suis AGENTS.md, docs/08-workflow-operationnel.md et
docs/09-protocole-verification-site.md. Lorsqu'un site officiel est trouve,
applique aussi docs/10-protocole-analyse-refonte.md : effectue la preanalyse,
puis l'audit approfondi si un signal est detecte.
Consigne le resultat dans workspace/recherches avec les sources et dates de
verification. Pour chaque candidat, resous l'identite, consigne toutes les
requetes web, controle les liens sortants, liste les URLs examinees et justifie
leur acceptation ou leur rejet. Pour chaque site attribue, conserve les pages
analysees, les contextes desktop/mobile, les faiblesses, leur gravite et leurs
preuves. Distingue l'etat du site, l'etat de l'analyse de refonte,
l'orientation commerciale et la decision. Distingue les faits, les inferences
et les inconnues. Toute verification de site incomplete doit rester
`incertain`. Toute analyse de refonte incomplete doit rester
`analyse_partielle` ou `analyse_impossible`. Un jugement esthetique isole ne
permet pas `refonte_recommandee`. Verifie les doublons et les oppositions
connues a la prospection. N'importe aucun candidat et ne contacte personne.
```

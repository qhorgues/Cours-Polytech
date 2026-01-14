---
sidebar_position: 6
description: Algorithme des k-moyennes
---

Une **bonne partition en K classes** possède des classes

* On choisit aléatoirement K centres provisoires
* Répéter jusqu'à la convergence:
  - Affectation: on affecte chaque point à son centre le plus proche
  - Représentation: on calcule les $K$ nouveaux centres.
* Critère d'arrêt ?
  - Lorsqu'aucun individu ne change de classe entre deux itérations.



## Note

$A A^{\top} v_i = \lambda_i v_i$
$\Leftrightarrow A^{\top} A A^{\top} v_i = \lambda_i A^{\top} v_i$
$\Leftrightarrow A^{\top} A u_i = \lambda_i u_i$

$\lambda_i \rightarrow \textnormal{valeur propre}$

$u_i \rightarrow \textnormal{vecteur propre}$

---
sidebar_position: 2
description: Analyse Factorielle des Correspondances Binaires
---

# Analyse Factorielle des Correspondances Binaires

## Introduction

### Généralités

Dans ce chpt, nous allons considérer des variables **QUALITATIVES**

eg: Couleur de cheveux, zones géographiques (dép, pays, ...)
types de production, origines sociales, matières / disciplines....

Plus particulièrement, on va chercher des éventuelles **Liasons** entre nos N variables QUALITATIVES

$N=2 \rightarrow AFCB$
$N>2 \rightarrow ACM (Analyse en Composante Multiple$

* O nsuppose donc $N=2$ dans la suite du chapitre, comment réaliser une AFCB:
  - ACP sur les **profils-ligne**
  - ACP sur les **profils-colonne**
  - Superposition **graphique** des 2 ACP
  - Interpetation

### Notation

On considère 2 variables **qualitatives** $X$ et $Y$
* $X$ a 'r' **modalités** : $x_1, x_2, \dots, x_r$ (ligne)
* $Y$ a 'c' **modalités** : $y_1, y_2, \dots, y_c$ (colonne)
* Ces 2 variables sont observées **simultanément** sur $n$ individus, ayant le même poids $\frac{1}{n}$
* On considère alors le tableau ci-dessous, apellé la **TABLE DE CONTINGENCE**

|       | $y_1$ | $\dots$ | $y_k$ |$\dots$| $y_c$ | $\Sigma$ |
|-------|-------|---------|-------|-------|-------|----------|
| $x_1$ |$n_{1,1}$|$\dots$|$n_{1,k}$|$\dots$|$n_{1,c}$|$n_{1,+}$|
|$\vdots$|$\vdots$|       |$\vdots$|      |$\vdots$|$\vdots$ |
| $x_1$ |$n_{l,1}$|$\dots$|$n_{l,k}$|$\dots$|$n_{l,c}$|$n_{l,+}$|
|$\vdots$|$\vdots$|       |$\vdots$|      |$\vdots$|$\vdots$ |
| $x_1$ |$n_{r,1}$|$\dots$|$n_{r,k}$|$\dots$|$n_{r,c}$|$n_{r,+}$|
|$\Sigma$|$n_{+,1}$|$\dots$|$n_{+,k}$|$\dots$|$n_{+,c}$|$n$|

* On considère alors
  - la $l^{ième}$ ligne $\displaystyle \lbrace \frac{n_{l,1}}{n_{l,+}}, \dots, \frac{n_{l,k}}{n_{l,+}}, \dots, \frac{n_{l,c}}{n_{l,+}} \rbrace$
  - la $k^{ième}$ ligne $\displaystyle \left{ \frac{n_{1,k}}{n_{+,k}}, \dots, \frac{n_{l,k}}{n_{+,k}}, \dots, \frac{n_{r,k}}{n_{+,k}} \right}$

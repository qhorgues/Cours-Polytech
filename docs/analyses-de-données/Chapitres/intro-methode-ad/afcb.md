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
  - la $l^{\textnormal{ième}}$ ligne $\displaystyle \left\{ \frac{n_{l,1}}{n_{l,+}}, \dots, \frac{n_{l,k}}{n_{l,+}}, \dots, \frac{n_{l,c}}{n_{l,+}} \right\}$
  - la $k^{\textnormal{ième}}$ ligne $\displaystyle \left\{ \frac{n_{1,k}}{n_{+,k}}, \dots, \frac{n_{l,k}}{n_{+,k}}, \dots, \frac{n_{r,k}}{n_{+,k}} \right\}$
* La “liason” entre les deux variables est alors donné par l'étude des ressemblances et des différences entre les profils $L$ et les profils $C$

:::info[Principe d'inertie]
* Indice globale de qualité
* Représente la part d'inertie expliqué par les composantes principales
* Pour un axe $i$ donné $\displaystyle = \frac{\lambda_i}{\displaystyle \sum^k_{t=1} \lambda_t}$
* Pour un plan donné $\displaystyle (i,j) = \frac{\lambda_i + \lambda_j}{\displaystyle \sum^k_{t=1} \lambda_t}$
:::

## Exemples illustratifs
### Des notes
* On commence siple: $2$ variables à $2$ modalités
* On considère une classe de $32$ élèves avec $2$ matières (Maths, Littérature)
* Les notes sont classés en $2$ sous-ensembles “élevé” et “faible”.

#### table de contingence
| | $L\_\textnormal{élevé}$ | $L\_\textnormal{faible}$ |  $\Sigma$ |
|-------------------------|------------|-------------|-----------|
| $M\_\textnormal{élevé}$ |    $18$    |    $6$      |   $24$    |
| $M\_\textnormal{faible}$|     $6$    |    $2$      |   $8$     |
| $\Sigma$                |    $24$    |    $8$      |   $32$    |

$\Sigma = \textnormal{somme}$

#### Exemple de lien

“La **proportion** d'élèves avec une note faible en $L$ est elle même **plus élevée** pour les élèves avec une note plus élevée en $M$  que pour la classe entière ?”

$\displaystyle \frac{6}{24} = \frac{8}{32} = \frac{1}{4}$

---

### Des exploitations agricoles
* On considère des exploitations agricoles dans la région Midi-Pyrennés (MP) 
* publié par la Direction Régionale de Toulouse de l'INSEE
*Données relative à l'année 1993,
* Arrondis à la dizaine près

#### Les données
“Répartition des EA dans la région MPselon les départements et le SAU (Surface Agricoles Utilisées) en 1993.”


|        | $INFOS$ | $S0510$ | $S1020$ | $S2035$ | $S3550$ | $Sup50$ | $\Sigma$ |
|--------|---------|---------|---------|---------|---------|---------|----------|
| $ARIE$ |  $870$  | $330$   | $730$   |  $680$  |  $470$  | $890$   |     -    |
| $AVE$  |  $820$  | $1260$  | $2460$  | $3330$  | $2170$  | $2960$  |     -    |
|  $HG$  | $2290$  | $1070$  | $1420$  | $1830$  | $1260$  | $2330$  |     -    |
| $GERS$ | $1650$  |  $890$  | $1350$  | $2540$  | $2090$  | $3230$  |     -    |
|  $LOT$ | $1940$  | $1130$  | $1750$  | $1660$  |  $770$  | $1140$  |     -    |
|   $HP$ |
| $TARN$ |
|  $TG$  |


**N.B**:
* La variable SAU n'est pas vraient qualitative,elle est plutot quantitative continue
* Pas grave, on va la considérercmme une variable **catégorielle**
* On va donc pas tenir compte de l'ordre dans l'analyse, peut-être lors de l'interprétation si c'est possible

#### Contribution au $\chi_2$

$\displaystyle \forall (l, h) \in [| 1, R |] \times [| 1, c |]$, on a

$\displaystyle \frac{\displaystyle \left( n_{lh} - \frac{n_{l+}n_{+h}}{n} \right)^2}{\displaystyle \frac{n_{l+}n_{+h}}{n} }$

-> défini un nouveau tableau, $4$ lignes, $3$ colonnes

|       | $INFOS$ | $\dots$ | $\Sigma$ |
|-------|---------|---------|----------|
| $ARIE$|$995,17$ |         |          |
|$\vdots$|        |         |          |
|$\Sigma$|        |         | $5375,49$|

**e.g**: 
* for $(1, 1) ~ (ARIE, INFOS)$ <br/>
$\displaystyle \frac{\displaystyle \left( 870 - \left( \frac{3870 \times 13190}{73000} \right)\right)^2}{\displaystyle \frac{3870 \times 13190}{73000}} \simeq 32,50$

-> c'est une valeur relativement “petite” par rapport aux autres

* for $(2, 1) ~ (AVE, INFOS)$ <br/>
$\displaystyle \frac{\displaystyle \left( 820 - \left( \frac{13000 \times 13190}{73000} \right)\right)^2}{\displaystyle \frac{13000 \times 13190}{73000}} \simeq 995,17$

-> c'est une valeur “très grande” par rapport aux autres (en fait, c'est la plus grande !)

\+ Pour l'$AFCB$ on calcule ensuite
* Profil - $L$
* Profil - $C$

-> Non donné ici !

#### Inertie
* Rappel: inertie ~ dispersion ~ variance
* Important dans l'$ACP$ $\Rightarrow$ important dans l'$AFCB$
* On considère le tableau des profil-$L$, chaque nouvelle ligne est un vecteur de $\mathbb{R}^C$
* On considère le tableau des profil-$C$, chaque nouvelle ligne est un vecteur de $\mathbb{R}^L$
* Ona donc $2$ nuages de points dont on peut determiner les **barycentre**
* barycentre (profil-$L$)
    - “Répartition des EA selon les classes SAU dans la région MP, tous départements **confondus**”
* barycentre (profil-$C$)
    - “Répartition des EA selon les départements de la région MP, **indépendament** des SAU”
    
* Dans chacun de ces espaces $(\mathbb{R}^L, \mathbb{R}^C)$ on peut calculer l'inertie par rapport aux barycentre
* C'est la somme pondérée des carrésdes distances des profils à leur barycentre (formule similaireà la variance)
    - pondérée -> avec effectif marginaux
    - distances -> distance $\chi_2$ (pas euclidienne)
* **On vérifie par inertie (profil-$L$) = inertie (profil-$C$)**

**Pour “Rappel”**

Métrique du $\chi_2$

$\displaystyle \delta_{\chi^2} = \sqrt{\sum^C_{j=1} \frac{n}{n+j}\left( \frac{n_{ij}}{n_{i+}} - \frac{n_{i'j}}{n_{i'+}} \right)}$

#### Pourcentage d'inertie
* Comme en $ACP$, la **part d'inertie** restituée pour chaque dimension (axe, comp) permet de connaîtrela qualité globale des résultats
* Sur notre exemple (des EA)

| Valeur singulière | Principale inertie | $\chi_2$ |  $\%$    |
|-------------------|--------------------|----------|----------|
|      $0,23455$    |     $0,05501$      | $4015,91$| $74,71\%$|
|      $0,1220$     |     $0,01491$      | $1088,28$| $20,25\%$|
|      $0,04899$    |     $0,00239$      | $174,83$ | $3,25\%$ |
|      $0,02792$    |     $0,00078$      |  $56,90$ |  $1,06\%$|
|      $0,02328$    |     $0,00054$      |  $39,55$ | $0,73\%$ |
|                   |     $0,07364$      | $5375,49$|  $100\%$ |

$\sqrt{\textnormal{principal inertie}} \left[ \min (R - 1, C - 1) \right] $

#### Visualisation
* On ne garde que les 2 premières composantes
* On projette no individus (ici les profil-$L$ et profil-$C$) sur ce plan factoriel

|       |   $DIM1$   |   $DIM2$    |
|-------|------------|-------------|
| $ARE$ | $0,037168$ | $-0,109849$ |
| $AVE$ | $-0,236684$| $0,206059$  |

|         |    $F1$    |     $F2$    |
|---------|------------|-------------|
| $INFOS$ |   $\dots$  |  $\dots$    |
| $S0510$ |   $\dots$  |  $\dots$    |

Schéma **II.4**

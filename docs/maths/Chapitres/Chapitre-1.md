---
sidebar_position: 1
description: Rappel sur les espaces vectoriels
---

# Chapitre 1 : Espace vectoriels

## Structure d'espace vectoriel

### Rappel produit cartésien

Soient $E_1$ et $E_2$ deux ensembles : on def $E_1 \times E_2 = \left\{ (x_1, x_2)\ |\ x_1 \in E_1\ \textnormal{et}\ x_2 \in E_2  \right\} = E$

Un couple est une paire ordonnée : il y a un premier et un second élément : $(x, y) \neq (y,x)$ sauf si $x = y$

**Exemple:**
* $\left\{2, 4, 8 \right\} \times \left\{-1, 1 \right\} = \left\{(2, -1), (2, 1), (4, -1), (4, 1), (8, -1), (8, 1) \right\}$
* $\mathbb{R \times N} = \left\{ (x, n)\ |\ x \in \mathbb{R}, n \in \mathbb{N} \right\}$

**Généralisation:**

$E_1 \times E_2 \times E_3 = \left\{ (x_1, x_2, x_3)\ |\ \in E_1\ x_2 \in E_2\ \textnormal{et}\ x_3 \in E_3 \right\}$

$\displaystyle E_1 \times E_2 \times \dots \times E_n = \left\{ (x_1, \dots, x_n)\ |\ \in E_i\ (1 \le i \le n) \right\}\ \textnormal{noté}\ \prod_{i=1}^n E_i$

Cas particulier : $E^n$ (par exemple $\mathbb{R}^3$)

### Définition

Soit $\mathbb{K}$ un corps commutatif. En pratique $\mathbb{K} = \mathbb{R}\ \textnormal{ou}\ \mathbb{C}$

Soit $E$ un ensemble muni d'une loi de composition interne $+$ et d'une loi de composition externe $.$

* $(E, +, .)$ est un $\mathbb{K}$-espace vectoriel ssi
    - La loi interne vérifie les quatre propriétés suivantes :
        + $+$ est associative, $\left(\vec{u} + \vec{v} \right) + \vec{w} = \vec{u} + \left( \vec{v} + \vec{w} \right) = \vec{u} + \vec{v} + \vec{w}$
        + $+$ admet un élément neutre (noté $\vec{0}$), $\vec{0} + \vec{u} = \vec{u} + \vec{0} = \vec{u}$
        + Tout élément $\vec{u}$ de $E$ admet un symétrique pour $+$ dans $E$, noté $-\vec{u}$
        + $+$ est commutative, $\vec{u} + \vec{v} = \vec{v} + \vec{u}$
    - La loi externe vérifie les quatres propriétés suivantes :
        + $\forall \lambda, \mu \in \mathbb{K}, \forall \vec{u} \in E : \left( \lambda + \mu \right) \cdot \vec{u}$
        + $\forall \vec{u} \in E : 1 \cdot \vec{u} = \vec{u}$
        + $\forall \lambda, \mu \in \mathbb{K}, \forall \vec{u} \in E : (\lambda + \mu) \cdot \vec{u} = \lambda \cdot \vec{u} + \mu \cdot \vec{u}$
        + $\forall \lambda \in \mathbb{K}, \forall \vec{u}, \vec{v} \in E : \lambda \cdot (\vec{u} + \vec{v}) = \lambda \cdot \vec{u} + \lambda \cdot \vec{v}$

### Exemple d'espace vectoriel

$(\mathbb{R}^2, +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

$(\mathbb{R}^n, +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

$(\mathcal{M}_{m,n}(\mathbb{R}), +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

$(\mathbb{R}_n[X], +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

$(\mathbb{R}[X], +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

$(\mathbb{C}, +, \cdot)$ est un $\mathbb{R}$-espace vectoriel

#### Pour aller plus loin

$(\mathbb{R}^n, +, \cdot)$ : l'ensemble des suites à valeurs dans $\mathbb{R}$ est un $\mathbb{R}$-ev

$(\mathbb{R^R}, +, \cdot)$ : l'ensemble des applications de $\mathbb{R}$ dans $\mathbb{R}$ est un $\mathbb{R}$-ev (l'ensembles des fonctions n'en est pas un : si un fonction n'est pas def sur $\mathbb{R}$ alors elle n'a pas de symétrique)

$(\mathbb{R}^A, +, \cdot)$ : l'ensemble des applications de $A$ dans $\mathbb{R}$ est un $\mathbb{R}$-ev

#### Mais

$\left\{  (x,y) \in \mathbb{R}^2\ |\ xy = 0 \right\}$ n'est pas un $\mathbb{R}$-espace vectoriel (pas stable par somme)

$\left\{  (x,y) \in \mathbb{R}^2\ |\ x \ge 0\ \textnormal{et}\ y \ge 0 \right\}$ n'est pas un $\mathbb{R}$-espace vectoriel (pas stable par le produit externe)

### Proprièté

Etant donné un $\mathbb{K}$-espace vectoriel $(E, +, \cdot), \forall \lambda \in \mathbb{K}, \forall \vec{u} \in E$

* $0 \cdot \vec{u} = \vec{0}$
* $\lambda \cdot \vec{0} = \vec{0}$
* $\lambda \cdot \vec{u} = \vec{0} \Leftrightarrow \lambda = 0\ \textnormal{ou}\ \vec{u} = \vec{0}$
*  $(-1) \cdot \vec{u} = -\vec{u}$
*  $(-\lambda) \cdot \vec{u} = \lambda \cdot(-\vec{u}) = -\lambda \cdot \vec{u}$
* L'élément neutre de $\vec{0}$ est unique
* Le symétrique d'un vecteur pour l'adition est unique

### Combinaison linéaire

Soit $(\vec{u_1}, \vec{u_2}, \dots, \vec{u_n})$ un $k$-upllet de vecteurs d'un $\mathbb{K}$-espace vectoriel E

Une **combinaison linéaire** de $\vec{u_1}, \dots, \vec{u_k}$ est un vecteur $\vec{v}$ tq

il existe $\lambda _1, \dots, \lambda _k$ tq $\displaystyle \vec{v} = \sum_{i=1}^k \lambda _i \vec{u}_i = \lambda _1 \cdot \vec{u}_1 + \lambda _2 \cdot \vec{u}_2 + \dots + \lambda _k \cdot \vec{u}_k$
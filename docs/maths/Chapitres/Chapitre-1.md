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
        + $\forall \lambda, \mu \in \mathbb{K}, \forall \vec{u} \in E : \left( \lambda + \mu \right)\dot\vec{u}$
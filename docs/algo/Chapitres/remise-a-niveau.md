---
sidebar_position: 0
---

# Remise à niveau

## Introduction à l'algorithmique

:::info[Definition: algorithme]
On appelle ***algorithme*** tout procédé de résolution d'un problème en un nombre fini d'étapes par application d'une série de règles prédifinies.
:::

**Suite finie d'instructions vérifiant**:
* Chaque étape est décrite de façon ***précise***
* Chaque étape est déterministe : produit des ***résultats uniques***
* L'algorithme s'arrête après un ***nb fini d'instructions***
* Reçoit des données en ***entrée***
* Produit des données en ***sortie***

:::info[Définition: analyse descendante]
**L'analyse descendante** définit implicitement un parcours arborescent et constitue une technique fondamentale pour écrire des algorithmes.
:::

:::note[Lemme]
Soit $A$ un alphabet fini. Deux mots $u_1u_2...u_n$ et $v_1v_2...v_n$ de $A^*$ sont égaux si et seulement si $n=m$ et si $\forall i \in [1, n] \ u_i = v_i$
:::

## Variables

Stocke une données avec un codage (type de la variable) qui permet de savoir les valeurs maximales et minimales stockable, etc...

### Différent type
* Entières
* Réel
* Chaine de cararctère

### Constante
Une information stocké et <u>non modifiable</u>

### Affectation

```
Variable :
  A, B : entier

Debut
  A <- 5
  B <- 2
  A <- B
  B <- A // Erreur A = 2 et B = 2 !!!
  // Solution ajouter une variable temporaire
Fin
```

## Assertion
* $a$ n'est pas dans les 3 tableaux <br/>
$\{ \forall i \in [0,n-1]\ |\ (t_1[i] \neq a) \land (t_2[i] \neq a) \land (t_3[i] \neq a) \}$
* $b$ est un majorant de $t_2$ <br/>
$\{ \forall i \in [0,n-1]\ |\ t[i] \le b \}$
* $a$ est présent dans les trois tableaux à des positions différentes <br/>
$\{ \forall i \in [0,n-1], \forall j \in [0,n-1], \forall k \in [0,n-1]\ |\ (t_1[i] = a) \land (t_2[j] = a) \land (t_3[k] = a) \}$
* Les éléments de $t_2$ sont les mêmes que ceux de $t_1$ mais dans l'ordre inverse <br/>
$\{ \forall i \in [0,n-1]\ |\ t_1[i] = t_2[n-i] \}$
* $t_3$ n'est pas trié par ordre décroissant <br/>
$\{ \exist i \in [0,n-2]\ |\ t[i] \lt t[i+1] \}$


**Opérateur booléen**
* $f_1(x) = \sqrt{x^2 - 1}$ <br/>
$\{ \forall x \in \mathbb{R}\ |\ |x| \ge 1 \}$
* $f_2(x) = \sqrt{1-x^2}$ <br/>
$\{ \forall x \in \mathbb{R}\ |\ |x| \le 1 \}$
* $f_3(x) = \sqrt{\frac{1-x^2}{x}}$ <br/>
$\{ \forall x \in \mathbb{R^*}\ |\ (0 \lt x \le 1) \lor (x \le -1) \}$
* $f_4(x,y) = {\Large \frac{\sqrt{1-x^2} + \sqrt{y^2 -1}}{xy}}$

**Exercice:**
1. $\exist x \in \mathbb{R}, \exist y \in \mathbb{R}, x+y \gt 0$ : Vrai <br/>
2. $\exist x \in \mathbb{R}, \forall y \in \mathbb{R}, x+y \gt 0$ : Faux<br/>
3. $\forall x \in \mathbb{R}, \exist y \in \mathbb{R}, x+y \gt 0$ : Vrai<br/>
4. $\forall x \in \mathbb{R}, \forall y \in \mathbb{R}, x+y \gt 0$ : Faux<br/>

$A \Rightarrow B \Leftrightarrow \bar{A} \lor B$

## Condition

### Condition SI
```
si expression alors
  ...
sinon
 ...
finsi
```

## Structure répétitive

### Boucle POUR

```
Variable
  N,i : entier
Début
  pour i de 1 à N par pas de 1 faire
    bloc
  finpour
Fin
```

### Boucle TANT QUE

```
Début
  Tant que condition faire
    bloc
  fintantque
Fin
```

### Exercices

<u>**Exercice 1:**</u>

**Cas 1**: <br/>
1 <br/>
1 <br/>
2 <br/>
1 2 <br/>
3 <br/>
1 2 3 <br/>
4 <br/>
1 2 3 4 <br/>

```
Variable
  N,i,j : entier
Début
  pour i de 1 à N par pas de 1 faire
    ecrire(i)
    ecrire(retourner à la ligne)
    pour j de 1 à i par pas de 1 faire
      ecrire(j + " ")
    finpour
    ecrire(retourner à la ligne)
  finpour
Fin
```

**Cas 2**: <br/>
1 <br/>
1 <br/>
2 <br/>
2 4 <br/>
3 <br/>
3 6 9 <br/>
4 <br/>
4 8 12 16 <br/>

```
Variable
  N,i,j : entier
Début
  pour i de 1 à N par pas de 1 faire
    ecrire(i)
    ecrire(retourner à la ligne)
    pour j de 1 à i par pas de 1 faire
      ecrire(j*i + ' ')
    finpour
    ecrire(retourner à la ligne)
  finpour
Fin
```

**Cas 3**: <br/>
1 <br/>
e <br/>
2 <br/>
de <br/>
3 <br/>
cde <br/>
4 <br/>
bcde <br/>

```
Variable
  i,j : entier
  chr : chaine
Début
  chr <- "abcde"
  pour i de 1 à 4 par pas de 1 faire
    ecrire(i)
    ecrire(retourner à la ligne)
    pour j de 1 à i par pas de 1 faire
      ecrire(chr[4-i+j])
    finpour
    ecrire(retourner à la ligne)
  finpour
Fin
```

**Cas 4**: <br/>
1 <br/>
e <br/>
2 <br/>
ed <br/>
3 <br/>
edc <br/>
4 <br/>
edcb <br/>

```
Variable
  i,j : entier
  chr : chaine
Début
  chr <- "abcde"
  pour i de 1 à 4 par pas de 1 faire
    ecrire(i)
    ecrire(retourner à la ligne)
    pour j de 0 à i-1 par pas de 1 faire
      ecrire(chr[4-j])
    finpour
    ecrire(retourner à la ligne)
  finpour
Fin
```

* Ecrire un algorithme qui affiche un entier de 5 chiffres inversé.<br/>
Exemple: Si l'entier est 56789 on doit afficher 98765

```
Variable
  val : entier
Début
  lire(val)
  tant que val > 0 faire
    ecrire(val mod 10)
    val <- val / 10
  finpour
Fin
```

<u>**Exercice 2:**</u>

Décrire les spécifications puis donner l'algorithme qui permet d'écrire les secondes exprimées en un nombre entier saisie au clavier, sous la forme
  X h : Y m : Z sec

```
Entrée:
  time : entier
Précondition:
  time > 0
Sortie
  Aucune
Postcondition:
  Affiche le temps décomposé en heure minute et seconde

Variable
  time : entier
  h : entier
  m : entier
  s : entier
Début
  lire(time)
  h <- time / 3600
  m <- (time mod 3600) / 60
  s <- (time mod 3600) mod 60
  ecrire(h + ' h : ' + m + ' m : ' + s + ' sec')
Fin
```
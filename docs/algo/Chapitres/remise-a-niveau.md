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
Soit $A$ un alphabet fini. Deux mots $u_1u_2...u_n$ et $v_1v_2...v_m$ de $A^*$ sont égaux si et seulement si $n=m$ et si $\forall i \in [1, n] \ u_i = v_i$
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

<details> 
  <summary>Correction</summary>
    <div>
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
  </div>
</details>

**Cas 2**: <br/>
1 <br/>
1 <br/>
2 <br/>
2 4 <br/>
3 <br/>
3 6 9 <br/>
4 <br/>
4 8 12 16 <br/>

<details> 
  <summary>Correction</summary>
    <div>
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
  </div>
</details>

**Cas 3**: <br/>
1 <br/>
e <br/>
2 <br/>
de <br/>
3 <br/>
cde <br/>
4 <br/>
bcde <br/>

<details> 
  <summary>Correction</summary>
    <div>
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
  </div>
</details>

**Cas 4**: <br/>
1 <br/>
e <br/>
2 <br/>
ed <br/>
3 <br/>
edc <br/>
4 <br/>
edcb <br/>

<details> 
  <summary>Correction</summary>
    <div>
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
  </div>
</details>

* Ecrire un algorithme qui affiche un entier de 5 chiffres inversé.<br/>
Exemple: Si l'entier est 56789 on doit afficher 98765

<details> 
  <summary>Correction</summary>
    <div>
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
  </div>
</details>

<u>**Exercice 2:**</u>

Décrire les spécifications puis donner l'algorithme qui permet d'écrire les secondes exprimées en un nombre entier saisie au clavier, sous la forme
  X h : Y m : Z sec

<details> 
  <summary>Correction</summary>
    <div>
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
</div>
</details>

## Structure de données

### Tableau

Un tableau $T$ est un ensemble de _$n$_ variables de même type : <br/>
$$
T = (e_1, e_2, \dots, e_n)
$$

|Valeur|$e_1$|$e_2$|$e_3$|$\dots$|$e_n$|
|------|-----|-----|-----|-------|-----|  
|Indice|  0  |  1  |  2  |$\dots$|$n-1$|

### Structure

```
Type nomType = Structure
                  champ_1 : type_du_champ_1
                  ...
                  champ_k : type_du_champ_k
                Finstructure
```

#### Taille d'une structure
Soit $S$ une structure et $s \in S$ les champs de notre structure
$$
\textnormal{taille}(S) = \sum_{s \in S} \textnormal{taille}(s)
$$

#### Opération sur les structures
Soit $A, B \in S$ <br/>
Soit $s_1,s_2,\dots,s_n \subset S$ <br/>
On peut faire les opérations suivantes : <br/>

##### Afféctation
$B \leftarrow A$ <br/>
$A.s_1 \leftarrow x$

##### Egalité

$A = B$

##### Inégalité
:::warning
$A \lt B, A \gt B, A \le B\ \textnormal{et}\ A \ge B$ ne sont pas valide il n'existe pas d'ordre totale sur les structures
:::

### Manipuler les tableaux

On peut utiliser les structures et les tableaux pour pour manipuler facilement les tableaux

On connait ici la taille maximal du tableau (100) mais aussi le nombre d'élément présent


<u>**Exercice:**</u>

On souhaite gérer des tableaux à maximum 100 entiers saisis par l'utilisateur. Pour un tableau donné, on génèrera un nouveau sans doublon
* Un module qui permet de saisir les éléments d'un tableau de taille fixée par l'utilisateur inférieur à 100, le module **Saisir**
* Un module qui trie un tableau dans l'orde croissantselon la procédure de tri pair-impair, le module **Trier**
* Un module qui extrait depuis un tableau donné trié un nouveau tableau sans les doublant, le module **Générer**
* Le module principale

<details> 
  <summary>Correction</summary>
    <div>

```
type tab = Structure
      T : tableau [0...99] d'entiers
      IndMax : entier
    Finstructure
```

**Module Principale**
```
Procédure Principale()
  Variables
    Tab : Table
    Ind : entier
  Début
    ecrire(Saisir le nb d'info tq inférieur à 99)
    Faire
      lire(Tab.IndMax)
    Tantque ((Tab.IndMax < 0) OU (Tab.IndMax > 99))
    Saisir(Tab)
  Fin
Finprocédure
```

**Module Saisir**
```
Procédure Saisir (Donnée/Résulat Tab : Table)
Variable
  i : entier
Début
  Por iallant de 0 à  Tab.IndMax par 1 faire
    lire(tab.T[i])
  Finpour
Fin
Finprocédure
```

**Module trier**
:::warning
Cette algorithme nest pas du tout optimal
:::
```
Procédure TriPairImpair (Donnée/Résulat Tab : Table)
  Variables
    noTrie : booléen
    i : entier
    j : entier
    tmp : entier
  Début
    Faire
      nonTrie <- Faux
      Pour i allant de 0 à 1 par pas de 1 faire
        Pour j allant de i à Tab.IndMax -1 par pas de 2 faire
          Si Tab.T[j] > Tab.T[j+1] faire
            tmp <- Tab.T[j]
            Tab.T[j] <- Tab.T[j+1]
            Tab.T[j+1] <- tmp
            nonTrier <- Vrai
          Finsi
        Finpour
      Finpour
    Tantque nonTrie est Vrai
  Fin
Finprocédure
```

<details> 
  <summary>Code en C</summary>
    <div>
  ```c
  #include <stdbool.h>

  struct Table
  {
    int T[100];
    int indMax;
  };

  void TriPairImpair (struct Table* tab)
  {
    bool nonTrie;
    do
    {
      nonTrie = false;
      for (int i = 0; i <= 1; i++)
      {
        for (int j = 0; j < tab->indMax; j++)
        {
          if (tab->T[j] > tab->T[j+1])
          {
            int tmp = tab->T[j];
            tab->T[j] = tab->T[j+1];
            tab->T[j+1] = tmp;
            nonTrie = true;
          }
        }
      }
    } while (nonTrier);
  }
  ```
    </div>
</details>

**Le module générer**

```
Fonction Generer (Donnée Tab : Table, Donnée/Résulat TabBis : Table) Résulat booléen
  Entrée
    Tab un tableau trié d'entier
    TabBis un tableau vide d'entier
  Precondition
    Tab est trié par ordre croissant
  Sortie
    Vrai si les deux tableaux en entrée etaient identique
    Faux sinon
  Postcondition
    TabBis ne contient aucun doublon
  
  Variables
    i : entier
    identique : booléen
  Début
    identique <- Vrai
    TabBis.IndMax <- 0
    TabBis.T[0] <- Tab.T[0]
    Pour i allant de 1 à Tab.IndMax par pas de 1 faire
      Si Tab.T[i] != TabBis.T[TabBis.IndMax] faire
        TabBis.IndMax <- TabBis.IndMax +1
        TabBis.T[TabBis.IndMax] <- Tab.T[i]
      Sinon faire
        identique <- Faux
      Finsi
    Finpour
    Renvoyer identique
  Fin
Finfonction
```
</div>
</details>

## Alias

Type Vecteur = Tableau[$0 \dots n-1$] de Réel

$\Rightarrow$ Tab : Tableau[$0 \dots n-1$] de Réel <br/>
$\Leftrightarrow$ Tab : Vecteur

## Module : Fonction / Procédure

### Fonction
Une fonction est une bloc de traitement renvoyant un résultat.
```
Fonction nom_fonction (x : type_donnée, y : type_donnée ...) Résultat type_résultat
  Variable:
    .
    .
    .
  Début
    .
    .
    .
  Fin
Finfonction
```

### Procédure

Une procédure et un bloc d'instruction éfféctuant un bloc de code ne renvoyant pas de résultat

Une fonction est une bloc de traitement renvoyant un résultat.
```
Procédure nom_fonction (Donnée x : type_donnée, Donnée/Résultat y : type_donnée ...)
  Variable:
    .
    .
    .
  Début
    .
    .
    .
  Fin
Finfonction
```

## Recheche du maximum
```
Fonction max(T : tableau[0..n-1])
  Variable :
    T : Tableau [0..99] de réels
    i : entier (indice d'un élément donné du tableau)
    max : réel
    res : entier
  Début :
    max <- T[0]
    res <- 0
    pour i allant de 1 à n-1 par 1 faire
      si T[i] > max faire
        max <- T[i]
        res <- i
    fin pour
    Retourner res
  Fin
Finfonction
```

<u>**Coût**</u> : Recherche en temps linéaire : $\mathcal{O}(n)$

## Recherche dichotomique

Recherhe d'un élément dans un tableau **trié**

```
Fonction rechercheDicho(T : tableau[0..n-1] Réel, val : Réel)
  Variable :
    a : entier
    b : entier
    c : entier
    trouvé : booléen
    res : entier
  Début :
    a <- 0
    b <- 99
    res <- -1
    trouvé <- faux
    Tantque non trouvé Et b - a >= 0 faire
      c <- a + (b - a) / 2
      Si val > T[c] faire
        a < c+1
      Sinon si val < T[c] faire
        b < c-1
      Sinon faire
        trouvé <- vrai
        res <- c
      Finsi
    Fintantque
    Retourner res
  Fin
Finfonction
```

<u>**Coût**</u> : Recherche en temps logarithmique : $\mathcal{O}(\log_2{n})$


## Portée des variables

### Globale
Une variable dites de porté globale, cela signifie qu'elle est disponible pour l'ensemble du programme

### Locale
Une variable dites locale est une variable dont la porté est limité au bloc d'instruction de la déclaration

## Pointeurs

Chaque fonction à son propre éspace mémoire **indépendamant** des autres fonctions
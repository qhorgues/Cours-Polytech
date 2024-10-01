---
sidebar_position: 2
description: "Gestion de l'adressage en C"
---

# Chapitre 2 : Adressage

## Les tableaux de dimension 1

* Premier élément l'indice est **toujours 0**
* L'indice du dernier élément est **toujours n-1 pour un tablelau de taille n**

:::warning
Le C ne possède pas de mécanisme de vérification de débordement d'un tableau
:::

### Déclaration

```¢
int tab[10];
tab[2] = 64;
```
Lors de la déclaration

```c
int tab[4] = {2, 4, 6, 8};
```
```c
int tab[4] = {0};
```
```c
int tab[] = {2, 4, 6, 8};
```
```c
int tab[4] = {
    [0] = 2;
    [1] = 4;
    [2] = 6;
    [3] = 8;
};
```

**Un tableau n'est pas un pointeur**

mais : 
* **Conséquence 1** : $tab \Leftrightarrow \&(tab[0])$
* **Conséquence 2** : $^*tab \Leftrightarrow tab[0]$

Accès à un élément dans un tableau 1D : **arithmétique des pointeurs**
* $tab[i] \Leftrightarrow\ ^*(tab+i)$
* $tab$ : **adresse** du premier élément
* $tab+i$ : adresse de l'élément d'indice $i$
* $^*(tab+i)$ : **valeur** de l'élement d'indice $i$ du tableau (attention au priorité $\Rightarrow$ **Parenthèse obligatoire**)

## Les chaines de caractères

* Une chaine de caractère est un tableau de **char**
* Un tableau don't le dernier caractère est le caractère **'\0'**

### Distinction entre `char *s` et `char s[]`

`char *s = "Une chaine";` $\Leftrightarrow$ `const char *s = "Une chaine";` On ne peut pas modifier le contenu de la chaine de caractères. `s[0] = 'u';` **non valide**

:::warning
Impossible d'assigner un tableau dans un autre tableau

ex: `t1 = t2` Interdit !!
:::

Un tableau est toujours passé par adresse

### Manipulation des chaines de caractères

* **`strlen`** : Calcule la longueur d'un chaîne de caractère.
* **`strcpy`** : Copier une chaîne de caractère.
* **`strcat`** : Concaténer deux chaines de caractères en une seule.
* **`strcpm`** : Comparer deux chaînes de caractères.
* **`strdup`** : Dupliquer une chaine de caractère.

:::warning
Attention au taille des chaînes de destination pour toutes les fonctions utilisant un paramètre destination
:::

:::warning[Particularité de `strdup`]
La fonction utilise `malloc` et renvoie une chaîne alloué dynamiquement, il faut donc ensuite ne pas oublier d'appeler `free` sur la chaîne 
:::




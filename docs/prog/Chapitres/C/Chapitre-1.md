---
sidebar_position: 1
title: Introduction au C
description: Les bases du langage C
---

# Chapitre 1 : Introduction au langage C

## Eléments de normaliqation

* 1989 : C-ANSI ou C89
* 1990 : ISO C90
* 1999 : ISO C99
* 2011 : ISO C11
* 2017-2018 : ISO C17, ISO C18

## Structure d'un programme C

* Fichiers sources en .c
* Fichiers d'en tête en .h
* Un fichier main.c
* L'ensembles de ces fichiers sont gérés dans un **projet**, définit au sein d'un **espace de travail**
* La génération du code exécutable est régie au sein du projet par des **options** de **compilation** et **d'édition des liens**

## Gestion des ressources d'un projet C : IDE

* Constitué de fichiers sources en .c
    - Regroupés dans un répertoire **src**
* Constitué de fichiers sources en .h
    - Regroupés dans un répertoire **include**
* Utilisation d'un **IDE** : Codelite
    - OS : ~Windows~ ou **Linux**


## Structure d'un fichier source .c

* Exemple de main.c
```c
/**
* @brief Table de conversion °F vers °C
* @file main.c
*/

#include <stdlib.h>
#include <stdio.h>
#include  "ConversionFtoC.h"

int main(void)
{
    double f_min = 0.0, f_pas = 5.0, f = 0.0;

    for (int i = -5; i < 15; i++)
    {
        f = f_min + i * f_pas;
        printf("%+0.2lf f \t=> %.2lf c\n", f, ConversionFtoC(f));
    }
    return 0;
}
```

## Structure d'un fichier d'en tête .h

* Exemple de ConvertFtoC.h
```c
/**
* @brief prototype de fonction
* @file ConvertFtoC
*/

#ifndef _CONVERTFTOC_H
#define _CONVERTFTOC_H

double ConvertFtoC(double far);

#endif
```

## Génération du fichier .exe

* Langae compilé
* Dans la mesure écrire un code portable

## Bloc fonctionnels

* Inclusion de fichiers
```c
#include
```

* Definition de macro et de symbole
```c
#define
```

* Définition de tyoe


## Opérateur

### Les opérateurs logiques

expr1 **&&** expr2 : teste si l'expression 1 est nulle, si non renvoie si l'expression 2 est non nulle aussi

expr1 **||** expr2 : teste si l'expression 1 est nulle  si oui teste si l'expression 2 l'est aussi et renvoie faux dans ce cas et vrai sinon

### Conversion de type

```c
int a = 10;
double b = (double)a;
```

### Sizeof

```c
sizeof(int) // renvoie La taille nécéssaire pour un type int
```
---
description: Exercices sur les pointeurs
---

# Fonctions avec les pointeurs


## Echange de deux valeurs
```
fonction inverserValeur(adrA, adrB : ↑entier)
    Variable
        temp : entier
    Début
        tmp <- ↑adrA
        ↑adrA <- ↑adrB
        ↑adrB <- tmp
    Fin
```


## Fonctions avec les listes chainées


```txt title="Structure maillon"
Type maillon = Structure
    val : entier
    suiv : ↑maillon
Finstructure
```

```txt title="Structure Liste"
Type Liste = Structure
    first : ↑maillon
Finstructure
```

### Initialiser une liste chainée

Ecrire un algo qui permet de créer une liste chainée d'entiers de 4 éléments, l'ajout de chaque élément se fait à la fin

```txt title="Créer le maillon"

Fonction creerMaillon(val : entier) : ↑maillon
    Variable
        ptr : ↑maillon
    Début
        ptr <- allouer(maillon)
        ↑ptr.val <- val
        ↑ptr.suiv <- NIL
        Renvoyer val
    Fin
```

```txt title="Créer une liste à partir d'un tableau d'élément"
Fonction creerListe( elements : Tableau[0...n-1] entiers, n : entier) : Liste
    Variable
        liste : Liste
        ptr, ptrS : ↑maillon
        indElements : entier
    Début
        liste.first <- NIL

        Si n != 0 faire
            ptr <- creerMaillon(T[0])
            ↑liste.first <- ptr

            Pour indElements de  1 à n-1 faire
                ptrS <- creerMaillon(T[indElements])
                ↑ptr.suiv <- ptrS
                ptr <- ptrS
            Finpour
        Finsi
        Renvoyer liste
    Fin           
```

### La somme

Ecrire une fonction qui permet de retrouver la somme des éléments de la liste chainée

```txt title="Somme d'une liste chainée"
Fonction sommeListe(liste : Liste) : entier
    Variable
        ptr : ↑maillon
        sum : entier
    Début
        sum <- 0
        ptr <- liste.first

        Tantque ptr != NIL faire
            sum <- sum + ↑ptr.val
            ptr <- ↑ptr.suiv
        Fintantque
        Renvoyer sum
    Fin
```

### Suppression d'un élément

Ecrire une fonction qui permet de supprimer un élément de la chaîne contenant la valeur `a`

```txt title="Suppression d'un élément"
Fonction delElemListe(liste : ↑Liste, a : entier)
    Variable
        ptr, ptrS : ↑maillon
    Début
        ptr <- NIL
        ptrS <- ↑liste.first
        
        Tantque ptrS != NIL Et ↑ptrS.val = a faire
            ptr <- ptrS
            ptrS <- ↑ptr.suiv
        Fintantque

        Si ptrS != NIL faire
            Si ptr = NIL faire
                ptr <- ↑ptrS.suiv
                liberer(ptrS)
                ↑liste.first <- ptr
            Sinon
                ↑ptr.suiv <- ↑ptrS.suiv
                liberer(ptrS)
            Finsi
        Finsi
    Fin
```
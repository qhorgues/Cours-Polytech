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

```
Procédure Constructeur (L : ↑maillon, a : entier)
    Variable
        ptr, ptrN : ↑maillon
    Début
        ptrN <- allouer(maillon)
        ↑ptrN.val <- a
        ↑ptrN.suiv <- NIL

        Si L = NIL faire
            L <- ptrN
        Sinon
            ptr <- L
            Tantque ↑ptr.suiv != NIL faire
                ptr <- ↑ptr.suiv
            Fintantque
            ↑ptr.suiv <- ptrN
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

<details>
    <summary>Implémentation en OCaml</summary>
    <div>

```js
let rec sumElem l =
    match l with
    | [] -> 0
    | v::rl -> v + sumElem rl
```

    </div>
</details>

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

<details>
    <summary>Implémentation en OCaml</summary>
    <div>

```js
let rec delElem l a =
    match l with
    | [] -> ()
    | v::rl when v == a -> rl
    | v::rl ->  v::(delElem rl a)
```

    </div>
</details>

### Le maximum de manière réccursive

```txt
Fonction maxListe(liste : ↑maillon)
    Variable
        v2 : entier
    Début
        Si liste == NIL faire
            renvoyer -∞
        Sinon si ↑liste.suiv == NIL
            renvoyer ↑liste.val
        Sinon
            v2 <- maxListe(↑liste.suiv)
            Si ↑liste.val > v2 faire
                renvoyer ↑liste.val
            Sinon
                renvoyer v2
    Fin
```

<details>
    <summary>Implémentation en OCaml</summary>
    <div>

```js
let rec maxListe l =
    match l with
    | [] -> -inf
    | v::[] -> v
    | v::rl -> (
        let v2 = maxListe rl in
        if v2 > v then
            v2
        else
            v
    )
```

    </div>
</details>

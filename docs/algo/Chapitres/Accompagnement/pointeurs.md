---
sidebar_position: 4
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

```txt title="Fonction principale du Max"
Fonction rechercheMaxi(liste : ↑maillon)
    Début
        Si liste = NIL faire
            Erreur
        Sinon
            renvoyer Max(L->suiv, L->elt)
    Fin
```

```txt title="Fonction recursive de la recherche du max"
Fonction Max(L ; liste, a : entier) Resultat entier
    Début
        Si L = NULL alors
            Retourner a
        Sinon
            Si (L->elt > a) alors
                Retourner Max(↑L->suiv, ↑L->elt)
            Sinon
                Retourner Max(↑L->suiv, a)
            Finsi
        Finsi
    Fin
```

<details>
    <summary>Implémentation en OCaml</summary>
    <div>

```rust
let maxListe l =
    match l with
    | [] -> invalid_arg "liste vide"
    | v::rl -> 
        let rec max l a =
            match l with
            | [] -> a
            | x::rl when x > a -> max rl x
            | x::rl -> max rl  a
        in max rl v

```

    </div>
</details>


### Sac à dos

```txt
Fonction max(a, b : entier) renvoye entier
    Début
        Si a > b faire
            renvoyer a
        Sinon
            renvoyer b
    Fin
```

```txt 
Fonction sacADos (n : entier, 
                  V : Tableau[0..n-1] d'entiers, 
                  A : Tableau[0..n-1],
                  Vtot : entier)
    Variable
        F : tableau[0..n-1][0..Vtot-1]
        i, j : entier
    Début
        Pour i de 0 à n-1 faire
            Pour j de 0 à Vtot-1 faire
                Si i = 0 faire
                    Si j-V[i] >= 0 faire
                        F[i][j] <- A[i]
                    Sinon
                        F[i][j] <- 0
                    Finsi
                Sinon
                    Si j-V[i] >= 0 faire
                        F[i][j] <- max(A[i] + F[i-1][j-V[i]], F[i-1][j])
                    Sinon
                        F[i][j] <- F[i-1][j]
                    Finsi
                Finsi
            Finpour
        Finpour
        renvoyer F[n-1][Vtot-1]
    Fin
```


<details>
    <summary>Implémentation en OCaml (non finie)</summary>
    <div>
```rust

type Member = {
    vt: int;
    at: int;
    x: bool array;
}

let sacADos (vitems:int array) (aitems:int array) (maxVolume:int) (n:int) =
    let rec allItems l i =
        if i < n then
            begin
                let rec getNewPos l =
                    match l with
                    | [] -> begin
                        let maillon  ={vt = vitems[i]; at = aitems[i]; x = Array::make false n}
                in
            end
        in allItems [] 0

```

    </div>
</details>
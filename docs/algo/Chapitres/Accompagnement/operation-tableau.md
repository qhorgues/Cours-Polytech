---
sidebar_position: 2
description: Fonction de base sur les tableaux
---

# Fonctions sur les tableaux


## La moyenne 

Ecrire une fonction qui prend en paramètre un tableau d'entiers et retourne un réel qui est la moyenne des éléments du tableau

```
Fonction moyenne(tab : Tableau[0...n-1] : entier, n : entier) : reel
    Variable
        somme : entier
        i : entier
    Debut
        Pour i allant de 0 à n-1 par pas de 1 faire
            somme <- somme + tab[i]
        Finpour
        renvoyer some / n
    Fin
Finfonction
```
<details>
    <summary>Implémentation en C</summary>
    <div>

```c
double moyenne(double* tab, int n)
{
    double s = 0;
    for (int i = 0; i < n; i++)
    {
        s += tab[i];
    }
    return s / n;
}
```
    </div>
</details>

## La médianne

```
Fonction mediane(tab : Tableau[0...n-1] : entier, n : entier) : reel
    Variable
    Debut
        Si n modulo 2 = 0 faire 
            renvoyer (tab[n/2] + tab[n/2 - 1]) / 2
        Sinon renvoyer (tab[n/2])
        Finsi
    Fin
Finfonction
```

<details>
    <summary>Implémentation en C</summary>
    <div>

```c
double medianne(double* tab, int n)
{
    if (n % 2 == 0)
    {
        return (tab[n/2] + tab[n/2 -1]) / 2.;
    }
    else
    {
        return tab[n/2];
    }
}
```
    </div>
</details>

## Déterminer si un mot est un palindrôme

```
Fonction palindrome(ch : chaine, n : entier) : booleen
    Variable
        estPalindrome
        i : entier
    Debut
        i <- 0
        estPalindrome <- Vrai
        Tantque i < n/2 Et estPalindrome faire
            Si ch[i] != ch[n-i-1] faire
                estPalindrome <- Faux
            Finsi
        Fintantque
        renvoyer estPalindrome
    Fin
Finfonction
```

<details>
    <summary>Implémentation en C</summary>
    <div>

```c
#include <stdbool.h>

bool palindrome(char* ch, int n)
{
    int i = 0;
    bool estPalindrome = true;
    while (estPalindrome && i < n/2)
    {
        if (ch[i] != ch[n-i-1])
        {
            estPalindrome = false;
        }
    }
    return estPalindrome;
}
```
    </div>
</details>

#### Déroulé

"kayak" = 5

| estPalindrome | $i$ | $ch[i]$ | $ch[n-i-1]$ |
|---------------|-----|---------|-------------|
|      Vrai     | $0$ |   'k'   |      'k'    |
|      Vrai     | $1$ |   'a'   |      'a'    |

## Effacer un caractère en position $i$

```
Fonction effacerChr(ch : chaine, pos : entier, n : entier) : chaine
    Precondition: 
        pos < n
    Variable
        i : entier
        res : chaine
    Debut
        i <- 0
        Pour i allant de 0 à pos-1 par pas de 1 faire
            res[i] = ch[i]
        Fintantque
        Pour i allant de pos+1 à n-1 par pas de 1 faire
            res[i-1] = ch[i]
        Finpour
        renvoyer res
    Fin
Finfonction
```

<details>
    <summary>Implémentation en C</summary>
    <div>

```c
#include <assert.h>

char* effaceChr_cpy(char* ch, int pos, int n)
{
    assert(pos >= 0 && pos < n);
    char* res = malloc(sizeof(char)*n);
    if (res == NULL)
    {
        return res;
    }

    int i;
    for (i = 0; i < pos; i++) {
        res[i] = ch[i]
    }
    for (i = pos+1; i < n; i++) {
        res[i-1] = ch[i]
    }
    return res;
}
```
    </div>
</details>

## Nettoyer tout les caractères voulu d'une chaine

```
Fonction nettoie(ch : chaine, n : entier, del : chaine, m : entier) : chaine
    Variable
        i : entier
        j : entier
        indRes : entier
        res : chaine
        chrDel : booléen
    Debut
        i <- 0
        indRes <- 0
        Pour i allant de 0 à n-1 par pas de 1 faire
            chrDel <- Faux
            j <- 0
            Tantque j < m Et non chrDel faire
                Si ch[i] = del[j] faire
                    chrDel <- Vrai
                Finsi
            Fintantque
            Si non chrDel faire
                res[indRes] <- ch[i]
            Finsi
        Fintantque
        renvoyer res
    Fin
Finfonction
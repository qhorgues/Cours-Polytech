---
sidebar_position: 3
description: Fonction de base sur les structures
---

# Fonction sur les structures

## Structure d'un point

* Un point est donnée par son $x$ et son $y$
* Définir une structure point
* Ecrire une fonction qui prend deux points A, B et qui renvoie la distance euclidienne (racine($a$) $\rightarrow$ renvoie la $\sqrt{a}$)
* Etant donné un polygone qui est un tableau de point écrire la fonction qui calcule son périmètre

### Structure

```
type Point: Structure
    x : réel
    y : réel
finstructure
```
<details>
    <summary>Implémentation en C</summary>
    <div>

```c
struct Point
{
    double x;
    double y;
};
```
    </div>
</details>

### Distance entre deux points

```
Fonction distance(A : Point, B : Point) : réel
Debut
    renvoyer racine((B.x - A.x)² + (B.y - A.y)²)
Fin
```

<details>
    <summary>Implémentation en C</summary>
    <div>

```c
#include <math.h>
#define POW2(x) ((x)*(x))

double distance(struct Point A, struct Point B)
{
    return sqrt(POW2(B.x - A.x) + POW2(B.x - A.x));
}
```
    </div>
</details>

### Périmètre d'un polygone

```
Fonction perimetre(poly : Tableau[0...n-1] : Point, n : entier) : reel
    Variable
        peri : reel
        i : entier
    Debut
        Pour i allant de 0 à n-2 par pas de 1 faire
            peri <- peri + distance(poly[i], poly[i+1])
        Finpour
        peri <- peri + distance(poly[0], poly[n-1])
        renvoyer peri
    Fin
Finfonction
```

<details>
    <summary>Implémentation en C</summary>
    <div>

```c
double perimetre(struct Point* poly, int n)
{
    double peri = 0.;
    for (int i = 0; i < n-1; i++)
    {
        peri += distance(poly[i], poly[i+1]);
    }
    peri += distance(poly[0], poly[n-1]);
    return peri;
}
```
    </div>
</details>

#### Déroulé

$A(1, 1), B(1, 5), C(4, 5), D(4, 1)$ <br/>
$poly [A, B, C, D]$

| $i$ | $p$ |
|-----|-----|
|     | $0$ |
| $0$ | $4$ |
| $1$ | $7$ |
| $2$ |$11$ |
|     |$14$ |
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

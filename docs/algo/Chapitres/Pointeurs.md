# Chapitre 3 : Pointeurs, Listes, Piles, Files

## Pointeurs
### Définitions

Toutes variable est stockée en mémoire centrale. La mémoire est un tableau où chaque élément est identifié par une adresse.
Pour trouver une valeur, il faut donc connaître son adresse en mémoire. C'est le compilateur qui fait le lien entre les variables et leurs valeurs en mémoire.
Pour accéder à la valeur d'une variable on utilise son nom. On peut aussi passer par son adresse, donc un pointeur.

Un pointeur est une variable qui contient l'adresse d'une autre variable;

Un pointeur permet d'accéder à la valeur d'une variable sans la nommer

type mon_ptr : $\uparrow$entier $\leftarrow$ type de l'objet pointé

### Initialisation

On peut initialiser une variable de type pointeur de 3 façons:
* Avec la constante NIL
* Avec l'adresse d'une donnée existante
* Par une allocation dynamique

:::warning
On ne laisse jamais une variable pointeur sans initialisation
:::

#### Avec NIL


$\textnormal{mon\_ptr} \leftarrow \textnormal{NIL}$

#### Avec des données

On utilise l'opérateur @ pour accéder à l'adresse mémoire

<u>**Exemple:**</u>

Variables: <br/>
    toto : entier <br/>
    mon_ptr : $\uparrow$entier <br/>
    titi : entier <br/>
Début <br/>
    toto $\leftarrow$ 15 <br/>
    mon_ptr $\leftarrow$ @toto <br/>
    titi $\leftarrow$ ($\uparrow$mon_ptr)+2
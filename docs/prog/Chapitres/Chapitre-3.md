---
sidebar_position: 3
description: Gestion de la mémoire en C
---

# Gestion et organisation de la mémoire

## Structure de données : `struct`

Une structure peut contenur **différents type** de données

### Déclarations

#### Déclaration de la structure
```c
struct Nom_Structure {
    type_champ1 Id_champ1;
    type_champ2 Id_champ2;
    type_champ3 Id_champ3;
    type_champ4 Id_champ4;
    type_champ5 Id_champ5;
};
```

<u>**Exemple:**</u>

```c
strcut Coord3D
{
    double x;
    double y;
    double z;
};
```

```c
strcut Personne
{
    char nom[100];
    char prenom[100];
    char adresse[1000];

    int age;
    int sexe;
};
```

#### Déclaration de variable de type structure

```c
struct Coord3D point1, point2;

point1.x = 0.0;
point2.x = point1.x = 0.0;

struct Personne Paul;
```

```c
struct {int a; int b} x; // Ne pas reproduire xD
```

### Pointeur sur des structures

```c
struct coord3D point1, *pt_coord3D;

point1.x = 1.5;
pt_coord3D = &point1;
pt_coord3D->y = 2.3; // ou (*pt_coord3D).y = 2.3
```

`->` opérateur d'accés à un champ d'une structure en utilisant un pointeur

## Définition de type

`typedef` permet de **redéfinir** un type qui existe **déjà**

```c
typedef struct
{
    double x;
    double y;
    double z;
} Coord3D;
```

## Le tas

Le tas est la zone mémoire utilisé pour l'allocation dynamique, passant par la création et la libération de zone mémoire

## Allocation dynamique

### `malloc` 
reserve une zone mémoire contigue, 
```c
void *malloc(size_t size);
```
Renvoie un pointeur sur le premier octet de la zoner mémoire ou `NULL` si l'allocation à échoué

```c
float *p_f;
p_f = (float*)malloc(15*sizeof(float));
if (p_f == NULL) exit(-1); 
```

### `free`
libère la zone mémoire précédemement allouée avec malloc
```c
void free(void *ptr);
```

Libère la zone mémoire et ne tretourne aucune valeur

```c
float *p_f;
p_f = (float*)malloc(15*sizeof(float));
if (p_f == NULL) exit(-1);
free(p_f);
p_f = NULL; 
```

### `callloc`

reserve une zone mémoire contigue où **tout les octets sont initialisé à 0**,
```c
void *calloc(size_t number, size_t size);
```

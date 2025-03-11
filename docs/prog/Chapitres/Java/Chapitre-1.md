---
sidebar_position: 1
title: Introduction au Java
description: Les bases du langage Java
---

https://celene.univ-tours.fr/course/view.php?id=16640 <br/>
Clé : CPOO2_2025

```java
/**
 * class Main
 */
public class HelloWorld
{
    /**
     * Main
     * 
     * @param args : main args
     */
    public static void main(String[] args)
    {
        System.out.println("Hello World!");
    }

    /**
     * deleted constructor
     */
    private HelloWorld() {}
}
```

## Types

* **boolean**
* **byte**
* **short**
* **int**
* **long**

### Convertion
```java
int i = 260;
byte j = i; // Error
byte k = (byte)i; // Ok
long l = i; // Ok conversion implicite
```

## Tableau
```java
int[] tab;
Objet v=null;
```

## Fonction

```java
void methode1(int i1, StringBuffer s1) {
    i++;
    s1.append("d");
}

void methode2() {
    int i2 = 0;
    StringBuffre s2 = new StringBuffer("abc");
    methode1(i2, s2);
    System.out.println("i2 = "+i2+", s2 = "+s2);
}
```

## `final`

```java
public class A {
    static final double PI = 3.1415;
    static double getPI() {
        return PI;
    }
}
```

* Pour un attribut, l'atribut est **constant**
* Pour une méthode, elle ne pourra pas être redéfinie dans une classe fille

## Constructeur

**Ssi** la classe n'a pas de constructeur, un constructeur sans paramètre est instancié

appelé un autre constructeur
au **début** d'un constructeur

```java
public class A {
    public A(int v) {
        this.val = v;
    }

    public A() {
        this(0);
    }

    private int val;
}
```

faire exo C 1.1

```java
tab = new int[12];
int[] tab = {12, 15, 31, 5};
color = new Color[12][15];
tab.length; // taille de tableau
```

```c
int tab[] = {5, 3, 4};
int rab2[] = tab; // FAUX
int *tab3 = tab; // Vrai
```

## Packaging

```java
package dessin;
public class Circle {
    //....
}
```

```java
package dessin.graph2d;
```

```java
import dessin;
```

```java
import dessin.graph2d.*;
```

## Héritage

```java
class Fille extends Mere {
    //...
}
```

Non héritable
```java
final class Mere {
    //...
}
```

Déterminer si une référence est une instance d'une classe
```java
instanceof
```

```java
System.out.println(e instanceof Circle); // false
```

Toutes les classes qui n'ont pas de classe mêre sont fille de la classe `java.lang.Object`, fournissant un accès à des services comme `wait()`, `notitify()`, `toString()`, `clone()`, `equals()`.

### `equals()`  VS ==

```java
Circle c1 = new Circle(25);
Circle c2 = c1
Circle c3 = new Circle(25);

c1 == c2; // Vrai
c1 == c3; // Faux
```
Compare des références

* **Par défaut `equals()` compare aussi des références**
* **À reféfinir !!**

On peut faire de même avec un certain nombre de fonction comme `hashCode()`

### Constructeur de la classe mêre

Pour appeler le constructeur de la classe mêre on utilise `super()`

`super.x` renvoie l'attribut x de la classe mêre
`super.super.x` error
```java
((A)this)
```
renvoie l'attribut x de la class mêre mais **pour les méthodes** <br/>
`super.m()` appele la méthode de la classe mêre <br/>
`((B)this).m()` Appel à la méthode m de la classe courante et non la classe mêre ici B.


### Polymorphisme

## Interfaces

```java
public interface {
    //...
}
```
---
position: 1
description: "Le Binome de Newton"
---

# Chapitre 1 : Binome de Newton

## Binome de newton
:::tip[Démonstration]
Soit ($a$, $b$) $\in$ $\mathbb{R}^2$. Pour démontrer la formule du binôme de Newton, nous allons procéder par récurrence sur $n$.

L'hypothèse de réccurence $H_n$ au rang $n \in \mathbb{N}$
$$
\sum_{k = 0}^{n} \binom{n}{k}a^k b^{n-k} = (a+b)^n
$$

**Initialisation** <br/>
Pour $n = 0, (a+b)^0 = 1$ et $\binom{0}{0}a^0b^0 = 1 \times 1 \times 1 = 1$ <br/>
Donc $H_0$ est vraie.

**Hérédité** <br/>
Supposons $H_n$ vraie pour un $n \in \mathbb{N}$, et montrons que $H_{n+1}$ est vraie.<br/>
Pour commencer :
$$
(a+b)^{n+1} = (a+b)(a+b)^n
$$
Par hypothèse de réccurence :

$$
(a+b)^{n+1} = (a+b)\sum_{k=0}^n \binom{n}{k} a^k b^{n-k}
$$
$$
 = a\sum_{k=0}^n \binom{n}{k} a^k b^{n-k}
 + b\sum_{k=0}^n \binom{n}{k} a^k b^{n-k} 
$$
$$
 = \sum_{k=0}^n \binom{n}{k} a^{k+1} b^{n-k}
 + \sum_{k=0}^n \binom{n}{k} a^k b^{n-k+1} 
$$

Faisons le changement de variable $i=k+1$ dans la première somme, puis renommons $i$ en $k$ :

$$
(a+b)^{n+1} = \sum_{k=1}^{n+1} \binom{n}{k-1} a^{k} b^{n-k+1}
+ \sum_{k=0}^n \binom{n}{k} a^k b^{n-k+1}
$$

Isolons le terme $k=n+1$ de la première somme et le terme $k=0$ de la seconde, puis réunissons les deux sommes pour $k \in [[1,n ]]$ :

$$
(a+b)^{n+1} = \binom{n}{n}a^{n+1}b^0
+ \sum_{k=1}^{n} \left( \binom{n}{k-1} + \binom{n}{k} \right)a^{k} b^{n-k+1}
+ \binom{n}{0}a^0b^{n+1} 
$$

Comme $\binom{n}{k-1}+\binom{n}{k}=\binom{n+1}{k}, \binom{n}{n}=\binom{n+1}{n+1}$ et $\binom{n}{0}=\binom{n+1}{0}$ :

$$
(a + b)^{n+1} = \sum_{k=0}^{n+1}\binom{n+1}{k}a^kb^{n+1-k}
$$
Autrement dit, $H_{n+1}$ est vraie. 
:::
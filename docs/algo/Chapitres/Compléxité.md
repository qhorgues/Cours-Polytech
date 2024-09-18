# Chapitre 2 : Compléxité des algorithmes

On peut résoudre un même problème en utilisant plusieurs algorithmes. Certains sont plus efficaces que d'autres.
La compléxité d'un algorithme est une mesure de la quantité de ressources nécessaires à son éxécution.
Les ressources sont le temps et l'espace mémoire.
Cette mesure est indépendantes du langage de programmation et de la machine qui l'execute. Elle est en fonction de la taille des données à traiter.

## Compléxité en temps

La compléxité en temps est le nombre d'opération élémentaires éxécutées par l'algorithme.
Une opération est élémentaire lorsque son temps d'éxécution est constant : $+,-,\times,\div$,test,comparaison

<u>**Exemple**</u>
```
Pour i de 1 à n faire  <---------------- 1 --------- x n
    Pour j de 1 à 2n+1 faire <-- 1 -- > x (2n+1) /
        ecrire Hello! <----------1 /
    Finpour
Finpour
```

$(1+2(2n+1))n$ <br/>
$ = n+4n^2 + 2n$ <br/>
$4n^2 + 3n$

<u>**Exemple**</u>

```
n <- lire()   \
m <- lire()   |
i <- 1         > 5
j <- 1        |
cpt <- 0      /

Tantque i <= n et j <= m faire <---- 1 |
    cpt <- cpt+1    |                  |> x min(n,m)
    i <- i+1        |> 3               |
    j <- j+1        |
Fintantque
```

La <u>compléxité dans le pire cas</u> est le nombre d'opération élémentaires le plus grand pour toutes les instances possibles de l'algorithme.

## Compléxité asymptotique

On s'interesse au comportement asymptotique des algorithmes.

| $n$ | $5$ | $10$ | $15$ | $20$ | $100$ | $1000$ |
|-----|-----|------|------|------|-------|--------|
|$2n$ |$5.10^{-9}s$| | | | $10^{-7}s$ | $10^{-6}s$ |
|$n^2$|$10^{-8}$| | | | $5.10^{-8}s$ | $5.10^{-4}s$ |
|$n^5$|$10^{-6}$| | | $10^{-3}s$ | $5s$ | $~139h$ |
|$2^n$|$10^{-8}s$|$10^{-7}s$|$10^{-5}s$|$10^{-4}s$|$2.10^{13}ans$||
|$n!$||$10^{-3}s$|$654s$|$38,7ans$|||

Soit $g : \mathbb{N} \rightarrow \mathbb{R}^+$ une fonction positive.

On note $O(g)$ l'ensemble des fonctions positives f telles que <br/>
$\exist\ \alpha \gt 0, \exist n_0 \in \mathbb{N} | f(n) \le \alpha g(n) \forall n \ge n_0$

On dit que la quantité $f(n)$ d'un algorithme est en Grand-$\mathcal{O}$ de $g(n)$. Le nombre d'opérations de f est borné par $\alpha g$ à partir d'un certain rang

<u>**Exemple:**</u>

$f(n) = n + 4 n^2 + 2 n^3 \in \mathcal{O}(n^3)$ <br/>
$\hspace{9.7em} \in \mathcal{O}(n^4)$ <br/>
$\hspace{9.7em} \in \mathcal{O}(n^5)$

On note $\Omega(g)$ l'ensemble des fonctions positives f telles que

$\exist\ \alpha \gt 0, \exist\ n_0 \in \mathbb{N}\ |\ f(n) \ge \alpha g(n) \ \forall n \ge n_0$

$f(n) = n + 4n^2 + 2n^3 \in \Omega(n)$ <br/>
$\hspace{9.7em} \in \Omega(n^2)$ <br/>
$\hspace{9.7em} \in \Omega(n^3)$

On dit que la compléxité d'un algorithme est en $\mathcal{O}(g)$ si

$\exist\ \alpha \gt 0, \exist\ \beta \gt 0, \exist\ n_0 \in \mathbb{N}\ |\ \alpha g(n) \le f(n) \le \beta g(n),\forall n \ge n_0$

### Compléxité courante


$\mathcal{O}(1)$  temps constant

$\mathcal{O}(\log{n})$ sublinéaire

$\mathcal{O}(n)$ linéaire

$\mathcal{O}(n^2), \mathcal{O}(n^3)$ quadratique, cubique

$\mathcal{O}(n^k)$ polynomial

$\mathcal{O}(2^n)$ exponentiel

$\mathcal{O}(n!)$ fatoriel

## Calcul del a compléxité en temps

### Séquence de traitement

$\textnormal{Bloc 1} \rightarrow T_1(n)$

$\textnormal{Bloc 2} \rightarrow T_2(n)$

Alors $T(n) = T_1(n) + T_2(n)$

### Structure Conditionnelle

$\textnormal{Si cond}(n)\ \textnormal{alors}$ <br/>
&emsp; $\textnormal{Bloc 1} \rightarrow T_1(n)$ <br/>
$\textnormal{Sinon}$ <br/>
&emsp; $\textnormal{Bloc 2} \rightarrow T_2(n)$

Alors $T(n) = \max \left( {T_1(n), T_2(n)} \right)$



### Structure répétitve

$\textnormal{Pour}\ i\ \textnormal{allant de}\ 1\ \textnormal{à}\ \mathcal{K}\ \textnormal{par pas de}\ 1\ \textnormal{faire}$ <br/>
&emsp; $\textnormal{Bloc 1} \rightarrow T_1(i, n)$ <br/>
$\textnormal{Finpour}$

Alors $\displaystyle T(n) = \sum_{k = 1}^{\mathcal{K}} T_1(k,n)$

De plus si $T_1(k, n)$ ne dépend pas de $k$ <br/>
$\Rightarrow T(n) = \mathcal{K}\ T_1(n)$

### Foncion récursive
#### 1er cas
```
F(n):
    Si n > 1 alors
        F(n/2)
    Finsi
```

$T(a) = a + b T(n/2)$
$T(0) = c$ <br/>
$T(n) = a + b T(\frac{n}{2})$ <br/>
$T(n) = a + b T(a + b T \left( \frac{n}{4} \right))$ <br/>

On divise par 2 à chaque fois <br/>
$\Rightarrow$ nombres d'itérations $\displaystyle \frac{k}{\frac{n}{2}} = 1$ <br/>
$\Rightarrow k = \log_2{n}$

Donc $T(n) \in \mathcal{O}(n)$

#### 2ième cas

Si $T(n) = a\ T(n-1) + b$ <br/>
$\hspace{3.3em}= a\left( a\ T(n-2) + b \right)$ <br/>
$\hspace{3.3em}= a'\ T(n-2) + b'$ <br/>
$\hspace{3.3em}= a''\ T(0) + b''$

On a $n$ itérations donc $T(n) \in \mathcal{O}(n)$

#### 3ième cas

Si $a \neq 1$

$T(n) = a\ T(n-1) + b$

$\displaystyle \hspace{2.5em}= a\ T(n-1) + b\ \frac{a-1}{a-1}$

$\displaystyle \hspace{2.5em}= a\ T(n-1) + \frac{a\ b}{a-1} - \frac{b}{a-1}$

$\displaystyle \Rightarrow T(n) \neq \frac{b}{a-1} = a \left( T(n-1) + \frac{b}{a-1} \right)$

$\displaystyle U_n = T(n) + \frac{b}{a - 1}$

$\Rightarrow U_n = a\ U_{n-1}$

$\displaystyle \Leftrightarrow U_n = a^n\ U_{0} = a \left( c + \frac{b}{a-1} \right) - \frac{b}{a-1}$

Donc $T(n) \in \mathcal{O}(a^n)\quad \textnormal{exponentiel}$

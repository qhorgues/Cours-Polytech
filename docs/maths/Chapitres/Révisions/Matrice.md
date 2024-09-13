---
sidebar-position: 1
description: Révision général sur les matrices
---

# Calcul Matriciel

## L'identité

Soit $n \in \mathbb{N}$

$$
I_n = 
\begin{pmatrix}
   1  &        & (0) \\
      & \ddots &      \\
 (0)  &        &  1
\end{pmatrix}
$$

## Somme de matrices

Soit $m, n \in \mathbb{N},$
Soit $A, B, C \in \mathcal{M}_{m,n}(\mathbb{K})$

$C  = A + B$
$\Leftrightarrow (c_{i,j})_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }} = (a_{i,j} + b_{i,j})_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }}$

## Produit de deux matrice

Soit $m, n, p \in \mathbb{N},$
$A \in \mathcal{M}_{m,p}(\mathbb{K}),$
$B \in \mathcal{M}_{p,n}(\mathbb{K}),$
$C \in \mathcal{M}_{m,n}(\mathbb{K})$

$C = A \times B$
$\displaystyle
\Leftrightarrow \left( c_{i,j} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }} = \left(\sum_{k=1}^n  a_{i,k} + b_{k,j} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }}$

:::warning[Commutativité]
Le produit de deux matrice n'est pas commutatif, $A \times B \neq B \times A$

:::note[Exception]
Pour le cas des matrices dans $\mathcal{M}_{2,2}(\mathbb{K})$ on peut monter que le produit $A \times B$ d'une matrice quelquonque $B$ avec la matrice suivante $A$ rend le produit commutatif : 
$$
A = \begin{pmatrix}
\lambda & 0 \\
0 & \lambda
\end{pmatrix}
$$
alors $A \times B = B \times A$ 

:::

## Matrice transposé

Soit $m, n \in \mathbb{N},$
$A\in \mathcal{M}_{n}(\mathbb{K})$

$A^T = A$
$\Leftrightarrow \left( a'_{j,i} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }} = \left(a_{i,j} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }}$

## Inverse de matrice

Soit $n \in \mathbb{N},$
$A\in \mathcal{M}_{n}(\mathbb{K})$

$A \times A^{-1} = I_n$

:::tip[Calculer l'inverse d'une matrice]
**Methode 1:**

Soit $n \in \mathbb{N},$
$A\in \mathcal{M}_{n}(\mathbb{K}),$
$X \in \mathcal{M}_{n,1}(\mathbb{K}),$
$Y \in \mathcal{M}_{n,1}(\mathbb{K})$

$
X =
\begin{pmatrix}
    x_1 \\
    \vdots \\
    x_n \\
\end{pmatrix}
$ et 
$
Y =
\begin{pmatrix}
    y_1 \\
    \vdots \\
    y_n \\
\end{pmatrix}
$

Résoudre l'équation suivante : 

$AX = Y \Leftrightarrow A^{-1}Y = X$

$ \Leftrightarrow
\begin{pmatrix}
    a_{1, 1} & \dots  & a_{1,n} \\
     \vdots  & \ddots & \vdots  \\
    a_{n,1}  & \dots  & a_{n,n}
\end{pmatrix}
\times
\begin{pmatrix}
    x_1 \\
    \vdots \\
    x_n \\
\end{pmatrix}
= \begin{pmatrix}
    y_1 \\
    \vdots \\
    y_n \\
\end{pmatrix}
$

$\Leftrightarrow
\left\{
\begin{aligned}
    & \sum_{k=1}^n a_{1,k} x_k = y_1 \\
    & \qquad \vdots \\
    & \sum_{k=1}^n a_{n,k} x_k = y_n \\
\end{aligned}
\right.$

$\qquad \vdots$

$\Leftrightarrow
\left\{
\begin{aligned}
    & \sum_{k=1}^n a'_{1,k} y_k = x_1 \\
    & \qquad \vdots \\
    & \sum_{k=1}^n a'_{n,k} y_k = x_n \\
\end{aligned}
\right.$

$ \Leftrightarrow
\begin{pmatrix}
    a'_{1, 1} & \dots  & a'_{1,n} \\
      \vdots  & \ddots & \vdots  \\
    a'_{n,1}  & \dots  & a'_{n,n}
\end{pmatrix}
\times
\begin{pmatrix}
    y_1 \\
    \vdots \\
    y_n \\
\end{pmatrix}
= \begin{pmatrix}
    x_1 \\
    \vdots \\
    x_n \\
\end{pmatrix}
$

$\Leftrightarrow A^{-1}Y = X$

<br/><br/>

**Methode 2:**

Résoudre $A \times A^{-1} = I_n$

$A \times A^{-1} = I_n$

$ \Leftrightarrow
\begin{pmatrix}
    a_{1, 1} & \dots  & a_{1,n} \\
     \vdots  & \ddots & \vdots  \\
    a_{n,1}  & \dots  & a_{n,n}
\end{pmatrix}
\times
\begin{pmatrix}
    a'_{1, 1} & \dots  & a'_{1,n} \\
     \vdots  & \ddots & \vdots  \\
    a'_{n,1}  & \dots  & a'_{n,n}
\end{pmatrix}
= \begin{pmatrix}
   1  &        & (0) \\
      & \ddots &      \\
  (0)  &        &  1
\end{pmatrix}
$

$ \displaystyle \Leftrightarrow
\left\{
\begin{aligned}
    & \sum_{k=1}^n a_{1,k} a'_{k,1} = 1 \\
    & \sum_{k=1}^n a_{2,k} a'_{k,2} = 1 \\
    & \qquad \vdots \\
    & \sum_{k=1}^n a_{n-1,k} a'_{k,n-1} = 1 \\
    & \sum_{k=1}^n a_{n,k} a'_{k,n} = 1 \\
    & \sum_{k=1}^n a_{1,k} a'_{k,2} = 0 \\
    & \sum_{k=1}^n a_{2,k} a'_{k,1} = 0 \\
    & \qquad \vdots \\
    & \sum_{k=1}^n a_{n,k} a'_{k,n-1} = 0
\end{aligned}
\right.$

$
\Leftrightarrow
\left\{
\begin{aligned}
    a'_{1,1} &= \dots \\
    \qquad \vdots & \\
    a'_{n,n} &= \dots
\end{aligned}
\right.
$
:::

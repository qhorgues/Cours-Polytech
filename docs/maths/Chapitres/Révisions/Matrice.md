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

Soit $A\in \mathcal{M}_{n}(\mathbb{K})$

$A^T = A$
$\Leftrightarrow \left( a'_{j,i} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }} = \left(a_{i,j} \right)_{
    \substack{
    1 \le i \le m \\
    1 \le j \le n }}$

## Inverse de matrice

Soit $A\in \mathcal{M}_{n}(\mathbb{K})$

$A \times A^{-1} = I_n$


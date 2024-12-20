---
title: Lagrange Interpolation
published: 2024-11-08
description: 'principles and realization of lagrange interpolation'
image: '/imgs/numerical analysis/Lagrange_polynomial.svg'
tags: [numerical analysis,math]
category: 'technology'
draft: false 
lang: 'en'
---
# Preface

The article intend to record the theory of lagrange interpolation and its realizations of python.

---

## lagrange interpolation method

Defination of the lagrange interpolation method is that the number of points which are different can fit the polynomial curve. As we all know that the stright line can be fitted with two different points. So the defination is reasonable intuitively. Let us proof it.

Ploynomial curve $L_n(x)$ can be presented as follow:

$$
L_n(x) = a_0+a_1*x+a_2*x^2 + a_3*x^3+...+a_n*x^n
$$

Taking into account the different points on the polynomial curve:

$$
(x_0,y_0),(x_1,y_1),(x_2,y_2)......(x_n,y_n)
$$

So we can obtain the following equation set:
$$
\begin{cases}
a_0+a_1*x_0+a_2*x_0^2 + a_3*x_0^3+...+a_n*x_0^n=y_0\\
a_0+a_1*x_1+a_2*x_1^2 + a_3*x_1^3+...+a_n*x_1^n=y_1\\
a_0+a_1*x_2+a_2*x_2^2 + a_3*x_2^3+...+a_n*x_2^n=y_2\\
\quad \vdots \quad \qquad \quad \qquad \qquad \qquad \qquad \qquad\qquad \qquad \quad\vdots  \\
a_0+a_1*x_n+a_2*x_n^2 + a_3*x_n^3+...+a_n*x_n^n=y_n\\
\end{cases}
\tag{1}
$$
subsequently,the matrix $A$ and vector $x$ and $b$ can be expressed by,

$$
A=
\begin{bmatrix}
1&x_0&x_0^2&x_0^3&\cdots&x_0^n\\
1&x_1&x_1^2&x_1^3&\cdots&x_1^n\\
1&x_2&x_2^2&x_2^3&\cdots&x_2^n\\
\vdots&\vdots&\vdots&\vdots&\vdots&\vdots \\
1&x_n&x_n^2&x_n^3&\cdots&x_n^n\\
\end{bmatrix},
x=\begin{bmatrix}
a_0\\a_1\\a_2\\\vdots\\a_n
\end{bmatrix},
b=\begin{bmatrix}
y_0\\y_1\\y_2\\\vdots\\y_n
\end{bmatrix}
$$

the Eq.(1) can be rewritten,
$$
Ax=b
$$
A is denoted the vandermonde determinant which has an important property,
$$ 
det(A)=det(A^T)=\prod\limits^{n}_{0\leq i<j\leq n}(x_j-x_i)
$$
the det is not equal to zero beacuse that all valriables are different each other. As mentioned above, We can say that $n+1$ 
different points can determine an unique n order polynomial curve.
## lagrange remainder

To be honisted, whatever you had many points about any curve, it it is believed that always contains the error between the ploynomial and the real part. And then we can define the error by,

$$ 
R_n(x)=f(x)-L_n(x)
\tag{2}
$$

where $L_n(x)$ is the ploynomial curve , $f(x)$ is the real part of the curve and $R_n(x)$ is the remainder of the curve.It seems very reasonable to define the error function. And the formation of the error function is determined,

$$
R_n(x)=\frac{f^{(n+1)}(\epsilon)}{(n+1)!}(x-x_0)(x-x_1)\dots(x-x_n)\quad,\epsilon\in[x_0,x_n]
$$
this can be proofed by Rolle's theorem.
## realization of python


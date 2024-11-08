---
title: Numerical Analysis 
published: 2024-11-08
description: 'principles and realization of numerical analysis'
image: '/imgs/NA.png'
tags: [numerical analysis,math]
category: 'technology'
draft: true 
lang: 'en'
---
# Preface

The article includes many articles to record the theory of numerical analysis and its realizations of python.

---

# interpolation methods

## lagerange interpolation method

Defination of the lagerange interpolation method is that the number of points which are different can fit the polynomial curve. As we all know that the stright line can be fitted with two different points. So the defination is reasonable intuitively. Let us proof it.

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
1&x_0&x_1^2&x_2^3&\cdots&x_n^n\\
1&x_0&x_1^2&x_2^3&\cdots&x_n^n\\
1&x_0&x_1^2&x_2^3&\cdots&x_n^n\\
\vdots&\vdots&\vdots&\vdots&\vdots&\vdots \\
1&x_0&x_1^2&x_2^3&\cdots&x_n^n\\
\end{bmatrix},
x=\begin{bmatrix}
a_0\\a_1\\a_2\\\vdots\\a_n
\end{bmatrix},
b=\begin{bmatrix}
y_0\\y_1\\y_2\\\vdots\\y_n
\end{bmatrix}
$$

the Eq.

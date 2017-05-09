---
title: Integrating Factors to make Exact Equations
ordering: a50
---

Let's say we have an equation of the following form:

$$
M(x, t)dx + N(x, t)dt = 0
$$

that is not exact; that is,

$$
\frac{\partial M}{\partial t} \not = \frac{\partial N}{\partial x}
$$

To solve this, we look for a function $\mu(x, t)$ called an *integrating factor* such that

$$
u(x, t)M(x, t)dx + u(x, t)N(x, t)dt = 0
$$

becomes an exact equation.

Not all equations of this form can be made exact. We have two cases:

#### Case 1

$$
u(x, t) = \frac{\frac{\partial M}{\partial t} - \frac{\partial N}{\partial y}}{N}
$$

becomes an integrating factor if $u(x, t)$ is solely a function of $x$, so

$$
u(x) = exp(\int \frac{\frac{\partial M}{\partial t} - \frac{\partial N}{\partial y}}{N} dx)
$$

#### Case 2

$$
u(x, t) = \frac{\frac{\partial M}{\partial t} - \frac{\partial N}{\partial y}}{-M}
$$

becomes an integrating factor if $u(x, t)$ is solely a function of $t$, so

$$
u(t) = exp(\int \frac{\frac{\partial M}{\partial t} - \frac{\partial N}{\partial y}}{-M} dt)
$$
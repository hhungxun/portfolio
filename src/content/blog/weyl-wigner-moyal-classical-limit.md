---
title: The Weyl–Wigner Dictionary and the Classical Limit
description: Operators become phase-space symbols, operator products become the Moyal product, and Poisson dynamics appears at leading order.
date: 2026-01-04
tags: [phase space, deformation quantization, semiclassical analysis]
lang: en
side: physics
draft: false
---

*Status: companion note to an independent pedagogical write-up.*

The Weyl–Wigner formulation replaces an operator $\hat A$ by a function
$A_W(x,p)$ on phase space. Ordinary multiplication cannot reproduce operator
composition because quantum observables do not commute. The replacement is
the Moyal product

$$
A\star B=A\exp\!\left[\frac{i\hbar}{2}
\left(\overleftarrow\partial_x\overrightarrow\partial_p-
\overleftarrow\partial_p\overrightarrow\partial_x\right)\right]B.
$$

Its antisymmetric part defines the Moyal bracket. Expanding in $\hbar$ gives

$$
\frac{1}{i\hbar}(A\star B-B\star A)
=\{A,B\}_{\rm P}+O(\hbar^2),
$$

so Hamiltonian phase-space flow is the leading term of quantum evolution. The
classical limit is therefore not obtained by discarding the phase-space
description, but by truncating its noncommutative deformation.

The full write-up develops the Weyl transform, Wigner quasi-probability,
expectation values, the Moyal evolution equation, and coarse-graining as a
mechanism that suppresses fine phase-space structure.

[Read the full pedagogical write-up (PDF)](/papers/phase-space-quantum-mechanics.pdf).

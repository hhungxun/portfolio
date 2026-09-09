---
note: anisotropic-kernels-frame-bundle
title: From a WGS84 Lollipop to Frame-Aware Control on S²
subtitle: Exact kernel overlap, holonomy response, and non-negative synthesis
period: Current
summary: A complete fixed-sphere research note deriving the exact orientation response of an anisotropic removal kernel, its weak-anisotropy expansion, and a finite non-negative fitting benchmark.
pdf: /papers/anisotropic-kernel-control-s2.pdf
repo: https://github.com/hhungxun/physics-writeups
tags: [differential geometry, holonomy, geometric control]
order: 2
---

The paper starts from the lollipop problem: prescribe the first-order radial
removal needed to turn a sphere into a WGS84-like oblate spheroid. An elliptical
contact carries a tangent direction, so its state is an oriented frame rather
than a point on the sphere. Parallel transport around a loop changes that
frame by the enclosed spherical area.

The central theorem evaluates the overlap of two transported kernels in one
radial integral involving the modified Bessel function $I_0$. It proves the
half-turn symmetry, the quarter-turn maximum, and the leading linear response
to weak anisotropy. A one-contact approximation gap and finite non-negative
least-squares benchmark make the control interpretation explicit. Numerical
tables compare the exact formula with independent polar quadrature and verify
fourth-order convergence of the transport integrator.

[Read the research note](/blog/anisotropic-kernels-frame-bundle).

---
title: From Rotations to Angular-Momentum Quantization
description: The so(3) commutator algebra, its su(2) cover, and why ladder operators quantize j and m.
date: 2026-01-11
tags: [angular momentum, Lie algebras, representation theory]
lang: en
side: physics
draft: false
---

*Status: companion note to an independent pedagogical write-up.*

Infinitesimal spatial rotations generate the Lie algebra

$$
[J_i,J_j]=i\hbar\epsilon_{ijk}J_k.
$$

The Casimir $J^2=J_x^2+J_y^2+J_z^2$ commutes with every generator, so an
irreducible representation can be labelled simultaneously by $J^2$ and one
component, conventionally $J_z$. Defining $J_\pm=J_x\pm iJ_y$ gives

$$
[J_z,J_\pm]=\pm\hbar J_\pm.
$$

Positivity of the norms of raised and lowered states forces the ladder to
terminate. This yields $m=-j,-j+1,\ldots,j$ and
$J^2=\hbar^2j(j+1)$. Half-integer $j$ appears because quantum states carry
representations of $SU(2)$, the double cover of $SO(3)$.

The linked notes then move from the abstract representation to orbital angular
momentum in position space, spherical harmonics, spin, addition of angular
momenta, and the central-force structure of the three-dimensional hydrogen
atom.

[Read the full pedagogical write-up (PDF)](/papers/angular-momentum-hydrogen-atom.pdf).

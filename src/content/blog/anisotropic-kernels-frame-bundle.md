---
title: Why Anisotropic Kernels Live on the Frame Bundle of S²
description: Orientation, holonomy, and sequence dependence turn spherical approximation into control on SO(3).
date: 2026-09-08
tags: [differential geometry, holonomy, geometric control]
lang: en
side: physics
draft: false
---

*Status: this summarizes an AI-assisted exploratory draft. The manuscript has
unproved conjectures and numerical experiments marked TBD; it is not submitted.*

A radial kernel on the sphere needs only a centre $x\in S^2$. An anisotropic
kernel needs more: its principal axes must be oriented in the tangent plane
$T_xS^2$. A contact state is therefore an oriented orthonormal tangent frame,
represented by $R\in SO(3)$, with

$$
S^2\cong SO(3)/SO(2).
$$

This distinction matters when a frame is transported from one contact point
to the next. Parallel transport around a closed loop on the unit sphere
rotates the tangent frame by the enclosed solid angle. Two paths that visit
the same points in different orders can therefore arrive with different
kernel orientations and produce different accumulated fields.

The motivating target is an axisymmetric radial-removal field for a spherical
surface. Its $cos^2\theta$ dependence occupies only the $\ell=0$ and
$\ell=2$ spherical-harmonic sectors, so the target is spectrally sparse even
though the admissible anisotropic kernels carry frame information.

The draft formulates both a discrete optimisation on $(SO(3))^N$ and a
continuous control problem. Its safe conclusions are structural: the
isotropic limit removes orientation dependence, holonomy creates a measurable
anisotropic mismatch, and ordering can matter whenever the kernels do not
have $SO(2)$ symmetry. A numerical holonomy check at $\theta_0=\pi/4$ agrees
with the Gauss–Bonnet prediction; the full optimisation experiments still need
to be executed and independently audited.

[Read the exploratory draft (PDF)](/papers/anisotropic-kernel-control-s2.pdf).

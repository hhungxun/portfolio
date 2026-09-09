---
title: Auditing Gravity-Mediated Entanglement with Gaussian Control
description: Covariance dynamics give an existence result inside the model—and a stringent list of experimental obstacles.
date: 2026-09-07
tags: [Gaussian states, symplectic dynamics, quantum information]
lang: en
side: physics
draft: false
---

*Status: ongoing undergraduate research supervised by Prof. Tomasz Paterek.
The linked document is a working draft, not a submitted paper.*

For two harmonic modes, a Gaussian state is determined by its first moments
and covariance matrix. Quadratic Hamiltonians act through symplectic dynamics,
while continuous linear measurement produces a matrix Riccati equation. This
makes the question "can local control reveal gravity-mediated entanglement?"
precise enough to audit end to end.

The draft requires gravity to be the only non-local quantum interaction.
Measurements, estimation, and feedback are local; a gravity-off control must
not generate logarithmic negativity. This catches a common modelling failure:
a dense feedback gain can silently insert an unnoised coherent interaction and
manufacture entanglement.

Inside the specified quadratic model, a finite-time quench provides a stable
existence construction. At occupation $\bar n=0.05$, the example gives
$E_N=0.3625$ bits. But the same calculation makes the engineering obstruction
plain: the fused-silica example requires microhertz trapping, sub-phonon
preparation, roughly 54.5 minutes of coherent evolution, high detection
efficiency, and stable finite-range actuation.

The workflow began with an independent reconstruction of Poddubny *et al.*,
including their Fig. 2, before any extension was attempted. It combines
symplectic propagation, partial-transpose symplectic eigenvalues, Floquet
analysis, and periodic Riccati integration. The draft also records where a
previously inferred thermal-tolerance divergence came from: applying a
fixed-purity formula to a damped oscillator outside its domain.

[Read the research draft (PDF)](/papers/gaussian-gravity-entanglement-control.pdf).

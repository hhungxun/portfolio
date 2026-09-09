---
title: A Gaussian-Pulse Benchmark for Landau–Lifshitz Accuracy
description: An exact non-runaway Abraham–Lorentz solution turns order reduction into a calibrated error problem.
date: 2026-09-09
tags: [singular perturbations, electrodynamics, numerical validation]
lang: en
side: physics
draft: false
---

*This note summarizes a PHY204 term paper written with Xu Ya-Xuan. The
manuscript discloses the use of an AI writing tool; the authors checked and
approved its calculations, citations, and final claims.*

The phrase "Landau–Lifshitz breakdown" can hide two different questions. Does
the Landau–Lifshitz (LL) reduction accurately track the physical classical
branch of Lorentz–Abraham–Dirac dynamics? And does a deterministic classical
emission model remain valid once quantum recoil matters? The paper constructs
a benchmark that keeps those questions separate.

In the nonrelativistic, one-dimensional Abraham–Lorentz limit,

$$
a(t)=\frac{F(t)}m+\tau_e\dot a(t),
$$

the higher derivative introduces a runaway mode. Imposing the non-runaway
future condition selects the exact physical acceleration

$$
a_{\mathrm{LAD}}(t)=\frac1m\int_0^\infty e^{-u}F(t+\tau_e u)\,du.
$$

Expanding the shifted force shows that LL is the first local truncation,

$$
a_{\mathrm{LL}}(t)=\frac1m\bigl(F(t)+\tau_e\dot F(t)\bigr).
$$

For a Gaussian force and $\epsilon=\tau_e/T$, the omitted term begins at
$O(\epsilon^2)$. Gaussian moments give the normalized root-mean-square error

$$
D_{\rm rms}=\frac{\sqrt3}{2}\epsilon^2
\left[1-\epsilon^2+O(\epsilon^4)\right],
\qquad D_{\max}\sim\epsilon^2.
$$

Direct composite-Simpson quadrature over $\epsilon\in[0.01,1]$ recovers the
coefficient $\sqrt3/2\approx0.866$ and the first correction. Two convergence
reruns test the quadrature cutoff and time grid; the reported $D_{\rm rms}$
changes by less than $4\times10^{-18}$ and $2\times10^{-11}$ respectively.

The second parameter is the strong-field quantum nonlinearity $\chi_e$.
Within this linear benchmark, pulse duration controls $\epsilon$, while field
amplitude controls $\chi_e$ and cancels from the normalized LL–LAD error. The
paper therefore plots a diagnostic map in $(\epsilon,\chi_e)$: horizontal
motion changes classical order-reduction error; vertical motion changes the
validity of classical emission physics.

For femtosecond pulses, $\epsilon\sim10^{-9}$, so the benchmarked LL truncation
error is of order $10^{-18}$. A laboratory discrepancy in that regime is much
more plausibly a quantum-emission, beam, field, or detector-modelling issue
than failure of this classical order reduction.

[Read the full term paper (PDF)](/papers/landau-lifshitz-gaussian-benchmark.pdf).

---
title: Why the Landau–Lifshitz Reduction Is a Singular Limit
description: The small radiation-reaction time multiplies the highest derivative, so order reduction changes the solution space.
date: 2026-09-09
tags: [singular perturbations, electrodynamics, research notes]
lang: en
side: physics
draft: false
---

In a regular perturbation problem, setting a small parameter to zero leaves the
order of the differential equation unchanged. Radiation reaction has a more
delicate structure. Schematically, the Lorentz–Abraham–Dirac equation contains

$$
m a = F_{\mathrm{ext}} + \tau_0\,\dot a + \text{relativistic corrections},
$$

so the small time $\tau_0$ multiplies the highest derivative. Setting
$\tau_0=0$ lowers the order of the equation. Initial data that are independent
for the higher-order dynamics can no longer be prescribed independently after
reduction.

That loss of order is the signature of a **singular perturbation**. It explains
why a small coefficient does not automatically imply a uniformly small change
to every solution: fast modes can live on the scale $t/\tau_0$, and eliminating
them selects a reduced branch of the full dynamics.

The Landau–Lifshitz equation performs an order reduction by replacing the
radiation-reaction term with the derivative of the leading-order Lorentz-force
acceleration. The useful numerical question is therefore not simply whether
$\tau_0$ is small. It is where the reduced trajectory stays close to the
selected physical branch of the higher-order equation, and how that deviation
depends on forcing and initial data.

This framing guided my course term paper and its computations. It also dictates
the validation strategy: resolve the fast scale with a stiff solver when
necessary, compare on matched initial data, and report the regime in which the
order-reduced model agrees rather than treating the approximation as uniform.

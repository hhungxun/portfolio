---
title: From Gershgorin Discs to Cassini Ovals in a Weyl Matrix
description: Why pairwise eigenvalue localisation is a useful next step for structured matrices in general relativity.
date: 2026-09-09
tags: [spectral theory, structured matrices, research notes]
lang: en
side: physics
draft: false
---

This is a working note attached to an unpublished project. It explains the
mathematical lens; it is not a claim of a finished result.

For a matrix $A=(a_{ij})$, Gershgorin places every eigenvalue in at least one
disc

$$
G_i=\left\{z\in\mathbb C:\lvert z-a_{ii}\rvert\leq
\sum_{j\ne i}\lvert a_{ij}\rvert\right\}.
$$

The estimate is inexpensive and robust, but it treats each row separately.
Brauer's refinement couples two rows: every eigenvalue lies in a Cassini region

$$
\lvert z-a_{ii}\rvert\,\lvert z-a_{jj}\rvert\leq R_iR_j,
\qquad i\ne j,
$$

where $R_i=\sum_{k\ne i}\lvert a_{ik}\rvert$. That pairwise product retains
information discarded by a union of independent discs.

The Weyl tensor, written in Newman–Penrose variables, produces a small structured
complex matrix whose eigenvalue degeneracies encode the Petrov classification.
This makes localisation more than a generic numerical bound: the shape and
overlap of the regions can be compared with algebraically special limits.

My draft asks whether the resulting spectral asymmetry can be summarized by a
scalar $\sigma$ that behaves sensibly across examples. The next checks are
concrete: compute the regions for canonical Petrov types, test tetrad and scale
dependence, compare with exact spectra, and identify counterexamples before
assigning a physical interpretation.

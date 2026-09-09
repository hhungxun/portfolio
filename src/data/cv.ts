/** Structured CV; keep public/cv.pdf in sync with the Mathathon LaTeX CV. */
export const cv = {
  name: 'Heah Hung Xun',
  affiliation: 'Xiamen University Malaysia',
  email: 'PHY2409025@xmu.edu.my',
  github: 'https://github.com/hhungxun',
  pdf: '/cv.pdf',
  updated: '2026-09',

  summary:
    'B.Sc. Physics undergraduate at Xiamen University Malaysia working across mathematical physics, geometry, spectral methods, and quantum foundations. My current work uses eigenvalue localisation, symplectic dynamics, differential geometry, singular perturbation theory, and validation-first numerical methods.',

  projects: [
    {
      title: 'Petrov–Weyl Spectral Bounds',
      period: 'Unpublished draft',
      link: '/blog/gershgorin-cassini-weyl-matrix',
      bullets: [
        'Applied Gershgorin circles and Brauer Cassini ovals to eigenvalue localisation for the structured Weyl matrix in the Newman–Penrose formalism.',
        'Introduced a candidate radiation-asymmetry invariant σ; its invariance properties and interpretation remain under investigation.',
      ],
    },
    {
      title: 'Anisotropic Kernel Control on the Oriented Frame Bundle of S²',
      period: 'AI-assisted exploratory draft',
      bullets: [
        'Developed five propositions, one theorem, three conjectures, and two algorithms connecting differential geometry, Lie groups, geometric control, and approximation on manifolds.',
        'Numerically verified the predicted holonomy at θ₀ = π/4; conjectural statements remain unproved and the manuscript is not submitted.',
      ],
    },
    {
      title: 'Gaussian Quantum Dynamics on Sp(4,R)',
      period: 'Ongoing undergraduate research',
      bullets: [
        'Supervised by Prof. Tomasz Paterek; use covariance-matrix and symplectic methods, Floquet theory, logarithmic negativity, and periodic Riccati integration.',
        'Independently reproduced the numerical behaviour in Poddubny et al., Fig. 2, as a validation benchmark.',
      ],
    },
    {
      title: 'Quantum Mechanics over Non-Complex Number Systems',
      period: 'Self-study note',
      bullets: [
        'Compare real and quaternionic division-algebra formulations with completions of Q, including p-adic models, to isolate the algebraic and topological assumptions used by standard quantum theory.',
      ],
    },
    {
      title: 'Lorentz–Abraham–Dirac to Landau–Lifshitz Deviation',
      period: 'Course term paper',
      link: '/blog/lad-ll-singular-limit',
      bullets: [
        'Treated the order reduction as a singular perturbation because τ₀ multiplies the highest derivative, and studied the resulting deviation numerically.',
      ],
    },
  ],

  directions: [
    {
      title: 'Structured spectral problems',
      text: 'Using inexpensive localisation bounds and matrix structure before moving to exact or numerical spectra.',
    },
    {
      title: 'Geometry and control on manifolds',
      text: 'Studying frame bundles, holonomy, Lie-group actions, and anisotropic approximation with explicit numerical checks.',
    },
    {
      title: 'Quantum structures',
      text: 'Comparing symplectic Gaussian dynamics and quantum theory over alternative scalar systems, with attention to what assumptions each formulation needs.',
    },
  ],

  education: [
    {
      period: '2023 – present',
      degree: 'B.Sc. in Physics',
      institution: 'Xiamen University Malaysia',
      details: 'GPA 3.75 / 4.00',
      coursework:
        'Quantum Mechanics I, Electrodynamics, Mathematical Methods, Theoretical Mechanics, Linear Algebra, Differential Equations, Numerical Methods, Optics',
    },
  ],

  skills: [
    {
      area: 'Mathematical methods',
      text: 'Gershgorin and Cassini eigenvalue localisation; symplectic and covariance-matrix methods; Floquet theory; Hamilton–Jacobi and Madelung formulations; differential geometry, frame bundles, holonomy, Lie groups, spherical harmonics; singular perturbation theory; division algebras and p-adic analysis',
    },
    {
      area: 'Scientific computing',
      text: 'Python (NumPy, SciPy, QuTiP), Octave/MATLAB, stiff integrators (Radau, BDF), periodic Riccati integration, validation-first numerical workflows',
    },
    {
      area: 'Programming & tools',
      text: 'Python, C++, LaTeX/TikZ, Git, Linux, GitHub, Jupyter',
    },
  ],
} as const;

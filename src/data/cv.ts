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
        'Apply Gershgorin discs and Brauer Cassini ovals to eigenvalue localisation for a structured Newman–Penrose Weyl matrix.',
        'The matrix convention, frame dependence, and proposed radius functional still require a complete invariant audit.',
      ],
    },
    {
      title: 'From a WGS84 Lollipop to Frame-Aware Control on S²',
      period: 'Research note · revised September 2026',
      link: '/blog/anisotropic-kernels-frame-bundle',
      bullets: [
        'Modelled localized removal using anisotropic kernels on the oriented frame bundle; derived an exact overlap formula and the leading response to weak anisotropy.',
        'Checked holonomy by step-refined integration, the overlap formula by independent quadrature, and finite non-negative fitting by optimality and grid-refinement checks.',
      ],
    },
    {
      title: 'Gaussian Quantum Dynamics on Sp(4,R)',
      period: 'Ongoing undergraduate research',
      bullets: [
        'Supervised by Prof. Tomasz Paterek; use covariance-matrix and symplectic methods, Floquet theory, logarithmic negativity, and periodic Riccati integration.',
        'Within the audited quadratic model, constructed a finite-time entangling quench giving Eₙ = 0.3625 bits at n̄ = 0.05; identified sub-phonon preparation, microhertz trapping, and about 54.5 minutes of coherence as limiting requirements.',
        'Independently reproduced the numerical behaviour in Poddubny et al., Fig. 2, before extending the model.',
      ],
    },
    {
      title: 'Quantum Mechanics over Non-Complex Number Systems',
      period: 'Self-study note',
      bullets: [
        'Survey real, complex, and quaternionic Hilbert-space formulations from the division-algebra trichotomy through modern network no-go results.',
        'Isolate the tensor-product composition rule as the central assumption in the real-versus-complex debate.',
      ],
    },
    {
      title: 'A Gaussian-Pulse Benchmark for Landau–Lifshitz Accuracy',
      period: 'PHY204 term paper · coauthored',
      link: '/blog/lad-ll-singular-limit',
      bullets: [
        'With Xu Ya-Xuan, compared the exact future-weighted non-runaway Abraham–Lorentz acceleration with the first local Landau–Lifshitz reduction for a smooth Gaussian pulse.',
        'Derived Dᵣₘₛ = (√3/2)ε²[1 − ε² + O(ε⁴)] and verified the O(ε²) law by quadrature and convergence tests over ε ∈ [0.01, 1]. AI assistance is disclosed in the manuscript.',
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

  activities: [
    {
      title: 'Vice President, Physics Student Council',
      period: 'September 2025 – present',
      bullets: [
        'Coordinate academic events and peer mentoring; founded and host the departmental Physics Forum student journal club.',
        'Delivered the departmental talk A Year in Physics; preparing a workshop on LaTeX and Git.',
      ],
      link: 'https://forum.physicsxmum.my/',
    },
    {
      title: 'Vice President, Astronomy Club',
      period: 'September 2025 – present',
      bullets: ['Organise telescope sessions and member-led knowledge sharing.'],
    },
  ],

  skills: [
    {
      area: 'Mathematical methods',
      text: 'Gershgorin and Cassini eigenvalue localisation; symplectic and covariance-matrix methods; Floquet theory; Hamilton–Jacobi and Madelung formulations; differential geometry, frame bundles, holonomy, Lie groups, spherical harmonics; singular perturbation theory; real and quaternionic Hilbert spaces',
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

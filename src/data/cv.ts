/**
 * Structured CV. Edit this file and the /cv page updates; keep public/cv.pdf in sync
 * by re-exporting your LaTeX CV.
 */
export const cv = {
  name: 'Heah Hung Xun',
  affiliation: 'Xiamen University Malaysia',
  email: 'PHY2409025@xmu.edu.my',
  github: 'https://github.com/hhungxun',
  pdf: '/cv.pdf',
  updated: '2026-09',

  summary:
    'Third-year B.Sc. Physics undergraduate at Xiamen University Malaysia with interests in quantum foundations, mathematical physics, quantum field theory, and physics beyond the Standard Model. Current work focuses on the role of complex numbers in quantum theory, the quantum–classical interface, and connections between quantum mechanics and statistical mechanics. I combine theoretical study with scientific computing in Python and C++, while developing proficiency in ROOT and GEANT4.',

  projects: [
    {
      title: 'Phase-Space Quantum Mechanics & Semiclassical Limits',
      period: '2026/01',
      link: '/papers/phase-space-quantum-mechanics.pdf',
      bullets: [
        'Authored a self-contained pedagogical monograph on quantum mechanics formulated in phase space.',
        'Developed the Weyl–Wigner correspondence mapping operators to phase-space symbols.',
        'Derived the Moyal ⋆-product and Moyal bracket, showing explicitly how classical Poisson dynamics emerge in the semiclassical limit ħ → 0.',
        'Analysed the quantum–classical transition via coarse-graining, interpreting classicality as information loss.',
        'Closely connected to deformation quantization and semiclassical analysis.',
      ],
    },
    {
      title: 'Angular Momentum Algebra & Hydrogen Atom in 3D',
      period: '2025/12',
      link: '/papers/angular-momentum-hydrogen-atom.pdf',
      bullets: [
        'Developed a rigorous algebraic treatment of angular momentum in quantum mechanics.',
        'Emphasised 𝔰𝔬(3) and 𝔰𝔲(2) structure, ladder operators, and representation theory.',
        'Applied spin and orbital angular momentum formalism to the hydrogen atom without relying on heuristic arguments.',
        'Focused on structural motivation rather than postulated rules.',
      ],
    },
    {
      title: 'Quantum Random Walks: Theory and Developments',
      period: '2025/04 – 2025/09',
      link: '/papers/quantum-random-walks.pdf',
      bullets: [
        'Systematic survey of discrete- and continuous-time quantum walks from a mathematical and physical perspective.',
        'Derived classical diffusion limits and contrasted them with quantum ballistic spreading (σ ∼ t).',
        'Reviewed algorithmic constructions (SKW, Szegedy) and open problems in mixing and state transfer.',
        'Implemented and visualised quantum walk dynamics numerically using Python (NumPy, QuTiP, Matplotlib).',
      ],
    },
  ],

  directions: [
    {
      title: 'Real formulations of quantum mechanics',
      text: 'On the necessity of complex numbers in quantum mechanics, and studying recent real-number reformulations and their physical interpretation.',
    },
    {
      title: 'Quantum–classical and statistical structure',
      text: 'Critically reading an ongoing exchange on reconstructing quantum waves from classical action, including the roles of propagated densities, Madelung variables, and the Bohm quantum potential.',
      links: [
        { label: 'arXiv:2405.06328', href: 'https://arxiv.org/abs/2405.06328' },
        { label: 'arXiv:2605.02621', href: 'https://arxiv.org/abs/2605.02621' },
        { label: 'arXiv:2605.20443', href: 'https://arxiv.org/abs/2605.20443' },
      ],
    },
    {
      title: 'Quantum field theory and BSM physics',
      text: 'Systematically studying canonical quantization, free fields, Fock space, propagators, and introductory perturbation theory (attending a seminar series by Prof. Yi-Zen Chu), with longer-term interest in Higgs-portal models and other beyond-the-Standard-Model scenarios.',
    },
    {
      title: 'Foundations of physical theories',
      text: 'Participant in the 2026 virtual Summer School on the Assumptions of Physics, focused on deriving physical theories from explicit operational and mathematical assumptions.',
      links: [{ label: 'assumptionsofphysics.org', href: 'https://assumptionsofphysics.org/' }],
    },
  ],

  education: [
    {
      period: '2023 – present',
      degree: 'B.Sc. in Physics',
      institution: 'Xiamen University Malaysia',
      details: 'GPA 3.75 / 4.00',
      coursework:
        'Quantum Mechanics I, Mathematical Methods, Theoretical Mechanics, Linear Algebra, Differential Equations, Electric Circuits, Electrodynamics, Numerical Methods, Optics',
    },
  ],

  activities: [
    {
      period: '2025/09 – present',
      role: 'Vice President, Physics Student Council',
      text: 'Coordinate academic events, peer mentoring, and student engagement.',
      bullets: [
        'Delivered departmental talk *A Year in Physics*; preparing an upcoming talk on LaTeX and Git.',
        'Founded and host the department Physics Forum, running a student journal club.',
      ],
      links: [
        { label: 'talk slides', href: 'https://canva.link/iaz0a9l7qng1jd5' },
        { label: 'Physics Forum', href: 'https://forum.physicsxmum.my/' },
      ],
    },
    {
      period: '2025/09 – present',
      role: 'Vice President, Astronomy Club',
      text: 'Organise telescope sessions and member-led knowledge sharing.',
      bullets: [],
      links: [],
    },
  ],

  skills: [
    {
      area: 'Mathematical Physics',
      text: 'Hilbert space formalism, operator algebras, angular momentum theory, 𝔰𝔲(2) representations, semiclassical limits, deformation quantization, phase-space methods',
    },
    {
      area: 'Quantum Topics',
      text: 'Quantum foundations, real and complex formulations of quantum mechanics, quantum walks, quantum dynamics, Wigner functions, Moyal ⋆-product, Weyl quantization, Madelung–Bohm formulation',
    },
    {
      area: 'QFT & Particle Physics',
      text: 'Systematic study of canonical quantization, free scalar fields, Fock space, propagators, and Feynman diagrams; interests in Higgs-portal and other BSM models, together with detector concepts and muon physics',
    },
    {
      area: 'HEP Software',
      text: 'ROOT (actively learning: histograms, trees, fitting), GEANT4 (familiarising: geometry, physics lists, detector simulation), C++ (learning, primary language for ROOT / GEANT4 workflows)',
    },
    {
      area: 'Machine Learning / AI',
      text: 'NumPy-based model building, familiarity with scikit-learn; interest in ML applications to HEP (trigger, classification, anomaly detection)',
    },
    {
      area: 'Scientific Computing',
      text: 'Python (NumPy, SciPy, QuTiP, Matplotlib, Pandas), MATLAB, LaTeX, Git, Jupyter',
    },
    {
      area: 'Tools & Environment',
      text: 'Linux, VS Code, GitHub, Vim, Emacs',
    },
  ],
} as const;

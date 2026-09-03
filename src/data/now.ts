/**
 * The /now page. Edit this file and nothing else — the page renders whatever
 * is here. Bump `updated` when you change it; the page prints that date.
 *
 * Entries support *emphasis* between asterisks.
 */
export const now = {
  updated: new Date('2026-09-03'),
  sections: [
    {
      heading: 'Reading and thinking about',
      items: [
        'Whether complex numbers are *necessary* in quantum mechanics, and what the recent real-number reformulations actually rule out.',
        'An ongoing exchange on reconstructing quantum waves from classical action — propagated densities, Madelung variables, and the Bohm quantum potential.',
        'Canonical quantization from the ground up: free fields, Fock space, propagators, first perturbation theory. Following Prof. Yi-Zen Chu&rsquo;s seminar series.',
      ],
    },
    {
      heading: 'Building',
      items: [
        'This site. Astro, no framework on the poems, no analytics anywhere.',
        'Learning ROOT and GEANT4 properly rather than by copy-paste — histograms, trees, fitting, then geometry and physics lists.',
      ],
    },
    {
      heading: 'Writing',
      items: [
        'Poems, slowly. Most of what reaches <span class="font-tc">文藝春秋</span> takes a few months to settle first.',
      ],
    },
    {
      heading: 'Around campus',
      items: [
        'Vice President of the Physics Student Council and of the Astronomy Club.',
        'Running the department&rsquo;s Physics Forum, a student journal club.',
      ],
    },
  ],
} as const;

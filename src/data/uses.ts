/**
 * The /uses page — the tools actually in rotation. Keep it honest: if you
 * stopped using something, delete it rather than letting the page lie.
 */
export const uses = [
  {
    heading: 'Doing physics',
    items: [
      { name: 'Python', note: 'NumPy, SciPy, QuTiP, Matplotlib, Pandas. The default for anything exploratory.' },
      { name: 'ROOT', note: 'Actively learning — histograms, trees, fitting.' },
      { name: 'GEANT4', note: 'Familiarising: geometry, physics lists, detector simulation.' },
      { name: 'C++', note: 'Learning it because ROOT and GEANT4 insist.' },
      { name: 'MATLAB', note: 'When coursework insists.' },
      { name: 'Jupyter', note: 'For the messy middle of a calculation.' },
    ],
  },
  {
    heading: 'Writing things down',
    items: [
      { name: 'LaTeX', note: 'Every write-up and every PDF on the physics page.' },
      { name: 'Obsidian', note: 'One vault, mostly notes that never become anything.' },
      { name: 'Zettlr', note: 'For longer prose that wants to be a document.' },
      { name: 'Plain Markdown', note: 'The poems and blog posts on this site are just files in a folder.' },
    ],
  },
  {
    heading: 'Computer',
    items: [
      { name: 'Fedora', note: 'On the main machine.' },
      { name: 'VS Code', note: 'With long detours into Vim and Emacs that never quite stick.' },
      { name: 'Git and GitHub', note: 'Including this site.' },
      { name: 'Syncthing', note: 'Because clouds lose things. Ask me about the .megaignore incident.' },
    ],
  },
  {
    heading: 'This website',
    items: [
      { name: 'Astro', note: 'Static output; React only where something has to move.' },
      { name: 'Tailwind', note: 'Plus a hand-written stylesheet for the parts that matter.' },
      { name: 'Caddy on a small VPS', note: 'Deployed over SSH with a shell script. No CI, no platform.' },
    ],
  },
] as const;

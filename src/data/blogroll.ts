/**
 * The blogroll. Seeded only with places genuinely connected to this site —
 * add the personal sites and blogs you actually read as you go, and delete
 * anything here that stops being true.
 */
export const blogroll = [
  {
    heading: 'Where my work appears',
    links: [
      {
        href: 'https://www.sinchew.com.my/',
        title: '星洲日報・文藝春秋',
        note: 'The literary supplement that has published most of the poems on this site.',
      },
      {
        href: 'https://forum.physicsxmum.my/',
        title: 'XMUM Physics Forum',
        note: 'The student journal club I founded. Talks, notes, arguments.',
      },
    ],
  },
  {
    heading: 'Corners of the web worth keeping',
    links: [
      {
        href: 'https://nownownow.com/',
        title: 'nownownow',
        note: 'A directory of /now pages. This is where the idea came from.',
      },
      {
        href: 'https://indieweb.org/',
        title: 'IndieWeb',
        note: 'People who run their own sites on purpose.',
      },
      {
        href: 'https://theindex.fyi/',
        title: 'the index',
        note: 'A directory of personal websites, none of them optimised for anything.',
      },
    ],
  },
] as const;

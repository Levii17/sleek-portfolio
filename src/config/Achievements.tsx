export const certificates = [
  {
    file: '/certificates/introduction-to-cybersecurity.png',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2026-01-12',
  },
  {
    file: '/certificates/introduction-to-cybersecurity-badge.png',
    title: 'Introduction to Cybersecurity (Badge)',
    issuer: 'Cisco Networking Academy',
    date: '2026-01-12',
  },
  {
    file: '/certificates/ai-skills-fest-2026.png',
    title: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    // TODO: confirm the actual date for this one — not printed on the badge itself
    date: '',
  },
  {
    file: '/certificates/freecodecamp-responsive-web-design.png',
    title: 'Responsive Web Design (Legacy)',
    issuer: 'freeCodeCamp',
    date: '2025-03-03',
  },
  {
    file: '/certificates/freecodecamp-javascript-algorithms-data-structures.png',
    title: 'JavaScript Algorithms and Data Structures (Legacy)',
    issuer: 'freeCodeCamp',
    date: '2025-03-10',
  },
  {
    file: '/certificates/freecodecamp-front-end-development-libraries.png',
    title: 'Front End Development Libraries (Legacy)',
    issuer: 'freeCodeCamp',
    date: '2025-05-31',
  },
  {
    file: '/certificates/freecodecamp-data-visualization.png',
    title: 'Data Visualization (Legacy)',
    issuer: 'freeCodeCamp',
    date: '2025-06-28',
  },
  {
    file: '/certificates/freecodecamp-scientific-computing-with-python.png',
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: '2026-07-15',
  },

  // TODO: N4-N6 Electrical Engineering (NATED/TVET) — send the certificate
  // files when you have them and I'll fill in the real title/issuer/date
  // and drop the matching images into public/certificates/.
  //
  // {
  //   file: '/certificates/n4-electrical-engineering.png',
  //   title: 'N4 Electrical Engineering',
  //   issuer: '', // your TVET college name
  //   date: '',
  // },
  // {
  //   file: '/certificates/n5-electrical-engineering.png',
  //   title: 'N5 Electrical Engineering',
  //   issuer: '',
  //   date: '',
  // },
  // {
  //   file: '/certificates/n6-electrical-engineering.png',
  //   title: 'N6 Electrical Engineering',
  //   issuer: '',
  //   date: '',
  // },
];

const achievementsConfig = {
  certificates,
};

export default achievementsConfig;

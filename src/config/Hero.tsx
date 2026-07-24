import Github from '@/components/svgs/Github';
import Instagram from '@/components/svgs/Instagram';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';

// import X from '@/components/svgs/X';

export const heroConfig = {
  // Personal Information
  name: 'Mxolisi',
  title: '21y • eng • cs',
  avatar: '/assets/logo.png',
  description: 'Tryna build cool stuff, ship side projects, and learn.',
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/Levii17',
    icon: <Github />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/x_mxolisi_x/',
    icon: <Instagram />,
  },
  // {
  //   name: 'Twitter',
  //   href: 'https://www.x.com/x_mxolisi_x/',
  //   icon: <X />,
  // },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mxolisi-bhotile/',
    icon: <LinkedIn />,
  },
  {
    name: 'Email',
    href: 'mailto:mxolisibhotile58@gmail.com',
    icon: <Mail />,
  },
];

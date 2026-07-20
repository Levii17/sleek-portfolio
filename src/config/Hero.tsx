import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';

export const heroConfig = {
  // Personal Information
  name: 'Mxolisi',
  title: '21y • eng • cs',
  avatar: '/assets/logo.png',
  description:
    'Love building cool stuff, shipping side projects, and learning in public.',

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://www.instagram.com/x_mxolisi_x/',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mxolisi-bhotile/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/Levii17',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:mxolisibhotile58@gmail.com',
    icon: <Mail />,
  },
];

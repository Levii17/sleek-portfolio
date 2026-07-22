import { CertificateIcon } from '@phosphor-icons/react/dist/ssr';
import { BookOpen, Clapperboard, Heart } from 'lucide-react';
import React from 'react';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: 'Books',
    description: 'Books that have influenced my thinking and growth.',
    icon: BookOpen,
    href: '/books',
  },
  {
    name: 'Certificates',
    description: 'A curated list of certificates.',
    icon: CertificateIcon,
    href: '/journey/certificates',
  },
  {
    name: 'Movies',
    description: 'Movies and shows that have inspired and entertained me.',
    icon: Clapperboard,
    href: '/movies',
  },
  {
    name: 'Interests',
    description: 'Things outside of code that keep me curious.',
    icon: Heart,
    href: '/interests',
  },
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;

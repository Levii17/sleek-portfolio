import { CertificateIcon } from '@phosphor-icons/react/dist/ssr';
import { BookOpen } from 'lucide-react';
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
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;

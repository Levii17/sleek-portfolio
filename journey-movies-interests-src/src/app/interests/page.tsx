import Interests from '@/components/landing/Interests';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/interests'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function InterestsPage() {
  return <Interests />;
}

import Movies from '@/components/landing/Movies';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/movies'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function MoviesPage() {
  return <Movies />;
}

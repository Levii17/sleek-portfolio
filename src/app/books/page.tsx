import Books from '@/components/landing/Books';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/books'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function BooksPage() {
  return <Books />;
}

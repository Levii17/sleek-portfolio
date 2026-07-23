import Container from '@/components/common/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getAllTags, getPublishedBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';
import { Suspense } from 'react';

import { BlogPageClient } from './BlogPageClient';

export const generateMetadata = (): Metadata => {
  const metadata = getMetadata('/blog');
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      } as Robots['googleBot'],
    },
  };
};

function BlogPageLoading() {
  return (
    <Container className="mt-10">
      <div className="space-y-8 pt-8">
        {/* Header Skeleton */}
        <div className="space-y-4 pb-8">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-6 w-96" />
        </div>

        {/* Tags Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>

        {/* Blog Posts Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function BlogPage() {
  const allPosts = getPublishedBlogPosts();
  const allTags = getAllTags();

  return (
    <Suspense fallback={<BlogPageLoading />}>
      <BlogPageClient initialPosts={allPosts} initialTags={allTags} />
    </Suspense>
  );
}

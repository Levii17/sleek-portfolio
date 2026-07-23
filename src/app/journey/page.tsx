import { BlogComponents } from '@/components/blog/BlogComponents';
import Container from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getJourneyContent } from '@/lib/journey';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/journey'),
  robots: { index: true, follow: true },
};

export default function JourneyPage() {
  const data = getJourneyContent();

  if (!data) {
    return (
      <Container className="mt-10">
        <section className="space-y-8 pt-8" aria-labelledby="journey-heading">
          <PageHeader
            headingId="journey-heading"
            title="Journey"
            description="No journey content found. Add `src/data/journey/journey.mdx` to display content here."
            trackId="journey"
          />
        </section>
      </Container>
    );
  }

  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="journey-heading">
        <PageHeader
          headingId="journey-heading"
          title="Journey"
          description="A timeline of my learning, projects, and milestones."
          trackId="journey"
        />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={data.content} components={BlogComponents} />
        </div>
      </section>
    </Container>
  );
}

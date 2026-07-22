import { getPublishedBlogPosts } from '@/lib/blog';
import React from 'react';

import { BlogListPreview } from '../blog/BlogListPreview';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div className="mt-8">
        <BlogListPreview posts={posts.slice(0, 3)} />
      </div>
    </Container>
  );
}

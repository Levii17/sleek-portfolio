'use client';

import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';

import { RevealOnScroll } from '../common/RevealOnScroll';
import { TrackedLink } from '../common/TrackedLink';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';
import { Button } from '../ui/button';

interface BlogListPreviewProps {
  posts: BlogPostPreview[];
}

export function BlogListPreview({ posts }: BlogListPreviewProps) {
  return (
    <RevealOnScroll className="flex flex-col gap-2" delay={0.05}>
      <div className="divide-border flex flex-col divide-y">
        {posts.map(({ slug, frontmatter }, index) => {
          const { title, description, date } = frontmatter;
          const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <div
              key={slug}
              className="blog-list-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <article className="group relative isolate py-4">
                <TrackedLink
                  href={`/blog/${slug}`}
                  className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  track={{
                    name: 'button_click',
                    data: {
                      buttonId: 'blog_list_item',
                      section: 'blog',
                      action: slug,
                    },
                  }}
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <h3 className="group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
                      {title}
                    </h3>
                    <p className="text-secondary line-clamp-2 text-sm">
                      {description}
                    </p>
                    <time
                      className="text-muted-foreground hidden items-center gap-1.5 text-xs sm:flex"
                      dateTime={date}
                    >
                      <Calender className="size-3.5" />
                      {formattedDate}
                    </time>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-4 sm:contents">
                    <time
                      className="text-muted-foreground flex items-center gap-1.5 text-xs sm:hidden"
                      dateTime={date}
                    >
                      <Calender className="size-3.5" />
                      {formattedDate}
                    </time>
                    <span className="text-secondary group-hover:text-primary inline-flex shrink-0 items-center gap-1.5 text-sm transition-colors">
                      Read more
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </TrackedLink>
              </article>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-2">
        <Button
          variant="outline"
          size="sm"
          track={{
            name: 'button_click',
            data: { buttonId: 'show_all_blogs', section: 'blog' },
          }}
        >
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </RevealOnScroll>
  );
}

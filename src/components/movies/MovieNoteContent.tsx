import { Separator } from '@/components/ui/separator';
import { MovieNoteFrontmatter } from '@/types/movies';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { BlogComponents } from '../blog/BlogComponents';

interface MovieNoteContentProps {
  frontmatter: MovieNoteFrontmatter;
  content: string;
}

export function MovieNoteContent({
  frontmatter,
  content,
}: MovieNoteContentProps) {
  const { title, year, category, rating, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 space-y-4">
        <p className="text-secondary text-sm">{category}</p>

        <h1 className="text-3xl leading-tight font-bold lg:text-4xl">
          {title}
        </h1>

        <p className="text-muted-foreground text-lg">{year}</p>

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
          <time dateTime={date}>{formattedDate}</time>
          {typeof rating === 'number' && (
            <span aria-label={`Rated ${rating} out of 5`}>
              {'★'.repeat(rating)}
              {'☆'.repeat(Math.max(0, 5 - rating))}
            </span>
          )}
        </div>

        <Separator />
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: 'github-dark',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}

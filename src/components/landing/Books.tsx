import { bookCategories } from '@/config/Books';
import { getPublishedBookNoteSlugs } from '@/lib/books';
import { slugify } from '@/lib/slugify';
import { BookOpen } from 'lucide-react';
import { Link } from 'next-view-transitions';

import Container from '../common/Container';
import { PageHeader } from '../common/PageHeader';

export default function Books() {
  const noteSlugs = getPublishedBookNoteSlugs();

  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="books-heading">
        <PageHeader
          headingId="books-heading"
          title="Books"
          description="A collection of books that have influenced my thinking and growth."
          trackId="books"
        />

        <div className="space-y-12">
          {bookCategories.map((category) => (
            <section
              key={category.name}
              className="animate-in-up space-y-6"
              aria-labelledby={`books-${category.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`}
            >
              <div className="flex items-center gap-4">
                <div className="border-border bg-muted text-muted-foreground flex size-9 items-center justify-center rounded-md border">
                  <BookOpen className="size-4" aria-hidden="true" />
                </div>
                <h3
                  id={`books-${category.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-foreground text-xl font-semibold sm:text-2xl"
                >
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {category.books.map((book) => {
                  const slug = book.slug ?? slugify(book.title);
                  const hasNote = noteSlugs.has(slug);

                  const cardContent = (
                    <>
                      <h4 className="text-foreground text-base leading-tight font-semibold">
                        {book.title}
                      </h4>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {book.author}
                      </p>
                      {hasNote && (
                        <p className="text-secondary mt-2 text-xs">
                          Read my thoughts →
                        </p>
                      )}
                    </>
                  );

                  if (hasNote) {
                    return (
                      <Link
                        key={book.title}
                        href={`/books/${slug}`}
                        className="border-border bg-card text-card-foreground hover:bg-muted/50 group rounded-xl border px-4 py-4 transition-colors"
                      >
                        {cardContent}
                      </Link>
                    );
                  }

                  return (
                    <article
                      key={book.title}
                      className="border-border bg-card text-card-foreground cursor-default rounded-xl border px-4 py-4"
                    >
                      {cardContent}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Container>
  );
}

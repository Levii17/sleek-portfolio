import { bookCategories } from '@/config/Books';
import { BookOpen } from 'lucide-react';

import Container from '../common/Container';

export default function Books() {
  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="books-heading">
        <div className="animate-in-up border-border space-y-3 border-b pb-8">
          <h2
            id="books-heading"
            className="text-foreground text-2xl font-bold tracking-tight"
          >
            Books
          </h2>
          <p className="text-secondary max-w-2xl">
            A collection of books that have influenced my thinking and growth.
          </p>
        </div>

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
                {category.books.map((book) => (
                  <article
                    key={book.title}
                    className="border-border bg-card text-card-foreground hover:bg-muted/50 rounded-xl border px-4 py-4 transition-colors"
                  >
                    <h4 className="text-foreground text-base leading-tight font-semibold">
                      {book.title}
                    </h4>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {book.author}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Container>
  );
}

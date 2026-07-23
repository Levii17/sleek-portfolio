import { movieCategories } from '@/config/Movies';
import { getPublishedMovieNoteSlugs } from '@/lib/movies';
import { slugify } from '@/lib/slugify';
import { Clapperboard } from 'lucide-react';
import { Link } from 'next-view-transitions';

import Container from '../common/Container';
import { PageHeader } from '../common/PageHeader';

export default function Movies() {
  const noteSlugs = getPublishedMovieNoteSlugs();

  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="movies-heading">
        <PageHeader
          headingId="movies-heading"
          title="Movies"
          description="Movies and shows that have inspired and entertained me."
          trackId="movies"
        />

        <div className="space-y-12">
          {movieCategories.map((category) => (
            <section
              key={category.name}
              className="animate-in-up space-y-6"
              aria-labelledby={`movies-${category.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`}
            >
              <div className="flex items-center gap-4">
                <div className="border-border bg-muted text-muted-foreground flex size-9 items-center justify-center rounded-md border">
                  <Clapperboard className="size-4" aria-hidden="true" />
                </div>
                <h3
                  id={`movies-${category.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-foreground text-xl font-semibold sm:text-2xl"
                >
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {category.movies.map((movie) => {
                  const slug = movie.slug ?? slugify(movie.title);
                  const hasNote = noteSlugs.has(slug);

                  const cardContent = (
                    <>
                      <h4 className="text-foreground text-base leading-tight font-semibold">
                        {movie.title}
                      </h4>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {movie.year}
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
                        key={movie.title}
                        href={`/movies/${slug}`}
                        className="border-border bg-card text-card-foreground hover:bg-muted/50 group rounded-xl border px-4 py-4 transition-colors"
                      >
                        {cardContent}
                      </Link>
                    );
                  }

                  return (
                    <article
                      key={movie.title}
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

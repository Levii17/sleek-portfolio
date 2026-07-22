import { movies } from '@/config/Movies';
import React from 'react';

import Container from '../common/Container';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

export default function Movies() {
  return (
    <Container className="mt-10">
      <section className="space-y-4 pt-8">
        <div className="animate-in-up pb-8">
          <h1 className="text-2xl font-bold tracking-tight">Movies</h1>
          <p className="text-secondary max-w-2xl">
            Movies and shows that have inspired and entertained me.
          </p>
        </div>

        <div className="animate-in-up">
          <Separator />
        </div>

        <div className="animate-in-up space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {movies.map((movie) => (
              <Card
                key={movie.title}
                className="h-full w-full cursor-default gap-4 rounded-xl py-4"
              >
                <CardContent className="flex flex-col gap-1 px-4">
                  <h3 className="text-primary text-base leading-tight font-semibold">
                    {movie.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{movie.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

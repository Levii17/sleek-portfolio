import { interests } from '@/config/Interests';
import React from 'react';

import Container from '../common/Container';
import { PageHeader } from '../common/PageHeader';
import { Card, CardContent } from '../ui/card';

export default function Interests() {
  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="interests-heading">
        <PageHeader
          headingId="interests-heading"
          title="Interests"
          description="Things outside of code that keep me curious."
          trackId="interests"
        />

        <div className="animate-in-up space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {interests.map((interest) => (
              <Card
                key={interest.title}
                className="h-full w-full cursor-default gap-4 rounded-xl py-4"
              >
                <CardContent className="flex flex-col gap-1 px-4">
                  <h3 className="text-primary text-base leading-tight font-semibold">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

import { interests } from '@/config/Interests';
import React from 'react';

import Container from '../common/Container';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

export default function Interests() {
  return (
    <Container className="mt-10">
      <section className="space-y-4 pt-8">
        <div className="animate-in-up pb-8">
          <h1 className="text-2xl font-bold tracking-tight">Interests</h1>
          <p className="text-secondary max-w-2xl">
            Things outside of code that keep me curious.
          </p>
        </div>

        <div className="animate-in-up">
          <Separator />
        </div>

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

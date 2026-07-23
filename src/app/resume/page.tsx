import Container from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumes } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="resume-heading">
        <PageHeader
          headingId="resume-heading"
          title="Resume"
          description="My resumes, pick the version that fits what you're looking for."
          trackId="resume"
        />

        <Tabs defaultValue={resumes[0].id} className="mx-auto max-w-2xl">
          <TabsList>
            {resumes.map((resume) => (
              <TabsTrigger key={resume.id} value={resume.id}>
                {resume.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {resumes.map((resume) => (
            <TabsContent key={resume.id} value={resume.id}>
              {resume.url ? (
                <iframe
                  src={resume.url}
                  className="min-h-screen w-full"
                  title={`${resume.label} preview`}
                />
              ) : (
                <div className="border-border bg-muted/30 text-muted-foreground flex min-h-[50vh] items-center justify-center rounded-lg border border-dashed text-sm">
                  {resume.label} coming soon.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </Container>
  );
}

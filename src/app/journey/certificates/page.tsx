import CertificatesGallery from '@/components/CertificatesGallery';
import Container from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { certificates as configuredCertificates } from '@/config/Achievements';
import { generateMetadata as getMetadata } from '@/config/Meta';
import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/journey/certificates'),
  robots: { index: true, follow: true },
};

export default function CertificatesPage() {
  // Server-side: auto-discover certificate images placed under public/certificates
  const certDir = path.join(process.cwd(), 'public', 'certificates');
  let discovered: {
    file: string;
    title?: string;
    issuer?: string;
    date?: string;
  }[] = [];
  try {
    if (fs.existsSync(certDir)) {
      const files = fs.readdirSync(certDir);
      discovered = files
        .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f))
        .map((f) => ({
          file: `/certificates/${f}`,
          title: undefined,
          issuer: undefined,
          date: undefined,
        }));
    }
  } catch {
    // ignore errors and render configured certificates only
    discovered = [];
  }

  // Merge configured certificates with discovered ones (configured entries take precedence)
  const configured = Array.isArray(configuredCertificates)
    ? configuredCertificates
    : [];
  // Build map to avoid duplicates by file path
  const map = new Map<
    string,
    { file: string; title?: string; issuer?: string; date?: string }
  >();
  configured.forEach(
    (c: { file: string; title?: string; issuer?: string; date?: string }) =>
      map.set(c.file, c),
  );
  discovered.forEach((d) => {
    if (!map.has(d.file)) map.set(d.file, d);
  });

  const allCertificates = Array.from(map.values());

  return (
    <Container className="mt-10">
      <section
        className="space-y-8 pt-8"
        aria-labelledby="certificates-heading"
      >
        <PageHeader
          headingId="certificates-heading"
          title="Certificates & Achievements"
          description="A curated list of my tech certificates."
          backHref="/journey"
          backLabel="Back to Journey"
          trackId="certificates"
        />

        {/* Certificates */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Certificates
              {allCertificates.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({allCertificates.length}{' '}
                  {allCertificates.length === 1
                    ? 'certificate'
                    : 'certificates'}
                  )
                </span>
              )}
            </h2>
          </div>

          <CertificatesGallery certificates={allCertificates} />
        </div>
      </section>
    </Container>
  );
}

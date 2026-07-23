import Container from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { contactConfig } from '@/config/Contact';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/contact'),
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

export default function ContactPage() {
  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="contact-heading">
        <PageHeader
          headingId="contact-heading"
          title={contactConfig.title}
          description={contactConfig.description}
          trackId="contact"
        />

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </Container>
  );
}

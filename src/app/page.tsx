import Container from '@/components/common/Container';
import Blog from '@/components/landing/Blog';
import CTA from '@/components/landing/CTA';
// import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
import SkillsGrid from '@/components/landing/SkillsGrid';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <SkillsGrid />
      <Work />
      {/* <Github /> */}
      <Blog />
      {/* <CTA /> */}
      <Setup />
      <Journey />
      <CTA />
    </Container>
  );
}

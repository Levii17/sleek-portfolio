'use client';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { ProjectList } from '@/components/projects/ProjectList';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React, { useState } from 'react';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'web-apps', label: 'Web Apps' },
  { value: 'hackathons', label: 'Hackathons' },
  { value: 'personal', label: 'Personal' },
] as const;

export default function Projects() {
  const [active, setActive] = useState<string>('all');

  const filtered =
    active === 'all'
      ? projects
      : projects.filter(
          (project) => (project.category ?? 'web-apps') === active,
        );

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <Tabs value={active} onValueChange={setActive} className="mt-6">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ProjectList className="mt-8" projects={filtered.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          track={{
            name: 'button_click',
            data: { buttonId: 'show_all_projects', section: 'projects' },
          }}
        >
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}

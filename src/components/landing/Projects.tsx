'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React, { useMemo, useState } from 'react';

import Container from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import SectionHeading from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { Button } from '../ui/button';

const categories = [
  { value: 'web-apps', label: 'Web Apps' },
  { value: 'hackathons', label: "Hackathon's" },
  { value: 'personal', label: 'Personal' },
] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]['value']>('web-apps');

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => (project.category ?? 'web-apps') === activeCategory,
      ),
    [activeCategory],
  );

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <Container className="mt-2 flex w-full flex-col items-start">
      <RevealOnScroll>
        <SectionHeading subHeading="Selected work" heading="Projects" />
      </RevealOnScroll>

      <RevealOnScroll
        className="mt-8 flex w-full flex-col items-start"
        delay={0.05}
      >
        <div className="mb-5 flex flex-wrap gap-2 rounded-full border border-[#E5E5E5] bg-[#F9F9F9] p-1 dark:border-[#2a2a2a] dark:bg-[#111]">
          {categories.map((category) => {
            const isActive = category.value === activeCategory;
            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-medium tracking-[0.24em] uppercase transition ${
                  isActive
                    ? 'border border-black bg-black text-white shadow-sm dark:border-white dark:bg-white/5 dark:text-white'
                    : 'border border-transparent text-[#909092] hover:text-[#100F0F] dark:text-[#9b9b9b] dark:hover:text-[#f5f5f5]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {visibleProjects.length === 0 ? (
          <div className="rounded-[7.2px] border border-[#E5E5E5] bg-[#F9F9F9] px-5 py-8 text-center text-sm text-[#909092] dark:border-[#2a2a2a] dark:bg-[#111] dark:text-[#9b9b9b]">
            No projects found in this category.
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        <div className="mt-8 flex w-full justify-center">
          <Button
            variant="outline"
            size="sm"
            track={{
              name: 'button_click',
              data: { buttonId: 'see_all_projects', section: 'projects' },
            }}
          >
            <Link href="/projects">See all projects</Link>
          </Button>
        </div>
      </RevealOnScroll>
    </Container>
  );
}

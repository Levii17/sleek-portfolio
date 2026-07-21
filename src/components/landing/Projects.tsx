'use client';

import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import React, { useMemo, useState } from 'react';

import Container from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'web-apps', label: 'Web Apps' },
  { value: 'hackathons', label: "Hackathon's" },
  { value: 'personal', label: 'Personal' },
] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]['value']>('all');

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter(
            (project) => (project.category ?? 'web-apps') === activeCategory,
          ),
    [activeCategory],
  );

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <Container className="mt-2 flex w-full flex-col items-start">
      <div className="mb-5 flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[11px] tracking-[0.24em] text-[#909092] uppercase dark:text-[#9b9b9b]">
            Selected work
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#100F0F] sm:text-[1.4rem] dark:text-[#f5f5f5]">
            Projects
          </h2>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-[#F9F9F9] px-4 py-2 text-sm font-medium text-[#100F0F] transition hover:bg-[#e5e5e5] dark:border-[#2a2a2a] dark:bg-[#111] dark:text-[#f5f5f5] dark:hover:bg-[#222]"
        >
          See all projects
        </Link>
      </div>

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
    </Container>
  );
}

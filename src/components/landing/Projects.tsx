'use client';

import { projects } from '@/config/Projects';
import Image from 'next/image';
import React, { useState } from 'react';

import Container from '../common/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// 1. Define an explicit type to resolve missing property and implicit 'any' errors
type ProjectType = (typeof projects)[0] & {
  category?: string;
  image?: string;
  video?: string;
  title?: string;
  date?: string;
  status?: string;
  description?: string;
  tech?: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const categories = [
  { value: 'web-projects', label: 'Web Apps' },
  { value: 'hackathons', label: "Hackathon's" },
  { value: 'my-projects', label: 'My ✧' },
] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>('web-projects');
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // Cast imported projects to our explicit type
  const typedProjects = projects as ProjectType[];

  const filteredProjects = typedProjects.filter(
    (project) => (project.category ?? 'web-projects') === activeTab,
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // 2. Explicitly type the projectRows array to prevent implicit 'any[]'
  const projectRows: ProjectType[][] = [];
  for (let i = 0; i < displayedProjects.length; i += 2) {
    projectRows.push(displayedProjects.slice(i, i + 2));
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setVisibleCount(4);
  };

  return (
    <Container className="mt-2 flex w-[95vw] flex-col items-start sm:w-[50vw]">
      {/* Added the missing heading */}
      <div className="mb-4 w-full">
        <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
          Projects
        </h2>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="flex w-full flex-col gap-2 sm:w-[50vw]"
        id="projects-tabs"
      >
        <div className="no-scrollbar relative w-full overflow-x-auto">
          <TabsList className="bg-muted text-muted-foreground relative mb-3 inline-flex h-8 w-fit flex-wrap items-center justify-center rounded-full p-[3px]">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground z-10 flex cursor-pointer flex-row items-center gap-2 rounded-full border-0 px-3 py-1 text-xs font-normal whitespace-nowrap transition-colors duration-300 data-[state=active]:shadow-sm"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent
            key={category.value}
            value={category.value}
            className="w-full flex-1 transition-opacity duration-300 outline-none"
          >
            <div className="flex w-full flex-col gap-3">
              {projectRows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <div className="grid grid-cols-1 gap-3 hover:caret-white lg:grid-cols-2">
                    {/* 3. Explicitly typed project and idx parameters */}
                    {row.map((project: ProjectType, idx: number) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-between gap-2"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="group relative aspect-video w-full">
                            {/* 4. Swapped <img> for <Image> with fill prop */}
                            {project.image && (
                              <Image
                                alt={`${project.title || 'Project'} screenshot`}
                                src={project.image}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="rounded-xl border border-neutral-200/50 object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0 dark:border-neutral-800/80"
                              />
                            )}
                            {project.video && (
                              <video
                                src={project.video}
                                loop
                                playsInline
                                muted
                                autoPlay
                                className="absolute top-0 left-0 h-full w-full rounded-xl border border-neutral-200/50 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-neutral-800/80"
                              />
                            )}
                          </div>

                          <div className="flex flex-col max-sm:flex-wrap">
                            <div className="flex items-center justify-between">
                              <div className="line-clamp-1 block truncate text-lg font-semibold">
                                {project.title}
                              </div>
                              <div className="text-xs text-nowrap">
                                {project.date}
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 text-xs font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-badge-check text-green-500"
                                  aria-hidden="true"
                                >
                                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                {project.status || 'Completed'}
                              </div>
                            </div>
                          </div>

                          <div className="text-muted-foreground text-sm whitespace-pre-line">
                            {project.description}
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {(project.tech || []).map((techItem: string) => (
                              <span
                                key={techItem}
                                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-accent [a&]:hover:text-accent-foreground inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-lg border-0 bg-neutral-100/70 px-2.5 py-1 text-xs font-normal whitespace-nowrap text-neutral-800 transition-colors hover:bg-neutral-200/70 focus-visible:ring-[3px] dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-800/60 [&>svg]:pointer-events-none [&>svg]:size-3"
                              >
                                {techItem}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-2 flex gap-2 max-sm:flex-wrap">
                          {project.liveUrl && (
                            <a
                              target="_blank"
                              href={project.liveUrl}
                              rel="noreferrer"
                            >
                              <button className="group motion-safe:hover:animate-rainbow motion-safe:focus-visible:animate-rainbow aria-invalid:border-destructive border-input text-accent-foreground motion-safe:hover:before:animate-rainbow motion-safe:focus-visible:before:animate-rainbow group relative inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-b-transparent bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-3 text-xs font-medium whitespace-nowrap transition-all outline-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:[filter:blur(0.75rem)] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                                Live
                                <span className="relative inline-block size-4 overflow-hidden">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right size-4 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                                    aria-hidden="true"
                                  >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right absolute top-0 left-0 size-4 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                                    aria-hidden="true"
                                  >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                  </svg>
                                </span>
                              </button>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              target="_blank"
                              href={project.githubUrl}
                              rel="noreferrer"
                            >
                              <button className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-200/50 bg-neutral-100/70 px-3 text-xs font-medium whitespace-nowrap transition-colors hover:bg-neutral-200/70 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:hover:bg-neutral-800/60">
                                GitHub
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {rowIndex < projectRows.length - 1 && (
                    <div className="relative my-1.5 w-full py-1">
                      <div className="grid-line-h top-1/2 -translate-y-1/2"></div>
                      <div className="grid-intersection top-1/2 -left-6 hidden -translate-x-1/2 -translate-y-1/2 sm:block"></div>
                      <div className="grid-intersection top-1/2 -right-6 hidden translate-x-1/2 -translate-y-1/2 sm:block"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {filteredProjects.length > 4 && (
              <div className="mt-8 flex w-full justify-center">
                <button
                  onClick={() =>
                    setVisibleCount(hasMore ? filteredProjects.length : 4)
                  }
                  className="rounded-full border border-neutral-200/50 bg-neutral-100/70 px-5 py-2 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-200/70 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-800/60"
                >
                  {hasMore ? 'See More' : 'See Less'}
                </button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  );
}

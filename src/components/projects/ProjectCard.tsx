'use client';

import { useUmami } from '@/hooks/use-umami';
import type { AnalyticsEventData } from '@/types/analytics';
import { type Project } from '@/types/project';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'next-view-transitions';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { trackEvent } = useUmami();

  const projectId =
    project.projectDetailsPageSlug.split('/').filter(Boolean).pop() ??
    project.title;

  const trackProject = (
    action: AnalyticsEventData['project_click']['action'],
  ) =>
    trackEvent({
      name: 'project_click',
      data: {
        projectId,
        projectTitle: project.title,
        action,
        location: 'project_card',
      },
    });

  const statusLabel = project.isWorking ? 'Active' : 'In progress';

  return (
    <article className="group rounded-[7.2px] border border-[#E5E5E5] bg-[#F9F9F9] p-5 transition-colors hover:border-[#d0d0d0] dark:border-[#2a2a2a] dark:bg-[#111111] dark:hover:border-[#3a3a3a]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={project.projectDetailsPageSlug}
              className="block"
              onClick={() => trackProject('view_details')}
            >
              <h3 className="text-[1rem] font-semibold tracking-tight text-[#100F0F] transition-colors group-hover:text-black dark:text-[#f5f5f5] dark:group-hover:text-white">
                {project.title}
              </h3>
            </Link>
            <p className="mt-1 text-[11px] tracking-[0.24em] text-[#909092] uppercase dark:text-[#9b9b9b]">
              {statusLabel}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-white/70 px-2.5 py-1 text-[11px] tracking-[0.2em] text-[#100F0F] uppercase transition-colors hover:bg-white dark:border-[#2a2a2a] dark:bg-[#1b1b1b] dark:text-[#f5f5f5] dark:hover:bg-[#222222]"
                onClick={() => trackProject('visit_website')}
              >
                Live
                <ArrowUpRight className="size-3.5" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-white/70 px-2.5 py-1 text-[11px] tracking-[0.2em] text-[#100F0F] uppercase transition-colors hover:bg-white dark:border-[#2a2a2a] dark:bg-[#1b1b1b] dark:text-[#f5f5f5] dark:hover:bg-[#222222]"
                onClick={() => trackProject('visit_github')}
              >
                Code
                <Github className="size-3.5" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm leading-6 text-[#909092] dark:text-[#9b9b9b]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology, index) => (
            <span
              key={`${project.title}-${technology.name}-${index}`}
              className="rounded-full border border-[#E5E5E5] bg-white/70 px-2.5 py-1 text-[11px] tracking-[0.2em] text-[#100F0F] uppercase dark:border-[#2a2a2a] dark:bg-[#1b1b1b] dark:text-[#f5f5f5]"
            >
              {technology.name}
            </span>
          ))}
        </div>

        {project.details && (
          <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-3 dark:border-[#2a2a2a]">
            <p className="text-xs tracking-[0.2em] text-[#909092] uppercase dark:text-[#9b9b9b]">
              Case study
            </p>
            <Link
              href={project.projectDetailsPageSlug}
              className="inline-flex items-center gap-1 text-sm text-[#100F0F] transition-colors hover:underline dark:text-[#f5f5f5]"
              onClick={() => trackProject('view_details')}
            >
              View details
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

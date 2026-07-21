import { skillsGrid } from '@/config/SkillsGrid';
import React from 'react';

import Container from '../common/Container';
import { TrackedLink } from '../common/TrackedLink';

export default function SkillsGrid() {
  return (
    <Container>
      <section
        id="skills"
        className="relative mt-2 mb-0 w-full scroll-mt-24 pb-12"
      >
        {/* Header Block with Decorative Grid Lines */}
        <div className="relative mb-6 w-full py-3">
          <div className="grid-line-h top-0" />
          <div className="grid-intersection top-0 -left-6 hidden -translate-x-1/2 -translate-y-1/2 sm:block" />
          <div className="grid-intersection top-0 -right-6 hidden translate-x-1/2 -translate-y-1/2 sm:block" />

          <header className="font-serif text-2xl font-normal text-neutral-800 sm:text-3xl dark:text-neutral-200">
            Skills
          </header>

          <div className="grid-line-h bottom-0" />
          <div className="grid-intersection bottom-0 -left-6 hidden -translate-x-1/2 translate-y-1/2 sm:block" />
          <div className="grid-intersection -right-6 bottom-0 hidden translate-x-1/2 translate-y-1/2 sm:block" />
        </div>

        {/* Dynamic Skill Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skillsGrid.map((skill) => (
            <TrackedLink
              key={skill.name}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-0 flex h-10 items-center rounded-[8px] border border-dashed border-neutral-300/80 bg-neutral-100/40 px-3 transition-colors duration-200 hover:border-neutral-400 dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
              track={{
                name: 'button_click',
                data: { buttonId: skill.name, section: 'skills_grid' },
              }}
            >
              {/* Icon */}
              <div className="flex size-4 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110 [&>svg]:size-4 [&>svg]:shrink-0">
                {skill.icon}
              </div>

              {/* Collapsible Label on Hover */}
              <span
                className="inline-block max-w-0 overflow-hidden text-xs font-normal whitespace-nowrap text-neutral-700 opacity-0 group-hover:ml-2 group-hover:max-w-xs group-hover:opacity-100 dark:text-neutral-300"
                style={{
                  transitionProperty: 'max-width, margin-left, opacity',
                  transitionDuration: '250ms, 250ms, 200ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {skill.name}
              </span>
            </TrackedLink>
          ))}
        </div>
      </section>
    </Container>
  );
}

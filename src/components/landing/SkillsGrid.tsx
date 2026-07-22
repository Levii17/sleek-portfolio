import { skillsGrid } from '@/config/SkillsGrid';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { TrackedLink } from '../common/TrackedLink';

export default function SkillsGrid() {
  return (
    <Container>
      <section
        id="skills"
        className="relative mt-4 mb-0 w-full scroll-mt-24 pb-12"
      >
        <SectionHeading subHeading="My" heading="Toolbox" />

        <div className="mt-8 flex flex-wrap gap-2">
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

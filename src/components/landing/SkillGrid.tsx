import { skillsGrid } from '@/config/SkillsGrid';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { TrackedLink } from '../common/TrackedLink';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function SkillsGrid() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="What I work with" heading="Skills" />
      <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {skillsGrid.map((skill) => (
          <Tooltip key={skill.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <TrackedLink
                href={skill.href}
                target="_blank"
                className="bg-muted flex aspect-square items-center justify-center rounded-md border border-black/10 p-3 transition-transform duration-200 hover:-translate-y-0.5 dark:border-white/10"
                track={{
                  name: 'button_click',
                  data: { buttonId: skill.name, section: 'skills_grid' },
                }}
              >
                <span className="size-6">{skill.icon}</span>
              </TrackedLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}

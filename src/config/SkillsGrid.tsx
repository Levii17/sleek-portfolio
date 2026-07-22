// import AWS from '@/components/technologies/AWS';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

/*
 * SKILLS GRID CONFIGURATION
 *
 * This powers the new "Skills" section on the homepage.
 * To add a skill: import its icon from src/components/technologies/
 * (or add a new icon component there, following the existing ones
 * as a template) and add an entry below.
 *
 * To remove a skill: delete its entry.
 */

export interface SkillGridItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const skillsGrid: SkillGridItem[] = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/docs/Web/JavaScript',
    icon: <JavaScript />,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: <TypeScript />,
  },
  { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
  { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
  { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
  { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
  { name: 'Bun', href: 'https://bun.sh/', icon: <Bun /> },
  { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
  { name: 'PostgreSQL', href: 'https://postgresql.org/', icon: <PostgreSQL /> },
  { name: 'Prisma', href: 'https://prisma.io/', icon: <Prisma /> },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: <TailwindCss />,
  },
  { name: 'shadcn/ui', href: 'https://ui.shadcn.com/', icon: <Shadcn /> },
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/docs/Web/HTML',
    icon: <Html />,
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/docs/Web/CSS',
    icon: <CSS />,
  },
  { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
  { name: 'Postman', href: 'https://postman.com/', icon: <Postman /> },
  { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
  { name: 'GitHub', href: 'https://github.com/', icon: <Github /> },
  // { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
];

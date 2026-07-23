import FramerMotion from '@/components/technologies/FramerMotion';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Mzansi Learn',
    description:
      'A full-stack civic education platform teaching South Africans about democracy, rights, and history.',
    image: '/project/mzansi-learn.png',
    link: 'https://mzansi-learn.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Levii17/mzansi-learn',
    live: 'https://mzansi-learn.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/mzansi-learn',
    isWorking: false, // TODO: set true once it's actually deployed/live
    category: 'web-apps',
  },
  {
    title: 'Perspectiva',
    description:
      'A browser-based GLTF/GLB viewer for inspecting 3D models with real-time lighting, wireframe, and camera controls.',
    image: '/project/perspectiva.png',
    link: 'https://perspectiva-five.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer-motion" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Levii17/perspectiva',
    live: 'https://perspectiva-five.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/perspectiva',
    isWorking: false, // TODO: confirm the deployment renders correctly before flipping true
    category: 'personal',
  },
];

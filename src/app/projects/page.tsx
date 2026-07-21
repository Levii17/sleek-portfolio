import Container from '@/components/common/Container';
import { ProjectList } from '@/components/projects/ProjectList';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="space-y-3">
          <p className="text-[11px] tracking-[0.24em] text-[#909092] uppercase">
            Archive
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#100F0F] sm:text-4xl">
            Projects
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#909092]">
            A compact record of products, experiments, and shipped ideas.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3">
            <p className="text-sm text-[#909092]">
              {projects.length} selected works
            </p>
            <p className="text-[11px] tracking-[0.24em] text-[#909092] uppercase">
              Updated regularly
            </p>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}

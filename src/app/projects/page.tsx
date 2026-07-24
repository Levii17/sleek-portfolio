import Container from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { ProjectList } from '@/components/projects/ProjectList';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  return (
    <Container className="mt-10">
      <section className="space-y-8 pt-8" aria-labelledby="projects-heading">
        <PageHeader
          headingId="projects-heading"
          title="Projects"
          description="A collection of things I've built, from full-stack web apps to real-time 3D experiments."
          trackId="projects"
        />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              <span className="text-muted-foreground ml-2 text-sm font-normal">
                ({projects.length}{' '}
                {projects.length === 1 ? 'project' : 'projects'})
              </span>
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </section>
    </Container>
  );
}

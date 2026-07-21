import { type Project } from '@/types/project';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-[#909092]">No projects found.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-4 ${className ?? ''}`.trim()}>
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

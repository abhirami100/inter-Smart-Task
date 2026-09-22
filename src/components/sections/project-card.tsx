import Image from "next/image";
import { memo } from "react";
import type { Project } from "@/lib/projects-data";

interface ProjectCardProps {
  project: Project;
}

// One project preview card, with a placeholder if there's no image yet
function ProjectCardComponent({ project }: ProjectCardProps) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-box">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.alt}
          fill
          draggable={false}
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-theme/40">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m4 17 5-5 4 4 3-3 4 4" />
          </svg>
          <span className="text-xs font-medium">Image coming soon</span>
        </div>
      )}
    </div>
  );
}

export const ProjectCard = memo(ProjectCardComponent);

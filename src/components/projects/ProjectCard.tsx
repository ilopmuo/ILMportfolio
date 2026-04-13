import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TagBadge } from "@/components/shared/TagBadge";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<string, string> = {
  completed: "Completado",
  ongoing: "En curso",
  archived: "Archivado",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white border border-brand-100 rounded-sm p-6 hover:border-brand-300 transition-colors h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">
            {project.role}
          </p>
          <h3 className="font-display text-brand-900 text-xl leading-tight">
            {project.title}
          </h3>
        </div>
        <span
          className={cn(
            "text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm whitespace-nowrap",
            project.status === "ongoing"
              ? "bg-brand-100 text-brand-700"
              : "bg-brand-50 text-brand-500"
          )}
        >
          {STATUS_LABELS[project.status]}
        </span>
      </div>

      {/* Org + Period */}
      <p className="text-xs text-brand-500 mb-4">
        {project.organization} · {project.period}
      </p>

      {/* Description */}
      <p className="text-brand-700 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Outcomes */}
      {project.outcomes.length > 0 && (
        <ul className="flex flex-col gap-1.5 mb-5">
          {project.outcomes.slice(0, 3).map((outcome, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-700">
              <span className="text-brand-400 mt-0.5 shrink-0">—</span>
              {outcome}
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-brand-900 font-medium hover:text-brand-700 transition-colors group-hover:gap-2.5"
          >
            Ver proyecto
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        )}
        {project.caseStudyAvailable && (
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs text-brand-500 hover:text-brand-900 transition-colors"
          >
            Caso de estudio
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </div>
  );
}

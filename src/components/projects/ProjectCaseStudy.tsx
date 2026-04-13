import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { TagBadge } from "@/components/shared/TagBadge";
import type { Project } from "@/types/project";

const STATUS_LABELS: Record<string, string> = {
  completed: "Completado",
  ongoing: "En curso",
  archived: "Archivado",
};

interface ProjectCaseStudyProps {
  project: Project;
  children: React.ReactNode;
}

export function ProjectCaseStudy({ project, children }: ProjectCaseStudyProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        Volver a proyectos
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} size="md" />
          ))}
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-900 leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-brand-700 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6 border-y border-brand-100">
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Rol</p>
            <p className="text-sm text-brand-900">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Empresa</p>
            <p className="text-sm text-brand-900">{project.organization}</p>
          </div>
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Período</p>
            <p className="text-sm text-brand-900">{project.period}</p>
          </div>
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Estado</p>
            <p className="text-sm text-brand-900">{STATUS_LABELS[project.status]}</p>
          </div>
        </div>

        {/* Outcomes */}
        {project.outcomes.length > 0 && (
          <div className="mt-6">
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-3">Resultados</p>
            <ul className="flex flex-col gap-2">
              {project.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-brand-700">
                  <span className="text-brand-400 mt-0.5 shrink-0">—</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        {project.techStack.length > 0 && (
          <div className="mt-6">
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-3">Stack técnico</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <TagBadge key={t} label={t} size="md" />
              ))}
            </div>
          </div>
        )}

        {project.liveUrl && (
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors"
            >
              Ver proyecto en vivo
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        )}
      </div>

      <article className="prose prose-lg max-w-none">{children}</article>
    </div>
  );
}

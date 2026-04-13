"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import { TagBadge } from "@/components/shared/TagBadge";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";

const STATUS_LABELS: Record<string, Record<string, string>> = {
  es: { completed: "Completado", ongoing: "En curso", archived: "Archivado" },
  en: { completed: "Completed", ongoing: "Ongoing", archived: "Archived" },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const description = lang === "en" && project.description_en ? project.description_en : project.description;
  const role = lang === "en" && project.role_en ? project.role_en : project.role;
  const organization = lang === "en" && project.organization_en ? project.organization_en : project.organization;
  const outcomes = lang === "en" && project.outcomes_en ? project.outcomes_en : project.outcomes;

  function togglePlay() {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <div className="group flex flex-col bg-white border border-brand-100 rounded-sm hover:border-brand-300 transition-colors h-full overflow-hidden">
      {/* Video preview */}
      {project.previewVideo && (
        <div className="relative w-full aspect-video overflow-hidden bg-brand-100">
          <video
            ref={videoRef}
            src={project.previewVideo}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={togglePlay}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            ) : (
              <Play className="w-3.5 h-3.5 text-white fill-white" strokeWidth={2} />
            )}
          </button>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">
              {role}
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
            {STATUS_LABELS[lang][project.status]}
          </span>
        </div>

        {/* Org + Period */}
        <p className="text-xs text-brand-500 mb-4">
          {organization} · {project.period}
        </p>

        {/* Description */}
        <p className="text-brand-700 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Outcomes */}
        {outcomes.length > 0 && (
          <ul className="flex flex-col gap-1.5 mb-5">
            {outcomes.slice(0, 3).map((outcome, i) => (
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
              {lang === "en" ? "View project" : "Ver proyecto"}
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          )}
          {project.caseStudyAvailable && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs text-brand-500 hover:text-brand-900 transition-colors"
            >
              {lang === "en" ? "Documentation" : "Documentación"}
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

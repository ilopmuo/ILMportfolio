"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

const ALL_FILTER = "Todos";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  ).slice(0, 6);

  const filters = [ALL_FILTER, ...allTags];
  const [active, setActive] = useState(ALL_FILTER);

  const filtered =
    active === ALL_FILTER
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <SectionWrapper id="projects" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
              Proyectos
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
              Trabajo que tiene impacto.
            </h2>
          </div>
        </div>
      </AnimatedSection>

      {/* Filters */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                active === filter
                  ? "bg-brand-900 text-white border-brand-900"
                  : "border-brand-300 text-brand-700 hover:border-brand-700 hover:text-brand-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}

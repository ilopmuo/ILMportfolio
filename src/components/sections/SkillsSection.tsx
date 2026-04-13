"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Cloud, Code2, FolderKanban, Languages } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const SKILL_COLUMNS = [
  {
    icon: Cloud,
    label: "Salesforce",
    skills: ["Sales Cloud", "Service Cloud", "Flows", "Apex", "LWC", "Permission Sets", "APIs REST/SOAP", "Salesforce DX", "CI/CD SFDX"],
  },
  {
    icon: Code2,
    label: "Desarrollo",
    skills: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Electron", "Node.js", "REST APIs", "Git"],
  },
  {
    icon: FolderKanban,
    label: "Gestión & Producto",
    skills: ["Solution Design", "User Stories", "Acceptance Criteria", "Roadmapping", "Workshops", "Onboarding", "Gestión de stakeholders"],
  },
  {
    icon: Languages,
    label: "Comunicación",
    skills: ["Technical Writing", "Documentación funcional", "Presentaciones ejecutivas", "Inglés B2 Cambridge", "Español nativo"],
  },
];

function SkillColumn({
  column,
  index,
}: {
  column: (typeof SKILL_COLUMNS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = column.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      {/* Icon + label */}
      <div className="flex flex-col gap-3">
        <div className="w-12 h-12 rounded-sm border border-brand-100 bg-brand-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
        </div>
        <p className="font-display text-brand-900 text-lg">{column.label}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {column.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2 + i * 0.05, duration: 0.2 }}
            className="text-xs px-2.5 py-1 border border-brand-100 text-brand-600 rounded-sm bg-white hover:border-brand-300 hover:text-brand-900 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Competencias
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            Con qué trabajo.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {SKILL_COLUMNS.map((col, i) => (
          <SkillColumn key={col.label} column={col} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

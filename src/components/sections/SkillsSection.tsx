"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const SF_SKILLS = ["Sales Cloud", "Service Cloud", "Flows", "Apex", "LWC", "Permission Sets", "APIs REST/SOAP", "Salesforce DX"];
const DEV_SKILLS = ["React", "Next.js", "TypeScript", "Supabase", "Electron", "Node.js", "Tailwind"];

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SkillsSection() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <SectionWrapper id="skills" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            {t.supertitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
            {t.heading}
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

        {/* Customer Success & PM — dark, featured */}
        <Card delay={0} className="col-span-2 bg-brand-900 rounded-sm p-7 flex flex-col gap-5">
          <div>
            <p className="text-xs text-brand-400 uppercase tracking-widest mb-2">{t.csm_label}</p>
            <p className="font-display text-white text-2xl leading-tight">
              {t.csm_tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.csm_skills.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 border border-brand-700 text-brand-300 rounded-sm">
                {s}
              </span>
            ))}
          </div>
        </Card>

        {/* Stat — 3 certs */}
        <Card delay={0.08} className="col-span-1 border border-brand-100 rounded-sm p-6 flex flex-col justify-between bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.certs_label}</p>
          <div>
            <p className="font-display text-6xl text-brand-900 leading-none">3</p>
            <p className="text-xs text-brand-500 mt-1">{t.certs_sub}</p>
          </div>
        </Card>

        {/* Stat — años */}
        <Card delay={0.12} className="col-span-1 border border-brand-100 rounded-sm p-6 flex flex-col justify-between bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.exp_label}</p>
          <div>
            <p className="font-display text-6xl text-brand-900 leading-none">3+</p>
            <p className="text-xs text-brand-500 mt-1">{t.exp_sub}</p>
          </div>
        </Card>

        {/* Salesforce — dark, featured */}
        <Card delay={0.16} className="col-span-2 bg-brand-900 rounded-sm p-7 flex flex-col gap-5">
          <div>
            <p className="text-xs text-brand-400 uppercase tracking-widest mb-2">{t.sf_label}</p>
            <p className="font-display text-white text-2xl leading-tight">
              {t.sf_tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SF_SKILLS.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 border border-brand-700 text-brand-300 rounded-sm">
                {s}
              </span>
            ))}
          </div>
        </Card>

        {/* B2 stat */}
        <Card delay={0.2} className="col-span-1 border border-brand-100 rounded-sm p-6 flex flex-col justify-between bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.eng_label}</p>
          <div>
            <p className="font-display text-6xl text-brand-900 leading-none">B2</p>
            <p className="text-xs text-brand-500 mt-1">Cambridge</p>
          </div>
        </Card>

        {/* Grado */}
        <Card delay={0.24} className="col-span-1 border border-brand-100 rounded-sm p-6 flex flex-col justify-between bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.degree_label}</p>
          <div>
            <p className="font-display text-brand-900 text-lg leading-tight">{t.degree_name}</p>
            <p className="text-xs text-brand-500 mt-1">{t.degree_sub}</p>
          </div>
        </Card>

        {/* Desarrollo */}
        <Card delay={0.28} className="col-span-2 lg:col-span-1 border border-brand-100 rounded-sm p-6 flex flex-col gap-4 bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.dev_label}</p>
          <div className="flex flex-wrap gap-1.5">
            {DEV_SKILLS.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 border border-brand-100 text-brand-600 rounded-sm bg-brand-50">
                {s}
              </span>
            ))}
          </div>
        </Card>

        {/* Proyectos propios */}
        <Card delay={0.32} className="col-span-2 lg:col-span-3 border border-brand-100 rounded-sm p-6 flex flex-col justify-between gap-5 bg-white">
          <p className="text-xs text-brand-400 uppercase tracking-widest">{t.projects_label}</p>
          <div className="flex flex-col gap-2">
            {t.projects.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-brand-700 hover:text-brand-900 transition-colors group border-b border-brand-50 pb-2 last:border-0 last:pb-0"
              >
                {p.name}
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-300 group-hover:text-brand-700 transition-colors shrink-0" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </Card>

      </div>
    </SectionWrapper>
  );
}

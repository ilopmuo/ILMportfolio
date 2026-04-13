"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { COMPETENCY_AREAS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [active, setActive] = useState(0);
  const area = COMPETENCY_AREAS[active];

  return (
    <SectionWrapper id="skills" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Competencias
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            Qué puedo aportar.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-brand-100 rounded-sm overflow-hidden">
        {/* Left — category list */}
        <div className="lg:col-span-2 flex flex-col divide-y divide-brand-100 border-b lg:border-b-0 lg:border-r border-brand-100">
          {COMPETENCY_AREAS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className={cn(
                "group w-full text-left px-6 py-5 flex items-center gap-4 transition-colors duration-200",
                active === i ? "bg-brand-900" : "bg-white hover:bg-brand-50"
              )}
            >
              <span className="font-display text-xs tabular-nums text-brand-300 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-200 leading-tight",
                  active === i ? "text-white" : "text-brand-700 group-hover:text-brand-900"
                )}
              >
                {item.title}
              </span>
              {active === i && (
                <motion.span layoutId="arrow" className="ml-auto text-brand-400 text-xs">
                  →
                </motion.span>
              )}
            </button>
          ))}
        </div>

        {/* Right — detail panel */}
        <div className="lg:col-span-3 relative overflow-hidden bg-white min-h-[340px]">
          {/* Large background number */}
          <span
            className="absolute right-4 top-0 font-display text-[8rem] leading-none text-brand-100 select-none pointer-events-none"
            aria-hidden="true"
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 p-8 flex flex-col gap-6"
            >
              {/* Title + description */}
              <div>
                <h3 className="font-display text-brand-900 text-2xl leading-tight mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-brand-500 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Delivers */}
              <div className="flex flex-col gap-3">
                <p className="text-[10px] text-brand-400 uppercase tracking-widest">
                  Lo que aporto
                </p>
                <ul className="flex flex-col gap-2.5">
                  {area.delivers.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.25, ease: "easeOut" }}
                      className="flex items-start gap-3 text-sm text-brand-700"
                    >
                      <span className="shrink-0 w-1 h-1 rounded-full bg-brand-400 mt-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {area.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.2 }}
                    className="text-xs px-2.5 py-1 border border-brand-200 text-brand-500 rounded-sm bg-brand-50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}

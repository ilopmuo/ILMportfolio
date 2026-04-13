"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { COMPETENCY_AREAS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ArcProgress({ depth, active }: { depth: number; active: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const offset = CIRCUMFERENCE * (1 - depth / 100);

  return (
    <div ref={ref} className="relative w-24 h-24 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
        {/* Track */}
        <circle
          cx="44" cy="44" r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-brand-100"
        />
        {/* Arc */}
        <motion.circle
          cx="44" cy="44" r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-brand-900"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={inView && active ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-display text-xl text-brand-900 leading-none"
          initial={{ opacity: 0 }}
          animate={inView && active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {depth}
        </motion.span>
        <span className="text-[10px] text-brand-400">/ 100</span>
      </div>
    </div>
  );
}

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
            En qué soy bueno.
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
              <span
                className={cn(
                  "font-display text-xs tabular-nums transition-colors duration-200",
                  active === i ? "text-brand-300" : "text-brand-300"
                )}
              >
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
                <motion.span
                  layoutId="arrow"
                  className="ml-auto text-brand-300 text-xs"
                >
                  →
                </motion.span>
              )}
            </button>
          ))}
        </div>

        {/* Right — detail panel */}
        <div className="lg:col-span-3 relative overflow-hidden bg-white min-h-[320px]">
          {/* Large background number */}
          <span
            className="absolute right-4 top-2 font-display text-[8rem] leading-none text-brand-100 select-none pointer-events-none"
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 p-8 flex flex-col gap-6 h-full"
            >
              {/* Title + arc */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-brand-900 text-2xl leading-tight max-w-xs">
                  {area.title}
                </h3>
                <ArcProgress depth={area.depth} active={true} />
              </div>

              {/* Description */}
              <p className="text-sm text-brand-700 leading-relaxed max-w-md">
                {area.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.25, ease: "easeOut" }}
                    className="text-xs px-3 py-1.5 border border-brand-200 text-brand-700 rounded-sm bg-brand-50"
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MapPin, ChevronDown, Briefcase, GraduationCap } from "lucide-react";

export function TimelineSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <SectionWrapper id="timeline" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-14">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Trayectoria
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
            El camino hasta aquí.
          </h2>
        </div>
      </AnimatedSection>

      <div className="relative flex flex-col">
        {/* Animated vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-brand-100 hidden md:block" />
        <motion.div
          className="absolute left-[19px] top-0 w-px bg-brand-300 hidden md:block origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ bottom: 0 }}
        />

        {TIMELINE.map((item, index) => {
          const isOpen = openIndex === index;
          const Icon = item.type === "education" ? GraduationCap : Briefcase;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative flex gap-6 md:gap-10 pb-8 last:pb-0"
            >
              {/* Node */}
              <div className="hidden md:flex flex-col items-center shrink-0 pt-1">
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-sm border flex items-center justify-center z-10 transition-colors duration-300",
                    isOpen
                      ? item.isAIEra
                        ? "bg-brand-900 border-brand-900"
                        : "bg-brand-700 border-brand-700"
                      : "bg-white border-brand-200"
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isOpen ? "text-white" : "text-brand-400"
                    )}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start justify-between gap-4 py-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-brand-500 uppercase tracking-wider">
                        {item.period}
                      </span>
                      <span
                        className={cn(
                          "font-display text-xl leading-tight transition-colors duration-200",
                          isOpen ? "text-brand-900" : "text-brand-700 group-hover:text-brand-900"
                        )}
                      >
                        {item.role}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-brand-500">
                        <span>{item.company}</span>
                        <span className="text-brand-300">·</span>
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-colors duration-200",
                          isOpen ? "text-brand-700" : "text-brand-300 group-hover:text-brand-500"
                        )}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pt-1">
                        <p className="text-sm text-brand-700 mb-4 leading-relaxed">
                          {item.summary}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {item.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06, duration: 0.25 }}
                              className="flex items-start gap-2.5 text-sm text-brand-700"
                            >
                              <span className="text-brand-400 shrink-0 mt-0.5 text-xs">▸</span>
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {index < TIMELINE.length - 1 && (
                  <div className="h-px bg-brand-100 mb-2" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

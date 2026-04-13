"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MapPin, Plus, Minus } from "lucide-react";

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

      <div className="flex flex-col gap-3">
        {TIMELINE.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              <div
                className={cn(
                  "rounded-sm border transition-colors duration-300 overflow-hidden",
                  isOpen ? "border-brand-300" : "border-brand-100 hover:border-brand-200"
                )}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4 group"
                >
                  {/* Logo */}
                  <div className="shrink-0 w-10 h-10 rounded-sm border border-brand-100 overflow-hidden bg-white flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        className="object-contain p-1"
                        sizes="40px"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2.5">
                      <span
                        className={cn(
                          "font-display text-lg leading-tight transition-colors duration-200",
                          isOpen ? "text-brand-900" : "text-brand-700 group-hover:text-brand-900"
                        )}
                      >
                        {item.role}
                      </span>
                      <span className="hidden sm:block text-brand-300 text-xs">·</span>
                      <span className="text-sm text-brand-500">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs text-brand-400 uppercase tracking-wide">{item.period}</span>
                      <span className="text-brand-300 text-xs">·</span>
                      <MapPin className="w-3 h-3 text-brand-400 shrink-0" strokeWidth={1.5} />
                      <span className="text-xs text-brand-400">{item.location}</span>
                    </div>
                  </div>

                  {/* Toggle */}
                  <div
                    className={cn(
                      "shrink-0 w-7 h-7 rounded-sm border flex items-center justify-center transition-colors duration-300",
                      isOpen ? "border-brand-300 bg-brand-50" : "border-brand-200 group-hover:border-brand-300"
                    )}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          <Minus className="w-3 h-3 text-brand-700" strokeWidth={2} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          <Plus className="w-3 h-3 text-brand-500" strokeWidth={2} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                {/* Expandable body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-4 border-t border-brand-100">
                        <p className="text-sm text-brand-700 leading-relaxed mb-4">
                          {item.summary}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {item.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 + i * 0.07, duration: 0.25, ease: "easeOut" }}
                              className="flex items-start gap-3 text-sm text-brand-700"
                            >
                              <span className="shrink-0 w-1 h-1 rounded-full bg-brand-400 mt-2" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

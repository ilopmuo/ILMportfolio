"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";
import { MapPin, Plus, Minus } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type TimelineItem = (typeof translations)["es"]["timeline"]["items"][number];

function TimelineCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: TimelineItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isCurrent = item.isAIEra && item.period.includes("Actualidad") || item.period.includes("Present");

  return (
    <motion.div
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
          onClick={onToggle}
          className="w-full text-left px-5 py-4 flex items-center gap-4 group"
        >
          {/* Logo */}
          <div className="shrink-0 w-10 h-10 rounded-sm border border-brand-100 bg-white flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.logo}
              alt={item.company}
              className="object-contain w-9 h-9"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
              <span
                className={cn(
                  "font-display text-lg leading-tight transition-colors duration-200",
                  isOpen ? "text-brand-900" : "text-brand-700 group-hover:text-brand-900"
                )}
              >
                {item.role}
              </span>
              <span className="text-brand-300 text-xs hidden sm:inline">·</span>
              <span className="text-sm text-brand-500">{item.company}</span>
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-sm">
                  <span className="relative flex items-center justify-center w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                    <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-blue-500" />
                  </span>
                  Actual
                </span>
              )}
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

        {/* Body */}
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
}

export function TimelineSection() {
  const { lang } = useLang();
  const t = translations[lang].timeline;

  const workItems = t.items.filter((i) => i.type === "work");
  const eduItems = t.items.filter((i) => i.type === "education");

  const [openWork, setOpenWork] = useState<number>(0);
  const [openEdu, setOpenEdu] = useState<number>(-1);

  return (
    <SectionWrapper id="timeline" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-14">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            {t.supertitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
            {t.heading}
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Work */}
        <div className="flex flex-col gap-4">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-1">
            {t.work_label}
          </p>
          <div className="flex flex-col gap-3">
            {workItems.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                isOpen={openWork === i}
                onToggle={() => setOpenWork(openWork === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-4">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-1">
            {t.edu_label}
          </p>
          <div className="flex flex-col gap-3">
            {eduItems.map((item, i) => (
              <TimelineCard
                key={i}
                item={item}
                index={i}
                isOpen={openEdu === i}
                onToggle={() => setOpenEdu(openEdu === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

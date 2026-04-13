"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type Principle = (typeof translations)["es"]["philosophy"]["principles"][number];

function PrincipleCard({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden border border-brand-100 rounded-sm p-6 h-full bg-white hover:border-brand-300 transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-sm"
    >
      {/* Large background numeral */}
      <span
        className="absolute -right-2 -bottom-4 font-display text-[7rem] leading-none text-brand-100 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-200"
        aria-hidden="true"
      >
        {principle.numeral}
      </span>

      {/* Animated left border */}
      <motion.span
        className="absolute left-0 top-0 w-0.5 bg-brand-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
        style={{ height: "100%" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p className="font-display text-brand-400 text-sm mb-3 italic">
          {principle.numeral}.
        </p>
        <h3 className="font-display text-brand-900 text-xl mb-3 leading-tight">
          {principle.title}
        </h3>
        <p className="text-brand-700 text-sm leading-relaxed">
          {principle.body}
        </p>
      </div>
    </motion.div>
  );
}

export function PhilosophySection() {
  const { lang } = useLang();
  const t = translations[lang].philosophy;

  return (
    <SectionWrapper id="philosophy" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            {t.supertitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            {t.heading}
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.principles.map((principle, i) => (
          <PrincipleCard key={principle.numeral} principle={principle} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

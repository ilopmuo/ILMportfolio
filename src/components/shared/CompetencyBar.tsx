"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface CompetencyBarProps {
  depth: number;
  delay?: number;
}

export function CompetencyBar({ depth, delay = 0 }: CompetencyBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="relative h-[2px] w-full bg-brand-100 rounded-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-y-0 left-0 bg-brand-500 rounded-full"
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${depth}%` } : { width: "0%" }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
    </div>
  );
}

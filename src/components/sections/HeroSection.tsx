"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { CVDownloadButton } from "@/components/cv/CVDownloadButton";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function HeroSection() {
  const { lang } = useLang();
  const t = translations[lang].hero;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % t.titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.titles.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e8e8e9 1px, transparent 1px), linear-gradient(to bottom, #e8e8e9 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-28">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs text-brand-500 uppercase tracking-[0.18em]">
                {t.location}
              </span>
            </motion.div>

            {/* Animated title */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl text-brand-900 leading-[1.1] tracking-tight">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${lang}-${titleIndex}`}
                    className="block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    onClick={() => setTitleIndex((i) => (i + 1) % t.titles.length)}
                    style={{ cursor: "pointer" }}
                    title="Click to change"
                  >
                    {t.titles[titleIndex]}
                    <span className="text-brand-500">.</span>
                  </motion.span>
                </AnimatePresence>
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            >
              <a
                href="/#projects"
                className="bg-brand-900 text-white text-sm px-6 py-3 rounded-sm hover:bg-brand-700 transition-colors"
              >
                {t.cta_projects}
              </a>
              <a
                href="/#contact"
                className="border border-brand-300 text-brand-700 text-sm px-6 py-3 rounded-sm hover:border-brand-700 hover:text-brand-900 transition-colors"
              >
                {t.cta_contact}
              </a>
              <CVDownloadButton />

              {/* Dots indicator */}
              <div className="flex items-center gap-1.5 ml-1">
                {t.titles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTitleIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === titleIndex ? "bg-brand-900 w-4" : "bg-brand-300"
                    }`}
                    aria-label={t.titles[i]}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — 3 role pillars */}
          <div className="flex flex-col gap-3">
            {t.roles.map((role, i) => (
              <motion.div
                key={role.tag}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: "easeOut" }}
                className="group bg-white border border-brand-100 rounded-sm p-5 hover:border-brand-300 transition-colors cursor-default"
              >
                <p className="text-[10px] text-brand-500 uppercase tracking-widest mb-2">
                  {role.tag}
                </p>
                <p className="font-display text-brand-900 text-lg leading-tight mb-1.5">
                  {role.headline}
                </p>
                <p className="text-sm text-brand-700 leading-relaxed">
                  {role.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-brand-300" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}

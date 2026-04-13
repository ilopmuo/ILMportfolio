"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
      {/* Top label */}
      <motion.p
        className="text-xs text-brand-500 uppercase tracking-[0.2em] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {SITE_CONFIG.location}
      </motion.p>

      {/* Manifesto */}
      <motion.h1
        className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-900 leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Transformo requisitos complejos en soluciones que{" "}
        <span className="text-brand-500 italic">realmente</span> escalan.
      </motion.h1>

      {/* Sub */}
      <motion.div
        className="mt-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
      >
        <p className="text-brand-700 text-lg leading-relaxed">
          Soy{" "}
          <span className="text-brand-900 font-medium">
            Ignacio López Muñoyerro
          </span>{" "}
          — Customer Success Manager y Salesforce Architect en{" "}
          <span className="text-brand-900">Neurored</span>. Diseño, construyo y
          despliiego soluciones CRM que conectan el negocio con la tecnología.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="mt-10 flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="#projects"
          className="bg-brand-900 text-white text-sm px-6 py-3 rounded-sm hover:bg-brand-700 transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#posts"
          className="border border-brand-300 text-brand-700 text-sm px-6 py-3 rounded-sm hover:border-brand-700 hover:text-brand-900 transition-colors"
        >
          Leer mi blog
        </a>
      </motion.div>

      {/* Certifications hint */}
      <motion.div
        className="mt-16 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="h-px flex-1 max-w-[60px] bg-brand-300" />
        <p className="text-xs text-brand-500 tracking-wider">
          Salesforce Certified Administrator · Platform App Builder · AI Associate
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
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

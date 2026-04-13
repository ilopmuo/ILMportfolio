"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CERTIFICATIONS } from "@/lib/constants";
import { SalesforceBadge } from "@/components/shared/SalesforceBadge";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function AboutSection() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <SectionWrapper id="about" className="border-t border-brand-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left: photo + certs */}
        <AnimatedSection direction="left">
          <div className="flex flex-col gap-8">
            <div className="relative w-full max-w-[340px] aspect-[4/5] border border-brand-300 overflow-hidden rounded-sm">
              <Image
                src="/FotoNacho.png"
                alt="Ignacio López Muñoyerro"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
            </div>

            {/* Certifications */}
            <div className="flex flex-col gap-3">
              <p className="text-xs text-brand-500 uppercase tracking-widest">
                {t.certs_label}
              </p>
              {CERTIFICATIONS.map((cert, i) => (
                <div key={cert.credentialId} className="flex items-center gap-3">
                  <SalesforceBadge certKey={cert.certKey} name={cert.name} />
                  <div>
                    <p className="text-sm text-brand-900">{cert.name}</p>
                    <p className="text-xs text-brand-500">{cert.issuer} · {t.cert_dates[i]}</p>
                  </div>
                </div>
              ))}

              {/* Degree */}
              <div className="pt-3 mt-1 border-t border-brand-100">
                <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
                  {t.degree_label}
                </p>
                <div className="flex items-center gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-sm border border-brand-100 bg-white flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/universidad_logo.jpg" alt="UPO" className="object-contain w-9 h-9" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-900">{t.degree_name}</p>
                    <p className="text-xs text-brand-500">{t.degree_school}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: narrative */}
        <AnimatedSection direction="right" delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
                {t.supertitle}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
                Ignacio López Muñoyerro.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-brand-700 text-base leading-relaxed">
              {t.bio.map((para, i) => (
                <p key={i}>
                  {para.map((seg, j) =>
                    seg.bold
                      ? <strong key={j} className="text-brand-900 font-semibold">{seg.text}</strong>
                      : <span key={j}>{seg.text}</span>
                  )}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-brand-100">
              {t.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className="font-display text-3xl text-brand-900">{stat.value}</p>
                  <p className="text-xs text-brand-500 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

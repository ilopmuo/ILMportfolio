import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { STATS, CERTIFICATIONS } from "@/lib/constants";
import { SalesforceBadge } from "@/components/shared/SalesforceBadge";

export function AboutSection() {
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
                Certificaciones
              </p>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.credentialId} className="flex items-center gap-3">
                  <SalesforceBadge certKey={cert.certKey} name={cert.name} />
                  <div>
                    <p className="text-sm text-brand-900">{cert.name}</p>
                    <p className="text-xs text-brand-500">{cert.issuer} · {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right: narrative */}
        <AnimatedSection direction="right" delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
                Sobre mí
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
                Ignacio López Muñoyerro.
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-brand-700 text-base leading-relaxed">
              <p>
                Trabajo con <strong className="text-brand-900 font-semibold">Salesforce</strong> desde el lado funcional, técnico y de gestión de proyectos.
                Entiendo al cliente, diseño la solución y puedo desarrollar código.
              </p>
              <p>
                Actualmente en <strong className="text-brand-900 font-semibold">Neurored</strong> como Customer Success Manager,
                gestiono proyectos de implementación y mantenimiento de Salesforce para freightforwarders.
              </p>
              <p>
                Tres certificaciones activas de Salesforce e <strong className="text-brand-900 font-semibold">inglés B2 Cambridge</strong>.
                Trabajo en inglés a diario con clientes y equipos internacionales.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-brand-100">
              {STATS.map((stat) => (
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

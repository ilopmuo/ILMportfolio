import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { STATS, CERTIFICATIONS } from "@/lib/constants";
import { Award } from "lucide-react";

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
                <div key={cert.credentialId} className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" strokeWidth={1.5} />
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
                Consultor Salesforce con foco en resultados de negocio.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-brand-700 text-base leading-relaxed">
              <p>
                Empecé en tecnología con una base técnica en ingeniería informática,
                pero lo que realmente me define es la capacidad de sentarme con un
                cliente, entender un proceso de negocio complejo, y convertirlo en
                una solución que funciona en producción.
              </p>
              <p>
                En SEIDOR NTS aprendí el oficio: automatizaciones con Flows, desarrollo
                en Apex y LWC, integraciones con APIs y la disciplina del CI/CD.
                En Neurored doy un paso más: lidero workshops, diseño arquitecturas
                funcionales completas y coordino con producto para que lo que se
                construye tenga impacto real en el negocio del cliente.
              </p>
              <p>
                Mi certificación en AI Associate de Salesforce no es un accidente
                — estoy convencido de que el futuro de los sistemas CRM pasa por
                integrar IA de forma útil y medible, no como demo de feria.
                Eso es lo que estoy construyendo.
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

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { PHILOSOPHY_PRINCIPLES } from "@/lib/constants";

export function PhilosophySection() {
  return (
    <SectionWrapper id="philosophy" className="bg-brand-50 border-y border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Cómo pienso
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            Principios que guían mi forma de trabajar.
          </h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PHILOSOPHY_PRINCIPLES.map((principle) => (
          <StaggerItem key={principle.numeral}>
            <div className="bg-white border-l-2 border-brand-500 border border-brand-100 rounded-sm p-6 h-full">
              <p className="font-display text-brand-500 text-sm mb-3 italic">
                {principle.numeral}.
              </p>
              <h3 className="font-display text-brand-900 text-xl mb-3 leading-tight">
                {principle.title}
              </h3>
              <p className="text-brand-700 text-sm leading-relaxed">
                {principle.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

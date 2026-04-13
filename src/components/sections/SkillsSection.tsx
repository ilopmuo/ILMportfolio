import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { CompetencyBar } from "@/components/shared/CompetencyBar";
import { TagBadge } from "@/components/shared/TagBadge";
import { COMPETENCY_AREAS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Competencias
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            Áreas de conocimiento, no solo herramientas.
          </h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {COMPETENCY_AREAS.map((area, index) => (
          <StaggerItem key={area.title}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-brand-900 text-xl">{area.title}</h3>
                <p className="text-sm text-brand-700 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <CompetencyBar depth={area.depth} delay={index * 0.08} />

              <div className="flex flex-wrap gap-1.5">
                {area.skills.map((skill) => (
                  <TagBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  return (
    <SectionWrapper id="timeline" className="bg-brand-50 border-y border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            Trayectoria
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight max-w-2xl">
            El camino hasta aquí.
          </h2>
        </div>
      </AnimatedSection>

      <StaggerContainer className="relative flex flex-col gap-0">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brand-200 hidden sm:block" />

        {TIMELINE.map((item, index) => (
          <StaggerItem key={index}>
            <div className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
              {/* Dot */}
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <div
                  className={cn(
                    "w-3.5 h-3.5 rounded-full border-2 mt-1 shrink-0",
                    item.isAIEra
                      ? "border-brand-700 bg-brand-700"
                      : "border-brand-300 bg-white"
                  )}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 pb-2">
                <p className="text-xs text-brand-500 uppercase tracking-wider">
                  {item.period}
                </p>
                <h3
                  className={cn(
                    "font-display text-lg leading-tight",
                    item.isAIEra ? "text-brand-900" : "text-brand-700"
                  )}
                >
                  {item.role}
                </h3>
                <p className="text-sm text-brand-500">
                  {item.company} · {item.location}
                </p>
                <p className="text-sm text-brand-700 leading-relaxed mt-1 max-w-xl">
                  {item.summary}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

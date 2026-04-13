import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="border-t border-brand-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        {/* Left */}
        <AnimatedSection direction="left">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
                Contacto
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
                Hablamos.
              </h2>
            </div>

            <p className="text-brand-700 text-base leading-relaxed">
              Si tienes un proyecto Salesforce, una oportunidad o simplemente quieres hacer una consulta, escríbeme.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-brand-700 hover:text-brand-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-brand-700">
                <MapPin className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                {SITE_CONFIG.location}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: form */}
        <AnimatedSection direction="right" delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

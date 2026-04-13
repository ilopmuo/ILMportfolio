import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  tight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full mx-auto px-6 md:px-12 lg:px-16",
        tight ? "max-w-3xl" : "max-w-6xl",
        "py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

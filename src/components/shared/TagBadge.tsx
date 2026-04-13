import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  className?: string;
  size?: "sm" | "md";
}

export function TagBadge({ label, className, size = "sm" }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-brand-300 text-brand-700 font-body tracking-wide",
        size === "sm" && "px-2 py-0.5 text-[11px]",
        size === "md" && "px-3 py-1 text-xs",
        className
      )}
    >
      {label}
    </span>
  );
}

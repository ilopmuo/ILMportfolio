import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TagBadge } from "@/components/shared/TagBadge";
import { formatDate } from "@/lib/utils";

interface PostHeaderProps {
  title: string;
  description: string;
  publishedAt: string;
  readingTime?: string;
  tags: string[];
  backHref?: string;
  backLabel?: string;
}

export function PostHeader({
  title,
  description,
  publishedAt,
  readingTime,
  tags,
  backHref = "/blog",
  backLabel = "Volver al blog",
}: PostHeaderProps) {
  return (
    <div className="mb-12">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        {backLabel}
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag) => (
          <TagBadge key={tag} label={tag} size="md" />
        ))}
      </div>

      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-900 leading-tight mb-5">
        {title}
      </h1>

      <p className="text-brand-700 text-lg leading-relaxed mb-6">{description}</p>

      <div className="flex items-center gap-3 text-xs text-brand-500">
        <span>{formatDate(publishedAt)}</span>
        {readingTime && (
          <>
            <span className="text-brand-300">·</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>

      <div className="mt-8 h-px bg-brand-100" />
    </div>
  );
}

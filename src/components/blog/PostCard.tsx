import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TagBadge } from "@/components/shared/TagBadge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border border-brand-100 rounded-sm p-6 hover:border-brand-300 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-4">
        <p className="text-xs text-brand-500">
          {formatDate(post.publishedAt)}
          {post.readingTime && <span> · {post.readingTime}</span>}
        </p>
        <ArrowUpRight
          className="w-4 h-4 text-brand-300 group-hover:text-brand-700 transition-colors shrink-0"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="font-display text-brand-900 text-xl leading-tight mb-3 group-hover:text-brand-700 transition-colors">
        {post.title}
      </h3>

      <p className="text-brand-700 text-sm leading-relaxed flex-1 mb-5">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}

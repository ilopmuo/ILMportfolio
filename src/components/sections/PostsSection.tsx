import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { PostCard } from "@/components/blog/PostCard";
import type { Post } from "@/types/post";

interface PostsSectionProps {
  posts: Post[];
}

export function PostsSection({ posts }: PostsSectionProps) {
  if (posts.length === 0) return null;

  return (
    <SectionWrapper id="posts" className="bg-brand-50 border-y border-brand-100">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
              Escritura
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
              Lo que pienso en voz alta.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors whitespace-nowrap"
          >
            Todos los artículos
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Artículos de ${SITE_CONFIG.name} sobre Salesforce, arquitectura CRM, IA y consultoría.`,
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24">
      <div className="mb-12">
        <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
          Blog
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-brand-900 leading-tight">
          Lo que pienso en voz alta.
        </h1>
        <p className="text-brand-700 text-lg mt-4 max-w-xl">
          Artículos sobre Salesforce, arquitectura de sistemas, IA aplicada y
          consultoría funcional.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-brand-500">No hay artículos publicados todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

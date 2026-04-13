import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/blog/PostHeader";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
  });

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-24">
      <PostHeader
        title={post.title}
        description={post.description}
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        tags={post.tags}
      />

      <article className="prose prose-lg max-w-none">
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

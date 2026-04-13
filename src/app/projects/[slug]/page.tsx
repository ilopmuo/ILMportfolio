import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);
    return {
      title: project.title,
      description: project.description,
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  if (!project.caseStudyAvailable) notFound();

  const { default: MDXContent } = await evaluate(project.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
  });

  return (
    <ProjectCaseStudy project={project}>
      <MDXContent components={mdxComponents} />
    </ProjectCaseStudy>
  );
}

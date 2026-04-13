import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    ...(data as ProjectFrontmatter),
    content,
  };
}

export function getAllProjects(): Project[] {
  return getAllProjectSlugs()
    .map(getProjectBySlug)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(count = 4): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .slice(0, count);
}

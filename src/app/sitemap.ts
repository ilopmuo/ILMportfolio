import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";
import { getAllProjectSlugs } from "@/lib/projects";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const postSlugs = getAllPostSlugs();
  const projectSlugs = getAllProjectSlugs();

  const postEntries: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...postEntries,
    ...projectEntries,
  ];
}

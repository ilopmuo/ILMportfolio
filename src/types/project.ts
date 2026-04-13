export type ProjectStatus = "completed" | "ongoing" | "archived";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  role: string;
  organization: string;
  period: string;
  status: ProjectStatus;
  tags: string[];
  outcomes: string[];
  techStack: string[];
  featured: boolean;
  order: number;
  coverImage?: string;
  previewVideo?: string;
  liveUrl?: string;
  caseStudyAvailable: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

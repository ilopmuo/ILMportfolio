export type ProjectStatus = "completed" | "ongoing" | "archived";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  description_en?: string;
  role: string;
  role_en?: string;
  organization: string;
  organization_en?: string;
  period: string;
  status: ProjectStatus;
  tags: string[];
  outcomes: string[];
  outcomes_en?: string[];
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

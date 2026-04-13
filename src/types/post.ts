export interface PostFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  coverImage?: string;
  readingTime?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

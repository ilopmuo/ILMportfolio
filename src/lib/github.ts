export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export async function getRecentRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/ilopmuo/repos?sort=updated&per_page=6&type=public",
      {
        next: { revalidate: 3600 },
        headers: { "User-Agent": "portNacho-portfolio" },
      }
    );
    if (!res.ok) return [];
    const data: GithubRepo[] = await res.json();
    return data.filter((r) => r.name !== "ILMportfolio").slice(0, 4);
  } catch {
    return [];
  }
}

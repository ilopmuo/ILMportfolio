"use client";

import { ArrowUpRight, GitCommitHorizontal, Rss } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { formatRSSDate } from "@/lib/rss";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  CSS: "bg-purple-400",
  HTML: "bg-orange-400",
  Apex: "bg-cyan-400",
};

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
}

interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
}

interface ActivitySectionProps {
  repos: Repo[];
  news: NewsItem[];
}

export function ActivitySection({ repos, news }: ActivitySectionProps) {
  const { lang } = useLang();
  const t = translations[lang].activity;

  return (
    <SectionWrapper id="activity" className="border-t border-brand-100">
      <AnimatedSection>
        <div className="mb-12">
          <p className="text-xs text-brand-500 uppercase tracking-widest mb-3">
            {t.supertitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-900 leading-tight">
            {t.heading}
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* GitHub repos */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <GitCommitHorizontal className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
            <p className="text-xs text-brand-500 uppercase tracking-widest">{t.github_label}</p>
          </div>

          {repos.length === 0 ? (
            <p className="text-sm text-brand-400">{t.repos_empty}</p>
          ) : (
            <div className="flex flex-col gap-3">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border border-brand-100 rounded-sm p-4 hover:border-brand-300 transition-colors bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-medium text-sm text-brand-900 group-hover:text-brand-700 transition-colors">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-300 group-hover:text-brand-700 shrink-0 transition-colors mt-0.5" strokeWidth={1.5} />
                  </div>
                  {repo.description && (
                    <p className="text-xs text-brand-500 leading-relaxed">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-brand-400">
                        <span className={`w-2 h-2 rounded-full ${LANG_COLORS[repo.language] ?? "bg-brand-300"}`} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="text-xs text-brand-400">★ {repo.stargazers_count}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Salesforce news */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <Rss className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
            <p className="text-xs text-brand-500 uppercase tracking-widest">{t.sf_label}</p>
          </div>

          {news.length === 0 ? (
            <p className="text-sm text-brand-400">{t.news_empty}</p>
          ) : (
            <div className="flex flex-col divide-y divide-brand-100 border border-brand-100 rounded-sm overflow-hidden">
              {news.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-4 hover:bg-brand-50 transition-colors bg-white"
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-sm text-brand-900 group-hover:text-brand-700 transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    {item.pubDate && (
                      <p className="text-xs text-brand-400">{formatRSSDate(item.pubDate)}</p>
                    )}
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-300 group-hover:text-brand-700 shrink-0 mt-0.5 transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
}

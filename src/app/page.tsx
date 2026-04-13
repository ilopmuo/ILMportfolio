import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ActivitySection } from "@/components/sections/ActivitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getAllProjects } from "@/lib/projects";
import { getRecentRepos } from "@/lib/github";
import { getSalesforceNews } from "@/lib/rss";

export default async function Home() {
  const [projects, repos, news] = await Promise.all([
    Promise.resolve(getAllProjects()),
    getRecentRepos(),
    getSalesforceNews(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection projects={projects} />
      <PhilosophySection />
      <ActivitySection repos={repos} news={news} />
      <ContactSection />
    </>
  );
}

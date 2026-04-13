import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PostsSection } from "@/components/sections/PostsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getAllProjects } from "@/lib/projects";
import { getFeaturedPosts } from "@/lib/posts";

export default function Home() {
  const projects = getAllProjects();
  const featuredPosts = getFeaturedPosts(3);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PhilosophySection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <PostsSection posts={featuredPosts} />
      <ContactSection />
    </>
  );
}

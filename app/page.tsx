import HeroSection from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
    </>
  );
}

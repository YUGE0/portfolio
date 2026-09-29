import PageLoader from "./compo/PageLoader";
import Hero from "./compo/Hero";
import FeaturedWork from "./compo/FeaturedWork";
import SkillsSection from "./compo/SkillsSection";

export default function Home() {
  return (
    <PageLoader page="Home">
      <Hero />
      <FeaturedWork />
      <SkillsSection />
    </PageLoader>
  );
}

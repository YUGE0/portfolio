import type { Metadata } from "next";
import PageLoader from "./compo/PageLoader";
import Hero from "./compo/Hero";
import FeaturedWork from "./compo/FeaturedWork";
import SkillsSection from "./compo/SkillsSection";
import { PersonJsonLd } from "./compo/JsonLd";
import { pageMetadata } from "./site";

export const metadata: Metadata = pageMetadata({ path: "/" });

export default function Home() {
  return (
    <PageLoader page="Home">
      <PersonJsonLd />
      <Hero />
      <FeaturedWork />
      <SkillsSection />
    </PageLoader>
  );
}

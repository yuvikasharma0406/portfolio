import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import PositioningStatement from "@/components/PositioningStatement";
import SelectedWorkPreview from "@/components/SelectedWorkPreview";
import AboutSnapshot from "@/components/AboutSnapshot";
import ExperienceSnapshot from "@/components/ExperienceSnapshot";
import BeyondTheBrief from "@/components/BeyondTheBrief";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <PositioningStatement />
      <SelectedWorkPreview />
      <AboutSnapshot />
      <ExperienceSnapshot />
      <BeyondTheBrief />
      <ContactCTA />
    </>
  );
}

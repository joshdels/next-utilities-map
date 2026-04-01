"use client";

import HeroSection from "@/features/homepage/hero/Hero";
import InteractiveMap from "@/features/homepage/interactiveMap/InteractiveMap";
import Navbar from "@/features/homepage/navbar/Navbar";
import PainSection from "@/features/homepage/pain/Pain";
import ProcessSection from "@/features/homepage/process/Process";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <PainSection /> */}
      <ProcessSection />
      <InteractiveMap />
    </div>
  );
}

"use client";

import FooterSection from "@/shared/components/footer/Footer";
import HeroSection from "@/features/homepage/hero/Hero";
import InteractiveMap from "@/features/homepage/interactiveMap/InteractiveMap";
import PricingSection from "@/features/homepage/pricing/Pricing";
import ProcessSection from "@/features/homepage/process/Process";
import NavbarSection from "@/shared/components/navbar/Navbar";
import ProblemSection from "@/features/homepage/problem/Problem";
import StakesSection from "@/features/homepage/stakes/Stakes";

export default function Homepage() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <StakesSection />
      <InteractiveMap />
      <PricingSection />
      <FooterSection />
    </div>
  );
}

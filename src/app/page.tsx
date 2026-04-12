"use client";

import FooterSection from "@/shared/components/footer/Footer";
import HeroSection from "@/features/homepage/hero/Hero";
import InteractiveMap from "@/features/homepage/interactiveMap/InteractiveMap";

import PainSection from "@/features/homepage/pain/Pain";
import PricingSection from "@/features/homepage/pricing/Pricing";
import ProcessSection from "@/features/homepage/process/Process";
import NavbarSection from "@/shared/components/navbar/Navbar";

export default function Homepage() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      {/* <PainSection /> */}
      <ProcessSection />
      <InteractiveMap />
      <PricingSection />
      <FooterSection />
    </div>
  );
}

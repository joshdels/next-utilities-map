"use client";

import HeroSection from "@/features/homepage/hero/Hero";
import InteractiveMap from "@/features/homepage/interactiveMap/InteractiveMap";
import Navbar from "@/features/homepage/navbar/Navbar";


export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InteractiveMap />
    </div>
  );
}

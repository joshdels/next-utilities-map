"use client";

import ConverterSection from "@/features/jobs/converter/Converter";
import NavbarSection from "@/shared/components/navbar/Navbar";

export default function Homepage() {
  return (
    <div>
      <NavbarSection />
      <ConverterSection />
    </div>
  );
}

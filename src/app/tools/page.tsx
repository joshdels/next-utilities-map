"use client";

import ConverterSection from "@/features/tools/converter/Converter";
import FooterSection from "@/shared/components/footer/Footer";
import NavbarSection from "@/shared/components/navbar/Navbar";

export default function Homepage() {
  return (
    <div>
      <NavbarSection />
      <ConverterSection />
      <FooterSection />
    </div>
  );
}

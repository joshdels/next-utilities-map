"use client";

import dynamic from "next/dynamic";
import FloatingDashboard from "@/features/dashboard/sidebar/FloatingDashboard";
import SearchPanel from "@/features/dashboard/sidebar/SearchSection";
import MapNavbar from "@/features/dashboard/navbar/MapNavbar";

const Map = dynamic(() => import("@/features/homepage/demo/MapLibre"), {
  ssr: false,
});

export default function Project() {
  return (
    <div className="flex h-screen flex-col">
      <MapNavbar />

      <div className="relative flex-1">
        <Map />

        <div className="absolute top-0 left-0 z-50">
          <SearchPanel />
          <FloatingDashboard />
        </div>
      </div>
    </div>
  );
}

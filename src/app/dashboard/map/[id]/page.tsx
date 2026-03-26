"use client";

import dynamic from "next/dynamic";
import FloatingDashboard from "@/features/map/sidebar/FloatingDashboard";
import SearchPanel from "@/features/map/sidebar/SearchSection";
import MapNavbar from "@/features/map/navbar/MapNavbar";
import AuthGuard from "@/hooks/AuthGuard";

const Map = dynamic(() => import("@/features/map/ProjectMap"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <AuthGuard>
      <div className="flex h-screen flex-col">
        <MapNavbar />

        <div className="relative flex-1">
          <Map />

          <div className="absolute top-0 left-0 z-50">
            {/* <SearchPanel /> */}
            <FloatingDashboard />
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}

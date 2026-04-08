"use client";

import { MapProvider } from "@/features/demo/MapProvider";
import DemoNavbar from "@/features/demo/navbar/DemoNavbar";
import FloatingDashboard from "@/features/demo/sidebar/floatingDashboard/FloatingDashboard";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/demo/map/DemoMap"), {
  ssr: false,
});

export default function DemoPage() {
  return (
    <div className="flex h-screen flex-col">
      <DemoNavbar />

      <div className="relative flex-1">
        <MapProvider>
          <Map />
        </MapProvider>

        <div className="absolute top-0 left-0 z-50">
          <FloatingDashboard />
        </div>
      </div>
    </div>
  );
}

"use client";

import { MapProvider } from "@/features/demo/MapProvider";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/demo/map/DemoMap"), {
  ssr: false,
});

export default function DemoMapPreview() {
  return (
    <div className="relative flex h-[60vh] flex-col">
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}

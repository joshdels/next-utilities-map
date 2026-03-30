"use client";

import { MapProvider } from "@/features/demo/MapProvider";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/demo/map/DemoMap"), {
  ssr: false,
});

export default function DemoMapPreview() {
  return (
    <div className="flex h-[50vh] flex-col">
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}

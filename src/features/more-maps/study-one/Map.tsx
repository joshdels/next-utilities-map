"use client";

import { useRef, useEffect, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import styles from "./Map.module.css";

export default function MapStudyOne() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
      center: [0, 0],
      zoom: 2,
      attributionControl: false,
      projection: { type: "mercator" },
    } as any);

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} className={styles["map-container"]}></div>
    </>
  );
}

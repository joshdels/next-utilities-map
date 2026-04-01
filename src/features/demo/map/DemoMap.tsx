"use client";

import { useRef, useEffect } from "react";
import styles from "./Map.module.css";
import { useMap } from "@/hooks/useMap";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";
import { MapIcons } from "@/utils/mapIcons";
import { lineLayer, nodeLayer } from "@/utils/layers";
import { fitToBounds } from "@/utils/fitToBound";
import { useMapEvents } from "@/hooks/useMapEvents";

export default function DemoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useMap(containerRef);

  const lines = useGeoJSONStore((state) => state.lines);
  const nodes = useGeoJSONStore((state) => state.nodes);

  MapIcons(mapRef, nodes, {
    radius: 20,
    iconScale: 0.6,
    borderWidth: 2,
    typeColors: {
      hydrant: "#FF0000",
      valve: "#0000FF",
      pump: "#CC5500",
    },
  });

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !lines || !nodes) return;

    const addLayers = () => {
      if (!map.getSource("lines-data"))
        map.addSource("lines-data", { type: "geojson", data: lines });
      else
        (map.getSource("lines-data") as maplibregl.GeoJSONSource).setData(
          lines,
        );

      if (!map.getSource("nodes-data"))
        map.addSource("nodes-data", { type: "geojson", data: nodes });
      else
        (map.getSource("nodes-data") as maplibregl.GeoJSONSource).setData(
          nodes,
        );

      if (!map.getLayer("lines-layer")) map.addLayer(lineLayer);
      if (!map.getLayer("nodes-layer")) map.addLayer(nodeLayer);

      fitToBounds(map, lines);

      useMapEvents(map);
    };

    if (map.loaded()) addLayers();
    else map.once("load", addLayers);
  }, [mapRef, lines, nodes]);

  return <div ref={containerRef} className={styles["map-container"]} />;
}

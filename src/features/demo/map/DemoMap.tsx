"use client";

import { useRef, useEffect } from "react";
import styles from "./Map.module.css";

import { useMap } from "@/hooks/useMap";
import { useGeoJSON } from "@/hooks/useGeoJSON";
import { lineLayer, nodeLayer } from "@/utils/layers";
import { fitToBounds } from "@/utils/fitToBound";
import { useMapIcons } from "@/hooks/useMapIcons";

export default function DemoMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mapRef = useMap(containerRef);
  const { lines, nodes } = useGeoJSON();

  useMapIcons(mapRef, nodes, {
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
      if (!map.getSource("lines-data")) {
        map.addSource("lines-data", { type: "geojson", data: lines });
      }

      if (!map.getSource("nodes-data")) {
        map.addSource("nodes-data", { type: "geojson", data: nodes });
      }

      if (!map.getLayer("lines-layer")) {
        map.addLayer(lineLayer);
      }

      if (!map.getLayer("nodes-layer")) {
        map.addLayer(nodeLayer);
      }

      fitToBounds(map, lines);
    };

    if (map.loaded()) {
      addLayers();
    } else {
      map.once("load", addLayers);
    }
  }, [mapRef, lines, nodes]);

  return <div ref={containerRef} className={styles["map-container"]} />;
}

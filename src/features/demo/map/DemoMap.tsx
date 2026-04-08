import { useMap } from "@/hooks/useMap";
import { useMapLayers } from "@/hooks/useMapLayers";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";
import { MapIcons } from "@/utils/mapIcons";
import { useRef } from "react";
import styles from "./Map.module.css";

export default function DemoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useMap(containerRef);

  const lines = useGeoJSONStore((state) => state.lines);
  const nodes = useGeoJSONStore((state) => state.nodes);

  useMapLayers(mapRef, lines, nodes);

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

  return <div ref={containerRef} className={styles["map-container"]} />;
}

import { useEffect } from "react";
import type maplibregl from "maplibre-gl";
import { lineLayer, nodeLayer } from "@/utils/layers";
import { fitToBounds } from "@/utils/fitToBound";
import { useMapEvents } from "@/hooks/useMapEvents";

export function useMapLayers(
  mapRef: React.RefObject<maplibregl.Map | null>,
  lines: any,
  nodes: any,
) {
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !lines || !nodes) return;

    const setup = () => {
      if (!map.getSource("lines-data")) {
        map.addSource("lines-data", { type: "geojson", data: lines });
      } else {
        (map.getSource("lines-data") as maplibregl.GeoJSONSource).setData(
          lines,
        );
      }

      if (!map.getSource("nodes-data")) {
        map.addSource("nodes-data", { type: "geojson", data: nodes });
      } else {
        (map.getSource("nodes-data") as maplibregl.GeoJSONSource).setData(
          nodes,
        );
      }

      if (!map.getLayer("lines-layer")) map.addLayer(lineLayer);
      if (!map.getLayer("nodes-layer")) map.addLayer(nodeLayer);

      useMapEvents(map);
      fitToBounds(map, lines);
    };

    if (map.isStyleLoaded()) setup();
    else map.on("style.load", setup);
  }, [mapRef, lines, nodes]);
}

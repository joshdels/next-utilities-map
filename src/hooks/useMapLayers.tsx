import { useEffect, useRef } from "react";
import type maplibregl from "maplibre-gl";
import { lineLayer, nodeLayer } from "@/utils/layers";
import { fitToBounds } from "@/utils/fitToBound";
import { useMapEvents } from "@/hooks/useMapEvents";

/**
 *
 * This uses the Layers to render on the maplibre
 * This also uses the geoJSON in the utils layer
 * zoom the layer to lines
 *
 * @param mapRef
 * @param lines
 * @param nodes
 */
export function useMapLayers(
  mapRef: React.RefObject<maplibregl.Map | null>,
  lines: any,
  nodes: any,
) {
  const hasFitted = useRef(false);

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

      if (!hasFitted.current) {
        map.once("idle", () => {
          fitToBounds(map, lines);
          hasFitted.current = true;
        });
      }
    };

    if (map.isStyleLoaded()) setup();
    else map.on("style.load", setup);
    return () => {
      map.off("style.load", setup);
    };
  }, [mapRef, lines, nodes]);
}

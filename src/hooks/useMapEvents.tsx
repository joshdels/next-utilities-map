import type maplibregl from "maplibre-gl";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";

export function useMapEvents(map: maplibregl.Map) {
  const setNode = useGeoJSONStore.getState().setNode;
  const setLine = useGeoJSONStore.getState().setLine;

  // Define your layers
  const nodeLayer = "nodes-layer";
  const lineLayer = "lines-layer";

  // Hover cursor (optional)
  [nodeLayer, lineLayer].forEach((layer) => {
    map.on("mouseenter", layer, () => (map.getCanvas().style.cursor = "pointer"));
    map.on("mouseleave", layer, () => (map.getCanvas().style.cursor = ""));
  });

  // Centralized click handler
  const handleClick = (e: maplibregl.MapMouseEvent & { features?: maplibregl.GeoJSONFeature[] }) => {
    const features = map.queryRenderedFeatures(e.point, { layers: [nodeLayer, lineLayer] });

    if (!features.length) {
      // Clicked empty space
      setNode(null);
      setLine(null);
      return;
    }

    const nodeFeature = features.find((f) => f.layer.id === nodeLayer);
    const lineFeature = features.find((f) => f.layer.id === lineLayer);

    if (nodeFeature) {
      setNode(nodeFeature);
      setLine(null); // clear line data
    } else if (lineFeature) {
      setLine(lineFeature);
      setNode(null); // clear node data
    }
  };

  map.off("click", handleClick);
  map.on("click", handleClick);
}
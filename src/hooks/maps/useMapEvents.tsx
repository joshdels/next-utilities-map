import type maplibregl from "maplibre-gl";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";
import { useTabStore } from "@/store/useTabStore";

/**
 * Handles all the map layer rendering and clicking of layers to fetch to the store
 *
 * @param map
 */
export function useMapEvents(map: maplibregl.Map) {
  const setNode = useGeoJSONStore.getState().setNode;
  const setLine = useGeoJSONStore.getState().setLine;
  const setActiveTab = useTabStore.getState().setActiveTab;
  const setIsOpenTab = useTabStore.getState().setIsOpen;

  const nodeLayer = "nodes-layer";
  const lineLayer = "lines-layer";

  // Hover cursor (optional)
  [nodeLayer, lineLayer].forEach((layer) => {
    map.on(
      "mouseenter",
      layer,
      () => (map.getCanvas().style.cursor = "pointer"),
    );
    map.on("mouseleave", layer, () => (map.getCanvas().style.cursor = ""));
  });

  // Centralized click handler
  const handleClick = (
    e: maplibregl.MapMouseEvent & { features?: maplibregl.GeoJSONFeature[] },
  ) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: [nodeLayer, lineLayer],
    });

    if (!features.length) {
      setNode(null);
      setLine(null);
      return;
    }

    const nodeFeature = features.find((f) => f.layer.id === nodeLayer);
    const lineFeature = features.find((f) => f.layer.id === lineLayer);

    if (nodeFeature) {
      setNode(nodeFeature);
      setLine(null);
      setActiveTab("overview");
      setIsOpenTab(true);
    } else if (lineFeature) {
      setLine(lineFeature);
      setNode(null);
      setActiveTab("overview");
      setIsOpenTab(true);
    }
  };

  map.off("click", handleClick);
  map.on("click", handleClick);
}

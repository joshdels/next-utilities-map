import { useEffect } from "react";
import type maplibregl from "maplibre-gl";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";

type LayerHandler = {
  onClick?: (
    e: maplibregl.MapMouseEvent & { features?: maplibregl.GeoJSONFeature[] },
  ) => void;
  onHover?: boolean;
};

type MapEventHandlers = Record<string, LayerHandler>;

export function useMapEvents(map: maplibregl.Map, handlers: MapEventHandlers) {
  const layers = Object.keys(handlers);
  const setNode = useGeoJSONStore.getState().setNode;
  const setLine = useGeoJSONStore.getState().setLine;

  layers.forEach((layer) => {
    const { onClick, onHover } = handlers[layer];

    if (onHover) {
      map.on(
        "mouseenter",
        layer,
        () => (map.getCanvas().style.cursor = "pointer"),
      );
      map.on("mouseleave", layer, () => (map.getCanvas().style.cursor = ""));
    }

    if (onClick) {
      map.off("click", layer, onClick);
      map.on("click", layer, onClick);
    }
  });

  const handleMapClick = (e: maplibregl.MapMouseEvent) => {
    const features = map.queryRenderedFeatures(e.point, { layers });

    if (!features.length) {
      setNode(null);
      setLine(null);
    }
  };

  map.off("click", handleMapClick);
  map.on("click", handleMapClick);
}

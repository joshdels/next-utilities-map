import { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function useMap(containerRef: React.RefObject<HTMLDivElement | null>) {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || mapRef.current) return;

    const map = new maplibregl.Map({
      container,
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
      center: [0, 0],
      zoom: 3,
      attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [containerRef]);

  return mapRef;
}

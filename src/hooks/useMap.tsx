import { useEffect, useRef } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useBasemapStore } from "@/store/useBasemapStore";

/**
 * Initializes a MapLibre map instance inside the given container.
 *
 * - Creates the map only once
 * - Attaches navigation controls
 * - Cleans up the map instance on unmount
 *
 * @returns Ref containing the MapLibre instance
 */
export function useMap(containerRef: React.RefObject<HTMLDivElement | null>) {
  const mapRef = useRef<Map | null>(null);
  const source = useBasemapStore((state) => state.source);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const map = new maplibregl.Map({
      container,
      style: source,
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
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.setStyle(source);

    
  }, [source]);

  return mapRef;
}

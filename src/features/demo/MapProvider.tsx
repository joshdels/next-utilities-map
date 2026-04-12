import { useGeoJSON } from "@/hooks/maps/useGeoJSON";

export function MapProvider({ children }: { children: React.ReactNode }) {
  useGeoJSON("/data/lines.geojson", "/data/nodes.geojson");

  return <>{children}</>;
}

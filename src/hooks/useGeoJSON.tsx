import { useEffect, useState } from "react";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";

export function useGeoJSON() {
  const setLines = useGeoJSONStore((state) => state.setLines);
  const setNodes = useGeoJSONStore((state) => state.setNodes);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);

        const [linesRes, nodesRes] = await Promise.all([
          fetch("/data/lines.geojson"),
          fetch("/data/nodes.geojson"),
        ]);

        if (!linesRes.ok || !nodesRes.ok)
          throw new Error("Failed to fetch GeoJSON");

        const [linesData, nodesData] = await Promise.all([
          linesRes.json(),
          nodesRes.json(),
        ]);

        if (!isMounted) return;

        setLines(linesData);
        setNodes(nodesData);
      } catch (err) {
        if (!isMounted) return;
        setError("Error loading map data");
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, [setLines, setNodes]);

  return { loading, error };
}

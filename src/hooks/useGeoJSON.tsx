import { useEffect, useState } from "react";

type GeoJSON = GeoJSON.FeatureCollection;

export function useGeoJSON() {
  const [lines, setLines] = useState<GeoJSON | null>(null);
  const [nodes, setNodes] = useState<GeoJSON | null>(null);

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

        if (!linesRes.ok || !nodesRes.ok) {
          throw new Error("Failed to fetch GeoJSON");
        }

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
  }, []);

  return { lines, nodes, loading, error };
}

import { useMemo } from "react";
import { useGeoJSONStore } from "@/store/useGeoJSONStore";
import { lineLayer, nodeLayer } from "@/utils/layers";

interface LineLegendItem {
  type: string;
  color: string;
  width: number;
}

interface NodeLegendItem {
  type: string;
  icon: string;
}

export function useLegend() {
  const lines = useGeoJSONStore((state) => state.lines);
  const nodes = useGeoJSONStore((state) => state.nodes);

  const lineLegend = useMemo<LineLegendItem[]>(() => {
    if (!lines?.features || !lineLayer.paint) return [];

    const types = Array.from(
      new Set(
        lines.features
          .map((f) => f.properties?.type)
          .filter(Boolean) as string[],
      ),
    );

    const getMatchValue = (val: any, key: string, fallback: any) => {
      if (!Array.isArray(val)) return fallback;
      const index = val.indexOf(key);
      if (index !== -1 && index + 1 < val.length) return val[index + 1];
      return fallback;
    };

    return types.map((type) => ({
      type,
      color: getMatchValue(lineLayer.paint?.["line-color"], type, "#999999"),
      width: 10,
    }));
  }, [lines]);

  const nodeLegend = useMemo<NodeLegendItem[]>(() => {
    if (!nodes?.features) return [];

    const types = Array.from(
      new Set(
        nodes.features
          .map((f) => f.properties?.type)
          .filter(Boolean) as string[],
      ),
    );

    return types.map((type) => ({
      type,
      icon: type,
    }));
  }, [nodes]);

  return { lineLegend, nodeLegend };
}

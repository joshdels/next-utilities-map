import { create } from "zustand";
import type { Feature, FeatureCollection, Geometry } from "geojson";

interface GeoJSONStore {
  line: Feature<Geometry> | null;
  lines: FeatureCollection<Geometry> | null;
  node: Feature<Geometry> | null;
  nodes: FeatureCollection<Geometry> | null;
  setLine: (data: Feature<Geometry> | null) => void;
  setLines: (data: FeatureCollection<Geometry> | null) => void;
  setNode: (data: Feature<Geometry> | null) => void;
  setNodes: (data: FeatureCollection<Geometry> | null) => void;
}

export const useGeoJSONStore = create<GeoJSONStore>((set) => ({
  line: null,
  node: null,
  lines: null,
  nodes: null,
  setLine: (data) => set({ line: data }),
  setLines: (data) => set({ lines: data }),
  setNode: (data) => set({ node: data }),
  setNodes: (data) => set({ nodes: data }),
}));

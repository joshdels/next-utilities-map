import { create } from "zustand";

type GeoJSON = GeoJSON.FeatureCollection;

interface GeoJSONStore {
  lines: GeoJSON | null;
  nodes: GeoJSON | null;
  setLines: (data: GeoJSON) => void;
  setNodes: (data: GeoJSON) => void;
}

export const useGeoJSONStore = create<GeoJSONStore>((set) => ({
  lines: null,
  nodes: null,
  setLines: (data: GeoJSON) => set({ lines: data }),
  setNodes: (data: GeoJSON) => set({ nodes: data }),
}));

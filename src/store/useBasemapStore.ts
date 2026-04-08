import { create } from "zustand";

interface BasemapStore {
  source: string;
  setSource: (data: string) => void;
}

export const useBasemapStore = create<BasemapStore>((set) => ({
  source:
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  setSource: (data: string) => set({ source: data }),
}));

export interface BasemapProps {
  label: string;
  image: string;
  source: string;
}

export const basemaps: BasemapProps[] = [
  {
    label: "dark",
    image: "/basemap/black.jpg",
    source:
      "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  },
  {
    label: "white",
    image: "/basemap/white.png",
    source: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  },
];

import { LineLayerSpecification, SymbolLayerSpecification } from "maplibre-gl";

export const lineLayer: LineLayerSpecification = {
  id: "lines-layer",
  type: "line",
  source: "lines-data",
  paint: {
    "line-color": [
      "match",
      ["get", "type"],
      "primary",
      "#FF00FC",
      "secondary",
      "#F2FF00",
      "tertiary",
      "#00FF27",
      "#999999",
    ],
    "line-width": [
      "match",
      ["get", "type"],
      "primary",
      5,
      "secondary",
      2,
      "tertiary",
      1,
      1,
    ],
  },
};

export const nodeLayer: SymbolLayerSpecification = {
  id: "nodes-layer",
  type: "symbol",
  source: "nodes-data",
  layout: {
    "icon-image": ["get", "type"],
    "icon-size": 1,
    "icon-allow-overlap": true,
  },
};

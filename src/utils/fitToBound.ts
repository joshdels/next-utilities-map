import maplibregl from "maplibre-gl";

export function fitToBounds(map: maplibregl.Map, geojson: any) {
  const bounds = new maplibregl.LngLatBounds();

  const addCoords = (coords: any) => {
    if (typeof coords[0] === "number") bounds.extend(coords);
    else coords.forEach(addCoords);
  };

  geojson.features.forEach((f: any) => {
    if (f.geometry) addCoords(f.geometry.coordinates);
  });

  if (!bounds.isEmpty()) {
    map.fitBounds(bounds, { padding: 50, duration: 1000 });
  }
}

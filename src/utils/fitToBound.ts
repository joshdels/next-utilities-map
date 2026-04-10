import maplibregl from "maplibre-gl";

/**
 * This use geojson bounding to zoom in and fit to bounds.
 * usually it uses the padding of 50 as a padding
 */
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
    map.fitBounds(bounds, {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
      duration: 1000,
    });
  }
}

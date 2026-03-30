import { useGeoJSONStore } from "@/store/useGeoJSONStore";
import { formatText } from "@/utils/formatText";
import {
  altitude24,
  apps24,
  calendar24,
  circle24F,
  circleAreaHashFilled24,
  codeBranch24,
  ringsSmallest24,
  selectCategory24,
  survey24,
} from "@esri/calcite-ui-icons";

export default function ItemOverview() {
  const line = useGeoJSONStore((state) => state.line);
  const node = useGeoJSONStore((state) => state.node);

  const nodeProperties = node ? Object.entries(node.properties || {}) : [];
  const lineProperties = line ? Object.entries(line.properties || {}) : [];

  const getIcon = (key: string) => {
    const k = key.toLowerCase();
    if (k.includes("type")) return selectCategory24;
    if (k.includes("node") || k.includes("name")) return ringsSmallest24;
    if (k.includes("year") || k.includes("installed")) return calendar24;
    if (k.includes("elevation")) return altitude24;
    if (k.includes("status")) return survey24;
    if (k.includes("material")) return circleAreaHashFilled24;
    if (k.includes("diameter")) return circle24F;
    return apps24;
  };

  const excludedKeys = ["id"];

  const renderProperties = (properties: [string, any][]) => (
    <div className="flex flex-col gap-4">
      {properties
        .filter(([key]) => !excludedKeys.includes(key))
        .map(([key, value]) => (
          <div key={key} className="flex items-center gap-4 rounded-md">
            <div className="shrink-0">
              <svg
                className="h-10 w-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={getIcon(key)} />
              </svg>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="text-lg font-semibold">{formatText(value)}</div>
              <div className="text-sm text-gray-500">{formatText(key)}</div>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      {node && (
        <div>
          <h1 className="mb-3 text-xl font-semibold">Node Information</h1>
          {renderProperties(nodeProperties)}
        </div>
      )}

      {line && (
        <div>
          <h1 className="mb-3 text-xl font-semibold">Line Information</h1>
          {renderProperties(lineProperties)}
        </div>
      )}

      {!node && !line && (
        <div className="pt-10 text-blue-500">
          Please click the map item to preview the information
        </div>
      )}
    </div>
  );
}

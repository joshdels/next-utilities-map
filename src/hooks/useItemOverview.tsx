import { useGeoJSONStore } from "@/store/useGeoJSONStore";

export default function ItemOverview() {
  const line = useGeoJSONStore((state) => state.line);
  const node = useGeoJSONStore((state) => state.node);

  return (
    <>
      {node && <div>Node: {JSON.stringify(node.properties)}</div>}
      {line && <div>Line: {JSON.stringify(line.properties)}</div>}
      {!node && !line && <div>No item selected</div>}
    </>
  );
}

import { useLegend } from "@/hooks/useLegend";
import { formatText } from "@/utils/formatText";
import { NODE_TYPE_COLORS } from "@/utils/layers";

export default function LegendSection() {
  const { lineLegend, nodeLegend } = useLegend();

  return (
    <div className="my-5 space-y-10">
      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-800">Lines</h3>
        {lineLegend.length === 0 ? (
          <p className="text-sm text-gray-500">No line types loaded</p>
        ) : (
          <div className="flex flex-col gap-2">
            {lineLegend.map((l) => (
              <div key={l.type} className="flex items-center gap-3">
                <span
                  className="inline-block rounded-sm"
                  style={{
                    width: `${l.width * 5}px`,
                    height: "5px",
                    backgroundColor: l.color,
                  }}
                />
                <span className="text-gray-700">{formatText(l.type)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-800">Nodes</h3>
        {nodeLegend.length === 0 ? (
          <p className="text-sm text-gray-500">No node types loaded</p>
        ) : (
          <div className="flex flex-col gap-3">
            {nodeLegend.map((n) => (
              <div key={n.type} className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: NODE_TYPE_COLORS[n.type] || "#888",
                  }}
                >
                  <img
                    src={`/icons/${n.icon}.svg`}
                    width={25}
                    height={25}
                    className="invert"
                  />
                </div>
                <span className="ml-3 text-gray-700">{formatText(n.type)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

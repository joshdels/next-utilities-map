import ItemOverview from "@/hooks/useItemOverview";

export default function OverviewSection() {
  return (
    <div className="space-y-6 pr-5">
      <aside className="mb-5">
        <h2 className="mb-2 text-xl font-bold">Description</h2>
        <p className="text-justify text-gray-700">
          This project shows the compony unified water district from CAD layers
          to Interactive WebGIS map so that the project manager can show this to
          their whole operations and their covered clients. This saves time
          looking what specific item details it has and can be shared to others.
        </p>
      </aside>
      <main>
        <ItemOverview />
      </main>
    </div>
  );
}

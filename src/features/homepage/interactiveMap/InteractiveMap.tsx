import Link from "next/link";
import DemoMapPreview from "@/features/demo/DemoMapPreview";

export default function InteractiveMap() {
  return (
    <section className="mt-24 h-screen text-center">
      <h1 className="text-3xl font-bold md:text-4xl">
        Seeing Is Good, Experiencing Is Better
      </h1>

      <p className="text-sm text-gray-600">Interactive utility map preview</p>

      <Link
        href={"/demo"}
        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
      >
        Open Full Demo
      </Link>

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border shadow-lg">
          <div className="h-[50vh] w-full">
            <DemoMapPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

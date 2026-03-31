import Link from "next/link";
import DemoMapPreview from "@/features/demo/DemoMapPreview";

export default function InteractiveMap() {
  return (
    <section className="mt-24 h-screen text-center">
      <h1 className="mb-5 text-6xl font-black">Showcase Your Plan</h1>

      <p className="mb-5 text-lg text-gray-600">
        Experience your own data visible and easy to access by your
        Team/Organization
      </p>

      <Link
        href={"/demo"}
        className="rounded-md bg-blue-600 px-4 py-3 text-xl text-white hover:bg-blue-700"
      >
        Preview More
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

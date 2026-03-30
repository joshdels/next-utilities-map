export default function HeroSection() {
  return (
    <section className="flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-medium text-gray-500">
        Made for Engineers & Planners
      </p>

      <h1 className="max-w-4xl text-4xl leading-tight font-bold md:text-5xl">
        Turn Your CAD Utility Files into a{" "}
        <span className="text-blue-600">
          Powerful Shareable WebGIS Platform
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        We clean and structure your messy CAD utility data then transform it
        into an interactive map and dashboard your team and organizationcan
        actually use.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Book a Demo
        </button>
        <button className="rounded-md border border-gray-500 px-6 py-3 hover:bg-gray-100">
          Explore the Platform
        </button>
      </div>
    </section>
  );
}

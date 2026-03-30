export default function NavbarSection() {
  return (
    <div className="z-50 flex h-[6vh] w-full items-center justify-between border border-gray-200 px-20">
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold">Utility Work</h1>
        <span className="cursor-pointer text-sm text-gray-600 hover:text-black">
          Product
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-md border border-gray-500 px-4 py-2 text-sm hover:bg-gray-100">
          Sign In
        </button>
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-all hover:bg-blue-600">
          Book Demo
        </button>
      </div>
    </div>
  );
}

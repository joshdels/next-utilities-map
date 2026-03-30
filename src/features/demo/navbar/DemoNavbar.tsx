import Image from "next/image";

export default function DemoNavbar() {
  return (
    <nav className="z-50 flex h-[8vh] items-center justify-center gap-3 bg-white text-center text-black shadow-lg">
      <span>
        <Image
          src="/logo/logo.jpg"
          alt="company logo"
          width={500}
          height={500}
          className="h-16 w-16 rounded-md"
        />
      </span>
      <h1 className="text-2xl font-black">Unified Water District</h1>
    </nav>
  );
}

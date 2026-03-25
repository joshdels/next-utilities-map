import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { signOut24 } from "@esri/calcite-ui-icons";
import Navigation from "./Navigation";

export default function MapNavbar() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogout = () => {
    try {
      logout();
      router.replace("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <nav className="z-50 flex h-[6vh] items-center justify-between bg-white px-6 py-4 text-black shadow-lg">
      <h1 className="text-xl font-bold">Utility View</h1>

      <Navigation />

      <button
        onClick={handleLogout}
        className="flex cursor-pointer flex-col items-center hover:text-red-600"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d={signOut24} />
        </svg>
        <span className="mt-1 text-sm">Logout</span>
      </button>
    </nav>
  );
}

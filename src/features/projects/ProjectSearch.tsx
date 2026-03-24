"use client";

import { useState } from "react";
import { search24 } from "@esri/calcite-ui-icons";

export default function ProjectSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex w-full flex-wrap items-center gap-2 overflow-hidden rounded-md bg-white shadow-sm">
      <input
        type="text"
        placeholder="Project Name.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full flex-1 px-4 py-2 text-gray-700 outline-hidden"
      />

      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={search24} />
        </svg>
      </button>
    </div>
  );
}

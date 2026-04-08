import { ChevronsRight, X } from "lucide-react";

import SideBar from "../SideBar";
import { useTabStore } from "@/store/useTabStore";
import OverviewSection from "../Overview";
import LegendSection from "../Legend";
import { formatText } from "@/utils/formatText";
import BaseMap from "../basemap/Basemap";

export default function FloatingDashboard() {
  const { isOpen, setIsOpen, activeTab } = useTabStore();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`m-5 flex h-[87.5vh] flex-row gap-1 rounded-lg bg-white text-black shadow-md transition-all duration-300 ease-in-out ${isOpen ? "w-120" : "w-30"}`}
    >
      <aside
        className={`rounded-md p-2 ${isOpen ? "bg-gray-200" : "bg-white"} `}
      >
        <SideBar />
      </aside>

      <main
        className={`flex-1 rounded-lg bg-white p-3 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-3 opacity-0"}`}
      >
        <section className="mb-5 flex flex-row justify-between">
          <h1 className="overflow-hidden text-2xl font-black whitespace-nowrap">
            Project {activeTab && formatText(activeTab)}
          </h1>

          <button onClick={toggleOpen}>
            <X className="h-5 w-5 cursor-pointer hover:text-blue-500" />
          </button>
        </section>

        <section>
          {activeTab == "overview" && <OverviewSection />}
          {activeTab == "legend" && <LegendSection />}
          {activeTab == "basemap" && <BaseMap />}
        </section>
      </main>
      {!isOpen && (
        <button
          onClick={toggleOpen}
          className="absolute top-2 right-1 rounded bg-gray-500 px-2 py-1 text-xs text-white hover:bg-blue-600"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

import { useTabStore } from "@/store/useTabStore";
import { clearSelection24, legendLeft24 } from "@esri/calcite-ui-icons";

export interface NavigationProps {
  label: string;
  icon: string;
}

const navigations: NavigationProps[] = [
  { label: "Overview", icon: clearSelection24 },
  { label: "Legend", icon: legendLeft24 },
];

export default function SideBar() {
  const { activeTab, setActiveTab } = useTabStore();

  const handleTabToggle = (item: NavigationProps) => {
    setActiveTab(item.label.toLowerCase());
  };

  return (
    <div className="flex flex-col gap-2 p-3">
      {navigations.map((nav) => (
        <button
          onClick={() => handleTabToggle(nav)}
          key={nav.label}
          className={`flex cursor-pointer flex-col items-center gap-1 rounded-md p-3 hover:bg-blue-500 ${activeTab === nav.label.toLowerCase() ? "bg-blue-500 text-white" : ""} `}
        >
          <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
            <path d={nav.icon} />
          </svg>

          <span
            className={`text-sm font-bold text-black ${activeTab == nav.label.toLocaleLowerCase() ? "text-white" : ""} `}
          >
            {nav.label}
          </span>
        </button>
      ))}
    </div>
  );
}

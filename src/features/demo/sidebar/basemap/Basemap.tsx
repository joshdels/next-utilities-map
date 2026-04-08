import { useBasemapStore } from "@/store/useBasemapStore";
import styles from "./Basemap.module.css";

interface BasemapProps {
  label: string;
  source: string;
}

const basemaps: BasemapProps[] = [
  {
    label: "dark",
    source:
      "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  },
  {
    label: "white",
    source: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  },
];

export default function BaseMap() {
  const setSource = useBasemapStore((state) => state.setSource);

  const handleBasemapToggle = (item: BasemapProps) => {
    setSource(item.source);
  };

  return (
    <div className={styles.container}>
      <div>
        {basemaps.map((item) => (
          <button onClick={() => handleBasemapToggle(item)} key={item.label}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

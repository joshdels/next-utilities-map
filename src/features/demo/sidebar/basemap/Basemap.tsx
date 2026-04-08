import { useBasemapStore } from "@/store/useBasemapStore";
import styles from "./Basemap.module.css";
import { Basemap } from "@/shared/components/card/Basemap";
import { basemaps, BasemapProps } from "@/mock/basemap";

export default function BaseMap() {
  const setSource = useBasemapStore((state) => state.setSource);

  const handleBasemapToggle = (item: BasemapProps) => {
    setSource(item.source);
  };

  return (
    <div className={styles.container}>
      <div className={styles["container-card"]}>
        {basemaps.map((item) => (
          <button onClick={() => handleBasemapToggle(item)} key={item.label}>
            <Basemap image={item.image} label={item.label} />
            <p>{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

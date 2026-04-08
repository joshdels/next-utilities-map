import Image from "next/image";
import styles from "./Basemap.module.css";

interface BasemapProps {
  label: string;
  image: string;
}

export function Basemap({ label, image }: BasemapProps) {
  return (
    <div className={styles.card}>
      <div className={styles["card-wrapper"]}>
        <Image src={image} alt={label} fill className={styles["card-image"]} />
      </div>
    </div>
  );
}

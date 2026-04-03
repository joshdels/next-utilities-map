import Link from "next/link";
import DemoMapPreview from "@/features/demo/DemoMapPreview";
import styles from "./InteractiveMap.module.css";

export default function InteractiveMap() {
  return (
    <div id="interactive-map" className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <h1>Showcase Your Own Plan With Ease</h1>

          <p>
            Experience your own data visible and easy to access by your
            Team/Organization
          </p>

          <Link href={"/demo"} className={styles["preview-link"]}>
            Preview More
          </Link>

          <div className={styles["container-map"]}>
            <div className={styles["container-map-border"]}>
              <DemoMapPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

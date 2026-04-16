import Link from "next/link";
import DemoMapPreview from "@/features/demo/DemoMapPreview";
import styles from "./InteractiveMap.module.css";

export default function InteractiveMap() {
  return (
    <div id="interactive-map" className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <div className="heading-container">
            <span className="sub-heading">What you'll probably want</span>
            <h1 className="heading">Showcase Your Own Plan With Ease</h1>
            <p className="description">
              Experience your own data visible and easy to access by your
              Team/Organization
            </p>
          </div>

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

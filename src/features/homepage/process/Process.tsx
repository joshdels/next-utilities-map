import { process } from "@/mock/process";
import { CardProcess } from "@/shared/components/card/Card";
import "@/shared/styles/wrappers.css";
import styles from "./Process.module.css";

export default function ProcessSection() {
  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <h1 className={styles["process-title"]}>
            Here's exactly how it works
          </h1>

          <div className={styles["process-tagline"]}>
            No expensive licenses. No cluttered dashboards. Just clean GIS data
            you can actually use.
          </div>

          <div className={styles["container-card"]}>
            {process.map((item, index) => (
              <CardProcess key={index} index={index + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

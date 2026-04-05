import { process } from "@/mock/process";
import { CardProcess } from "../../../shared/components/card/Card";

import "@/shared/styles/wrappers.css";
import styles from "./Process.module.css";

export default function ProcessSection() {
  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <h1 className={styles["process-title"]}>
            With our Four simple Pillar Processing
          </h1>

          <div className={styles["process-tagline"]}>
            Save teams a lot of headaches in terms of time, high license costs
            from other tools and errors.
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

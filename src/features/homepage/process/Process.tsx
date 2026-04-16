import { process } from "@/mock/process";
import { Card } from "@/shared/components/card/Card";
import "@/shared/styles/wrappers.css";
import styles from "./Process.module.css";
import "@/shared/styles/font.css";

export default function ProcessSection() {
  return (
    <div id="process" className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className="container">
          <div className="header-container">
            <h1 className="sub-heading">Here's exactly how it works</h1>
            <h1 className="heading">From stuck files to a live map in weeks</h1>
            <div className="description">
              No expensive licenses. No cluttered dashboards. Just clean GIS
              data your whole team can use.
            </div>
          </div>

          <div className={styles["container-card"]}>
            {process.map((item, index) => (
              <Card key={index} index={index + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

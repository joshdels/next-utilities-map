import { studies } from "@/mock/case-study";
import { CardStudy } from "@/shared/components/card/Card";
import styles from "./CaseStudy.module.css";

export default function CaseStudySection() {
  const highlight = studies.find((s) => s.isHighlight);
  const normal = studies.filter((s) => !s.isHighlight);

  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <h1>Case Studies</h1>

          {highlight && (
            <div className={styles["card-container-highlight"]}>
              <CardStudy {...highlight} />
            </div>
          )}

          <div className={styles["card-container"]}>
            {normal.map((study, index) => (
              <CardStudy key={index} {...study} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

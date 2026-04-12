import { studies } from "@/mock/case-study";
import { CardStudy } from "@/shared/components/card/Card";
import styles from "./CaseStudy.module.css";
import Link from "next/link";

export default function CaseStudySection() {
  const highlight = studies.filter((s) => s.isHighlight);
  const normal = studies.filter((s) => !s.isHighlight);

  return (
    <div className="page-wrapper-secondary">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          {highlight && (
            <div className={styles["card-container-highlight"]}>
              {highlight.map((study) => (
                <Link key={study.id} href={`/case-study/${study.id}`}>
                  <CardStudy {...study} />
                </Link>
              ))}
            </div>
          )}

          <div className={styles["card-container"]}>
            {normal.map((study) => (
              <Link key={study.id} href={`/case-study/${study.id}`}>
                <CardStudy {...study} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { studies } from "@/mock/case-study";
import { CardStudy } from "@/shared/components/card/Card";
import "@/shared/styles/wrappers.css";
import styles from "./CaseStudy.module.css";

export default function CaseStudySection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <h1>Case Study</h1>
        <div className={styles.container}>
          {studies.map((study, index) => (
            <CardStudy key={index} index={index + 1} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { CardStudy } from "@/shared/components/card/Card";
import styles from "./CaseStudy.module.css";
import Link from "next/link";
import { useCaseStudies } from "@/hooks/api/useCaseStudy";
import { Skeleton } from "@/shared/components/loading/Skeleton";

export default function CaseStudySection() {
  const { highlight, normal, loading, error } = useCaseStudies();

  if (loading) return <Skeleton />;

  if (error) return <div><h1>erorr...</h1> </div>;

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

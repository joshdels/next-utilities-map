import Link from "next/link";
import Image from "next/image";
import { useCaseStudy } from "@/hooks/apis/useCaseStudy";
import { Skeleton } from "@/shared/components/loading/Skeleton";
import { formatDate } from "@/utils/date";
import CaseStudyBlocks from "./CaseStudyBlocks";
import styles from "./CaseStudyPreview.module.css";
import "@/shared/styles/wrappers.css";

export default function CaseStudyPreview({ id }: { id: string }) {
  const { study, loading } = useCaseStudy(Number(id));

  if (loading) return <Skeleton />;

  if (!study) {
    return (
      <>
        <div className="page-wrapper">
          <div className="page-wrapper-grid">
            <div className={styles["container-not-found"]}>
              <h1>No Case study Found</h1>
              <Link href={"/case-study"}>
                <span>return to case study</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.meta}>
                <p className={styles.date}>{formatDate(study.created_at)}</p>

                <div className={styles.tags}>
                  {study.tags?.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h1 className={styles.title}>{study.title}</h1>

              <p className={styles.description}>{study.description}</p>
            </div>
          </div>

          <div className={styles["image-wrapper"]}>
            <Image
              src={study.image || ""}
              alt={study.title}
              fill
              className={styles.image}
            />
          </div>

          <div className={styles["block-container"]}>
            <CaseStudyBlocks blocks={study.blocks} />
          </div>
        </div>
      </div>
    </div>
  );
}

import { studies } from "@/mock/case-study";
import Link from "next/link";
import "@/shared/styles/wrappers.css";
import Image from "next/image";
import styles from "./CaseStudyPreview.module.css";

export default function CaseStudyPreview({ id }: { id: string }) {
  const study = studies.find((s) => String(s.id) === id);

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
          <Image src={study.image || ""} alt="" width={500} height={500} />
          <h1>{study.title}</h1>
          <p>{study.description}</p>
        </div>
      </div>
    </div>
  );
}

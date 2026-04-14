import styles from "./Skeleton.module.css";
import "@/shared/styles/wrappers.css";

export function Skeleton() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className={styles["loader-container"]}>
            <div className={styles["spinner"]} />
          </div>
        </div>
      </div>
    </>
  );
}

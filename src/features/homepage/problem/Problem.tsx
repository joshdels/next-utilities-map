import styles from "./Problem.module.css";
import "@/shared/styles/wrappers.css";
import "@/shared/styles/font.css";

export default function ProblemSection() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className="container">
            <h1 className="heading">Sounds familiar?</h1>
            <p>
              Your CAD files live on one engineer's laptop. Field crews work off
              printed maps.
            </p>
            <p>
              When audits comes, someone panics to manually pull data from fiels
              nobody else can open. The worst part your engineer is on vacation.
            </p>
            <p>
              Your network data exists, it's just trapped in a format your
              organization can't use
            </p>
            <p className={styles["quote"]}>That's the problem InfraLens solves</p>
          </div>
        </div>
      </div>
    </>
  );
}

import { stakes } from "@/mock/stake";
import { ListProblem } from "@/shared/components/list/List";
import styles from "./Stakes.module.css";

export default function StakesSection() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className="container">
            <div className="header-container">
              <span className="sub-heading"> What it's costing you</span>
              <h1 className="heading">What staying stuck costs you?</h1>
              <p className="description">
                Every month you wait, the problem compounds.
              </p>
            </div>

            <div className="list-container">
              {stakes.map((item, index) => (
                <ListProblem key={index} {...item} />
              ))}
            </div>

            <p className={styles.quote}>
              None of that is a data problem. It's a format problem and it's
              fixable in weeks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

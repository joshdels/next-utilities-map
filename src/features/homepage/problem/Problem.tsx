import styles from "./Problem.module.css";
import { problems } from "@/mock/problem";
import { Card } from "@/shared/components/card/Card";

export default function ProblemSection() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className="container">
            <div className="header-container">
              <span className="sub-heading">sound familiar?</span>
              <h1 className="heading">
                Your data exists <br />
                Your team just can't reach it.
              </h1>

              <h2 className="description">
                Your network lives in a CAD file on one engineer's laptop. Field
                crews print maps already out of date. When audits come, someone
                spends three days digging through files no one else can open.
              </h2>
            </div>
            <div className="card-problem">
              {problems.map((item, index) => (
                <Card key={index} {...item} variant="red" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

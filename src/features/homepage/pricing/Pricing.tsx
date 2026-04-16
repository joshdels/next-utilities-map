import Link from "next/link";
import { List } from "@/shared/components/list/List";
import { CardPrice } from "@/shared/components/card/Card";
import { lists, offers } from "@/mock/pricing";
import styles from "./Pricing.module.css";

export default function PricingSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className="container">
          <div className="header-container">
            <span className="sub-heading">How we work together</span>
            <h1 className="heading">
              You know exactly what you're getting <br />
              before we charge anything
            </h1>

            <h2 className="description">
              We scope every project first. One number, no hourly surprises.
            </h2>
          </div>

          <div className={styles["list-container"]}>
            {lists.map((item, index) => (
              <List key={index} index={index + 1} {...item} />
            ))}
          </div>

          <div className={styles["card-container"]}>
            {offers.map((item, index) => (
              <CardPrice key={index} index={index + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { lists, offers } from "@/mock/pricing";
import "@/shared/styles/wrappers.css";
import List from "../../../shared/components/list/List";
import styles from "./Pricing.module.css";
import { CardPrice } from "@/shared/components/card/Card";
import Link from "next/link";

export default function PricingSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <span>How we can work together</span>
          <h1>Straightforward engagement. No surprises</h1>
          <p>
            We scope every project before we charge anything. You know exactly
            what you're getting and how much it cost then the work begins
          </p>

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

          <div className={styles.footer}>
            <span>Not sure if your data is ready or is it worth it?</span>
            <p>
              That's exactly what the discovery call is for. We've worked with
              everything from clean AutoCAD exports to decade-old scanned PDFs.
              Send us what you have and well tell you what's possible
            </p>

            <Link
              href="https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles["primary-button"]}>
                Book a Free Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

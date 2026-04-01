import Link from "next/link";
import styles from "./Hero.module.css";
import "@/shared/styles/wrappers.css";
import { scrollToSection } from "@/utils/scrollToPage";

export default function HeroSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <section className={styles["hero-container"]}>
          <p className={styles["hero-tagline"]}>
            Made for Engineers & Planners
          </p>

          <h1 className={styles["hero-title"]}>
            Turn Your CAD Utility Files into a{" "}
            <span>Powerful Shareable WebGIS Platform</span>
          </h1>

          <p className={styles["hero-description"]}>
            We clean and structure your messy CAD utility data then transform it
            into an interactive map and dashboard your team and organization can
            actually use.
          </p>

          <div className={styles["hero-actions"]}>
            <Link
              href={
                "https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
              }
              target="_blank"
            >
              <button className={styles["hero-primary-button"]}>
                Book a Demo
              </button>
            </Link>
            <button
              className={styles["hero-secondary-button"]}
              onClick={() => scrollToSection("#interactive-map")}
            >
              Explore the Platform
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

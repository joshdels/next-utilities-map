import Link from "next/link";
import styles from "./Hero.module.css";
import "@/shared/styles/wrappers.css";
import { scrollToSection } from "@/utils/scrollToPage";

export default function HeroSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <section className={styles["hero-container"]}>
          <p className={styles["hero-tagline"]}>CAD to GIS. Done right.</p>

          <h1 className={styles["hero-title"]}>
            Turn Scattered CAD Data into a {"  "}
          </h1>
          <span className={styles["hero-subtitle"]}>
            Live, Shareable WebGIS Platform
          </span>

          <p className={styles["hero-description"]}>
            We clean and structure your CAD data, transforming it into an
            interactive map and dashboard your organization can use from day one
            backed by a secure, enterprise-grade geodatabase built for long-term
            reliability.
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
              onClick={() => scrollToSection("interactive-map")}
            >
              Explore the Platform
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

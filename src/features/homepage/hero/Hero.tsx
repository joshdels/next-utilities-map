import styles from "./Hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles["hero-container"]}>
      <p className={styles["hero-tagline"]}>Made for Engineers & Planners</p>

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
        <button className={styles["hero-primary-button"]}>Book a Demo</button>
        <button className={styles["hero-secondary-button"]}>
          Explore the Platform
        </button>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/utils/scrollToPage";

import styles from "./Hero.module.css";

export default function HeroSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <section className={styles["hero-container"]}>
          <p className="sub-heading">CAD to GIS. Done right.</p>

          <h1 className={styles["hero-title"]}>
            Turn your water utility CAD drawings into a live Map your team
            actually use{"  "}
          </h1>
          <span className={styles["hero-subtitle"]}>
            {" "}
            Delivered in weeks, not months
          </span>

          <p className={styles["hero-description"]}>
            We convert your CAD drawings into a live, shareable GIS map —
            scoped, priced, and delivered in a few weeks. No licenses. No
            training. No waiting.
          </p>

          <div className={styles["hero-actions"]}>
            <button
              className={styles["hero-primary-button"]}
              onClick={() => scrollToSection("contact")}
            >
              Book a Discovery Call Now
            </button>

            <button
              className={styles["hero-secondary-button"]}
              onClick={() => scrollToSection("process")}
            >
              See how it works
            </button>
          </div>
        </section>
      </div>
      <div className={styles["hero-bg-wrapper"]}>
        <Image
          src={"/hero-background/background1.png"}
          alt="hero-background"
          fill
          className={styles["hero-bg"]}
          loading="eager"
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./Hero.module.css";
import "@/shared/styles/wrappers.css";
import { scrollToSection } from "@/utils/scrollToPage";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <section className={styles["hero-container"]}>
          <p className={styles["hero-tagline"]}>CAD to GIS. Done right.</p>

          <h1 className={styles["hero-title"]}>
            Your Water Network CAD Files Are Stuck {"  "}
          </h1>
          <span className={styles["hero-subtitle"]}>
            Your Team Shouldn't Be.
          </span>

          <p className={styles["hero-description"]}>
            InfraLens turns your water district's CAD drawings into a live,
            shareable map your whole team can access scoped, priced, and
            delivered in 2 - 4 weeks.
          </p>

          <div className={styles["hero-actions"]}>
            <Link
              href={
                "https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
              }
              target="_blank"
            >
              <button className={styles["hero-primary-button"]}>
                Book a Free Discovery Call
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

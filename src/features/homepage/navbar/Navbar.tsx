import Link from "next/link";
import styles from "./Navbar.module.css";
import "@/shared/styles/wrappers.css";

export default function NavbarSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.navbar}>
          <div className={styles["navbar-brand"]}>
            <h1>InfraLens</h1>
            <Link href={"/case-study"}>
              <span className={styles["navbar-brand"]}>Case Study</span>
            </Link>
          </div>

          <div className={styles["navbar-menu"]}>
            <Link href={"/login"}>
              <button className={styles["navbar-primary-button"]}>
                Sign In
              </button>
            </Link>

            <Link
              href="https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles["navbar-secondary-button"]}>
                Book Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

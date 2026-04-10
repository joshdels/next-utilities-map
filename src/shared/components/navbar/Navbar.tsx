import Link from "next/link";
import styles from "./Navbar.module.css";
import "@/shared/styles/wrappers.css";
import { Lock } from "lucide-react";

export default function NavbarSection() {
  return (
    <div className={styles.navbar}>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className={styles["navbar-content"]}>
            <div className={styles["navbar-brand"]}>
              <Link href={"/"}>
                <h1>InfraLens</h1>
              </Link>
            </div>

            <div className={styles["navbar-pages"]}>
              <Link href={"/case-study"}>
                <span className={styles["navbar-brand"]}>Case Study</span>
              </Link>
              <Link href={"/tools"}>
                <span className={styles["navbar-brand"]}>Tools</span>
              </Link>
            </div>

            <div className={styles["navbar-menu"]}>
              <Link href={"/login"}>
                <button className={styles["navbar-primary-button"]}>
                  <Lock size={15} />
                  Member
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
    </div>
  );
}

import "@/shared/styles/wrappers.css";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="page-wrapper-dark">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <div className={styles["section-heading"]}>
            <h1>Infralens</h1>
            <p>
              Infralens is a sub focus of TopMap Solutions which focuses on
              Engineering projects specifically Utilities, Pipelines and
              networks.
            </p>
            <Link href={"https://www.linkedin.com/company/topmap-solutions/"}>
              <FaLinkedin color="gray" size={30} />
            </Link>
          </div>

          <div className={styles["section-support"]}>
            <div>
              <h1>Product</h1>
              <span>Overview</span>
              <span>Features</span>
            </div>

            <div>
              <h1>Legal</h1>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className={styles.copywrite}>
          © 2026 Infralens (TopMap Solutions)
        </div>
      </div>
    </div>
  );
}

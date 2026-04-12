import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import "@/shared/styles/wrappers.css";
import styles from "./Footer.module.css";

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
            <div className={styles.contacts}>
              <div className={styles["contact-item"]}>
                <Mail size={30} color="gray" />
                <span>joshdels@topmapsolutions.com</span>
              </div>

              <Link
                href="https://www.linkedin.com/company/topmap-solutions/"
                target="_blank"
                className={styles["contact-item"]}
              >
                <FaLinkedin size={30} color="gray" />
                <span>TopMap Solutions</span>
              </Link>
            </div>
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

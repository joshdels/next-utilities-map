import styles from "./DemoNavbar.module.css";

import Image from "next/image";

export default function DemoNavbar() {
  return (
    <nav className={styles.navbar}>
      <span>
        <Image
          src="/logo/logo.jpg"
          alt="company logo"
          width={500}
          height={500}
          className={styles["navbar-logo"]}
        />
      </span>
      <h1>Unified Water District</h1>
    </nav>
  );
}

import styles from "./Navbar.module.css";

export default function NavbarSection() {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-brand"]}>
        <h1>InfraLens</h1>
        <span className={styles["navbar-brand"]}>Product</span>
      </div>

      <div className={styles["navbar-menu"]}>
        <button className={styles["navbar-primary-button"]}>Sign In</button>
        <button className={styles["navbar-secondary-button"]}>Book Demo</button>
      </div>
    </div>
  );
}

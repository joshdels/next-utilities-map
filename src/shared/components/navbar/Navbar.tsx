"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import "@/shared/styles/wrappers.css";
import { Lock, Menu } from "lucide-react";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

            <div className={styles["navbar-menu"]}>
              <Link href={"/case-study"}>
                <span className={styles["navbar-brand"]}>Case Study</span>
              </Link>
              <Link href={"/tools"}>
                <span className={styles["navbar-brand"]}>Tools</span>
              </Link>

              <Link href={"/login"}>
                <button className={styles["navbar-primary-button"]}>
                  <Lock size={15} />
                  Member
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles["mobile-menu"]}
            >
              <Menu />
            </button>

            {isOpen && (
              <div className={styles["mobile-dropdown"]}>
                <Link href={"/case-study"}>Case Study</Link>
                <Link href={"/tools"}>Tools</Link>
                <Link href={"/login"}>Member</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

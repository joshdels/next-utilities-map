import styles from "./List.module.css";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface ListProps {
  index?: number;
  title: string;
  description: string;
}

export interface ListProblemProps {
  icon?: LucideIcon | IconType;
  title: string;
  subtitle: string;
}

export function List({ index, title, description }: ListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.index}>{index}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function ListProblem({ icon: Icon, title, subtitle }: ListProblemProps) {
  return (
    <div className={styles.container}>
      {Icon && (
        <span className={styles["list-icon"]}>
          <Icon className={styles.icon} />
        </span>
      )}
      <div className={styles.text}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}

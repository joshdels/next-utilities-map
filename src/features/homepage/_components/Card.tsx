import { LucideIcon } from "lucide-react";
import styles from "./Card.module.css";

export interface CardProps {
  index?: number;
  title: string;
  icon?: LucideIcon;
  definition: string;
  steps?: string[];
}

export default function Card({
  index,
  title,
  definition,
  steps,
  icon: Icon,
}: CardProps) {
  return (
    <div className={styles.card}>
      {Icon && (
        <span className={styles["card-icon"]}>
          <Icon size={80} />
        </span>
      )}
      <h1>
        {index}. {""}
        {title}
      </h1>
      <p>{definition}</p>
      {steps && steps.length > 0 && (
        <ul>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { formatDate } from "@/utils/date";
import styles from "./Card.module.css";

export interface CardProps {
  index?: number;
  title: string;
  icon?: LucideIcon | IconType;
  definition?: string;
  variant?: "blue" | "red";
}

interface CardPriceProps extends CardProps {
  description: string;
  features?: string[];
  isHighlight?: boolean;
}

interface CardStudyProps extends CardPriceProps {
  id: number;
  tags: string[];
  image?: string;
  created_at?: string;
  isHighlight?: boolean;
}

export function Card({
  index,
  title,
  definition,
  icon: Icon,
  variant = "blue",
}: CardProps) {
  return (
    <div className={styles.card}>
      {index && <span className={styles["card-index"]}>0{index}</span>}
      {Icon && (
        <span className={`styles["card-icon"] ${styles[variant]}`}>
          <Icon size={60} />
        </span>
      )}
      <h1>{title}</h1>
      <p>{definition}</p>
    </div>
  );
}

export function CardPrice({ title, description, features }: CardPriceProps) {
  return (
    <div className={styles["card-price"]}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <ul>
        {features?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export function CardStudy({
  id,
  title,
  description,
  tags,
  image = "",
  created_at,
  isHighlight = false,
}: CardStudyProps) {
  return (
    <div
      className={`${styles["card-study"]} ${isHighlight ? styles["card-study-highlight"] : ""}`}
    >
      <div className={styles["card-image"]}>
        <Image src={image} alt="image" fill />
      </div>

      <div className={styles["card-content"]}>
        <div className={styles["card-tags-container"]}>
          {tags &&
            tags.length > 0 &&
            tags.map((tag, index) => (
              <span className={styles["card-tags"]} key={index}>
                {tag}
              </span>
            ))}
        </div>

        <h1>{title}</h1>
        <span>{formatDate(created_at)}</span>
        <p>{description}</p>
        <button>view full case study</button>
      </div>
    </div>
  );
}

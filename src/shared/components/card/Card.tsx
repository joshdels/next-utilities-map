import { LucideIcon } from "lucide-react";
import styles from "./Card.module.css";
import Image from "next/image";
import { formatDate } from "@/utils/date";

export interface CardProps {
  index?: number;
  title: string;
  icon?: LucideIcon;
  definition?: string;
  steps?: string[];
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

export function CardProcess({
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

export function CardPrice({
  title,
  description,
  features,
  isHighlight,
}: CardPriceProps) {
  return (
    <div className={styles["card-price"]}>
      {isHighlight && <span>Most popular</span>}
      <h1>{title}</h1>
      <p>{description}</p>
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

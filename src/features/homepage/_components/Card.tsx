import styles from "./Card.module.css";

export interface CardProps {
  index?: number;
  title: string;
  definition: string;
  steps?: string[];
  image?: string;
}

export default function Card({ index, title, definition, steps }: CardProps) {
  return (
    <div className={styles.card}>
      <span>{index}</span>
      <h1>{title}</h1>
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

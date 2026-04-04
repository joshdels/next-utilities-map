import styles from "./List.module.css";

interface ListProps {
  index?: number;
  title: string;
  description: string;
}

export default function List({ index, title, description }: ListProps) {
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

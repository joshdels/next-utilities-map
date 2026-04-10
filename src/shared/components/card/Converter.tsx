import styles from "./Converter.module.css";

export interface ConverterCardProps {
  title: string;
  subname?: string;
  definition: string;
}

export function ConverterDefinitionCard({
  title,
  subname,
  definition,
}: ConverterCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles["heading"]}>
        <div>
          <p>icon</p>
          <h1>{title}</h1>
        </div>
        <span>{subname}</span>
      </div>
      <p>{definition}</p>
    </div>
  );
}

export function ConverterBenefitsCard({
  title,
  definition,
}: ConverterCardProps) {
  return (
    <div>
      <span>Icon</span>
      <div>
        <h1>{title}</h1>
        <p>{definition}</p>
      </div>
    </div>
  );
}

import { File, LucideIcon } from "lucide-react";
import styles from "./Converter.module.css";

export interface ConverterCardProps {
  title: string;
  subname?: string;
  definition: string;
  icon?: LucideIcon;
}

export function ConverterDefinitionCard({
  title,
  subname,
  definition,
}: ConverterCardProps) {
  return (
    <div className={styles["card-definition"]}>
      <div className={styles["heading"]}>
        <div>
          <File />
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
  icon: Icon,
}: ConverterCardProps) {
  return (
    <div className={styles["card-benefits"]}>
      <span>{Icon && <Icon size={80} />}</span>
      <div>
        <h1>{title}</h1>
        <p>{definition}</p>
      </div>
    </div>
  );
}

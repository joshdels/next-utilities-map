import { File, LucideIcon, X } from "lucide-react";
import styles from "./Converter.module.css";

export interface ConverterCardProps {
  title: string;
  subname?: string;
  definition: string;
  icon?: LucideIcon;
}

type UploadedFileCardProps = {
  title: string;
  onClick?: () => void;
};

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

export function UploadedFileCard({ title, onClick }: UploadedFileCardProps) {
  return (
    <div className={styles["file-container"]}>
      <div className={styles["name-section"]}>
        <span>
          <File />
        </span>
        <p>{title}</p>
      </div>
      <button onClick={onClick} disabled={!onClick}>
        <X />
      </button>
    </div>
  );
}

import { FilePlus } from "lucide-react";
import "@/shared/styles/wrappers.css";
import styles from "./Converter.module.css";
import {
  ConverterDefinitionCard,
  ConverterBenefitsCard,
} from "@/shared/components/card/Converter";
import { converters, features } from "@/mock/converter";
import Information from "./Information";

export default function ConverterSection() {
  return (
    <div>
      <Information />
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className={styles.container}>
            <button>
              <FilePlus color="white" />
              Select File
            </button>
            <div className={styles["card-definition"]}>
              {converters.map((item, index) => (
                <ConverterDefinitionCard key={index} {...item} />
              ))}
            </div>
            <div className={styles["card-benefits"]}>
              {features.map((item, index) => (
                <ConverterBenefitsCard key={index} {...item} />
              ))}
            </div>
            <div>
              We've already converted "FILE COUNT" with a total size of "FILE
              SIZE"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

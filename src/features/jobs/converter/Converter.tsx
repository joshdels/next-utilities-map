import { FilePlus } from "lucide-react";
import "@/shared/styles/wrappers.css";
import styles from "./Converter.module.css";
import {
  ConverterDefinitionCard,
  ConverterBenefitsCard,
} from "@/shared/components/card/Converter";
import { converters, features } from "@/mock/converter";

export default function ConverterSection() {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper-grid">
        <div className={styles.container}>
          <div className={styles["information-container"]}>
            <div>
              <h1>DXF to Geopackage Converter</h1>
              <p>
                Converts you DXF CAD files to a useable GIS Geopackage. No need
                to download any software
              </p>
            </div>
            <div className={styles["information-context"]}>
              <span>convert</span>
              <button>DXF</button>
              <span>to</span>
              <button>GPKG</button>
            </div>
          </div>
          <button>
            <FilePlus color="white" />
            Select File
          </button>
          <div>
            {converters.map((item, index) => (
              <ConverterDefinitionCard key={index} {...item} />
            ))}
          </div>
          <div>
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
  );
}

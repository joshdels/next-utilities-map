import { FilePlus, RefreshCcw } from "lucide-react";
import "@/shared/styles/wrappers.css";
import styles from "./Converter.module.css";
import {
  ConverterDefinitionCard,
  ConverterBenefitsCard,
  UploadedFileCard,
} from "@/shared/components/card/Converter";
import { converters, features } from "@/mock/converter";
import Information from "./Information";
import { useUploadStats } from "@/hooks/api/useUploadStat";
import { useConverter } from "@/hooks/api/useConvert";

export default function ConverterSection() {
  const fileStat = useUploadStats();
  const {
    selectedFile,
    isUploading,
    inputRef,
    openFilePicker,
    onFileChange,
    removeFile,
    upload,
  } = useConverter();

  return (
    <div>
      <Information />

      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className={styles.container}>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              accept=".dxf"
              onChange={onFileChange}
            />

            {!selectedFile ? (
              <>
                <button onClick={openFilePicker}>
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
              </>
            ) : (
              <>
                <UploadedFileCard
                  title={selectedFile.name}
                  onClick={removeFile}
                />

                <button onClick={upload} disabled={isUploading}>
                  <RefreshCcw color="white" />
                  {isUploading ? "Uploading..." : "Convert"}
                </button>
              </>
            )}

            <div className={styles["statistics"]}>
              <p>
                We've already converted{" "}
                <strong>{fileStat?.total_files_processed ?? 0}</strong> files
                with a total size of{" "}
                <strong>{fileStat?.total_storage_processed_mb ?? 0}</strong> MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

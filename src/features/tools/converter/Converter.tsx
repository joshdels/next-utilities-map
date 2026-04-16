import { FilePlus, RefreshCcw } from "lucide-react";
import styles from "./Converter.module.css";
import {
  ConverterDefinitionCard,
  ConverterBenefitsCard,
  UploadedFileCard,
} from "@/shared/components/card/Converter";
import { converters, features } from "@/mock/converter";
import Information from "./Information";
import { useUploadStats } from "@/hooks/apis/useUploadStat";
import { useConverter } from "@/hooks/apis/useConvert";
import ConverterStatus from "./ConverterStatus";

export default function ConverterSection() {
  const fileStat = useUploadStats();

  const {
    selectedFile,
    status,
    progress,
    downloadUrl,
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

            {!selectedFile && status === "idle" && (
              <>
                <button onClick={openFilePicker}>
                  <FilePlus color="white" />
                  Select File
                </button>
                <p>
                  The system currently supports uploading a single DXF file up
                  to 100MB for cloud processing. This feature is in its
                  experimental stage.
                </p>

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
            )}

            {selectedFile && (
              <>
                <UploadedFileCard
                  title={selectedFile.name}
                  onClick={status === "processing" ? undefined : removeFile}
                />

                <ConverterStatus
                  status={status}
                  progress={progress}
                  upload={upload}
                  isUploading={isUploading}
                  downloadUrl={downloadUrl ?? undefined}
                />
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

import type { ConvertState } from "@/hooks/apis/useConvert";

type ConverterStatusProps = {
  status: ConvertState;
  progress: any;
  upload: () => void;
  isUploading: boolean;
  downloadUrl?: string;
};

export default function ConverterStatus({
  status,
  progress,
  upload,
  isUploading,
  downloadUrl,
}: ConverterStatusProps) {
  if (status === "uploading") {
    return <p>Uploading file...</p>;
  }

  if (status === "processing") {
    const percent = progress?.step ? Math.min(progress.step * 10, 100) : 5;

    return (
      <div style={{ marginTop: "1rem" }}>
        <p>Processing file...</p>

        <div
          style={{
            width: "100%",
            height: "8px",
            background: "#333",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${percent}%`,
              background: "limegreen",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <p style={{ fontSize: "12px", marginTop: "6px" }}>
          {progress?.step
            ? `Step ${progress.step}`
            : "Starting to process, this might take a while..."}
        </p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div style={{ marginTop: "1rem" }}>
        <p>Conversion complete</p>

        {downloadUrl && (
          <a href={downloadUrl} target="_blank">
            <button>Download File</button>
          </a>
        )}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div style={{ marginTop: "1rem", color: "red" }}>
        <p>Conversion failed, something went wrong</p>
      </div>
    );
  }

  if (status === "rate_limit") {
    return (
      <div style={{ marginTop: "1rem", color: "red" }}>
        <p>Rate limited. Please try again tomorrow.</p>
      </div>
    );
  }

  // idle state
  return (
    <button onClick={upload} disabled={isUploading}>
      Convert
    </button>
  );
}

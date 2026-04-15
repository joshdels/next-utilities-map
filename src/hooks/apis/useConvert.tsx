import { useRef, useState } from "react";
import { uploadFile, waitForTask, downloadFile } from "@/lib/convert";

export type ConvertState =
  | "idle"
  | "uploading"
  | "processing"
  | "done"
  | "failed"
  | "rate_limit";

/**
 * This consumes the converter.api from uploading a dxf file to downloading a file ideally
 * Also consumes a taskId to track the progress
 */

export function useConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ConvertState>("idle");
  const [progress, setProgress] = useState<any>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setStatus("idle");
  };

  const removeFile = () => {
    if (status === "processing") return;

    setSelectedFile(null);
    setTaskId(null);
    setProgress(null);
    setDownloadUrl(null);
    setStatus("idle");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const upload = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setStatus("uploading");

      const res = await uploadFile(selectedFile);

      setTaskId(res.task_id);
      setStatus("processing");

      await waitForTask(res.task_id, (data) => {
        setProgress(data);
      });

      setStatus("done");

      const download = await downloadFile(res.task_id);
      setDownloadUrl(download.download_url);
    } catch (err: any) {
      console.error(err);

      if (err.message === "RATE_LIMIT") {
        setStatus("rate_limit");
        return;
      }
      setStatus("failed");
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedFile,
    status,
    progress,
    taskId,
    downloadUrl,
    isUploading,
    inputRef,
    openFilePicker,
    onFileChange,
    removeFile,
    upload,
  };
}

import { useRef, useState } from "react";
import { uploadFile } from "@/lib/convert";

export function useConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setTaskId(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const upload = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);

      const res = await uploadFile(selectedFile);

      console.log("UPLOAD RESPONSE:", res);

      setTaskId(res.task_id);

      return res;
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedFile,
    isUploading,
    inputRef,
    openFilePicker,
    onFileChange,
    removeFile,
    upload,
  };
}

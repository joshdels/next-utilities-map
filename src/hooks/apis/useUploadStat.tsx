import { useEffect, useState } from "react";
import { uploadStats } from "@/lib/fileStat";

export type UploadStats = {
  total_files_processed: number;
  total_storage_processed_bytes: number;
  total_storage_processed_mb: number;
  total_storage_processed_gb: number;
};

/**
 * Fetch a backend statistics of file count and storage size in mb
 *
 * @param intervalMs
 * @returns total_files_processed
 * @returns total_storage_processed_bytes
 */

export function useUploadStats(intervalMs = 10000) {
  const [fileStat, setFileStat] = useState<UploadStats | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await uploadStats();
        setFileStat(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadStats();

    const interval = setInterval(loadStats, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return fileStat;
}

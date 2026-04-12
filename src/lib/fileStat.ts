const BASE_URL =
  "https://infralens-backend.topmapsolutions.com/jobs/file-storage-count/";

/**
 * Fetch a backend statistics of file count and storage
 * @returns total_files_processed
 * @returns total_storage_processed_bytes
 */
export const uploadStats = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch upload stats");
  }

  return await res.json();
};

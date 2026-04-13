const BASE_URL = "https://infralens-backend.topmapsolutions.com/case-studies/";

/**
 * Fetch a backend statistics of file count and storage
 * @returns total_files_processed
 * @returns total_storage_processed_bytes
 */
export const caseStudy = async (id: number) => {
  const res = await fetch(`BASE_URL${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch that case study");
  }

  return await res.json();
};

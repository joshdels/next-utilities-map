const BASE_URL =
  "https://infralens-backend.topmapsolutions.com/jobs/process-dxf/";

const STATUS_URL =
  "https://infralens-backend.topmapsolutions.com/jobs/task-status/";

const DOWNLOAD_URL =
  "https://infralens-backend.topmapsolutions.com/jobs/download/";

/**
 * Takes a dxf files and converts it to geopackage using vps server backend
 * It might take a couple of mights to an hour depending on the size of the file
 *
 * @param file
 * @returns
 */
export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Upload failed");

  return await response.json();
};

export const getTaskStatus = async (taskId: string) => {
  const res = await fetch(`${STATUS_URL}${taskId}`);
  return await res.json();
};

export const waitForTask = async (
  taskId: string,
  onUpdate?: (data: any) => void,
) => {
  let attempts = 0;

  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        attempts++;

        const data = await getTaskStatus(taskId);

        onUpdate?.(data);

        console.log("status:", data.status);

        if (data.status === "done" || data.status === "SUCCESS") {
          clearInterval(interval);
          resolve(data);
        }

        if (data.status === "failed" || data.status === "FAILURE") {
          clearInterval(interval);
          reject(new Error("Task failed"));
        }

        if (attempts > 120) {
          clearInterval(interval);
          reject(new Error("Task timeout"));
        }
      } catch (err) {
        clearInterval(interval);
        reject(err);
      }
    }, 2000);
  });
};

export const downloadFile = async (taskId: string) => {
  const res = await fetch(`${DOWNLOAD_URL}${taskId}`);
  return await res.json();
};

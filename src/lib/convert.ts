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

export const getTaskStatus = async (taskId: string) => {
  const res = await fetch(`${STATUS_URL}${taskId}/`);
  return await res.json();
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(BASE_URL, {
    method: "POST",
    body: formData,
  });

  if (response.status === 429) {
    throw new Error("RATE_LIMIT");
  }

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
};

export const waitForTask = async (
  taskId: string,
  onUpdate?: (data: any) => void,
) => {
  let attempts = 0;

  while (true) {
    attempts++;

    if (attempts > 200) {
      throw new Error("TIMEOUT");
    }

    const res = await fetch(`${STATUS_URL}${taskId}/`);

    if (res.status === 429) {
      console.warn("Rate limited. slowing down...");
      await sleep(15000);
      continue;
    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    onUpdate?.(data);

    if (data.status === "done" || data.status === "SUCCESS") {
      return data;
    }

    if (data.status === "failed" || data.status === "FAILURE") {
      throw new Error("Task failed");
    }

    let delay = 5000;

    if (attempts > 10) delay = 15000;
    if (attempts > 30) delay = 30000;
    if (attempts > 60) delay = 60000;

    await sleep(delay);
  }
};

export const downloadFile = async (taskId: string) => {
  const res = await fetch(`${DOWNLOAD_URL}${taskId}/`);

  if (!res.ok) {
    throw new Error(`Download failed: ${res.status}`);
  }

  return res.json();
};

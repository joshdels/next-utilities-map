import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/project-files/";

export interface FileProps {
  project: number;
  name?: string;
  file: File;
}

export const getFiles = async (projectId?: number) => {
  const url = projectId ? `${BASE_URL}?project=${projectId}` : BASE_URL;
  return fetchWithAuth(url);
};

export const createFile = async (data: FileProps) => {
  const formData = new FormData();

  formData.append("project", data.project.toString());
  if (data.name) formData.append("name", data.name);
  formData.append("file", data.file);

  return fetchWithAuth(BASE_URL, {
    method: "POST",
    body: formData,
  });
};

export const updateFile = async (id: number, data: Partial<FileProps>) => {
  const formData = new FormData();
  if (data.name) formData.append("name", data.name);
  if (data.file) formData.append("file", data.file);

  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "PATCH",
    body: formData,
  });
};

export const deleteFile = async (id: number) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "DELETE",
  });
};

import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/projects/";

export const getProjects = async () => {
  return fetchWithAuth(BASE_URL);
};

export interface ProjectProps {
  id: number;
  name: string;
  description?: string;
  logo?: File | null;
  files?: File[];
}

export const createProject = async (data: ProjectProps) => {
  const formData = new FormData();

  formData.append("name", data.name);
  if (data.description) formData.append("description", data.description);
  if (data.logo) formData.append("logo", data.logo);
  if (data.files) {
    data.files.forEach((file) => formData.append("file", file));
  }

  return fetchWithAuth(BASE_URL, {
    method: "POST",
    body: formData,
  });
};

export const updateProject = async (id: number, data: ProjectProps) => {
  const formData = new FormData();

  formData.append("name", data.name);
  if (data.description) formData.append("description", data.description);
  if (data.logo) formData.append("logo", data.logo);
  if (data.files) {
    data.files.forEach((file) => formData.append("file", file));
  }

  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "PATCH",
    body: formData,
  });
};

export const deleteProject = async (id: number) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "DELETE",
  });
};

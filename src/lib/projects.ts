import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/projects/";

export const getProjects = async () => {
  return fetchWithAuth(BASE_URL);
};

export const createProject = async (data: {
  name: string;
  description?: string;
}) => {
  return fetchWithAuth(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateProject = async (
  id: number,
  data: { number?: string; description?: string },
) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const deleteProject = async (id: number) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "DELETE",
  });
};

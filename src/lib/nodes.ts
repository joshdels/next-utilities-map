import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/nodes/";

export const getNodes = async () => {
  return fetchWithAuth(BASE_URL);
};

export interface NodeProps {
  asset: number;
  geometry: { type: "Point"; coordinates: [number, number] };
  properties?: string[];
}

export const createNode = async (data: NodeProps) => {
  return fetchWithAuth(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateNode = async (id: number, data: NodeProps) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const deleteNode = async (id: number) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "DELETE",
  });
};

import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/pipes/";

export const getPipes = async () => {
  return fetchWithAuth(BASE_URL);
};

export interface PipeProps {
  assent: number;
  geometry: { type: "LineString"; coordinates: [number, number][] };
  start_node: number;
  end_node: number;
  diamter: number;
  material: string;
  properties?: Record<string, any>;
}

export const createPipe = async (data: PipeProps) => {
  return fetchWithAuth(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updatePipe = async (id: number, data: PipeProps) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const deletePipe = async (id: number) => {
  return fetchWithAuth(`${BASE_URL}${id}/`, {
    method: "DELETE",
  });
};

import { fetchWithAuth } from "./api";

const BASE_URL = "http://127.0.0.1:8000/api/assets/";

export interface AssetProps {
  id: number;
  project: number | null;
  utility_type: string;
  asset_type: string;
  name: string;
  status: string;
  properties?: Record<string, any>;
}

export const getAssets = async (): Promise<AssetProps[]> => {
  return fetchWithAuth(BASE_URL);
};

export const getAsset = async (id: number): Promise<AssetProps> => {
  return fetchWithAuth(`${BASE_URL}${id}/`);
};

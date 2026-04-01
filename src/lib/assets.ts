import { fetchWithAuth } from "./api";

const BASE_URL = "https://infralens.topmapsolutions.com/api/assets/";

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

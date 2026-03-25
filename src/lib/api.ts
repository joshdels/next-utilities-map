import { getAccessToken, logout } from "./auth";

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = getAccessToken();

  const headers: any = {
    Authorization: token ? `Bearer ${token}` : "",
    ...options.headers,
  };

  if (options.body && !(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    logout();
    throw new Error("Unauthorized. Please login again.");
  }

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.detail || "Request failed");
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

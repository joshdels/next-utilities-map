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
    const errorData = await res.json().catch(() => null);
    if (errorData?.detail?.toLowerCase().includes("token")) {
      logout();
    }
    throw new Error(errorData?.detail || "Unauthorized");
  }

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    console.error("API ERROR:", errorData);
    throw new Error(JSON.stringify(errorData));
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

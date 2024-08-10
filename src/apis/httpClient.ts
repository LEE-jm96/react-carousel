import axios from "axios";
import type { AxiosInstance } from "axios";

export const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  timeout: 5_000,
  headers: {
    "Content-Type": "image/jpeg",
    Accept: "image/jpeg",
  },
});

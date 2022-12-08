import axios from "axios";
import { API_URL } from "../../config";
import AuthApi from "../../../entities/auth/auth-api";

const token =
  typeof window !== "undefined" &&
  window.localStorage.getItem("social-network");

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  //@ts-ignore
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await AuthApi.refresh();
        localStorage.setItem("social-network", response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export default instance;

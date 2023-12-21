import axios from "axios";
import Configuration from "./Api/Configuration";
import CookiesStorageService from "./CookiesStorageService";
import { LocalStorageService } from "./LocalStorageService";

// LocalstorageService
const StorageService = CookiesStorageService.getService();
let { BASE_URL } = Configuration;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

/**
 *  Add a request interceptor
 */
axios.interceptors.request.use(
  (config: any) => {
    LocalStorageService.get("AppLanguage").then((appLanguage: any) => {
      config.headers["Accept-Language"] = appLanguage;
    });
    return config;
  },
  (error) => {
    console.log("axios.interceptors.request", error);
  }
);

/**
 * Add a response interceptor
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve, reject) => {
      const originalRequest = error.config;

      if (
        error.response &&
        error.response.status === 401 &&
        originalRequest.url === `${BASE_URL}/auth/refreshToken`
      ) {
        StorageService.clearToken();
        return reject(error);
      }
      return reject(error);
    });
  }
);

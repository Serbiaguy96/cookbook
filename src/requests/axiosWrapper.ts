import axios, { AxiosRequestConfig } from "axios";
import { ResponseWithError } from "./types";
import { API_URL } from "./constants";

async function axiosWrapper<T>(
  userConfig: AxiosRequestConfig
): Promise<ResponseWithError<T>> {
  try {
    const updatedConfig: AxiosRequestConfig = {
      ...userConfig,
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios(updatedConfig);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default axiosWrapper;

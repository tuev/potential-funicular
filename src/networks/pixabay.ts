import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosService from "@/services/axiosService";
import qs from "qs";

class PixabayNetwork {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axiosService;
    this.axiosInstance.defaults.baseURL = process.env.VUE_APP_PIXABAY_URL;
    this.axiosInstance.defaults.paramsSerializer = (value) =>
      qs.stringify(value, { arrayFormat: "comma" });
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(url, config);
  }
}

export default new PixabayNetwork();

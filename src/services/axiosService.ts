import axios from "axios";
import app from "../main";

const axiosService = axios.create({});

// Add a request interceptor
axiosService.interceptors.request.use(
  function (config) {
    app.$Progress.start(); // for every request start the progress
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosService.interceptors.response.use(
  function (response) {
    app.$Progress.finish(); // finish when a response is received
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    app.$message.error("Something wrong!!!");
    return Promise.reject(error);
  }
);

export default axiosService;

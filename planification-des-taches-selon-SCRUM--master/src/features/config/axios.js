import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
  config.headers["x-auth-token"] = localStorage.getItem("email");
  

  return config;
});
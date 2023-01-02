import axios from "axios";

export const baseURL = "https://dev.onlylabs.io/api/v1/";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;

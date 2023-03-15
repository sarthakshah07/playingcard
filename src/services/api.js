import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "Content-Type": "application/json",
  }
});

export default axiosInstance;

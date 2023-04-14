import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in",
  // baseURL:"https://192.168.0.186:6000",
  // headers: {
  //   "Content-Type": "application/json",
  // }
});

export default axiosInstance;

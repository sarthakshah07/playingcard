import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://reqres.in",
  baseURL:"http://192.168.0.192:3001/",
  // headers: {
  //   "Content-Type": "application/json",
  // }
  headers: {
    "Content-Type": "application/json",
  },
});

// const instance: AxiosInstance = axios.create({
//   baseURL: config.apiURL,
//   timeout: 1000 * 50,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     "Access-Control-Allow-Credentials": "true",
//   },
// })
export default axiosInstance;

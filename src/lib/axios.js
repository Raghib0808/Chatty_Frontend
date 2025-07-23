import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-backend-0gsi.onrender.com/api",
  withCredentials: true,
});

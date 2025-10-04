import axios from "axios";

export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/v1"
    : "https://nsaproject.onrender.com/v1";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

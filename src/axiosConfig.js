import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://127.0.0.1:8001/api/v1/notes/",
});

// create axios instance and export
import axios from "axios";
export const Instance = axios.create({
  baseURL: "http://localhost:4000/",
});

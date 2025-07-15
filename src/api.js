import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:5000/'
  baseURL: " https://blog-sieley-api.vercel.app/",
});

export default api;

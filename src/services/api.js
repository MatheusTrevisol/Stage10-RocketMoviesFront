import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-rocketmovies-53z7.onrender.com",
});

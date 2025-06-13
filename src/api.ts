import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"; // your NestJS backend URL

export const fetchQrCode = () => axios.get(`${API_BASE_URL}/movies/qr`);
export const fetchMovies = (id: string) =>
  axios.get(`${API_BASE_URL}/movies/view/${id}`);

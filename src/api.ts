import axios from "axios";

const API_BASE_URL = "https://qr-movie-backend.onrender.com"; // your NestJS backend URL

export const fetchQrCode = () => axios.get(`${API_BASE_URL}/movies/qr`);
export const fetchMovies = (id: string) =>
  axios.get(`${API_BASE_URL}/movies/view/${id}`);

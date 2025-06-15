import axios from "axios";

const deployUrl = "https://qr-movie-backend.onrender.com";
const API_BASE_URL = "http://localhost:8000"; // your NestJS backend URL

export const fetchQrCode = () => axios.get(`${API_BASE_URL}/movies/qr`);
export const fetchMovies = (id: string) =>
  axios.get(`${API_BASE_URL}/movies/view/${id}`);

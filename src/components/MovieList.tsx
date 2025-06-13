import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../api";

const MovieList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  interface Movie {
    Title: string;
    Year: string;
    Images: string[];
    Released?: string;
    Genre?: string;
    Director?: string;
  }
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      const res = await fetchMovies(id!);
      if (res.data.movies) {
        setMovies(res.data.movies as Movie[]);
      }
    };
    loadMovies();
  }, [id]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Here are your movies</h1>
      <ul>
        {movies.map((movie, idx) => (
          <div key={idx}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Director: {movie.Director}</p>
            <p>Genre: {movie.Genre}</p>

            {movie.Images && movie.Images.length > 0 && (
              <div>
                {movie.Images.map((img, imgIdx) => (
                  <img key={imgIdx} src={img} alt={movie.Title} width="150" />
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

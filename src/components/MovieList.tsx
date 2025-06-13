import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../api";

const MovieList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movies, setMovies] = useState<string[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await fetchMovies(id!);
      if (res.data.movies) {
        setMovies(res.data.movies);
      }
    };
    loadMovies();
  }, [id]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Here are your movies</h1>
      <ul>
        {movies.map((movie, idx) => (
          <li key={idx}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

import React, { useState } from "react";
import { useEffect } from "react";
import "../home.css";
import { Movie } from "../interfaces/Movie";
import MovieCard from "./MovieCard";
import { getMovieData } from "../functions/getMovieData";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getMovieData(setMovies);
  }, []);
  return (
    <div className="bg-slate-700">
      <h1 className="text-white pt-5 ps-10 text-4xl font-bold">
        Popular Movies
      </h1>
      <div className="flex w-screen overflow-scroll scroll-none">
        {movies.map((movie): React.JSX.Element => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;

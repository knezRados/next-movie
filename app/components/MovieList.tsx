import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import "../home.css";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  original_language: string;
  original_title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getMovieData = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjhhYTcxNjgyMDc1YTgzYjIwZTBlMTIxYzc1ODJlMyIsIm5iZiI6MTcyMzkwNzc0OC43OTgxMTQsInN1YiI6IjYzYjg0NjI3ZjA0ZDAxMDA5NDIxZWNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGQbevmOTlSPevg9SAQ1IsUaPGAXH7S2kn2h4UtsYOY",
        },
      }
    );
    if (data) {
      setMovies(data.data.results);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div className="bg-slate-700">
      <h1 className="text-white pt-5 ps-10 text-4xl font-bold">
        Popular Movies
      </h1>
      <div className="flex w-screen overflow-scroll scroll-none">
        {movies.map((movie): React.JSX.Element => {
          const randomNumber = Math.floor(Math.random() * 31) - 15;
          console.log(randomNumber);
          const moviePoster =
            "http://image.tmdb.org/t/p/original" + movie.poster_path;
          return (
            <div className="px-10 py-5 w-[20vw]">
              <Image
                alt="poster"
                src={moviePoster}
                width={300}
                height={300}
                className={`min-w-[15vw] h-auto object-fill rounded-3xl cursor-pointer hover:scale-105 transition`}
              />
              <h1 className="text-white text-center mt-3">{movie.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;

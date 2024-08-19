import React from "react";
import Image from "next/image";
import { Movie } from "../interfaces/Movie";

interface MovieProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieProps) => {
  const moviePoster = "http://image.tmdb.org/t/p/original" + movie.poster_path;
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
};

export default MovieCard;

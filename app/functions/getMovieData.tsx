import axios from "axios";
import { Movie } from "../interfaces/Movie";

export const getMovieData = async (setMovies: (movies: Movie[]) => void) => {
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

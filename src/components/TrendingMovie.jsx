import { CircularProgress } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const TrendingMovie = ({ errorMessages, movieList, isLoading }) => {
  return (
    <>
      <div>
        {errorMessages && <p className="text-red-500">{errorMessages}</p>}
        <div className="justify-center mt-20">
          {isLoading ? (
            <CircularProgress disableShrink />
          ) : errorMessages ? (
            <p>{errorMessages}</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default TrendingMovie;

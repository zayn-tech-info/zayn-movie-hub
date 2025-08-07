import { Dot, Star } from "lucide-react";
import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <>
      {" "}
      <div className="bg-gray-800 p-4 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        {poster_path ? (
          <img
            className="rounded-xl w-full h-64 object-cover mb-4"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <div className="rounded-xl w-full h-64 mb-4 bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-semibold">No Image Available</span>
          </div>
        )}

        <h3 className="text-lg font-semibold text-white mb-2 truncate">
          {title}
        </h3>

        <div className="flex items-center text-gray-300 text-sm space-x-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
          </div>
          <Dot className="w-4 h-4" />
          <span className="uppercase">{original_language}</span>
          <Dot className="w-4 h-4" />
          <span>{release_date ? release_date.split("-")[0] : "N/A"}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

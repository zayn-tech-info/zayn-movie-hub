import React from "react";

const TrendingMovie = ({ errorMessages }) => {
  return (
    <>{errorMessages && <p className="text-red-500">{errorMessages}</p>}</>
  );
};

export default TrendingMovie;

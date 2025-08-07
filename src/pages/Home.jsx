import React from "react";
import profilePicture from "../assets/images/pfp.png";
import Search from "../components/Search";
import TrendingMovie from "../components/TrendingMovie";

const Home = ({
  setErrorMessages,
  errorMessages,
  movieList,
  search,
  setSearch,
  isLoading,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover mb-2 lg:mb-0"
            />

            <div className="flex flex-col space-y-1">
              <p className="font-bold text-2xl">
                Hello{" "}
                <span className="font-extralight text-gray-300">Zayn!</span>
              </p>
              <p className="text-gray-300 font-medium">
                Check for latest addition.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <Search
              errorMessages={errorMessages}
              setErrorMessages={setErrorMessages}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </div>

      <TrendingMovie
        errorMessages={errorMessages}
        isLoading={isLoading}
        movieList={movieList}
      />
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { SearchIcon } from "lucide-react";

const Search = ({ setErrorMessages }) => {
  const [search, setSearch] = useState("");

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

  const API_OPTIONS = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }),
    [API_KEY]
  );
  const fetchMovies = useCallback(async () => {
    try {
      const endPoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        console.log('An error occoured fetching data');
        throw new Error("An error occoured");
      }
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
 
      setErrorMessages(`API Error: ${error.message}`);
    }
  }, [API_BASE_URL, API_OPTIONS, setErrorMessages]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="relative">
      <div className="text-white absolute bottom-2 px-3">
        <SearchIcon />
      </div>
      <input
        className="border-1 rounded-xl px-5 bg-gray-800 py-2 focus:border-white focus:border-1 outline-0 border-gray-500 pl-10 w-full"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;

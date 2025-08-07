import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [search, setSearch] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [movieList, setMovieList] = useState([]);

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
        console.log("An error occoured fetching data");
        throw new Error("An error occoured");
      }
      const data = await response.json();
      console.log(data);

      if (data.Response === "False") {
        setErrorMessages(data.Error || "Failed to fetch movie");
        setMovieList([]);
        return;
      }
      setMovieList(data.results);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessages(`API Error: ${error.message}`);
    }
  }, [API_BASE_URL, API_OPTIONS, setErrorMessages]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setErrorMessages={setErrorMessages}
              errorMessages={errorMessages}
              setMovieList={setMovieList}
              movieList={movieList}
              setSearch={setSearch}
              search={search}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import { SearchIcon } from "lucide-react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="relative w-full lg:w-96">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
        <SearchIcon className="w-5 h-5" />
      </div>

      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-white"
      />
    </div>
  );
};

export default Search;

import React from "react";
import { SearchIcon } from "lucide-react";

const Search = ({ search, setSearch }) => {
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
